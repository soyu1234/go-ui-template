import React from "react";
import { Dialog } from "@material-ui/core";
import { EditorPasteHtml } from "../EditorPasteHtml";

const PreviewModal = ({ value, clickedPreview, setClickedPreview }) => {
  return (
    <Dialog
      maxWidth="xl"
      open={clickedPreview}
      onClose={() => setClickedPreview(false)}
    >
      <EditorPasteHtml globVal={value} />
    </Dialog>
  );
};

export default PreviewModal;
