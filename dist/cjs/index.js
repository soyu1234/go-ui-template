'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _slicedToArray = _interopDefault(require('@babel/runtime/helpers/slicedToArray'));
var React = require('react');
var React__default = _interopDefault(React);
var styles = require('@material-ui/core/styles');
var core = require('@material-ui/core');
var _regeneratorRuntime = _interopDefault(require('@babel/runtime/regenerator'));
var _asyncToGenerator = _interopDefault(require('@babel/runtime/helpers/asyncToGenerator'));
var _classCallCheck = _interopDefault(require('@babel/runtime/helpers/classCallCheck'));
require('axios');
var format = _interopDefault(require('string-format'));
var ArrowDownwardIcon = _interopDefault(require('@material-ui/icons/ArrowDownward'));
var ArrowUpwardIcon = _interopDefault(require('@material-ui/icons/ArrowUpward'));
var PlayCircleFilledIcon = _interopDefault(require('@material-ui/icons/PlayCircleFilled'));

var useGameCollection = function useGameCollection(collection) {
  var _React$useState = React__default.useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      gameList = _React$useState2[0],
      setGameList = _React$useState2[1];

  var fetchData =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee() {
      var result, data;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (collection) {
                _context.next = 4;
                break;
              }

              setGameList([]);
              _context.next = 9;
              break;

            case 4:
              _context.next = 6;
              return collection.getItems();

            case 6:
              result = _context.sent;
              data = result.data;

              if (data !== undefined && data.length) {
                result.data.forEach(function (game) {
                  var parts = game.url.split("/");
                  game.id = parts[parts.length - 2];
                });
                setGameList(result.data);
              }

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchData() {
      return _ref.apply(this, arguments);
    };
  }();

  React__default.useEffect(function () {
    fetchData();
  }, [collection]);
  return gameList;
};

var context = {
  url: null,
  header: null
};

var useCard = function useCard(item) {
  var _React$useState = React__default.useState(context),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      gameContext = _React$useState2[0],
      setGameContext = _React$useState2[1];

  var updateData = function updateData() {
    var dataContext = {
      url: item.assetList[0].name,
      header: item.title
    };
    setGameContext(dataContext);
  };

  React__default.useEffect(function () {
    if (item != undefined) updateData();
  }, [item]);
  return gameContext;
};

var GameCollectionRSS = function GameCollectionRSS() {
  _classCallCheck(this, GameCollectionRSS);
};

var useGameCollectionRSS = function useGameCollectionRSS(config) {
  var _useState = React.useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      rss = _useState2[0],
      setRSS = _useState2[1];

  React.useEffect(function () {
    var appliedConfig = {
      company: config.company || "All",
      collection: config.collection || "all",
      category: config.category || "all",
      type: config.type || "all",
      amount: config.amount || "100",
      mobile: config.mobile || "all",
      rewarded: config.rewarded || "all",
      title: config.title || config.category
    };
    var url = config.url || "/proxy/rss/api/v1.0/rss/{company}/?collection={collection}&categories={category}&type={type}&mobile={mobile}&rewarded={rewarded}&format=json&amount={amount}";
    url = format(url, appliedConfig);
    appliedConfig.url = appliedConfig.url;
    setRSS(new GameCollectionRSS(url, appliedConfig));
  }, [config]);
  return rss;
};

// This is more like layout rules. New ones can be added if someone ever needs it in future.
var LayoutFeatures = {
  LESS_AMOUNT_OF_CARDS: 'LESS_AMOUNT_OF_CARDS',
  MUCH_AMOUNT_OF_CARDS: 'MUCH_AMOUNT_OF_CARDS'
};

var useStyles = core.makeStyles(function () {
  return {
    ////  styles of five cards story component starts below ////
    // Card element styles.
    item: {
      overflow: 'hidden',
      color: 'white',
      background: 'black',
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '240px',
      position: 'relative',
      '& > img': {
        width: '100%',
        height: '100%'
      },
      '&:hover': {
        cursor: 'pointer',
        '& > img': {
          transform: 'scale(1.1)',
          transition: 'transform 1s cubic-bezier(0.25, 0.45, 0.45, 0.95)'
        }
      }
    },
    // Style for game title.
    content: {
      top: '30%',
      left: '50%',
      transform: 'translate(-50%, -20%)',
      position: 'absolute',
      color: '#313632',
      fontWeight: '700',
      textAlign: 'center',
      alignItems: 'center'
    },
    button: {
      borderRadius: '20px',
      border: 'none',
      display: 'inline-block',
      cursor: 'pointer',
      color: 'black',
      fontWeight: 'bold',
      textAlign: 'center',
      textDecoration: 'none',
      outline: 'none',
      '&:hover': {
        color: 'white'
      }
    },
    playButton: {
      fontSize: '70px',
      textAlign: 'center',
      '&:hover': {
        color: 'red'
      }
    },
    arrowDownButton: {
      fontSize: '30px'
    },
    arrowUpButton: {
      fontSize: '30px',
      color: '#fdfdfd',
      '&:hover': {
        color: 'black'
      }
    },
    ////  styles of five cards story component eds here ////
    ////  hundred card layout styles starts below ////
    hundredCard: {
      textAlign: 'center',
      margin: '.5rem',
      padding: '1rem',
      display: 'inline-block',
      boxShadow: '4px 4px 8px 0 rgba( 0, 0, 0, .2 )',
      borderWidth: '.25rem',
      borderRadius: '.5rem',
      backfaceVisibility: 'hidden',
      '&:hover': {
        transform: 'translateZ( 0 )',
        transition: 'transform .25s ease-out, -webkit-transform .25s ease-out'
      }
    },
    hundredCardImg: {
      width: '300px',
      height: '300px'
    }
  };
});

var Card = function Card(props) {
  var classes = useStyles();
  var item = classes.item,
      content = classes.content,
      button = classes.button,
      playButton = classes.playButton,
      arrowDownButton = classes.arrowDownButton,
      hundredCard = classes.hundredCard,
      hundredCardImg = classes.hundredCardImg,
      arrowUpButton = classes.arrowUpButton;
  var data = props.data,
      layout = props.layout;
  var card = useCard(data);

  var _useState = React.useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      url = _useState2[0],
      setUrl = _useState2[1];

  var _useState3 = React.useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      title = _useState4[0],
      setTitle = _useState4[1]; // it checks opacity of the card. Card turns to opaque(1) if its value is true, transparent otherwise(0.7)


  var _useState5 = React.useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      hovered = _useState6[0],
      setHovered = _useState6[1]; // shows description of the game when it's true.


  var _useState7 = React.useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      showDescription = _useState8[0],
      setShowDescription = _useState8[1];

  React.useEffect(function () {
    var url = card.url,
        header = card.header;
    setUrl(url);
    setTitle(header);
  }, [card]); // check layout and decide whether render 5 cards layout or 100 cards layout.
  // Best practice is to create separate components, however I did not want to create different components for both 5 cards and 100 cards, since project scope finishes here and project won't get more complicated than this.

  return layout === LayoutFeatures.LESS_AMOUNT_OF_CARDS ? React__default.createElement("div", {
    className: item,
    onMouseOver: function onMouseOver() {
      return setHovered(true);
    },
    onMouseOut: function onMouseOut() {
      return setHovered(false);
    },
    style: hovered ? {
      opacity: 1
    } : {
      opacity: 0.5
    }
  }, React__default.createElement("img", {
    src: url,
    style: showDescription ? {
      opacity: 0.4
    } : null
  }), setHovered ? React__default.createElement("div", {
    className: content
  }, React__default.createElement("a", {
    href: data.url
  }, React__default.createElement(PlayCircleFilledIcon, {
    className: playButton
  })), React__default.createElement("h2", null, !showDescription ? title : null), React__default.createElement("span", {
    className: button,
    onClick: function onClick() {
      return setShowDescription(!showDescription);
    }
  }, !showDescription ? React__default.createElement(ArrowDownwardIcon, {
    className: arrowDownButton
  }) : React__default.createElement(ArrowUpwardIcon, {
    className: arrowUpButton
  })), showDescription ? React__default.createElement("p", {
    style: {
      color: '#fdfdfd'
    }
  }, data.description.substring(0, 75) + '...') : null) : null) : React__default.createElement("div", {
    className: hundredCard
  }, React__default.createElement("img", {
    src: url,
    className: hundredCardImg
  }), React__default.createElement("a", {
    href: data.url,
    style: {
      display: 'flow-root',
      color: 'yellow'
    }
  }, React__default.createElement(PlayCircleFilledIcon, {
    className: playButton
  })), React__default.createElement("div", null, React__default.createElement("h2", null, title)));
};

// package imports
var useStyles$1 = core.makeStyles(function () {
  return {
    fewCardsBox: {
      display: 'flex',
      flexWrap: 'wrap',
      height: '100%',
      overflow: 'auto',
      '& > div': {
        flex: '0 0 33.3%',
        maxWidth: 'none',
        border: '0',
        height: '50%',
        maxHeight: '50%'
      },
      '& > :nth-child(4)': {
        flex: '0 0 50%'
      },
      '& > :nth-child(5)': {
        flex: '0 0 50%'
      }
    },
    hundredCardsBox: {
      overflow: 'scroll',
      border: '5px solid black',
      height: '800px'
    }
  };
});

var List = function List(props) {
  var classes = useStyles$1();
  var fewCardsBox = classes.fewCardsBox,
      hundredCardsBox = classes.hundredCardsBox;
  var collection = props.collection,
      layout = props.layout,
      searchResult = props.searchResult;
  var list = useGameCollection(collection); // it filters games by taking search result of search bar.

  var filteredGames = list.filter(function (game) {
    return game.title.toLowerCase().includes(searchResult.toLowerCase());
  });
  return (// check layout first, then apply correct css styling
    React__default.createElement("div", {
      className: layout === LayoutFeatures.LESS_AMOUNT_OF_CARDS ? fewCardsBox : hundredCardsBox
    }, filteredGames.map(function (item, index) {
      return React__default.createElement(Card, {
        data: item,
        key: index,
        index: index,
        layout: layout
      });
    }))
  );
};

var useStyles$2 = styles.makeStyles(function () {
  return {
    searchContainer: {
      padding: '.5rem'
    },
    searchInput: {
      padding: '1rem',
      backgroundColor: '#cdecff',
      borderStyle: 'solid',
      borderWidth: '1px'
    }
  };
});

var SearchBox = function SearchBox(_ref) {
  var searchChange = _ref.searchChange;
  var classes = useStyles$2();
  var searchContainer = classes.searchContainer,
      searchInput = classes.searchInput;
  return React__default.createElement("div", {
    className: searchContainer
  }, React__default.createElement("input", {
    type: "search",
    className: searchInput,
    placeholder: "Search games",
    onChange: function onChange(e) {
      return searchChange(e.target.value);
    }
  }));
};

var useStyles$3 = styles.makeStyles(function () {
  return {
    // this layout will be using in 5 game cards story component.
    fewCardsLayout: {
      height: '100%',
      width: '100%'
    },
    // this layout will be using in 100 game cards story component.
    hundredCardsLayout: {
      margin: '0',
      padding: '0',
      textAlign: 'center',
      background: 'linear-gradient(to left, rgba(7,27,82,1) 0%, rgba(0,128,128,1) 100%)',
      overflowY: 'auto',
      height: '100%'
    }
  };
});

function Home(props) {
  var classes = useStyles$3();
  var data = props.data,
      layout = props.layout; // receives the future from stories list, updates layout regarding to related layout.

  var root = layout === LayoutFeatures.LESS_AMOUNT_OF_CARDS ? classes.fewCardsLayout : classes.hundredCardsLayout;
  var game = data.game;
  var collection = useGameCollectionRSS(game); // define searchField state. SearchBox component uses and updates it on every change.

  var _useState = React.useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      searchField = _useState2[0],
      setSearchField = _useState2[1];

  return (// check layout, then decide whether render search box or not.
    React__default.createElement("div", {
      className: root
    }, layout === LayoutFeatures.MUCH_AMOUNT_OF_CARDS ? React__default.createElement(SearchBox, {
      searchChange: setSearchField
    }) : null, React__default.createElement(List, {
      collection: collection,
      layout: layout,
      searchResult: searchField
    }))
  );
}

exports.Home = Home;
//# sourceMappingURL=index.js.map
