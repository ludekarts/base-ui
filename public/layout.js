var n=require("prop-types"),e=require("styled-components");function a(n){return n&&"object"==typeof n&&"default"in n?n:{default:n}}var t,i=a(n),r=a(e);function p(n,e){return e||(e=n.slice(0)),n.raw=e,n}var l,d=r.default.div(t||(t=p(["\n  width: 100%;\n  display: flex;    \n  flex-direction: column;\n  ",";\n"])),function(n){return"\n    max-width: "+n.mxw+";\n    padding: "+n.spacing+";\n    margin: "+n.offsetTop+" auto 1em;\n  "});d.displayName="Containter",d.propTypes={mxw:i.default.string,spacing:i.default.string,offsetTop:i.default.string},d.defaultProps={mxw:"78rem",offsetTop:"2rem",spacing:"0 1.5em"};var s,f=r.default.div(l||(l=p(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n\n  ","  \n"])),function(n){var e=n.gap;return"\n    margin: 0 calc("+e+" / 2 * -1) calc("+e+" * -1);\n\n    & > * {\n      flex: 1 1 "+n.minSize+";\n      margin: 0 calc("+e+" / 2) "+e+";    \n    }\n\n  "});f.displayName="Columns",f.propTypes={gap:i.default.string,minSize:i.default.string},f.defaultProps={gap:"1em",minSize:"14rem"};var o,u=r.default.div(s||(s=p(["\n  display: flex;\n  flex-wrap: wrap;\n  ","\n"])),function(n){var e=n.gap,a=n.right;return"\n    \n    margin: calc("+e+" / 2 * -1);\n    \n    & > * {\n      margin: calc("+e+" / 2);\n    }\n\n    & > *:"+(a?"last-child":"first-child")+" {      \n      flex-basis: "+n.sideWidth+";\n      flex-grow: 1;\n    }\n\n    & > *:"+(a?"first-child":"last-child")+" {  \n      flex-basis: 0;\n      flex-grow: 999;\n      min-width: calc("+n.breakAt+" - "+e+");\n    }\n  \n  "});u.displayName="Sidebar",u.propTypes={right:i.default.bool,gap:i.default.string,breakAt:i.default.string,sideWidth:i.default.string},u.defaultProps={gap:"1em",right:!1,breakAt:"50%",sideWidth:"15em"};var g,m=r.default.div(o||(o=p(["\n  display: flex;  \n  ","  \n"])),function(n){var e=n.breakpoint,a=n.space,t=n.inset,i=n.spaceBefore,r=n.spaceAfter;return e?"\n      "+(t?"padding: "+(i||a):"margin: "+(i||a))+";\n      @media ("+("min"===n.minmax?"min-width":"max-width")+": "+e+") {\n        "+(t?"padding: "+(r||a):"margin: "+(r||a))+";\n      }\n    ":t?"padding: "+a+";":"margin: "+a+";"});m.displayName="Space",m.propTypes={space:i.default.string,inset:i.default.bool,minmax:i.default.string,breakpoint:i.default.string,spaceBefore:i.default.string,spaceAfter:i.default.string},m.defaultProps={space:"1em 0 0",minmax:"min",inset:!1};var c,x=r.default.div(g||(g=p(["\n  display: flex;\n  flex-direction: column;\n  \n  & > * + * {\n    margin-top: ",";\n  }  \n    \n  ","\n"])),function(n){return n.gap},function(n){var e=n.breakpoint;return e?"\n    @media (min-width: "+e+") {\n      flex-direction: row;            \n      & > * + * {\n        margin-top: unset;\n        margin-left: "+n.gap+";\n      }\n    }  \n  ":""});x.displayName="Stack",x.propTypes={gap:i.default.string,breakpoint:i.default.string},x.defaultProps={gap:"1em"};var y,w=r.default.div(c||(c=p(["\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n"])));w.displayName="Cover",w.propTypes={},w.defaultProps={};var v,h=r.default.div(y||(y=p(["  \n  display: flex;\n  flex-direction: row;\n  \n  "," \n\n  ","; \n  \n"])),function(n){var e=n.gap;return"\n    & > * + * {\n      margin-left: "+e+";\n    }  \n    \n    "+(n.wrapContent?"\n      flex-wrap: wrap;      \n      margin-bottom: calc("+e+" * 0.5 * -1);\n      margin-right: -"+e+";\n      & > * {\n        margin: 0 "+e+" "+e+" 0;      \n        &:last-child {\n          margin-right: 0;\n        }\n      }\n    ":"\n      & > * + * {\n        margin-top: 0;\n        margin-left: "+e+";\n      }\n    ")+"\n  "},function(n){var e=n.breakpoint;return!e||n.wrapContent?"":"  \n    @media (max-width: "+e+") {\n      flex-direction: column;\n      & > * + * {\n        margin-top: "+n.gap+";\n        margin-left: unset;\n      }\n    }\n  "});h.displayName="Rail",h.propTypes={gap:i.default.string,breakpoint:i.default.string,wrapContent:i.default.bool},h.defaultProps={gap:"1em",wrapContent:!1};var b=r.default.div(v||(v=p(["\n  width: 100%;\n  display: grid;\n  grid-gap: ",";\n  grid-template-columns: repeat(auto-fill, minmax(",", 1fr));\n\n  & > * {\n    ","\n  }\n"])),function(n){return n.gap},function(n){return n.size},function(n){return"      \n      justify-self: "+n.align+";\n    "});b.displayName="Grid",b.propTypes={gap:i.default.string,size:i.default.string,align:i.default.string},b.defaultProps={gap:"1em",size:"16rem",align:"center"},exports.Columns=f,exports.Container=d,exports.Cover=w,exports.Grid=b,exports.Rail=h,exports.Sidebar=u,exports.Space=m,exports.Stack=x;
//# sourceMappingURL=layout.js.map
