(this["webpackJsonprandom-user-react"]=this["webpackJsonprandom-user-react"]||[]).push([[0],{12:function(e,_,r){"use strict";r.r(_);r(1);var a=r(5),t=r.n(a),n=r(6),s=r(0);t.a.render(Object(s.jsx)(n.a,{}),document.getElementById("root"))},18:function(e,_,r){},3:function(e,_,r){"use strict";_.a={gender:"male",name:{title:"mr",first:"brad",last:"gibson"},location:{street:"9278 new road",city:"kilcoole",state:"waterford",postcode:"93027",coordinates:{latitude:"20.9267",longitude:"-7.9310"},timezone:{offset:"-3:30",description:"Newfoundland"}},email:"brad.gibson@example.com",login:{uuid:"155e77ee-ba6d-486f-95ce-0e0c0fb4b919",username:"silverswan131",password:"firewall",salt:"TQA1Gz7x",md5:"dc523cb313b63dfe5be2140b0c05b3bc",sha1:"7a4aa07d1bedcc6bcf4b7f8856643492c191540d",sha256:"74364e96174afa7d17ee52dd2c9c7a4651fe1254f471a78bda0190135dcd3480"},dob:{date:"1993-07-20T09:44:18.674Z",age:26},registered:{date:"2002-05-21T10:59:49.966Z",age:17},phone:"011-962-7516",cell:"081-454-0666",id:{name:"PPS",value:"0390511T"},picture:{large:"https://randomuser.me/api/portraits/men/75.jpg",medium:"https://randomuser.me/api/portraits/med/men/75.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/75.jpg"},nat:"IE"}},6:function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_redranger_random_user_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7),_home_redranger_random_user_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8),_home_redranger_random_user_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),_home_redranger_random_user_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(11),_home_redranger_random_user_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(10),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_firstRandomUser__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(3),_RandomUser__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(9),_index_css__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(18),_index_css__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_8__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__),App=function(_Component){Object(_home_redranger_random_user_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(App,_Component);var _super=Object(_home_redranger_random_user_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__.a)(App);function App(){var e;return Object(_home_redranger_random_user_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),(e=_super.call(this)).getName=function(){return e.formName(e.state.randomUser.name.first,e.state.randomUser.name.last)},e.getEmail=function(){return e.state.randomUser.email},e.getAge=function(){return e.state.randomUser.dob.age},e.getPhone=function(){return e.state.randomUser.phone},e.getPassword=function(){return e.state.randomUser.login.password},e.getAddress=function(){return e.state.randomUser.location.street.number+", "+e.state.randomUser.location.street.name},e.state={text:"My name is",answer:e.formName(_firstRandomUser__WEBPACK_IMPORTED_MODULE_6__.a.name.first,_firstRandomUser__WEBPACK_IMPORTED_MODULE_6__.a.name.last),randomButtonText:"RANDOM USER",randomUser:_firstRandomUser__WEBPACK_IMPORTED_MODULE_6__.a},e.handleClick=e.handleClick.bind(Object(_home_redranger_random_user_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(e)),e.handleHover=e.handleHover.bind(Object(_home_redranger_random_user_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(e)),e}return Object(_home_redranger_random_user_react_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"componentDidMount",value:function(){var e=this;this.setState({randomButtonText:"Loading..."}),fetch("https://randomuser.me/api/").then((function(e){return e.json()})).then((function(_){e.setState({randomUser:_.results[0],answer:e.formName(_.results[0].name.first,_.results[0].name.last)}),e.setState({randomButtonText:"RANDOM USER"})}))}},{key:"handleClick",value:function(e){var _=this;this.setState({randomButtonText:"Loading..."}),fetch("https://randomuser.me/api/").then((function(e){return e.json()})).then((function(e){_.setState({randomUser:e.results[0],answer:_.formName(e.results[0].name.first,e.results[0].name.last)}),_.setState({randomButtonText:"RANDOM USER"})}))}},{key:"handleHover",value:function handleHover(e){this.setState({text:"My ".concat(e.target.name," is")}),this.setState({answer:eval("this.get".concat(e.target.name,"()"))})}},{key:"formName",value:function(e,_){return e=e.toUpperCase(),_=_.toUpperCase(),(e=e[0]+e.slice(1).toLowerCase())+" "+(_=_[0]+_.slice(1).toLowerCase())}},{key:"render",value:function(){var e=this;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div",{className:"ground",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div",{className:"back"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div",{className:"fore",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div",{className:"container",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div",{className:"container-back"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_RandomUser__WEBPACK_IMPORTED_MODULE_7__.a,{data:this.state,handleClick:function(_){return e.handleClick(_)},handleHover:function(_){return e.handleHover(_)}})]})})]})}}]),App}(react__WEBPACK_IMPORTED_MODULE_5__.Component);__webpack_exports__.a=App},9:function(e,_,r){"use strict";r.d(_,"a",(function(){return t}));r(1);var a=r(0);function t(e){return Object(a.jsxs)("div",{className:"user-details",children:[Object(a.jsx)("div",{className:"image-border",children:Object(a.jsx)("img",{src:e.data.randomUser.picture.large,alt:"random user",className:"random-user-photo"})}),Object(a.jsx)("p",{className:"intro-text",children:e.data.text}),Object(a.jsx)("p",{className:"intro-answer",children:e.data.answer}),Object(a.jsxs)("div",{className:"logos",children:[Object(a.jsx)("button",{name:"Name",onMouseOver:e.handleHover,children:"Name"}),Object(a.jsx)("button",{name:"Email",onMouseOver:e.handleHover,children:"Email"}),Object(a.jsx)("button",{name:"Age",onMouseOver:e.handleHover,children:"Age"}),Object(a.jsx)("button",{name:"Address",onMouseOver:e.handleHover,children:"Address"}),Object(a.jsx)("button",{name:"Phone",onMouseOver:e.handleHover,children:"Phone"}),Object(a.jsx)("button",{name:"Password",onMouseOver:e.handleHover,children:"Password"})]}),Object(a.jsx)("button",{name:"randomUser",onClick:e.handleClick,children:e.data.randomButtonText})]})}}},[[12,1,2]]]);
//# sourceMappingURL=main.6989bd58.chunk.js.map