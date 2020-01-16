import React, {
  useCallback,
  useMemo,
  useState,
  useEffect,
  useRef
} from "react";
import isHotkey from "is-hotkey";
import imageExtensions from "image-extensions";
import {
  Editable,
  withReact,
  useSlate,
  Slate,
  ReactEditor,
  useEditor,
  useSelected,
  useFocused
} from "slate-react";
import { Editor, Transforms, createEditor, Range, Text } from "slate";
import { withHistory } from "slate-history";
import { css } from "emotion";
import { makeStyles, useTheme, Dialog } from "@material-ui/core";
import { GithubPicker, CompactPicker } from "react-color";
import isUrl from "is-url";

import FormatBoldIcon from "@material-ui/icons/FormatBold";
import FormatItalicIcon from "@material-ui/icons/FormatItalic";
import FormatUnderlinedIcon from "@material-ui/icons/FormatUnderlined";
import LooksOneIcon from "@material-ui/icons/LooksOne";
import LooksTwoIcon from "@material-ui/icons/LooksTwo";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import StrikethroughSIcon from "@material-ui/icons/StrikethroughS";
import CodeIcon from "@material-ui/icons/Code";
import PaletteIcon from "@material-ui/icons/Palette";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import ImageIcon from "@material-ui/icons/Image";

import { Button, Icon, Toolbar, Portal, Menu, ColorPicker } from "./components";
import PreviewModal from "./PreviewModal";
import "./componentTest.css";

const HOTKEYS = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
  "mod+`": "code"
};

const useStyles = makeStyles(theme => ({
  slateRoot: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.background.paper
        : "#2a2330",
    // fontFamily: theme.typography.fontFamily,
    // padding: theme.spacing(6, 0),
    // color: theme.palette.type === "light" ? "#37474f" : "#5F9CA6",
    marginLeft: "30px",
    marginRight: "30px",
    marginTop: "10px"
  }
}));

const LIST_TYPES = ["numbered-list", "bulleted-list"];

const ComponentTest = props => {
  const classes = useStyles();
  const { slateRoot } = classes;
  const { change, globVal } = props;
  const [value, setValue] = useState(globVal);
  const [path, setPath] = useState([0, 0]);
  const [clickedPreview, setClickedPreview] = useState(false);
  const [background, setBackground] = useState("#fff");
  const [search, setSearch] = useState("");
  const [clickedColorPicker, setClickedColorPicker] = useState(false);
  const renderElement = useCallback(props => <Element {...props} />, []);
  const renderLeaf = useCallback(props => <Leaf {...props} />, [search]);
  const editor = useMemo(
    () => withImages(withHistory(withReact(createEditor()))),
    []
  );
  const decorate = useCallback(
    ([node, path]) => {
      const ranges = [];
      if (search && Text.isText(node)) {
        const { text } = node;
        const parts = text.split(search);
        let offset = 0;
        parts.forEach((part, i) => {
          if (i !== 0) {
            ranges.push({
              anchor: { path, offset: offset - search.length },
              focus: { path, offset },
              highlight: true
            });
          }
          offset = offset + part.length + search.length;
        });
      }
      return ranges;
    },
    [search]
  );

  const setColor = (editor, color) => {
    editor.removeMark("type");
    editor.removeMark("color");
    editor.addMark("type", "color");
    editor.addMark("color", color);
  };

  const ColorButton = ({ color }) => {
    const editor = useSlate();
    const ref = useRef();
    useEffect(() => {
      const el = ref.current;
      if (!el) {
        return;
      }
      const rect = document
        .getElementById("color-button")
        .getBoundingClientRect();
      el.style.opacity = 1;
      el.style.top = `${rect.top + el.offsetHeight / 1.5}px`;
      el.style.left = `${rect.left - el.offsetHeight / 16}px`;
    });
    return (
      <Button
        id="color-button"
        onClick={() => setClickedColorPicker(!clickedColorPicker)}
      >
        <PaletteIcon style={{ color: color }} />
        <Portal>
          {clickedColorPicker ? (
            <div
              ref={ref}
              className={css`
                position: absolute;
                z-index: 1;
                top: -10000px;
                left: -10000px;
                margin-top: -6px;
                opacity: 0;
                border-radius: 4px;
                transition: opacity 0.75s;
              `}
            >
              <CompactPicker
                {...props}
                onChange={color => {
                  setColor(editor, color.hex);
                  setBackground(color.hex);
                }}
                color={background}
              />
            </div>
          ) : null}
        </Portal>
      </Button>
    );
  };

  return (
    <div className={slateRoot}>
      <Slate
        editor={editor}
        value={value}
        onChange={value => {
          setValue(value);
          change(value);
          console.log(value);
          if (editor.selection !== null) {
            setPath(editor.selection.anchor.path);
          } else {
            setPath(null);
          }
        }}
      >
        <Toolbar id="slate-toolbar">
          <MarkButton format="bold" icon="format_bold" />
          <MarkButton format="italic" icon="format_italic" />
          <MarkButton format="underline" icon="format_underlined" />
          <MarkButton format="code" icon="code" />
          <MarkButton format="strikethrough" icon="strikethrough" />
          <BlockButton format="heading-one" icon="looks_one" />
          <BlockButton format="heading-two" icon="looks_two" />
          <BlockButton format="block-quote" icon="format_quote" />
          <BlockButton format="numbered-list" icon="format_list_numbered" />
          <BlockButton format="bulleted-list" icon="format_list_bulleted" />
          <InsertImageButton />
          <MarkButton
            format="preview"
            icon="preview"
            setClickedPreview={setClickedPreview}
          />
          <ColorButton
            format="color"
            icon="color"
            color={
              path !== null ? value[path[0]].children[path[1]].color : "black"
            }
          />
          <SearchBar setSearch={setSearch} search={search} />
          {/* <ColorButton format="black-color" icon="black-color" color="black" /> */}
        </Toolbar>
        <HoveringToolbar clickedColorPicker={clickedColorPicker} />
        {/* <ColorPicker clickedColorPicker={clickedColorPicker} /> */}
        <Editable
          decorate={decorate}
          onDOMBeforeInput={event => {
            switch (event.inputType) {
              case "formatBold":
                return toggleFormat(editor, "bold");
              case "formatItalic":
                return toggleFormat(editor, "italic");
              case "formatUnderline":
                return toggleFormat(editor, "underline");
              case "strikethrough":
                return toggleFormat(editor, "strikethrough");
            }
          }}
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          placeholder="Enter some rich text…"
          spellCheck
          autoFocus
          onKeyDown={event => {
            for (const hotkey in HOTKEYS) {
              if (isHotkey(hotkey, event)) {
                event.preventDefault();
                const mark = HOTKEYS[hotkey];
                toggleMark(editor, mark);
              }
            }
          }}
          onClick={() => setClickedColorPicker(false)}
        />
      </Slate>
      <PreviewModal
        clickedPreview={clickedPreview}
        value={value}
        setClickedPreview={setClickedPreview}
      />
    </div>
  );
};

const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(editor, format);
  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: n => LIST_TYPES.includes(n.type),
    split: true
  });

  Transforms.setNodes(editor, {
    type: isActive ? "paragraph" : isList ? "list-item" : format
  });

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

const isBlockActive = (editor, format) => {
  const [match] = Editor.nodes(editor, {
    match: n => n.type === format
  });

  return !!match;
};

const isImageUrl = url => {
  if (!url) return false;
  if (!isUrl(url)) return false;
  const ext = new URL(url).pathname.split(".").pop();
  return imageExtensions.includes(ext);
};

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

const Element = ({ attributes, children, element }) => {
  console.log(attributes);
  switch (element.type) {
    case "block-quote":
      return <blockquote {...attributes}>{children}</blockquote>;
    case "bulleted-list":
      return <ul {...attributes}>{children}</ul>;
    case "heading-one":
      return <h1 {...attributes}>{children}</h1>;
    case "heading-two":
      return <h2 {...attributes}>{children}</h2>;
    case "list-item":
      return <li {...attributes}>{children}</li>;
    case "numbered-list":
      return <ol {...attributes}>{children}</ol>;
    case "strikethrough":
      return <del {...attributes}>{children}</del>;
    case "image":
      return (
        <ImageElement
          attributes={attributes}
          children={children}
          element={element}
        />
      );
    default:
      return <p {...attributes}>{children}</p>;
  }
};

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  if (leaf.strikethrough) {
    children = <del>{children}</del>;
  }

  return (
    <span
      style={{
        color: leaf.color ? leaf.color : "black",
        backgroundColor: leaf.highlight ? "#ffeeba" : ""
      }}
      {...attributes}
    >
      {children}
    </span>
  );
};

const insertImage = (editor, url) => {
  const text = { text: "", color: "black" };
  const image = { type: "image", url, children: [text] };
  const paragraph = { type: "paragraph", children: [text] };
  Transforms.insertNodes(editor, image);
  Transforms.insertNodes(editor, paragraph);
};

const withImages = editor => {
  const { insertData, isVoid } = editor;

  editor.isVoid = element => {
    return element.type === "image" ? true : isVoid(element);
  };

  editor.insertData = data => {
    const text = data.getData("text/plain");
    const { files } = data;

    if (files && files.length > 0) {
      for (const file of files) {
        const reader = new FileReader();
        const [mime] = file.type.split("/");

        if (mime === "image") {
          reader.addEventListener("load", () => {
            const url = reader.result;
            insertImage(editor, url);
          });

          reader.readAsDataURL(file);
        }
      }
    } else if (isImageUrl(text)) {
      insertImage(editor, text);
    } else {
      insertData(data);
    }
  };

  return editor;
};

const HoveringToolbar = () => {
  const ref = useRef();
  const editor = useSlate();

  useEffect(() => {
    const el = ref.current;
    const { selection } = editor;

    if (!el) {
      return;
    }

    if (
      !selection ||
      !ReactEditor.isFocused(editor) ||
      Range.isCollapsed(selection) ||
      Editor.string(editor, selection) === ""
    ) {
      el.removeAttribute("style");
      return;
    }

    const domSelection = window.getSelection();
    const domRange = domSelection.getRangeAt(0);
    const rect = domRange.getBoundingClientRect();
    el.style.opacity = 1;
    el.style.top = `${rect.top + window.pageYOffset - el.offsetHeight}px`;
    el.style.left = `${rect.left +
      window.pageXOffset -
      el.offsetWidth / 2 +
      rect.width / 2}px`;
  });

  return (
    <Portal>
      <Menu
        ref={ref}
        className={css`
          padding: 3px 7px 6px;
          position: absolute;
          z-index: 1;
          top: -10000px;
          left: -10000px;
          margin-top: -6px;
          opacity: 0;
          background-color: #222;
          border-radius: 4px;
          transition: opacity 0.75s;
        `}
      >
        <MarkButton format="bold" icon="format_bold" hovered={true} />
        <MarkButton format="italic" icon="format_italic" hovered={true} />
        <MarkButton
          format="underline"
          icon="format_underlined"
          hovered={true}
        />
      </Menu>
    </Portal>
  );
};

const BlockButton = ({ format, icon }) => {
  const editor = useSlate();
  return (
    <Button
      active={isBlockActive(editor, format)}
      onMouseDown={event => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
      style={{ fontSize: "18px", verticalAlign: "text-bottom" }}
      className="material-icons"
    >
      {icon === "looks_one" ? (
        <LooksOneIcon />
      ) : icon === "looks_two" ? (
        <LooksTwoIcon />
      ) : icon === "format_quote" ? (
        <FormatQuoteIcon />
      ) : icon === "format_list_numbered" ? (
        <FormatListNumberedIcon />
      ) : icon === "format_list_bulleted" ? (
        <FormatListBulletedIcon />
      ) : null}
    </Button>
  );
};

const MarkButton = ({ format, icon, hovered, setClickedPreview }) => {
  const editor = useSlate();
  return (
    <Button
      active={isMarkActive(editor, format)}
      onMouseDown={event => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
      hovered={hovered}
      onClick={() => (setClickedPreview ? setClickedPreview(true) : null)}
    >
      {icon === "format_bold" ? (
        <FormatBoldIcon />
      ) : icon === "format_italic" ? (
        <FormatItalicIcon />
      ) : icon === "format_underlined" ? (
        <FormatUnderlinedIcon />
      ) : icon === "code" ? (
        <CodeIcon />
      ) : icon === "strikethrough" ? (
        <StrikethroughSIcon />
      ) : icon === "preview" ? (
        <InsertDriveFileIcon />
      ) : null}
    </Button>
  );
};

const SearchBar = ({ setSearch, search }) => {
  const [clickedSearchBar, setClickedSearchBar] = useState(false);
  return (
    <div
      onClick={() => setClickedSearchBar(true)}
      onBlur={() => setClickedSearchBar(false)}
    >
      <label
        className={!clickedSearchBar ? "search" : "search searchBox"}
        // htmlFor="inpt_search"
      >
        {clickedSearchBar ? (
          <input
            placeholder="Search the text..."
            onChange={e => setSearch(e.target.value)}
            value={search}
          />
        ) : null}
      </label>
    </div>
  );
};

//////////// Images //////////////

const ImageElement = ({ attributes, children, element }) => {
  const selected = useSelected();
  const focused = useFocused();
  return (
    <div {...attributes}>
      <div contentEditable={false}>
        <img
          src={element.url}
          className={css`
            display: block;
            max-width: 100%;
            max-height: 20em;
            box-shadow: ${selected && focused ? "0 0 0 3px #B4D5FF" : "none"};
          `}
        />
      </div>
      {children}
    </div>
  );
};

const InsertImageButton = () => {
  const editor = useEditor();
  return (
    <Button
      onMouseDown={event => {
        event.preventDefault();
        const url = window.prompt("Enter the URL of the image:");
        if (!url) return;
        insertImage(editor, url);
      }}
    >
      <ImageIcon />
    </Button>
  );
};

export default ComponentTest;
