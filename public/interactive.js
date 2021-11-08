var e=require("react"),n=require("prop-types"),t=require("styled-components"),r=require("@ludekarts/utility-belt");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i,o=a(e),s=a(n),l=a(t);function u(){return(u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function c(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n.indexOf(t=i[r])>=0||(a[t]=e[t]);return a}function f(e,n){return n||(n=e.slice(0)),e.raw=n,e}var d,p=l.default.div(i||(i=f(["\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: height .3s ease;\n\n  ",";\n\n  & > .slide {\n    opacity: 0;\n    position: absolute;\n    visibility: hidden;\n    pointer-events: none;\n    transition: transform .3s ease, opacity .3s ease, visibility 0s ease .4s;\n\n    &.bck {\n      ","\n    }\n\n    &.frd {\n      ","\n    }\n\n    &.active {\n      opacity: 1;\n      visibility: visible;\n      pointer-events: all;\n      ","\n      transition: transform .3s ease, opacity .3s ease, visibility 0s ease;\n    }\n  }\n"])),function(e){var n=e.height;return n?"\n    position: relative;\n    height: "+n+"px;\n  ":"\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    position: absolute;\n  "},function(e){return"vertical"===e.variant?"\n        transform: translateY(100%);\n        ":"\n        transform: translateX(100%);\n        "},function(e){return"vertical"===e.variant?"\n          transform: translateY(-100%);\n        ":"\n          transform: translateX(-100%);\n        "},function(e){return"vertical"===e.variant?"\n        transform: translateY(0);\n        ":"\n        transform: translateX(0);\n        "}),v=function(n){var t=n.children,a=n.activeIndex,i=n.loop,s=n.variant,l=n.fitHeight,f=c(n,["children","activeIndex","loop","variant","fitHeight"]),d=e.useRef(),v=e.useRef(),m=e.useState([]),b=m[0],g=m[1],y=e.Children.count(t),x=v.current>a?"bck":v.current<a?"frd":"bck",E=i?a%y:a<0?0:a>=y?y-1:a%y,C="frd"===x?E:(E+y)%y,w=function(){return d.current&&g(Array.from(d.current.childNodes).map(function(e){return Math.floor(e.getBoundingClientRect().height)}))},N=r.debounce(function(){return w()});return e.useEffect(function(){v.current=C},[C]),e.useEffect(function(){d.current&&t&&l&&w()},[d.current,t]),e.useEffect(function(){window.addEventListener("resize",N)},[]),o.default.createElement(p,u({},f,{variant:s,height:b[C],ref:d}),e.Children.map(t,function(e,n){var t=function(e,n,t){return"frd"===t?e<n?t:e>n?h(t):"":e>n?t:e<n?h(t):""}(n,C,x);return o.default.cloneElement(e,C===n?{className:(e.props.className||"")+" slide active"}:i&&(C===y-1&&0===n||0===C&&n===y-1)?{className:(e.props.className||"")+" slide "+h(t)}:{className:(e.props.className||"")+" slide "+t})}))};function h(e){return"bck"===e?"frd":"bck"}v.displayName="Slider",v.propTypes={loop:s.default.bool,fitHeight:s.default.bool,activeIndex:s.default.number,variant:s.default.oneOf(["vertical","horizontal"])},v.defaultProps={loop:!1,activeIndex:0,fitHeight:!1,variant:"horizontal"};var m=l.default.div(d||(d=f(["\n  overflow: hidden;\n  transition: height .3s ease;\n  ","\n"])),function(e){var n=e.mxh,t=e.mnh;return"\n    height: "+(e.open?e.height:0)+"px;\n    "+(t?"min-height: "+t+"px;":"")+"\n    "+(n?"max-height: "+n+"px; overflow: auto;":"")+"\n  "}),b=function(n){var t,r,a=n.open,i=c(n,["open"]),s=e.useState(0),l=s[0],f=s[1],d=e.useRef(),p=(t=function(){d.current&&f(d.current.scrollHeight)},function(){var e=[].slice.call(arguments),n=function(){r=null,t.apply(void 0,e)};clearTimeout(r),r=setTimeout(n,400)});return e.useEffect(p,[a]),e.useEffect(function(){return window.addEventListener("resize",p),function(){return window.removeEventListener("resize",p)}},[]),o.default.createElement(m,u({},i,{open:a,height:l,ref:d}))};b.displayName="Collapse",b.propTypes={open:s.default.bool,mxh:s.default.number,mnh:s.default.number},b.defaultProps={open:!1};var g=function(n){var t,r,a,i,s,l,u=n.children,c=n.beforeClass,f=n.afterClass,d=(t=n.breakpoint,r=e.useRef(window.matchMedia(t)),i=(a=e.useState(r.current.matches))[0],s=a[1],l=function(){s(r.current.matches)},e.useEffect(function(){return r.current.addEventListener("change",l),function(){r.current.removeEventListener("change",l)}},[t]),i);console.log(f,c);var p=d?f:c;return e.Children.map(u,function(e){return o.default.cloneElement(e,{className:e.props.className+" "+p})})};g.displayName="BreakpointClass",g.propTypes={breakpoint:s.default.string.isRequired,afterClass:s.default.string,beforeClass:s.default.string},g.defaultProps={afterClass:"",beforeClass:""},exports.BreakpointClass=g,exports.Collapse=b,exports.Slider=v;
//# sourceMappingURL=interactive.js.map
