var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n="Expected a function",r=0/0,o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),d=Object.prototype.toString,m=Math.max,p=Math.min,g=function(){return s.Date.now()};function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==d.call(t))return r;if(v(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=v(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var l=a.test(e);return l||f.test(e)?u(e.slice(2),l?2:8):i.test(e)?r:+e}t=function(e,t,r){var o=!0,i=!0;if("function"!=typeof e)throw TypeError(n);return v(r)&&(o="leading"in r?!!r.leading:o,i="trailing"in r?!!r.trailing:i),function(e,t,r){var o,i,a,f,u,l,c=0,s=!1,d=!1,b=!0;if("function"!=typeof e)throw TypeError(n);function S(t){var n=o,r=i;return o=i=void 0,c=t,f=e.apply(r,n)}function j(e){var n=e-l,r=e-c;return void 0===l||n>=t||n<0||d&&r>=a}function O(){var e,n,r,o=g();if(j(o))return T(o);u=setTimeout(O,(e=o-l,n=o-c,r=t-e,d?p(r,a-n):r))}function T(e){return(u=void 0,b&&o)?S(e):(o=i=void 0,f)}function h(){var e,n=g(),r=j(n);if(o=arguments,i=this,l=n,r){if(void 0===u)return c=e=l,u=setTimeout(O,t),s?S(e):f;if(d)return u=setTimeout(O,t),S(l)}return void 0===u&&(u=setTimeout(O,t)),f}return t=y(t)||0,v(r)&&(s=!!r.leading,a=(d="maxWait"in r)?m(y(r.maxWait)||0,t):a,b="trailing"in r?!!r.trailing:b),h.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=l=i=u=void 0},h.flush=function(){return void 0===u?f:T(g())},h}(e,t,{leading:o,maxWait:t,trailing:i})};const b="feedback-form-state",S={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea"),input:document.querySelector("input")},j={};(function(){let e=JSON.parse(localStorage.getItem(b));null!==e&&(S.textarea.value=e.message||"",S.input.value=e.email||"")})(),S.form.addEventListener("input",t(function(e){j[e.target.name]=e.target.value;let t=JSON.stringify(j);localStorage.setItem(b,t)},500)),S.form.addEventListener("submit",e=>{e.preventDefault(),e.currentTarget.reset();let t=JSON.parse(localStorage.getItem(b));console.log(t),localStorage.removeItem(b)});
//# sourceMappingURL=03-feedback.487d090f.js.map