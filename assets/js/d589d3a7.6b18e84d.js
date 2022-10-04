"use strict";(self.webpackChunkoxidizer_website=self.webpackChunkoxidizer_website||[]).push([[162],{4137:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=i,g=d["".concat(c,".").concat(m)]||d[m]||l[m]||a;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8094:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l}});var n=r(7462),i=r(3366),a=(r(7294),r(4137)),o=["components"],s={id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started",slug:"/"},c=void 0,p={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"Actions Status",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/oxidizer-rs/website/edit/main/docs/getting-started.md",tags:[],version:"current",frontMatter:{id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started",slug:"/"},sidebar:"docs",next:{title:"Entity (Basic)",permalink:"/docs/examples/entity-basic"}},u={},l=[],d={toc:l};function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/oxidizer-rs/oxidizer/actions"},(0,a.kt)("img",{parentName:"a",src:"https://github.com/oxidizer-rs/oxidizer/workflows/test/badge.svg",alt:"Actions Status"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://crates.io/crates/oxidizer"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/crates/v/oxidizer.svg",alt:"Crates.io"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/oxidizer"},(0,a.kt)("img",{parentName:"a",src:"https://docs.rs/oxidizer/badge.svg",alt:"API Docs"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/oxidizer-rs/oxidizer/blob/main/LICENSE"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/license-MIT-blue.svg",alt:"MIT licensed"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://gitter.im/oxidizer-rs/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge"},(0,a.kt)("img",{parentName:"a",src:"https://badges.gitter.im/oxidizer-rs/community.svg",alt:"Gitter"}))),(0,a.kt)("p",null,"A Rust ORM based on ",(0,a.kt)("a",{parentName:"p",href:"https://crates.io/crates/tokio-postgres"},"tokio-postgres")," and ",(0,a.kt)("a",{parentName:"p",href:"https://crates.io/crates/refinery"},"refinery")," that helps you reduce the boilerplate of writing entities, tables & migrations when using tokio-postgres and refinery."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Asynchronous from the ground up. All the database operations are\nefficiently handled by tokio at runtime."),(0,a.kt)("li",{parentName:"ul"},"Oxidizer macros generate code to access relations between entities with ease. Forward and reverse relations are supported.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Note that, while functional and working, this is in early stages. Use with caution.")))}m.isMDXComponent=!0}}]);