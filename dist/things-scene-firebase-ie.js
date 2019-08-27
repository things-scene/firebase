!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t){e.exports=scene},function(e,t,r){e.exports=r(2)},function(e,t,r){"use strict";r.r(t);var n=r(0);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e,t,r){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=u(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(r):o.value}})(e,t,r||e)}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f={mutable:!1,resizable:!0,rotatable:!0,properties:[{type:"string",label:"api-key",name:"apiKey",property:"apiKey"},{type:"string",label:"auth-domain",name:"authDomain",property:"authDomain"},{type:"string",label:"database-url",name:"databaseURL",property:"databaseURL"},{type:"string",label:"project-id",name:"projectId",property:"projectId"},{type:"string",label:"storage-bucket",name:"storageBucket",property:"storageBucket"},{type:"string",label:"messaging-sender-id",name:"messagingSenderId",property:"messagingSenderId"},{type:"string",label:"child-data-path",name:"childDataPath",property:"childDataPath"},{type:"string",label:"email-id",name:"email",property:"email"},{type:"string",label:"password",name:"password",property:"password"}]},c=0,b=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,u(t).apply(this,arguments))}var r,o,b;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,Object(n["DataSource"])(Object(n["RectPath"])(n["Shape"]))),r=t,b=[{key:"image",get:function(){return t._image||(t._image=new Image,t._image.src="data:image/png;base64,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"),t._image}}],(o=[{key:"added",value:function(){var e=this;n.ScriptLoader.load("https://www.gstatic.com/firebasejs/4.6.2/firebase.js").then(function(){e.app.isViewMode&&!e._firebase_app&&e._initFirebase()},n.error)}},{key:"_onValue",value:function(e){this.data=e.val()}},{key:"_initFirebase",value:function(){var e=this,t=this.model,r=t.apiKey,n=t.authDomain,o=t.databaseURL,a=t.projectId,i=t.storageBucket,s=t.messagingSenderId,u=t.childDataPath,p=(t.authToken,t.email),f=t.password,b=this;this._firebase_app=firebase.initializeApp({apiKey:r,authDomain:n,databaseURL:o,projectId:a,storageBucket:i,messagingSenderId:s},"FBAPP-"+ ++c),this._firebase_auth=firebase.auth(this._firebase_app),this._firebase_auth.onAuthStateChanged(function(t){t?(console.log("logged in",t),b._firebase_ref=e._firebase_app.database().ref().child(u),b._firebase_ref.on("value",b._onValue,b)):console.log("not logged in.")}),(p?this._firebase_auth.signInWithEmailAndPassword(p,f):this._firebase_auth.signInAnonymously()).catch(function(e){return console.log(e.message)})}},{key:"dispose",value:function(){if(this._firebase_app)try{this._firebase_ref&&this._firebase_ref.off("value",this._onValue,this),this._firebase_auth&&this._firebase_auth.signOut(),this._firebase_app&&this._firebase_app.delete(),console.log("disposed - firebase")}catch(e){console.error(e)}delete this._firebase_auth,delete this._firebase_ref,delete this._firebase_app,s(u(t.prototype),"dispose",this).call(this)}},{key:"_draw",value:function(e){var r=this.bounds,n=r.left,o=r.top,a=r.width,i=r.height;e.beginPath(),e.drawImage(t.image,n,o,a,i)}},{key:"nature",get:function(){return f}}])&&a(r.prototype,o),b&&a(r,b),t}();n.Component.register("firebase",b),r.d(t,"Firebase",function(){return b})}]);
//# sourceMappingURL=things-scene-firebase-ie.js.map