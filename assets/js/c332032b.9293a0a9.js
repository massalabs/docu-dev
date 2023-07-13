"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[3747],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1411:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={id:"run",sidebar_label:"Running a node"},o="Running a node",i={unversionedId:"node/run",id:"node/run",title:"Running a node",description:"From binaries (simple installation)",source:"@site/docs/node/run.mdx",sourceDirName:"node",slug:"/node/run",permalink:"/docu-dev/docs/node/run",draft:!1,editUrl:"https://github.com/massalabs/docu-dev/tree/main/docs/node/run.mdx",tags:[],version:"current",lastUpdatedBy:"Adrien LF",lastUpdatedAt:1689235989,formattedLastUpdatedAt:"Jul 13, 2023",frontMatter:{id:"run",sidebar_label:"Running a node"},sidebar:"nodeSidebar",previous:{title:"Installing a node",permalink:"/docu-dev/docs/node/install"},next:{title:"Updating a node",permalink:"/docu-dev/docs/node/update"}},s={},p=[{value:"From binaries (simple installation)",id:"from-binaries-simple-installation",level:2},{value:"On Ubuntu / MacOS",id:"on-ubuntu--macos",level:3},{value:"From source code (advanced installation)",id:"from-source-code-advanced-installation",level:2},{value:"On Ubuntu / MacOS",id:"on-ubuntu--macos-1",level:3},{value:"On Windows",id:"on-windows",level:3}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"running-a-node"},"Running a node"),(0,r.kt)("h2",{id:"from-binaries-simple-installation"},"From binaries (simple installation)"),(0,r.kt)("p",null,"Simply run the binaries you downloaded in the previous step:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the massa-node folder and run the massa-node executable"),(0,r.kt)("li",{parentName:"ul"},"Open the massa-client folder and run the massa-client executable")),(0,r.kt)("h3",{id:"on-ubuntu--macos"},"On Ubuntu / MacOS"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Configure the node")),(0,r.kt)("p",null,"Default configuration is available ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/massalabs/massa/blob/main/massa-node/base_config/config.toml"},"here"),"."),(0,r.kt)("p",null,"You can override the default configuration via massa-node/config/config.toml file."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Start the node")),(0,r.kt)("p",null,"On a first window:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd massa/massa-node/\n")),(0,r.kt)("p",null,"Launch the node, on Ubuntu:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./massa-node -p <PASSWORD> |& tee logs.txt\n")),(0,r.kt)("p",null,"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<PASSWORD>")," with a password that you will need to keep to restart your node You should leave the window opened."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Start the client")),(0,r.kt)("p",null,"On a second window:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd massa/massa-client/\n")),(0,r.kt)("p",null,"Then:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./massa-client -p <PASSWORD>\n")),(0,r.kt)("p",null,"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<PASSWORD>")," with a password that you will need to keep to restart your client"),(0,r.kt)("h2",{id:"from-source-code-advanced-installation"},"From source code (advanced installation)"),(0,r.kt)("h3",{id:"on-ubuntu--macos-1"},"On Ubuntu / MacOS"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Start the node")),(0,r.kt)("p",null,"On a first window:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd massa/massa-node/\n")),(0,r.kt)("p",null,"Launch the node, on Ubuntu:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"RUST_BACKTRACE=full cargo run --release -- -p <PASSWORD> |& tee logs.txt\n")),(0,r.kt)("p",null,"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<PASSWORD>")," with a password that you will need to keep to restart your node"),(0,r.kt)("p",null,"Or, on MacOS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"RUST_BACKTRACE=full cargo run --release -- -p <PASSWORD> > logs.txt 2>&1\n")),(0,r.kt)("p",null,"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<PASSWORD>")," with a password that you will need to keep to restart your node You should leave the window opened."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Start the client")),(0,r.kt)("p",null,"On a second window:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd massa/massa-client/\n")),(0,r.kt)("p",null,"Then:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cargo run --release -- -p <PASSWORD>\n")),(0,r.kt)("p",null,"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<PASSWORD>")," with a password. You will need this password to restart your client. Please wait until the\ndirectories are built before moving to the next step."),(0,r.kt)("h3",{id:"on-windows"},"On Windows"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Start the Node")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open Windows Power Shell or Command Prompt on a first window",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"cd massa")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"cd massa-node")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"cargo run --release -- -p <PASSWORD>"))))),(0,r.kt)("p",null,"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<PASSWORD>")," with a password. You will need this password to restart your node. You should leave the window\nopened."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Start the Client")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open Windows Power Shell or Command Prompt on a second window",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: cd massa"),(0,r.kt)("li",{parentName:"ul"},"Type: cd massa-client"),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"cargo run --release -- -p <PASSWORD>"))))),(0,r.kt)("p",null,"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<PASSWORD>")," with a password. You will need this password to restart your client. Please wait until the\ndirectories are built before moving to the next step."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"In case of crash of the Rust compiler or at runtime, please do not report bugs to the rustlang/rust repository, but\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/massalabs/massa/issues/new/choose"},"open an issue")," on the Massa repository instead. We will triage\nthe issues and open them on the Rust side if they are valid. This avoids polluting the main Rust repository with many\nreports of the same error.")))}c.isMDXComponent=!0}}]);