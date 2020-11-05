require("source-map-support").install();
exports.ids = ["SignIn"];
exports.modules = {

/***/ "./node_modules/css-loader/index.js??ref--5-rules-2!./node_modules/postcss-loader/lib/index.js??ref--5-rules-3!./node_modules/sass-loader/lib/loader.js!./src/routes/sign-in/SignIn.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".SignIn-root-25fdX {\n  width: 100%;\n  height: 100%;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#f1f4fa));\n  background-image: -webkit-linear-gradient(top, #fff, #f1f4fa);\n  background-image: -o-linear-gradient(top, #fff, #f1f4fa);\n  background-image: linear-gradient(to bottom, #fff, #f1f4fa);\n  font-family: SFProText; }\n\n.SignIn-head-PWFau {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  padding: 0 12px; }\n\n.SignIn-time-1mYWK {\n  font-size: 15.008px;\n  font-size: 0.938rem;\n  font-weight: 600;\n  letter-spacing: -0.3px;\n  text-align: center;\n  color: #000000; }\n\n.SignIn-icons-18ttr i {\n  margin-left: 4px; }\n\n.SignIn-mainContainer-1XXB5 {\n  text-align: center;\n  font-family: Montserrat;\n  color: #1f2a55;\n  margin-top: 24px; }\n\n.SignIn-signIn-1p4t7 {\n  font-size: 24px;\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin-bottom: 12px; }\n\n.SignIn-welcome-3lWsh {\n  opacity: 0.7;\n  font-size: 16px;\n  font-size: 1rem; }\n\n.SignIn-inputBoxes-PmjAa {\n  display: grid;\n  place-items: center; }\n\n.SignIn-input-1wk9J {\n  margin-top: 24px !important;\n  width: 200px !important;\n  max-width: 90% !important;\n  border: none !important;\n  border-bottom: solid 1px #9fa3b2 !important;\n  color: #1f2a55 !important;\n  background-color: rgba(241, 244, 250, 0.1) !important; }\n\n.SignIn-forgot-3IRhF {\n  font-size: 12px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  margin-top: 12px; }\n\n.SignIn-sign-joUPR {\n  margin-top: 60px;\n  border-radius: 20px;\n  background-color: #2665ee;\n  font-size: 16px;\n  font-size: 1rem;\n  font-weight: 600;\n  letter-spacing: 2.46px;\n  text-align: center;\n  color: #fff; }\n\n.SignIn-noAccount-Yyltb {\n  margin-top: 60px;\n  font-size: 16px;\n  font-size: 1rem; }\n\n.SignIn-noAccount-Yyltb .SignIn-signOut-2ZLQA {\n    font-weight: 600;\n    color: #177cf4;\n    padding-left: 6px;\n    cursor: pointer; }\n", "", {"version":3,"sources":["/home/vikram/Downloads/AssignmentCampk12/src/routes/sign-in/SignIn.scss"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,aAAa;EACb,2FAA2F;EAC3F,8DAA8D;EAC9D,yDAAyD;EACzD,4DAA4D;EAC5D,uBAAuB,EAAE;;AAE3B;EACE,qBAAqB;EACrB,cAAc;EACd,uBAAuB;MACnB,oBAAoB;EACxB,uBAAuB;MACnB,+BAA+B;EACnC,gBAAgB,EAAE;;AAEpB;EACE,oBAAoB;EACpB,oBAAoB;EACpB,iBAAiB;EACjB,uBAAuB;EACvB,mBAAmB;EACnB,eAAe,EAAE;;AAEnB;EACE,iBAAiB,EAAE;;AAErB;EACE,mBAAmB;EACnB,wBAAwB;EACxB,eAAe;EACf,iBAAiB,EAAE;;AAErB;EACE,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,oBAAoB,EAAE;;AAExB;EACE,aAAa;EACb,gBAAgB;EAChB,gBAAgB,EAAE;;AAEpB;EACE,cAAc;EACd,oBAAoB,EAAE;;AAExB;EACE,4BAA4B;EAC5B,wBAAwB;EACxB,0BAA0B;EAC1B,wBAAwB;EACxB,4CAA4C;EAC5C,0BAA0B;EAC1B,sDAAsD,EAAE;;AAE1D;EACE,gBAAgB;EAChB,mBAAmB;EACnB,iBAAiB;EACjB,iBAAiB,EAAE;;AAErB;EACE,iBAAiB;EACjB,oBAAoB;EACpB,0BAA0B;EAC1B,gBAAgB;EAChB,gBAAgB;EAChB,iBAAiB;EACjB,uBAAuB;EACvB,mBAAmB;EACnB,YAAY,EAAE;;AAEhB;EACE,iBAAiB;EACjB,gBAAgB;EAChB,gBAAgB,EAAE;;AAEpB;IACI,iBAAiB;IACjB,eAAe;IACf,kBAAkB;IAClB,gBAAgB,EAAE","file":"SignIn.scss","sourcesContent":[".root {\n  width: 100%;\n  height: 100%;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#f1f4fa));\n  background-image: -webkit-linear-gradient(top, #fff, #f1f4fa);\n  background-image: -o-linear-gradient(top, #fff, #f1f4fa);\n  background-image: linear-gradient(to bottom, #fff, #f1f4fa);\n  font-family: SFProText; }\n\n.head {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  padding: 0 12px; }\n\n.time {\n  font-size: 15.008px;\n  font-size: 0.938rem;\n  font-weight: 600;\n  letter-spacing: -0.3px;\n  text-align: center;\n  color: #000000; }\n\n.icons i {\n  margin-left: 4px; }\n\n.mainContainer {\n  text-align: center;\n  font-family: Montserrat;\n  color: #1f2a55;\n  margin-top: 24px; }\n\n.signIn {\n  font-size: 24px;\n  font-size: 1.5rem;\n  font-weight: 600;\n  margin-bottom: 12px; }\n\n.welcome {\n  opacity: 0.7;\n  font-size: 16px;\n  font-size: 1rem; }\n\n.inputBoxes {\n  display: grid;\n  place-items: center; }\n\n.input {\n  margin-top: 24px !important;\n  width: 200px !important;\n  max-width: 90% !important;\n  border: none !important;\n  border-bottom: solid 1px #9fa3b2 !important;\n  color: #1f2a55 !important;\n  background-color: rgba(241, 244, 250, 0.1) !important; }\n\n.forgot {\n  font-size: 12px;\n  font-size: 0.75rem;\n  font-weight: 500;\n  margin-top: 12px; }\n\n.sign {\n  margin-top: 60px;\n  border-radius: 20px;\n  background-color: #2665ee;\n  font-size: 16px;\n  font-size: 1rem;\n  font-weight: 600;\n  letter-spacing: 2.46px;\n  text-align: center;\n  color: #fff; }\n\n.noAccount {\n  margin-top: 60px;\n  font-size: 16px;\n  font-size: 1rem; }\n\n.noAccount .signOut {\n    font-weight: 600;\n    color: #177cf4;\n    padding-left: 6px;\n    cursor: pointer; }\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"root": "SignIn-root-25fdX",
	"head": "SignIn-head-PWFau",
	"time": "SignIn-time-1mYWK",
	"icons": "SignIn-icons-18ttr",
	"mainContainer": "SignIn-mainContainer-1XXB5",
	"signIn": "SignIn-signIn-1p4t7",
	"welcome": "SignIn-welcome-3lWsh",
	"inputBoxes": "SignIn-inputBoxes-PmjAa",
	"input": "SignIn-input-1wk9J",
	"forgot": "SignIn-forgot-3IRhF",
	"sign": "SignIn-sign-joUPR",
	"noAccount": "SignIn-noAccount-Yyltb",
	"signOut": "SignIn-signOut-2ZLQA"
};

/***/ }),

/***/ "./src/actions/runtime.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserDetails", function() { return setUserDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentUser", function() { return setCurrentUser; });
/* harmony import */ var reducers_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/reducers/runtime.js");
/* eslint-disable import/prefer-default-export */

function setUserDetails({
  name,
  value
}) {
  return {
    type: reducers_runtime__WEBPACK_IMPORTED_MODULE_0__["ACTION_TYPES"].setUserDetails,
    payload: {
      name,
      value
    }
  };
}
function setCurrentUser({
  name,
  value
}) {
  return {
    type: reducers_runtime__WEBPACK_IMPORTED_MODULE_0__["ACTION_TYPES"].setCurrentUser,
    payload: {
      name,
      value
    }
  };
}

/***/ }),

/***/ "./src/routes/sign-in/SignIn.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var actions_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/actions/runtime.js");
/* harmony import */ var _SignIn_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/routes/sign-in/SignIn.scss");
/* harmony import */ var _SignIn_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_SignIn_scss__WEBPACK_IMPORTED_MODULE_5__);
var _dec,
    _class,
    _class2,
    _temp,
    _jsxFileName = "/home/vikram/Downloads/AssignmentCampk12/src/routes/sign-in/SignIn.js";







/* we can conntect to store as following */

let SignIn = (_dec = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(store => ({
  registeredUsers: store.runtime.registeredUsers // any specific store value can be accessed like this

}), {
  setUserDetails: actions_runtime__WEBPACK_IMPORTED_MODULE_4__["setUserDetails"],
  setCurrentUser: actions_runtime__WEBPACK_IMPORTED_MODULE_4__["setCurrentUser"]
} // here we are binding the dispactcher action methods
), _dec(_class = (_temp = _class2 = class SignIn extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    Object.defineProperty(this, "validateEmail", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: email => {
        const List = email.split('@');

        if (List.length > 1) {
          const tmpList = List[1].split('.');

          if (tmpList.length === 1) {
            return false;
          }
        } else {
          return false;
        }

        return true;
      }
    });
    Object.defineProperty(this, "validateDetails", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: () => {
        const errorFields = {};
        const {
          signUpFields,
          signInFields
        } = this.state;
        const {
          registeredUsers
        } = this.props; // const users = registeredUsers.map(x => x.email);

        if (this.state.showSignUp && Object.keys(signUpFields).length === 4) {
          Object.keys(signUpFields).forEach(key => {
            if (key === 'email' && (!this.validateEmail(signUpFields[key]) || registeredUsers[signUpFields[key]])) {
              errorFields[key] = registeredUsers[signUpFields[key]] ? 'User already registered with this email' : 'Invalid email';
            } else if (signUpFields[key].length === 0) {
              errorFields[key] = `${key} cannot be empty`;
            }
          });

          if (!signUpFields.password === signUpFields.confirmPassword) {
            errorFields.password = `confirm password and password should be equal`;
          }

          const errorFound = Object.keys(errorFields).length > 0;
          this.setState({
            errorFields,
            registeredSuccessfully: !errorFound
          });

          if (!errorFound) {
            this.props.setUserDetails({
              name: 'registeredUsers',
              value: signUpFields
            });
          }
        } else if (!this.state.showSignUp && Object.keys(signInFields).length === 2) {
          if (registeredUsers[signInFields.email]) {
            const user = registeredUsers[signInFields.email];

            if (user.password !== signInFields.password) {
              errorFields.password = `Incorrect password`;
            }
          } else {
            errorFields.email = `User not Registered`;
          }

          const errorFound = Object.keys(errorFields).length > 0;

          if (errorFound) {
            this.setState({
              errorFields
            });
          } else {
            this.props.setCurrentUser({
              name: 'currentUser',
              value: signInFields
            });
            this.context.history.push(`/feed`);
          }
        }
      }
    });
    Object.defineProperty(this, "fillValues", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: (key, value) => {
        if (!this.state.showSignUp) {
          const {
            signInFields
          } = this.state;
          signInFields[key] = value;
          this.setState({
            signInFields
          });
        } else {
          const {
            signUpFields
          } = this.state;
          signUpFields[key] = value;
          this.setState({
            signUpFields
          });
        }
      }
    });
    Object.defineProperty(this, "displayErrors", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: errorFields => {
        const div = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            color: 'red'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140
          },
          __self: this
        }, Object.values(errorFields).map(x => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          },
          __self: this
        }, " ", x, " ")));
        return div;
      }
    });
    Object.defineProperty(this, "displaySignUpContainer", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: () => {
        const {
          signUpFields,
          displayFieldsIn,
          displayFieldsUp,
          errorFields,
          registeredSuccessfully
        } = this.state;
        const div = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _SignIn_scss__WEBPACK_IMPORTED_MODULE_5___default.a.mainContainer,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _SignIn_scss__WEBPACK_IMPORTED_MODULE_5___default.a.signIn,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          },
          __self: this
        }, " Sign up "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _SignIn_scss__WEBPACK_IMPORTED_MODULE_5___default.a.welcome,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          },
          __self: this
        }, " Create Account for Camp K12 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _SignIn_scss__WEBPACK_IMPORTED_MODULE_5___default.a.inputBoxes,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          },
          __self: this
        }, [...displayFieldsIn, ...displayFieldsUp].map(x => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          className: _SignIn_scss__WEBPACK_IMPORTED_MODULE_5___default.a.input,
          value: signUpFields[x.value] || '',
          type: "text",
          placeHolder: x.label,
          onChange: e => {
            this.fillValues(x.value, e.target.value);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 161
          },
          __self: this
        }))), registeredSuccessfully ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            color: 'blue'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173
          },
          __self: this
        }, " User Registered Successfully ") : this.displayErrors(errorFields), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: _SignIn_scss__WEBPACK_IMPORTED_MODULE_5___default.a.sign,
          onClick: () => {
            this.validateDetails();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177
          },
          __self: this
        }, ' ', "SIGN UP"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _SignIn_scss__WEBPACK_IMPORTED_MODULE_5___default.a.noAccount,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 187
          },
          __self: this
        }, "Do you have account?", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: _SignIn_scss__WEBPACK_IMPORTED_MODULE_5___default.a.signOut,
          role: "presentation",
          onClick: () => {
            this.setState({
              showSignUp: false,
              signUpFields: {},
              errorFields: {}
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          },
          __self: this
        }, ' ', "SIGN IN")));
        return div;
      }
    });
    Object.defineProperty(this, "displaySignInContainer", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: () => {
        const {
          signInFields,
          displayFieldsIn,
          errorFields
        } = this.state;
        const div = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _SignIn_scss__WEBPACK_IMPORTED_MODULE_5___default.a.mainContainer,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _SignIn_scss__WEBPACK_IMPORTED_MODULE_5___default.a.signIn,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 213
          },
          __self: this
        }, " Sign in "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _SignIn_scss__WEBPACK_IMPORTED_MODULE_5___default.a.welcome,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 214
          },
          __self: this
        }, " Welcome back "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _SignIn_scss__WEBPACK_IMPORTED_MODULE_5___default.a.inputBoxes,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215
          },
          __self: this
        }, displayFieldsIn.map(x => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          className: _SignIn_scss__WEBPACK_IMPORTED_MODULE_5___default.a.input,
          value: signInFields[x.value] || '',
          type: "text",
          placeHolder: x.label,
          onChange: e => {
            this.fillValues(x.value, e.target.value);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 217
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _SignIn_scss__WEBPACK_IMPORTED_MODULE_5___default.a.forgot,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 228
          },
          __self: this
        }, " Forgot password? "), this.displayErrors(errorFields), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: _SignIn_scss__WEBPACK_IMPORTED_MODULE_5___default.a.sign,
          onClick: () => {
            this.validateDetails();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 230
          },
          __self: this
        }, ' ', "SIGN IN"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _SignIn_scss__WEBPACK_IMPORTED_MODULE_5___default.a.noAccount,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 239
          },
          __self: this
        }, "Don\u2019t have an account?", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: _SignIn_scss__WEBPACK_IMPORTED_MODULE_5___default.a.signOut,
          role: "presentation",
          onClick: () => {
            this.setState({
              showSignUp: true,
              signInFields: {},
              errorFields: {}
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 241
          },
          __self: this
        }, ' ', "SIGN UP")));
        return div;
      }
    });
    this.state = {
      signUpFields: {},
      signInFields: {},
      displayFieldsIn: [{
        label: 'Email',
        value: 'email'
      }, {
        label: 'Password',
        value: 'password'
      }],
      displayFieldsUp: [{
        label: 'Confirm Password',
        value: 'confirmPassword'
      }, {
        label: 'Full Names',
        value: 'fullName'
      }],
      errorFields: {}
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _SignIn_scss__WEBPACK_IMPORTED_MODULE_5___default.a.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _SignIn_scss__WEBPACK_IMPORTED_MODULE_5___default.a.head,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _SignIn_scss__WEBPACK_IMPORTED_MODULE_5___default.a.time,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264
      },
      __self: this
    }, " 9:21 "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _SignIn_scss__WEBPACK_IMPORTED_MODULE_5___default.a.icons,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-wifi",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-battery-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-signal",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268
      },
      __self: this
    }))), !this.state.showSignUp ? this.displaySignInContainer() : this.displaySignUpContainer());
  }

}, Object.defineProperty(_class2, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    setUserDetails: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    registeredUsers: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
    setCurrentUser: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
  }
}), Object.defineProperty(_class2, "contextTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
  }
}), _temp)) || _class);
/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2___default()(_SignIn_scss__WEBPACK_IMPORTED_MODULE_5___default.a)(SignIn));

/***/ }),

/***/ "./src/routes/sign-in/SignIn.scss":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js??ref--5-rules-2!./node_modules/postcss-loader/lib/index.js??ref--5-rules-3!./node_modules/sass-loader/lib/loader.js!./src/routes/sign-in/SignIn.scss");
    var insertCss = __webpack_require__("./node_modules/isomorphic-style-loader/lib/insertCss.js");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (module.hot && typeof window !== 'undefined' && window.document) {
      var removeCss = function() {};
      module.hot.accept("./node_modules/css-loader/index.js??ref--5-rules-2!./node_modules/postcss-loader/lib/index.js??ref--5-rules-3!./node_modules/sass-loader/lib/loader.js!./src/routes/sign-in/SignIn.scss", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function() {
        content = __webpack_require__("./node_modules/css-loader/index.js??ref--5-rules-2!./node_modules/postcss-loader/lib/index.js??ref--5-rules-3!./node_modules/sass-loader/lib/loader.js!./src/routes/sign-in/SignIn.scss");

        if (typeof content === 'string') {
          content = [[module.i, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/routes/sign-in/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/AppLayout/AppLayout.js");
/* harmony import */ var _SignIn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/routes/sign-in/SignIn.js");
var _jsxFileName = "/home/vikram/Downloads/AssignmentCampk12/src/routes/sign-in/index.js";




async function action() {
  return {
    title: 'vikram React Starter Kit',
    chunks: ['SignIn'],
    component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_AppLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SignIn__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }))
  };
}

/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL1NpZ25Jbi5qcyIsInNvdXJjZXMiOlsiL2hvbWUvdmlrcmFtL0Rvd25sb2Fkcy9Bc3NpZ25tZW50Q2FtcGsxMi9zcmMvcm91dGVzL3NpZ24taW4vU2lnbkluLnNjc3MiLCIvaG9tZS92aWtyYW0vRG93bmxvYWRzL0Fzc2lnbm1lbnRDYW1wazEyL3NyYy9hY3Rpb25zL3J1bnRpbWUuanMiLCIvaG9tZS92aWtyYW0vRG93bmxvYWRzL0Fzc2lnbm1lbnRDYW1wazEyL3NyYy9yb3V0ZXMvc2lnbi1pbi9TaWduSW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9zaWduLWluL1NpZ25Jbi5zY3NzPzIwNjgiLCIvaG9tZS92aWtyYW0vRG93bmxvYWRzL0Fzc2lnbm1lbnRDYW1wazEyL3NyYy9yb3V0ZXMvc2lnbi1pbi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLlNpZ25Jbi1yb290LTI1ZmRYIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjZmZmKSwgdG8oI2YxZjRmYSkpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZmZmLCAjZjFmNGZhKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICNmZmYsICNmMWY0ZmEpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZiwgI2YxZjRmYSk7XFxuICBmb250LWZhbWlseTogU0ZQcm9UZXh0OyB9XFxuXFxuLlNpZ25Jbi1oZWFkLVBXRmF1IHtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMCAxMnB4OyB9XFxuXFxuLlNpZ25Jbi10aW1lLTFtWVdLIHtcXG4gIGZvbnQtc2l6ZTogMTUuMDA4cHg7XFxuICBmb250LXNpemU6IDAuOTM4cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogIzAwMDAwMDsgfVxcblxcbi5TaWduSW4taWNvbnMtMTh0dHIgaSB7XFxuICBtYXJnaW4tbGVmdDogNHB4OyB9XFxuXFxuLlNpZ25Jbi1tYWluQ29udGFpbmVyLTFYWEI1IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xcbiAgY29sb3I6ICMxZjJhNTU7XFxuICBtYXJnaW4tdG9wOiAyNHB4OyB9XFxuXFxuLlNpZ25Jbi1zaWduSW4tMXA0dDcge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDsgfVxcblxcbi5TaWduSW4td2VsY29tZS0zbFdzaCB7XFxuICBvcGFjaXR5OiAwLjc7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXNpemU6IDFyZW07IH1cXG5cXG4uU2lnbkluLWlucHV0Qm94ZXMtUG1qQWEge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4uU2lnbkluLWlucHV0LTF3azlKIHtcXG4gIG1hcmdpbi10b3A6IDI0cHggIWltcG9ydGFudDtcXG4gIHdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xcbiAgbWF4LXdpZHRoOiA5MCUgIWltcG9ydGFudDtcXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICM5ZmEzYjIgIWltcG9ydGFudDtcXG4gIGNvbG9yOiAjMWYyYTU1ICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MSwgMjQ0LCAyNTAsIDAuMSkgIWltcG9ydGFudDsgfVxcblxcbi5TaWduSW4tZm9yZ290LTNJUmhGIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBtYXJnaW4tdG9wOiAxMnB4OyB9XFxuXFxuLlNpZ25Jbi1zaWduLWpvVVBSIHtcXG4gIG1hcmdpbi10b3A6IDYwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2NjVlZTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMi40NnB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG4uU2lnbkluLW5vQWNjb3VudC1ZeWx0YiB7XFxuICBtYXJnaW4tdG9wOiA2MHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC1zaXplOiAxcmVtOyB9XFxuXFxuLlNpZ25Jbi1ub0FjY291bnQtWXlsdGIgLlNpZ25Jbi1zaWduT3V0LTJaTFFBIHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6ICMxNzdjZjQ7XFxuICAgIHBhZGRpbmctbGVmdDogNnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvdmlrcmFtL0Rvd25sb2Fkcy9Bc3NpZ25tZW50Q2FtcGsxMi9zcmMvcm91dGVzL3NpZ24taW4vU2lnbkluLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLDJGQUEyRjtFQUMzRiw4REFBOEQ7RUFDOUQseURBQXlEO0VBQ3pELDREQUE0RDtFQUM1RCx1QkFBdUIsRUFBRTs7QUFFM0I7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLHVCQUF1QjtNQUNuQixvQkFBb0I7RUFDeEIsdUJBQXVCO01BQ25CLCtCQUErQjtFQUNuQyxnQkFBZ0IsRUFBRTs7QUFFcEI7RUFDRSxvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWUsRUFBRTs7QUFFbkI7RUFDRSxpQkFBaUIsRUFBRTs7QUFFckI7RUFDRSxtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixpQkFBaUIsRUFBRTs7QUFFckI7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixvQkFBb0IsRUFBRTs7QUFFeEI7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFFOztBQUVwQjtFQUNFLGNBQWM7RUFDZCxvQkFBb0IsRUFBRTs7QUFFeEI7RUFDRSw0QkFBNEI7RUFDNUIsd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQix3QkFBd0I7RUFDeEIsNENBQTRDO0VBQzVDLDBCQUEwQjtFQUMxQixzREFBc0QsRUFBRTs7QUFFMUQ7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBRTs7QUFFckI7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVksRUFBRTs7QUFFaEI7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFFOztBQUVwQjtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQixFQUFFXCIsXCJmaWxlXCI6XCJTaWduSW4uc2Nzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucm9vdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oI2ZmZiksIHRvKCNmMWY0ZmEpKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZmZiwgI2YxZjRmYSk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAjZmZmLCAjZjFmNGZhKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZmYsICNmMWY0ZmEpO1xcbiAgZm9udC1mYW1pbHk6IFNGUHJvVGV4dDsgfVxcblxcbi5oZWFkIHtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMCAxMnB4OyB9XFxuXFxuLnRpbWUge1xcbiAgZm9udC1zaXplOiAxNS4wMDhweDtcXG4gIGZvbnQtc2l6ZTogMC45MzhyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjMDAwMDAwOyB9XFxuXFxuLmljb25zIGkge1xcbiAgbWFyZ2luLWxlZnQ6IDRweDsgfVxcblxcbi5tYWluQ29udGFpbmVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xcbiAgY29sb3I6ICMxZjJhNTU7XFxuICBtYXJnaW4tdG9wOiAyNHB4OyB9XFxuXFxuLnNpZ25JbiB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4OyB9XFxuXFxuLndlbGNvbWUge1xcbiAgb3BhY2l0eTogMC43O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC1zaXplOiAxcmVtOyB9XFxuXFxuLmlucHV0Qm94ZXMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4uaW5wdXQge1xcbiAgbWFyZ2luLXRvcDogMjRweCAhaW1wb3J0YW50O1xcbiAgd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7XFxuICBtYXgtd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggIzlmYTNiMiAhaW1wb3J0YW50O1xcbiAgY29sb3I6ICMxZjJhNTUgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyNDQsIDI1MCwgMC4xKSAhaW1wb3J0YW50OyB9XFxuXFxuLmZvcmdvdCB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbWFyZ2luLXRvcDogMTJweDsgfVxcblxcbi5zaWduIHtcXG4gIG1hcmdpbi10b3A6IDYwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2NjVlZTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMi40NnB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICNmZmY7IH1cXG5cXG4ubm9BY2NvdW50IHtcXG4gIG1hcmdpbi10b3A6IDYwcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXNpemU6IDFyZW07IH1cXG5cXG4ubm9BY2NvdW50IC5zaWduT3V0IHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6ICMxNzdjZjQ7XFxuICAgIHBhZGRpbmctbGVmdDogNnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcIlNpZ25Jbi1yb290LTI1ZmRYXCIsXG5cdFwiaGVhZFwiOiBcIlNpZ25Jbi1oZWFkLVBXRmF1XCIsXG5cdFwidGltZVwiOiBcIlNpZ25Jbi10aW1lLTFtWVdLXCIsXG5cdFwiaWNvbnNcIjogXCJTaWduSW4taWNvbnMtMTh0dHJcIixcblx0XCJtYWluQ29udGFpbmVyXCI6IFwiU2lnbkluLW1haW5Db250YWluZXItMVhYQjVcIixcblx0XCJzaWduSW5cIjogXCJTaWduSW4tc2lnbkluLTFwNHQ3XCIsXG5cdFwid2VsY29tZVwiOiBcIlNpZ25Jbi13ZWxjb21lLTNsV3NoXCIsXG5cdFwiaW5wdXRCb3hlc1wiOiBcIlNpZ25Jbi1pbnB1dEJveGVzLVBtakFhXCIsXG5cdFwiaW5wdXRcIjogXCJTaWduSW4taW5wdXQtMXdrOUpcIixcblx0XCJmb3Jnb3RcIjogXCJTaWduSW4tZm9yZ290LTNJUmhGXCIsXG5cdFwic2lnblwiOiBcIlNpZ25Jbi1zaWduLWpvVVBSXCIsXG5cdFwibm9BY2NvdW50XCI6IFwiU2lnbkluLW5vQWNjb3VudC1ZeWx0YlwiLFxuXHRcInNpZ25PdXRcIjogXCJTaWduSW4tc2lnbk91dC0yWkxRQVwiXG59OyIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cblxuaW1wb3J0IHsgQUNUSU9OX1RZUEVTIH0gZnJvbSAncmVkdWNlcnMvcnVudGltZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRVc2VyRGV0YWlscyh7IG5hbWUsIHZhbHVlIH0pIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBQ1RJT05fVFlQRVMuc2V0VXNlckRldGFpbHMsXG4gICAgcGF5bG9hZDoge1xuICAgICAgbmFtZSxcbiAgICAgIHZhbHVlLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRDdXJyZW50VXNlcih7IG5hbWUsIHZhbHVlIH0pIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBQ1RJT05fVFlQRVMuc2V0Q3VycmVudFVzZXIsXG4gICAgcGF5bG9hZDoge1xuICAgICAgbmFtZSxcbiAgICAgIHZhbHVlLFxuICAgIH0sXG4gIH07XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2xpYi93aXRoU3R5bGVzJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBzZXRVc2VyRGV0YWlscywgc2V0Q3VycmVudFVzZXIgfSBmcm9tICdhY3Rpb25zL3J1bnRpbWUnO1xuaW1wb3J0IHMgZnJvbSAnLi9TaWduSW4uc2Nzcyc7XG5cbi8qIHdlIGNhbiBjb25udGVjdCB0byBzdG9yZSBhcyBmb2xsb3dpbmcgKi9cbkBjb25uZWN0KFxuICBzdG9yZSA9PiAoe1xuICAgIHJlZ2lzdGVyZWRVc2Vyczogc3RvcmUucnVudGltZS5yZWdpc3RlcmVkVXNlcnMsIC8vIGFueSBzcGVjaWZpYyBzdG9yZSB2YWx1ZSBjYW4gYmUgYWNjZXNzZWQgbGlrZSB0aGlzXG4gIH0pLFxuICB7IHNldFVzZXJEZXRhaWxzLCBzZXRDdXJyZW50VXNlciB9LCAvLyBoZXJlIHdlIGFyZSBiaW5kaW5nIHRoZSBkaXNwYWN0Y2hlciBhY3Rpb24gbWV0aG9kc1xuKVxuY2xhc3MgU2lnbkluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBzZXRVc2VyRGV0YWlsczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICByZWdpc3RlcmVkVXNlcnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBzZXRDdXJyZW50VXNlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgfTtcblxuICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgIGhpc3Rvcnk6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2lnblVwRmllbGRzOiB7fSxcbiAgICAgIHNpZ25JbkZpZWxkczoge30sXG4gICAgICBkaXNwbGF5RmllbGRzSW46IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnRW1haWwnLFxuICAgICAgICAgIHZhbHVlOiAnZW1haWwnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdQYXNzd29yZCcsXG4gICAgICAgICAgdmFsdWU6ICdwYXNzd29yZCcsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgZGlzcGxheUZpZWxkc1VwOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ0NvbmZpcm0gUGFzc3dvcmQnLFxuICAgICAgICAgIHZhbHVlOiAnY29uZmlybVBhc3N3b3JkJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnRnVsbCBOYW1lcycsXG4gICAgICAgICAgdmFsdWU6ICdmdWxsTmFtZScsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgZXJyb3JGaWVsZHM6IHt9LFxuICAgIH07XG4gIH1cblxuICB2YWxpZGF0ZUVtYWlsID0gZW1haWwgPT4ge1xuICAgIGNvbnN0IExpc3QgPSBlbWFpbC5zcGxpdCgnQCcpO1xuICAgIGlmIChMaXN0Lmxlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnN0IHRtcExpc3QgPSBMaXN0WzFdLnNwbGl0KCcuJyk7XG4gICAgICBpZiAodG1wTGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIHZhbGlkYXRlRGV0YWlscyA9ICgpID0+IHtcbiAgICBjb25zdCBlcnJvckZpZWxkcyA9IHt9O1xuICAgIGNvbnN0IHsgc2lnblVwRmllbGRzLCBzaWduSW5GaWVsZHMgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyByZWdpc3RlcmVkVXNlcnMgfSA9IHRoaXMucHJvcHM7XG4gICAgLy8gY29uc3QgdXNlcnMgPSByZWdpc3RlcmVkVXNlcnMubWFwKHggPT4geC5lbWFpbCk7XG4gICAgaWYgKHRoaXMuc3RhdGUuc2hvd1NpZ25VcCAmJiBPYmplY3Qua2V5cyhzaWduVXBGaWVsZHMpLmxlbmd0aCA9PT0gNCkge1xuICAgICAgT2JqZWN0LmtleXMoc2lnblVwRmllbGRzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBrZXkgPT09ICdlbWFpbCcgJiZcbiAgICAgICAgICAoIXRoaXMudmFsaWRhdGVFbWFpbChzaWduVXBGaWVsZHNba2V5XSkgfHxcbiAgICAgICAgICAgIHJlZ2lzdGVyZWRVc2Vyc1tzaWduVXBGaWVsZHNba2V5XV0pXG4gICAgICAgICkge1xuICAgICAgICAgIGVycm9yRmllbGRzW2tleV0gPSByZWdpc3RlcmVkVXNlcnNbc2lnblVwRmllbGRzW2tleV1dXG4gICAgICAgICAgICA/ICdVc2VyIGFscmVhZHkgcmVnaXN0ZXJlZCB3aXRoIHRoaXMgZW1haWwnXG4gICAgICAgICAgICA6ICdJbnZhbGlkIGVtYWlsJztcbiAgICAgICAgfSBlbHNlIGlmIChzaWduVXBGaWVsZHNba2V5XS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBlcnJvckZpZWxkc1trZXldID0gYCR7a2V5fSBjYW5ub3QgYmUgZW1wdHlgO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmICghc2lnblVwRmllbGRzLnBhc3N3b3JkID09PSBzaWduVXBGaWVsZHMuY29uZmlybVBhc3N3b3JkKSB7XG4gICAgICAgIGVycm9yRmllbGRzLnBhc3N3b3JkID0gYGNvbmZpcm0gcGFzc3dvcmQgYW5kIHBhc3N3b3JkIHNob3VsZCBiZSBlcXVhbGA7XG4gICAgICB9XG4gICAgICBjb25zdCBlcnJvckZvdW5kID0gT2JqZWN0LmtleXMoZXJyb3JGaWVsZHMpLmxlbmd0aCA+IDA7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZXJyb3JGaWVsZHMsXG4gICAgICAgIHJlZ2lzdGVyZWRTdWNjZXNzZnVsbHk6ICFlcnJvckZvdW5kLFxuICAgICAgfSk7XG4gICAgICBpZiAoIWVycm9yRm91bmQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5zZXRVc2VyRGV0YWlscyh7XG4gICAgICAgICAgbmFtZTogJ3JlZ2lzdGVyZWRVc2VycycsXG4gICAgICAgICAgdmFsdWU6IHNpZ25VcEZpZWxkcyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChcbiAgICAgICF0aGlzLnN0YXRlLnNob3dTaWduVXAgJiZcbiAgICAgIE9iamVjdC5rZXlzKHNpZ25JbkZpZWxkcykubGVuZ3RoID09PSAyXG4gICAgKSB7XG4gICAgICBpZiAocmVnaXN0ZXJlZFVzZXJzW3NpZ25JbkZpZWxkcy5lbWFpbF0pIHtcbiAgICAgICAgY29uc3QgdXNlciA9IHJlZ2lzdGVyZWRVc2Vyc1tzaWduSW5GaWVsZHMuZW1haWxdO1xuICAgICAgICBpZiAodXNlci5wYXNzd29yZCAhPT0gc2lnbkluRmllbGRzLnBhc3N3b3JkKSB7XG4gICAgICAgICAgZXJyb3JGaWVsZHMucGFzc3dvcmQgPSBgSW5jb3JyZWN0IHBhc3N3b3JkYDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3JGaWVsZHMuZW1haWwgPSBgVXNlciBub3QgUmVnaXN0ZXJlZGA7XG4gICAgICB9XG4gICAgICBjb25zdCBlcnJvckZvdW5kID0gT2JqZWN0LmtleXMoZXJyb3JGaWVsZHMpLmxlbmd0aCA+IDA7XG4gICAgICBpZiAoZXJyb3JGb3VuZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JGaWVsZHMgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnByb3BzLnNldEN1cnJlbnRVc2VyKHtcbiAgICAgICAgICBuYW1lOiAnY3VycmVudFVzZXInLFxuICAgICAgICAgIHZhbHVlOiBzaWduSW5GaWVsZHMsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbnRleHQuaGlzdG9yeS5wdXNoKGAvZmVlZGApO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBmaWxsVmFsdWVzID0gKGtleSwgdmFsdWUpID0+IHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuc2hvd1NpZ25VcCkge1xuICAgICAgY29uc3QgeyBzaWduSW5GaWVsZHMgfSA9IHRoaXMuc3RhdGU7XG4gICAgICBzaWduSW5GaWVsZHNba2V5XSA9IHZhbHVlO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNpZ25JbkZpZWxkcyB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgeyBzaWduVXBGaWVsZHMgfSA9IHRoaXMuc3RhdGU7XG4gICAgICBzaWduVXBGaWVsZHNba2V5XSA9IHZhbHVlO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNpZ25VcEZpZWxkcyB9KTtcbiAgICB9XG4gIH07XG5cbiAgZGlzcGxheUVycm9ycyA9IGVycm9yRmllbGRzID0+IHtcbiAgICBjb25zdCBkaXYgPSAoXG4gICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5cbiAgICAgICAge09iamVjdC52YWx1ZXMoZXJyb3JGaWVsZHMpLm1hcCh4ID0+IDxkaXY+IHt4fSA8L2Rpdj4pfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgICByZXR1cm4gZGl2O1xuICB9O1xuXG4gIGRpc3BsYXlTaWduVXBDb250YWluZXIgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgc2lnblVwRmllbGRzLFxuICAgICAgZGlzcGxheUZpZWxkc0luLFxuICAgICAgZGlzcGxheUZpZWxkc1VwLFxuICAgICAgZXJyb3JGaWVsZHMsXG4gICAgICByZWdpc3RlcmVkU3VjY2Vzc2Z1bGx5LFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGRpdiA9IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLm1haW5Db250YWluZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5zaWduSW59PiBTaWduIHVwIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy53ZWxjb21lfT4gQ3JlYXRlIEFjY291bnQgZm9yIENhbXAgSzEyIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5pbnB1dEJveGVzfT5cbiAgICAgICAgICB7Wy4uLmRpc3BsYXlGaWVsZHNJbiwgLi4uZGlzcGxheUZpZWxkc1VwXS5tYXAoeCA9PiAoXG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzLmlucHV0fVxuICAgICAgICAgICAgICB2YWx1ZT17c2lnblVwRmllbGRzW3gudmFsdWVdIHx8ICcnfVxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHBsYWNlSG9sZGVyPXt4LmxhYmVsfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWxsVmFsdWVzKHgudmFsdWUsIGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7cmVnaXN0ZXJlZFN1Y2Nlc3NmdWxseSA/IChcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAnYmx1ZScgfX0+IFVzZXIgUmVnaXN0ZXJlZCBTdWNjZXNzZnVsbHkgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgdGhpcy5kaXNwbGF5RXJyb3JzKGVycm9yRmllbGRzKVxuICAgICAgICApfVxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtzLnNpZ259XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0ZURldGFpbHMoKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgeycgJ31cbiAgICAgICAgICBTSUdOIFVQXG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLm5vQWNjb3VudH0+XG4gICAgICAgICAgRG8geW91IGhhdmUgYWNjb3VudD97JyAnfVxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBjbGFzc05hbWU9e3Muc2lnbk91dH1cbiAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzaG93U2lnblVwOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaWduVXBGaWVsZHM6IHt9LFxuICAgICAgICAgICAgICAgIGVycm9yRmllbGRzOiB7fSxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICBTSUdOIElOXG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gICAgcmV0dXJuIGRpdjtcbiAgfTtcblxuICBkaXNwbGF5U2lnbkluQ29udGFpbmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgc2lnbkluRmllbGRzLCBkaXNwbGF5RmllbGRzSW4sIGVycm9yRmllbGRzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGRpdiA9IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLm1haW5Db250YWluZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5zaWduSW59PiBTaWduIGluIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy53ZWxjb21lfT4gV2VsY29tZSBiYWNrIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5pbnB1dEJveGVzfT5cbiAgICAgICAgICB7ZGlzcGxheUZpZWxkc0luLm1hcCh4ID0+IChcbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3MuaW5wdXR9XG4gICAgICAgICAgICAgIHZhbHVlPXtzaWduSW5GaWVsZHNbeC52YWx1ZV0gfHwgJyd9XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2VIb2xkZXI9e3gubGFiZWx9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGxWYWx1ZXMoeC52YWx1ZSwgZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmZvcmdvdH0+IEZvcmdvdCBwYXNzd29yZD8gPC9kaXY+XG4gICAgICAgIHt0aGlzLmRpc3BsYXlFcnJvcnMoZXJyb3JGaWVsZHMpfVxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtzLnNpZ259XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0ZURldGFpbHMoKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgeycgJ31cbiAgICAgICAgICBTSUdOIElOXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5ub0FjY291bnR9PlxuICAgICAgICAgIERvbuKAmXQgaGF2ZSBhbiBhY2NvdW50P3snICd9XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT17cy5zaWduT3V0fVxuICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHNob3dTaWduVXA6IHRydWUsXG4gICAgICAgICAgICAgICAgc2lnbkluRmllbGRzOiB7fSxcbiAgICAgICAgICAgICAgICBlcnJvckZpZWxkczoge30sXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgU0lHTiBVUFxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICAgIHJldHVybiBkaXY7XG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3Mucm9vdH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmhlYWR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnRpbWV9PiA5OjIxIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmljb25zfT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXdpZmlcIiAvPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYmF0dGVyeS00XCIgLz5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNpZ25hbFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7IXRoaXMuc3RhdGUuc2hvd1NpZ25VcFxuICAgICAgICAgID8gdGhpcy5kaXNwbGF5U2lnbkluQ29udGFpbmVyKClcbiAgICAgICAgICA6IHRoaXMuZGlzcGxheVNpZ25VcENvbnRhaW5lcigpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKFNpZ25Jbik7XG4iLCJcbiAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL1NpZ25Jbi5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9saWIvaW5zZXJ0Q3NzLmpzXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgbW9kdWxlLmV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudC50b1N0cmluZygpOyB9O1xuICAgIG1vZHVsZS5leHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcbiAgICBcbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL1NpZ25Jbi5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vU2lnbkluLnNjc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnY29tcG9uZW50cy9BcHBMYXlvdXQnO1xuaW1wb3J0IFNpZ25JbiBmcm9tICcuL1NpZ25Jbic7XG5cbmFzeW5jIGZ1bmN0aW9uIGFjdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ3Zpa3JhbSBSZWFjdCBTdGFydGVyIEtpdCcsXG4gICAgY2h1bmtzOiBbJ1NpZ25JbiddLFxuICAgIGNvbXBvbmVudDogKFxuICAgICAgPEFwcExheW91dD5cbiAgICAgICAgPFNpZ25JbiAvPlxuICAgICAgPC9BcHBMYXlvdXQ+XG4gICAgKSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWN0aW9uO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN0QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU9BO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBTUE7QUFKQTtBQUNBO0FBRkE7QUFHQTtBQUFBO0FBQUE7QUFKQTtBQWlCQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQThCQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBeENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTJDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFsR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBcUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQTlHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFpSEE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBdkhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTBIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFpQkE7QUFDQTtBQXJMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF3TEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQVRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWlCQTtBQUNBO0FBek9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBdkJBO0FBeUJBO0FBQ0E7QUE4TUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFDQTtBQXRRQTs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7Ozs7O0FBTUE7QUFDQTtBQURBOztBQWlRQTs7Ozs7OztBQ3RSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBU0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=