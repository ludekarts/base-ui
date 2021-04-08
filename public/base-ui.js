var n=require("styled-components"),e=require("prop-types"),t=require("react");function r(n){return n&&"object"==typeof n&&"default"in n?n:{default:n}}var i,a=r(n),o=r(e),s=r(t);function l(){return(l=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function c(n,e){return(c=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function u(n,e){if(null==n)return{};var t,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)e.indexOf(t=a[r])>=0||(i[t]=n[t]);return i}function d(n,e){return e||(e=n.slice(0)),n.raw=e,n}var p=a.default.span(i||(i=d(["\n  ","\n"])),function(n){var e=n.color,t=n.size,r=n.spacing,i=n.weight,a=n.padding,o=n.transform,s=n.lh,l=n.font;return"\n    "+(n.block?"display: block; width: 100%;":"display: inline-block;")+"\n    "+(e?"color:"+e+";":"")+"\n    "+(t?"font-size:"+t+";":"")+"\n    "+(s?"line-height:"+s+";":"")+"\n    "+(r?"margin: "+r+";":"")+"\n    "+(a?"padding:"+a+";":"")+"\n    "+(i?"font-weight:"+i+";":"")+"\n    "+(o?"text-transform:"+o+";":"")+"\n    "+(n.ellypsis?"\n      width:100%;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n    ":"")+"\n    "+(l?"font-family: "+l+";":"")+"\n  "});p.propTypes={lh:o.default.string,font:o.default.string,size:o.default.string,color:o.default.string,weight:o.default.string,spacing:o.default.string,padding:o.default.string,transform:o.default.string,ellypsis:o.default.bool,block:o.default.bool},p.defaultProps={padding:"0",block:!1,ellypsis:!1};var f,h=t.forwardRef(function(n,e){var r=n.children,i=n.onSubmit,a=n.includeCheckStatus,o=u(n,["children","onSubmit","includeCheckStatus"]),c=t.useCallback(function(n){var e;n.preventDefault(),i&&i((void 0===(e={includeCheckStatus:a})&&(e={includeCheckStatus:!1}),Array.from(n.target.elements).reduce(function(n,t){return t.name&&("radio"===t.type?t.checked&&(n[t.name]=t.value):"checkbox"===t.type?e.includeCheckStatus?n[t.name]={value:t.value,checked:t.checked}:t.checked&&(n[t.name]=t.value):n[t.name]=t.value),n},{})),n.target)},[i]);return s.default.createElement("form",l({},o,{ref:e,onSubmit:c}),r)});h.displayName="Form",h.propTypes={children:o.default.node,onSubmit:o.default.func,includeCheckStatus:o.default.bool},h.defaultProps={includeCheckStatus:!1};var g,m=a.default.div(f||(f=d(["\n  display: inline-flex;\n  align-items: center;\n  font-size: 0.9em;\n  padding: 0.3em;\n  border-radius: 2em;\n\n  ","  \n"])),function(n){return"\n    min-width: "+n.mnw+";\n    background-color: "+n.color+";\n    justify-content: "+n.justify+";\n  "});m.displayName="Badge",m.propTypes={justify:o.default.string,children:o.default.node,onClose:o.default.func,color:o.default.string,mnw:o.default.string},m.defaultProps={justify:"center",color:"#CCCCCC",mnw:"3rem"};var x,b=a.default.div(g||(g=d(["\n  opacity: 0;\n  overflow: hidden;\n  visibility: hidden;\n  box-sizing: border-box;\n  transform: scale(0.95) translateZ(0);\n  transition: visibility 0s linear 0.5s, opacity .3s ease, transform .3s ease;\n\n  ","\n"])),function(n){return n.show&&"\n    opacity: 1;\n    visibility: visible;\n    transform: scale(1) translateZ(0);\n    transition: opacity .3s ease, transform .3s ease, visibility 0s;\n    "}),v=function(n){var e,t;function r(){for(var e,t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))||this).state={show:!1},e.container=void 0,e.handleClickOutside=function(n){return n.target.dataset&&n.target.dataset.buiDropdownTarget===e.props.name?e.setState({show:!e.state.show}):e.props.autoHide||e.container&&!e.container.contains(n.target)?e.container!==n.target&&e.setState({show:!1}):void 0},e}t=n,(e=r).prototype=Object.create(t.prototype),e.prototype.constructor=e,c(e,t);var i=r.prototype;return i.componentDidMount=function(){document.addEventListener("mousedown",this.handleClickOutside)},i.componentDidUpdate=function(n,e){n.toggle!==this.props.toggle&&"boolean"==typeof this.props.toggle&&this.setState({show:!this.state.show}),this.props.onToggle&&e.show!==this.state.show&&this.props.onToggle(this.state.show)},i.componentWillUnmount=function(){document.removeEventListener("mousedown",this.handleClickOutside)},i.render=function(){var n=this,e=this.props,t=e.children,r=u(e,["children"]);return s.default.createElement(b,l({},r,{show:this.state.show,ref:function(e){return n.container=e}}),t)},r}(s.default.PureComponent);v.propTypes={onToggle:o.default.func,autoHide:o.default.bool,name:o.default.string.isRequired},v.defaultProps={autoHide:!1};var y,w=a.default.div(x||(x=d(["\n  overflow: hidden;\n  transition: height .3s ease;\n  ","\n"])),function(n){var e=n.maxHeight,t=n.minHeight;return"\n    height: "+(n.open?n.height:0)+"px;\n    "+(t?"min-height: "+t+"px;":"")+"\n    "+(e?"max-height: "+e+"px; overflow: auto;":"")+"\n  "}),k=function(n){var e=n.open,r=u(n,["open"]),i=t.useState(0),a=i[0],o=i[1],c=t.useRef();return t.useEffect(function(){c.current&&o(c.current.scrollHeight)},[e]),s.default.createElement(w,l({},r,{open:e,height:a,ref:c}))};k.displayName="Collapse",k.propTypes={open:o.default.bool,height:o.default.number,maxHeight:o.default.number,minHeight:o.default.number},k.defaultProps={open:!1};var C=n.createGlobalStyle(y||(y=d(["\n    \n  :root {\n\n    --bui-box-shadow: 0px 9px 9px -11px rgba(0, 0, 0, 0.5);\n    --bui-lift-shadow: 0px 23px 18px -21px rgba(0, 0, 0, 0.7);\n\n    --bui-space: 0.5rem;\n    --bui-space-2x: 1rem;\n    --bui-space-3x: 1.5rem;\n    --bui-space-4x: 2rem;\n\n    & *,\n    & *::before,\n    & *::after {\n      box-sizing: border-box;\n    }\n\n    /* Enable children to expand vertically by using flex-grow property */\n    \n    ",'\n\n    /* Full cover */\n\n    & .full-cover {\n      margin: 0;\n      width: 100%;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n    }    \n\n    /* FLex modifiers */\n\n    & .--flex-column {\n      display: flex;\n      flex-direction: column;\n    }\n\n    & .--flex-row-reverse {\n      display: flex;\n      flex-direction: row-reverse;\n    }\n\n    /* Spacing */\n\n    & .--space {\n      margin: var(--bui-space);\n    }\n\n    & .--space-2x {\n      margin: var(--bui-space-2x);\n    }\n\n    & .--space-3x {\n      margin: var(--bui-space-3x);\n    }\n\n    & .--space-4x {\n      margin: var(--bui-space-4x);\n    }\n\n  /* Spacing Inset */\n\n    & .--space-i {\n      padding: var(--bui-space);\n    }\n\n    & .--space-2x-i {\n      padding: var(--bui-space-2x);\n    }\n\n    & .--space-3x-i {\n      padding: var(--bui-space-3x);\n    }\n\n    & .--space-4x-i {\n      padding: var(--bui-space-4x);\n    }\n\n    /* Verical & Horizontal Alignment */\n\n    & .--stack-start, .--v-start {\n      align-items: flex-start;\n    }\n\n    & .--stack-end, .--v-end {\n      align-items: flex-end;\n    }\n\n    & .--stack-stretch, .--v-stretch {\n      align-items: stretch;\n    }\n\n    & .--stack-center, .--v-center {      \n      align-items: center;\n    }\n\n    & .--rail-end, .--h-end {\n      justify-content: flex-end;\n    }\n   \n    & .--rail-start, .--h-start  {\n      justify-content: flex-start;\n    }\n\n    & .--rail-center, .--h-center  {\n      justify-content: center;\n    }\n\n    & .--rail-spread, .--h-spread {\n      justify-content: space-between;\n    }\n\n    & .--rail-evenly, .--h-evenly {\n      justify-content: space-evenly;\n    } \n\n    & .--rail-around, .--h-around {\n      justify-content: space-around;\n    } \n\n    /* Default focus */\n\n    & .--focusable {      \n        transition: box-shadow .3s ease;\n      &:focus {\n        outline: none;\n        box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.6);\n      }\n    }\n\n    /* Cover Link */\n\n    & a.--cover-link {\n      position: initial;\n      &::after {\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        z-index: 0;\n        content: "";\n        position: absolute;\n      }\n    }\n\n    /* Capitalize first letter */\n    \n    & .caps-first-letter {\n      &::first-letter {\n        text-transform: uppercase;\n      }\n    }\n\n    /* Common */\n\n    & .--stretch {\n      width: 100%;\n    }\n\n    & .--expand-content {\n      & > * { \n        width: 100%; \n      }\n    }\n\n    & .--stretch-block {\n      display: block;\n      width: 100%;\n    }\n\n    & .--text-center {\n      text-align: center;\n    }\n   \n    & .--text-right {\n      text-align: right;\n    }\n   \n    & .--text-left {\n      text-align: left;\n    }\n  }\n'])),function(n){return n.fullCover?"     \n      width: 100%;\n      height: 100%;\n      display: flex;\n      flex-direction: column;      \n     \n      & body {\n        margin: 0;\n        width: 100%;\n        height: 100%;\n        display: flex;\n      }\n    ":""});exports.Badge=m,exports.Collapse=k,exports.Dropdown=v,exports.Form=h,exports.GlobalStyles=function(n){return s.default.createElement(Fragment,null,n.children,s.default.createElement(C,{fullCover:n.fullCover}))},exports.Text=p;
//# sourceMappingURL=base-ui.js.map
