var n=require("styled-components"),e=require("prop-types"),t=require("react");function r(n){return n&&"object"==typeof n&&"default"in n?n:{default:n}}var a,i=r(n),l=r(e),o=r(t);function s(){return(s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function c(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)e.indexOf(t=i[r])>=0||(a[t]=n[t]);return a}function u(n,e){return e||(e=n.slice(0)),n.raw=e,n}var d=i.default.span(a||(a=u(["\n  ","\n"])),function(n){var e=n.color,t=n.size,r=n.spacing,a=n.weight,i=n.padding,l=n.transform,o=n.lh,s=n.font;return"\n    "+(n.block?"display: block; width: 100%;":"display: inline-block;")+"\n    "+(e?"color:"+e+";":"")+"\n    "+(t?"font-size:"+t+";":"")+"\n    "+(o?"line-height:"+o+";":"")+"\n    "+(r?"margin: "+r+";":"")+"\n    "+(i?"padding:"+i+";":"")+"\n    "+(a?"font-weight:"+a+";":"")+"\n    "+(l?"text-transform:"+l+";":"")+"\n    "+(n.ellypsis?"\n      width:100%;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n    ":"")+"\n    "+(s?"font-family: "+s+";":"")+"\n  "});d.propTypes={lh:l.default.string,font:l.default.string,size:l.default.string,color:l.default.string,weight:l.default.string,spacing:l.default.string,padding:l.default.string,transform:l.default.string,ellypsis:l.default.bool,block:l.default.bool},d.defaultProps={padding:"0",block:!1,ellypsis:!1};var f,p=t.forwardRef(function(n,e){var r=n.children,a=n.onSubmit,i=n.includeCheckStatus,l=c(n,["children","onSubmit","includeCheckStatus"]),u=t.useCallback(function(n){n.preventDefault(),a&&a(h(n.target,{includeCheckStatus:i}),n.target)},[a]);return o.default.createElement("form",s({},l,{ref:e,onSubmit:u}),r)});function h(n,e){return void 0===e&&(e={includeCheckStatus:!1}),Array.from(n.elements).reduce(function(n,t){return t.name&&("radio"===t.type?t.checked&&(n[t.name]=t.value):"checkbox"===t.type?e.includeCheckStatus?n[t.name]={value:t.value,checked:t.checked}:t.checked&&(n[t.name]=t.value):n[t.name]=t.value),n},{})}p.displayName="Form",p.propTypes={children:l.default.node,onSubmit:l.default.func,includeCheckStatus:l.default.bool},p.defaultProps={includeCheckStatus:!1},p.formInputsToObject=h,p.hardFormReset=function(n,e){void 0===e&&(e={resetValue:!1}),Object.values(n.elements).forEach(function(n){return"checkbox"===n.type&&(n.checked=e.resetValue)})};var g,x=i.default.div(f||(f=u(["\n  display: inline-flex;\n  align-items: center;\n  font-size: 0.9em;\n  padding: 0.3em;\n  border-radius: 2em;\n\n  ","  \n"])),function(n){return"\n    min-width: "+n.mnw+";\n    background-color: "+n.color+";\n    justify-content: "+n.justify+";\n  "});x.displayName="Badge",x.propTypes={justify:l.default.string,color:l.default.string,mnw:l.default.string},x.defaultProps={justify:"center",color:"#CCCCCC",mnw:"3rem"};var m,b=i.default.div(g||(g=u(["\n  overflow: hidden;\n  transition: height .3s ease;\n  ","\n"])),function(n){var e=n.maxHeight,t=n.minHeight;return"\n    height: "+(n.open?n.height:0)+"px;\n    "+(t?"min-height: "+t+"px;":"")+"\n    "+(e?"max-height: "+e+"px; overflow: auto;":"")+"\n  "}),v=function(n){var e=n.open,r=c(n,["open"]),a=t.useState(0),i=a[0],l=a[1],u=t.useRef();return t.useEffect(function(){u.current&&l(u.current.scrollHeight)},[e]),o.default.createElement(b,s({},r,{open:e,height:i,ref:u}))};v.displayName="Collapse",v.propTypes={open:l.default.bool,maxHeight:l.default.number,minHeight:l.default.number},v.defaultProps={open:!1};var y=n.createGlobalStyle(m||(m=u(["\n    \n  :root {\n\n    --bui-box-shadow: 0px 9px 9px -11px rgba(0, 0, 0, 0.5);\n    --bui-lift-shadow: 0px 23px 18px -21px rgba(0, 0, 0, 0.7);\n\n    --bui-space: 0.5rem;\n    --bui-space-2x: 1rem;\n    --bui-space-3x: 1.5rem;\n    --bui-space-4x: 2rem;\n\n    & *,\n    & *::before,\n    & *::after {\n      box-sizing: border-box;\n    }\n\n    /* Enable children to expand vertically by using flex-grow property */\n    \n    ",'\n\n    /* Full cover */\n\n    & .full-cover {\n      margin: 0;\n      width: 100%;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n    }    \n\n    /* FLex modifiers */\n\n    & .--flex-column {\n      display: flex;\n      flex-direction: column;\n    }\n\n    & .--flex-row-reverse {\n      display: flex;\n      flex-direction: row-reverse;\n    }\n\n    /* Spacing */\n\n    & .--space {\n      margin: var(--bui-space);\n    }\n\n    & .--space-2x {\n      margin: var(--bui-space-2x);\n    }\n\n    & .--space-3x {\n      margin: var(--bui-space-3x);\n    }\n\n    & .--space-4x {\n      margin: var(--bui-space-4x);\n    }\n\n  /* Spacing Inset */\n\n    & .--space-i {\n      padding: var(--bui-space);\n    }\n\n    & .--space-2x-i {\n      padding: var(--bui-space-2x);\n    }\n\n    & .--space-3x-i {\n      padding: var(--bui-space-3x);\n    }\n\n    & .--space-4x-i {\n      padding: var(--bui-space-4x);\n    }\n\n    /* Vertical & Horizontal Alignment */\n\n    & .--stack-start, .--v-start {\n      align-items: flex-start;\n    }\n\n    & .--stack-end, .--v-end {\n      align-items: flex-end;\n    }\n\n    & .--stack-stretch, .--v-stretch {\n      align-items: stretch;\n    }\n\n    & .--stack-center, .--v-center {      \n      align-items: center;\n    }\n\n    & .--rail-end, .--h-end {\n      justify-content: flex-end;\n    }\n   \n    & .--rail-start, .--h-start  {\n      justify-content: flex-start;\n    }\n\n    & .--rail-center, .--h-center  {\n      justify-content: center;\n    }\n\n    & .--rail-spread, .--h-spread {\n      justify-content: space-between;\n    }\n\n    & .--rail-evenly, .--h-evenly {\n      justify-content: space-evenly;\n    } \n\n    & .--rail-around, .--h-around {\n      justify-content: space-around;\n    } \n\n    /* Default focus */\n\n    & .--focusable {      \n        transition: box-shadow .3s ease;\n      &:focus {\n        outline: none;\n        box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.6);\n      }\n    }\n\n    /* Cover Link */\n\n    & a.--cover-link {\n      position: initial;\n      &::after {\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        z-index: 0;\n        content: "";\n        position: absolute;\n      }\n    }\n\n    /* Capitalize first letter */\n    \n    & .caps-first-letter {\n      &::first-letter {\n        text-transform: uppercase;\n      }\n    }\n\n    /* Common */\n\n    & .--stretch {\n      width: 100%;\n    }\n\n    & .--expand-content {\n      & > * { \n        width: 100%; \n      }\n    }\n\n    & .--stretch-block {\n      display: block;\n      width: 100%;\n    }\n\n    & .--text-center {\n      text-align: center;\n    }\n   \n    & .--text-right {\n      text-align: right;\n    }\n   \n    & .--text-left {\n      text-align: left;\n    }\n  }\n'])),function(n){return n.fullCover?"     \n      width: 100%;\n      height: 100%;\n      display: flex;\n      flex-direction: column;      \n     \n      & body {\n        margin: 0;\n        width: 100%;\n        height: 100%;\n        display: flex;\n      }\n    ":""});exports.Badge=x,exports.Collapse=v,exports.Form=p,exports.GlobalStyles=function(n){return o.default.createElement(t.Fragment,null,n.children,o.default.createElement(y,{fullCover:n.fullCover}))},exports.Text=d;
//# sourceMappingURL=base-ui.js.map
