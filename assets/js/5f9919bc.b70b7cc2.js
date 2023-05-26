"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[9670],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return t?n.createElement(f,c(c({ref:r},l),{},{components:t})):n.createElement(f,c({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=m;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},27:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=t(7462),o=(t(7294),t(3905));const a={id:"home",sidebar_label:"Home"},c="Massa RPC API",i={unversionedId:"rpc/home",id:"rpc/home",title:"Massa RPC API",description:"The RPC API allows you to communicate directly with the Massa network. Depanding on your use case we have several tools",source:"@site/docs/rpc/home.mdx",sourceDirName:"rpc",slug:"/rpc/home",permalink:"/docu-dev/docs/rpc/home",draft:!1,editUrl:"https://github.com/massalabs/docu-dev/tree/main/docs/rpc/home.mdx",tags:[],version:"current",lastUpdatedBy:"Ena Redzic",lastUpdatedAt:1685115760,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{id:"home",sidebar_label:"Home"},sidebar:"rpcSidebar",next:{title:"RPC Providers",permalink:"/docu-dev/docs/rpc/providers"}},s={},p=[{value:"RPC Providers",id:"rpc-providers",level:2}],l={toc:p},u="wrapper";function d(e){let{components:r,...t}=e;return(0,o.kt)(u,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"massa-rpc-api"},"Massa RPC API"),(0,o.kt)("p",null,"The RPC API allows you to communicate directly with the Massa network. Depanding on your use case we have several tools\nthat can help you perform RPC calls from your applications."),(0,o.kt)("h2",{id:"rpc-providers"},"RPC Providers"))}d.isMDXComponent=!0}}]);