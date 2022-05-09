var Rune=function(){"use strict";var e="RUNE_MSG;";function n(n){return r={runeGameEvent:n},"".concat(e).concat(JSON.stringify(r));var r}function r(n){return function(n,r){if(!function(n){return"string"==typeof n&&n.startsWith(e)}(n))return null;var t=(o=n,JSON.parse(o.slice(e.length)));var o;if(!t[r])throw new Error("Wrong message received. Expected to find: ".concat(r,", but the message was: ").concat(JSON.stringify(t)));return t[r]}(n,"runeGameCommand")}function t(e){if(window.postRuneEvent)window.postRuneEvent(e);else{var r=n(e);window.ReactNativeWebView?window.ReactNativeWebView.postMessage(r):window.parent!==window?window.parent.postMessage(r,"*"):console.error("Rune SDK has to run in a container")}}function o(e,n){var t=function(e){return function(n){var t=r(n.data);if(t){if(!t.type||!e[t.type])throw new Error("Received incorrect message: ".concat(t));e[t.type]()}}}(e);return n?document.addEventListener("message",t):window.addEventListener("message",t),t}var i=function(){var e=!1,n={version:"1.5.3",init:function(r){if(n._doneInit)throw new Error("Rune.init() should only be called once");n._doneInit=!0;var o=r||{},i=o.startGame,a=o.resumeGame,u=o.pauseGame,c=o.getScore;if("function"!=typeof i)throw new Error("Invalid startGame function provided to Rune.init()");if("function"!=typeof a)throw new Error("Invalid resumeGame function provided to Rune.init()");if("function"!=typeof u)throw new Error("Invalid pauseGame function provided to Rune.init()");if("function"!=typeof c)throw new Error("Invalid getScore function provided to Rune.init()");n._validateScore(c()),n._startGame=function(){return e&&n._resetDeterministicRandom(),e=!0,i()},n._resumeGame=a,n._pauseGame=u,n._getScore=c,t({type:"INIT",version:n.version})},gameOver:function(){if(!n._doneInit)throw new Error("Rune.gameOver() called before Rune.init()");var e=n._getScore();n._validateScore(e),t({type:"GAME_OVER",score:e,challengeNumber:n.getChallengeNumber()})},getChallengeNumber:function(){var e;return window._runeChallengeNumber?window._runeChallengeNumber:null!==(e=n._runeChallengeNumber)&&void 0!==e?e:1},deterministicRandom:function(){return n._resetDeterministicRandom(),n.deterministicRandom()},_doneInit:!1,_requestScore:function(){var e=n._getScore();n._validateScore(e),t({type:"SCORE",score:e,challengeNumber:n.getChallengeNumber()})},_startGame:function(){throw new Error("Rune._startGame() called before Rune.init()")},_resumeGame:function(){throw new Error("Rune._resumeGame() called before Rune.init()")},_pauseGame:function(){throw new Error("Rune._pauseGame() called before Rune.init()")},_getScore:function(){throw new Error("Rune._getScore() called before Rune.init()")},_validateScore:function(e){if("number"!=typeof e)throw new Error("Score is not a number. Received: ".concat(typeof e));if(e<0||e>Math.pow(10,9))throw new Error("Score is not between 0 and 1000000000. Received: ".concat(e));if(!Number.isInteger(e))throw new Error("Score is not an integer. Received: ".concat(e))},_randomNumberGenerator:function(e){var r=n._hashFromString(e.toString());return function(){var e=r+=1831565813;return e=Math.imul(e^e>>>15,1|e),(((e^=e+Math.imul(e^e>>>7,61|e))^e>>>14)>>>0)/4294967296}},_hashFromString:function(e){for(var n=0,r=1779033703^e.length;n<e.length;n++)r=(r=Math.imul(r^e.charCodeAt(n),3432918353))<<13|r>>>19;return r=Math.imul(r^r>>>16,2246822507),r=Math.imul(r^r>>>13,3266489909),(r^=r>>>16)>>>0},_resetDeterministicRandom:function(){n.deterministicRandom=n._randomNumberGenerator(n.getChallengeNumber())},_runeChallengeNumber:1};return n}();return function(e){var n,r,i,a={enableInitialOverlayInBrowser:!!(r=new URLSearchParams(window.location.search)).get("enableInitialOverlayInBrowser"),useDocumentForPostMessages:!!r.get("customPostMessages"),challengeNumber:+(null!==(n=r.get("challengeNumber"))&&void 0!==n?n:"1")};window.localStorage&&window.localStorage.clear(),window.sessionStorage&&window.sessionStorage.clear(),a.enableInitialOverlayInBrowser&&document.addEventListener("DOMContentLoaded",(function(){var e=document.createElement("div");e.setAttribute("style","top: 0; bottom: 0; left: 0; right: 0; width: 100vw; height: 100vh; position: absolute; z-index: 9999;"),e.addEventListener("click",(function(){e.remove(),t({type:"BROWSER_INITIAL_OVERLAY_CLICKED"})})),document.body.appendChild(e),t({type:"BROWSER_IFRAME_LOADED"})})),function(e,n){var r=n;Number.isInteger(r)&&(e._runeChallengeNumber=r)}(e,a.challengeNumber),o(e,a.useDocumentForPostMessages),i=window.runeWindowErrHandler?window.runeWindowErrHandler:function(e){return t({type:"WINDOW_ERR",err:{msg:e.message,filename:e.filename,lineno:e.lineno,colno:e.colno}}),!0},window.addEventListener("error",i),window.ReactNativeWebView&&(window.console.log=function(){})}(i),i}();
