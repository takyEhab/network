"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfullstacknetwork"] = self["webpackChunkfullstacknetwork"] || []).push([["network_frontend_src_components_User_js"],{

/***/ "./network/frontend/src/components/Card.js":
/*!*************************************************!*\
  !*** ./network/frontend/src/components/Card.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RecipeReviewCard)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Card */ \"./node_modules/@mui/material/Card/Card.js\");\n/* harmony import */ var _mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/CardHeader */ \"./node_modules/@mui/material/CardHeader/CardHeader.js\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/CardContent */ \"./node_modules/@mui/material/CardContent/CardContent.js\");\n/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material/CardActions */ \"./node_modules/@mui/material/CardActions/CardActions.js\");\n/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Avatar */ \"./node_modules/@mui/material/Avatar/Avatar.js\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/IconButton */ \"./node_modules/@mui/material/IconButton/IconButton.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/colors */ \"./node_modules/@mui/material/colors/blue.js\");\n/* harmony import */ var _mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/icons-material/Favorite */ \"./node_modules/@mui/icons-material/Favorite.js\");\n/* harmony import */ var _userContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userContext */ \"./network/frontend/src/components/userContext.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./axios */ \"./network/frontend/src/components/axios.js\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/TextField */ \"./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material/Alert */ \"./node_modules/@mui/material/Alert/Alert.js\");\n/* harmony import */ var _mui_material_Slide__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material/Slide */ \"./node_modules/@mui/material/Slide/Slide.js\");\n/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/icons-material/Edit */ \"./node_modules/@mui/icons-material/Edit.js\");\n/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! notistack */ \"./node_modules/notistack/dist/notistack.esm.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction RecipeReviewCard(props) {\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_userContext__WEBPACK_IMPORTED_MODULE_2__.UserContext),\n      refresh = _useContext.refresh;\n\n  var posts = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (state) {\n    return state.postsState.posts;\n  });\n  var myInfoState = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (state) {\n    return state.myInfoState;\n  });\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n      isLike = _useState2[0],\n      setLike = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),\n      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState3, 2),\n      edit = _useState4[0],\n      setEdit = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState5, 2),\n      isErr = _useState6[0],\n      setErr = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),\n      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState7, 2),\n      isEdit = _useState8[0],\n      setIsEdit = _useState8[1];\n\n  var _useSnackbar = (0,notistack__WEBPACK_IMPORTED_MODULE_4__.useSnackbar)(),\n      enqueueSnackbar = _useSnackbar.enqueueSnackbar;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (props.post.UsersLikes.includes(myInfoState.isLogedIn && myInfoState.myInfo.id)) {\n      setLike(true);\n    } else {\n      setLike(false);\n    }\n  }, [myInfoState.isLogedIn, posts]);\n\n  var refreshSelected = function refreshSelected() {\n    if (props.from === 'main') {\n      refresh();\n    } else if (props.from === 'following') {\n      props.getFollowingPosts();\n    } else {\n      props.GetUserPosts();\n    }\n  };\n\n  var like = function like(id) {\n    _axios__WEBPACK_IMPORTED_MODULE_3__.api.patch(\"posts/\".concat(id, \"/like/\"), {}, myInfoState.CONFIG).then(function () {\n      return refreshSelected();\n    });\n  };\n\n  var editPost = function editPost(post, id) {\n    _axios__WEBPACK_IMPORTED_MODULE_3__.api.patch(\"posts/\".concat(id, \"/\"), {\n      post: post\n    }, myInfoState.CONFIG).then(function () {\n      return refreshSelected();\n    });\n  };\n\n  var HandleClick = function HandleClick() {\n    if (edit.length > 5) {\n      editPost(edit, props.post.id);\n      enqueueSnackbar('Post Edited!', {\n        variant: 'info'\n      });\n      setIsEdit(true);\n    } else {\n      setErr(true);\n    }\n  };\n\n  var likeFunc = function likeFunc() {\n    if (!myInfoState.isLogedIn) {\n      return;\n    }\n\n    isLike ? setLike(false) : setLike(true);\n    like(props.post.id);\n  };\n\n  var HandelChange = function HandelChange(event) {\n    setEdit(event.target.value);\n  };\n\n  var cardStyle = {\n    textAlign: 'center',\n    width: 'auto',\n    margin: 'auto',\n    marginTop: '2%'\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Card__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    style: cardStyle,\n    sx: {\n      maxWidth: 550\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_CardHeader__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    avatar: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, {\n      style: {\n        textDecoration: 'initial'\n      },\n      to: \"/profile/\".concat(props.post.writer)\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      sx: {\n        bgcolor: _mui_material_colors__WEBPACK_IMPORTED_MODULE_10__[\"default\"][500]\n      },\n      \"aria-label\": \"recipe\"\n    }, props.post.writer.charAt(0).toUpperCase())),\n    action: myInfoState.isLogedIn && (myInfoState.myInfo.username === props.post.writer ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n      onClick: function onClick() {\n        setEdit(props.post.post);\n        setIsEdit(!isEdit);\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_12__[\"default\"], null)) : ''),\n    title: props.post.writer,\n    subheader: props.post.created_at\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_13__[\"default\"], null, isEdit ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n    variant: \"body2\",\n    color: \"text.secondary\"\n  }, props.post.post) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {\n    id: \"outlined-multiline-static\",\n    value: edit,\n    multiline: true,\n    rows: 5,\n    style: {\n      width: '100%',\n      marginTop: '1%'\n    },\n    onChange: HandelChange\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_16__[\"default\"], {\n    onClick: HandleClick\n  }, \"Save\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Slide__WEBPACK_IMPORTED_MODULE_17__[\"default\"], {\n    direction: \"up\",\n    \"in\": isErr,\n    mountOnEnter: true,\n    unmountOnExit: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_18__[\"default\"], {\n    severity: \"warning\"\n  }, \"you should at least type 5 letters\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_19__[\"default\"], {\n    disableSpacing: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    onClick: likeFunc,\n    style: {\n      color: isLike ? 'red' : 'gray'\n    },\n    \"aria-label\": \"add to favorites\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mui_icons_material_Favorite__WEBPACK_IMPORTED_MODULE_20__[\"default\"], null), props.post.likes == 0 ? '' : props.post.likes)));\n}\n\n//# sourceURL=webpack://fullstacknetwork/./network/frontend/src/components/Card.js?");

/***/ }),

/***/ "./network/frontend/src/components/User.js":
/*!*************************************************!*\
  !*** ./network/frontend/src/components/User.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ User)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _userContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./userContext */ \"./network/frontend/src/components/userContext.js\");\n/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./axios */ \"./network/frontend/src/components/axios.js\");\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Card */ \"./network/frontend/src/components/Card.js\");\n/* harmony import */ var _mui_material_Pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Pagination */ \"./node_modules/@mui/material/Pagination/Pagination.js\");\n/* harmony import */ var _mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/LinearProgress */ \"./node_modules/@mui/material/LinearProgress/LinearProgress.js\");\n/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/CircularProgress */ \"./node_modules/@mui/material/CircularProgress/CircularProgress.js\");\n/* harmony import */ var _mui_material_Popover__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Popover */ \"./node_modules/@mui/material/Popover/Popover.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction User(_ref) {\n  var match = _ref.match,\n      history = _ref.history;\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_userContext__WEBPACK_IMPORTED_MODULE_4__.UserContext),\n      CONFIG = _useContext.CONFIG;\n\n  var myInfoState = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(function (state) {\n    return state.myInfoState;\n  });\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('loading'),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState, 2),\n      user = _useState2[0],\n      setUser = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('loading'),\n      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState3, 2),\n      userPosts = _useState4[0],\n      setUserPosts = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState5, 2),\n      isFollowed = _useState6[0],\n      setFollowed = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1),\n      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState7, 2),\n      page = _useState8[0],\n      setPage = _useState8[1];\n\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState9, 2),\n      anchorEl = _useState10[0],\n      setAnchorEl = _useState10[1];\n\n  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      _useState12 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState11, 2),\n      isSame = _useState12[0],\n      setIsSame = _useState12[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    GetUser();\n    GetUserPosts();\n  }, [match.params.name]);\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    if (myInfoState.isLogedIn) {\n      if (myInfoState.myInfo.username === match.params.name) setIsSame(true);\n      myInfoState.myInfo.following.forEach(function (item) {\n        if (item.following_user_id === match.params.name) setFollowed(true);\n      });\n    }\n  }, [myInfoState.myInfo, match.params.name]);\n\n  var GetUser = function GetUser() {\n    _axios__WEBPACK_IMPORTED_MODULE_5__.api.get(\"user/\".concat(match.params.name, \"/\")).then(function (res) {\n      setUser(res.data);\n    });\n  };\n\n  var GetUserPosts = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)( /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n    var res, posts;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return _axios__WEBPACK_IMPORTED_MODULE_5__.api.get(\"posts/\").then(function (res) {\n              return res.data;\n            });\n\n          case 2:\n            res = _context.sent;\n            posts = res.filter(function (post) {\n              return post.writer === match.params.name;\n            });\n            setUserPosts(posts);\n\n          case 5:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), [match.params.name]);\n\n  var handleChange = function handleChange(event, value) {\n    setPage(value);\n    window.scrollTo({\n      top: 0,\n      behavior: 'smooth'\n    });\n  };\n\n  var follow = function follow(id) {\n    _axios__WEBPACK_IMPORTED_MODULE_5__.api.patch(\"follow/\".concat(id, \"/\"), {}, CONFIG).then(function () {\n      return GetUser();\n    });\n  };\n\n  var postPerPage = 10;\n  var last = page * postPerPage;\n  var first = last - postPerPage;\n  var pageCount = Math.ceil((userPosts !== null && userPosts !== 'loading' && userPosts.length) / postPerPage);\n\n  var handleClick = function handleClick(event) {\n    if (myInfoState.isLogedIn) {\n      if (user && user !== 'loading') {\n        follow(user.id);\n        setFollowed(!isFollowed);\n      } else undefined;\n    } else {\n      setAnchorEl(event.currentTarget);\n    }\n  };\n\n  var handleClose = function handleClose() {\n    setAnchorEl(null);\n  };\n\n  var open = Boolean(anchorEl);\n  var id = open ? 'simple-popover' : undefined;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"div\", null, user !== 'loading' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"h1\", null, user && user.username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"h1\", null, \"followers :\", user && user.followers.length), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"h1\", null, \"following :\", user && user.following.length)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null), !isSame && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    \"aria-describedby\": id,\n    onClick: handleClick,\n    variant: \"contained\"\n  }, isFollowed ? 'Unfollow' : 'Follow'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material_Popover__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    id: id,\n    open: open,\n    anchorEl: anchorEl,\n    onClose: handleClose,\n    anchorOrigin: {\n      vertical: 'bottom',\n      horizontal: 'left'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    sx: {\n      p: 2\n    }\n  }, \"You have to be Loged in to follow someone.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"br\", null), userPosts !== null && userPosts !== 'loading' && userPosts.sort(function (a, b) {\n    return new Date(a.id) - new Date(b.id);\n  }).slice(first, last).map(function (item, i) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Card__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      key: i,\n      post: item,\n      from: 'user',\n      GetUserPosts: GetUserPosts\n    });\n  }), userPosts === 'loading' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n    sx: {\n      marginTop: '10%'\n    }\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_mui_material_Pagination__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n    size: \"large\",\n    count: pageCount,\n    page: page,\n    onChange: handleChange\n  }));\n}\n\n//# sourceURL=webpack://fullstacknetwork/./network/frontend/src/components/User.js?");

/***/ })

}]);