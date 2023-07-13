"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[8804],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var r=n.createContext({}),u=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(r.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,r=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=u(a),c=l,h=m["".concat(r,".").concat(c)]||m[c]||p[c]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,i=new Array(o);i[0]=c;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s[m]="string"==typeof e?e:l,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3090:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=a(7462),l=(a(7294),a(3905));const o={id:"install",sidebar_label:"Installing a node"},i="Installing a node",s={unversionedId:"node/install",id:"node/install",title:"Installing a node",description:"Right now 4 cores and 8 GB of RAM should be enough to run a node, but it might increase in the future.",source:"@site/docs/node/install.mdx",sourceDirName:"node",slug:"/node/install",permalink:"/docu-dev/docs/node/install",draft:!1,editUrl:"https://github.com/massalabs/docu-dev/tree/main/docs/node/install.mdx",tags:[],version:"current",lastUpdatedBy:"Adrien LF",lastUpdatedAt:1689235989,formattedLastUpdatedAt:"Jul 13, 2023",frontMatter:{id:"install",sidebar_label:"Installing a node"},sidebar:"nodeSidebar",previous:{title:"Home",permalink:"/docu-dev/docs/node/home"},next:{title:"Running a node",permalink:"/docu-dev/docs/node/run"}},r={},u=[{value:"From Massa station (simplest installation)",id:"from-massa-station-simplest-installation",level:2},{value:"From binaries (simple installation)",id:"from-binaries-simple-installation",level:2},{value:"From source code (advanced installation)",id:"from-source-code-advanced-installation",level:2},{value:"On Ubuntu / MacOS",id:"on-ubuntu--macos",level:3},{value:"On Windows",id:"on-windows",level:3}],d={toc:u},m="wrapper";function p(e){let{components:t,...a}=e;return(0,l.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"installing-a-node"},"Installing a node"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Right now 4 cores and 8 GB of RAM should be enough to run a node, but it might increase in the future.\nMore info in the ",(0,l.kt)("a",{parentName:"p",href:"/docu-dev/docs/node/faq"},"FAQ"),".")),(0,l.kt)("h2",{id:"from-massa-station-simplest-installation"},"From Massa station (simplest installation)"),(0,l.kt)("p",null,"If you wish to run a Massa node with a couple of clicks only, you can download Massa station app and activate the node-manager\nplugin. This will enable you to configure, install, start and even update a node using a simple graphical interface.\nFor that, there are 5 steps to follow:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Install Massa station based on your OS:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/massalabs/station/releases/latest/download/massastation_windows_amd64.exe"},"Windows")),(0,l.kt)("li",{parentName:"ul"},"MacOS",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"For Apple Silicon CPUs (M1, M2...), use\n",(0,l.kt)("a",{parentName:"li",href:"https://github.com/massalabs/station/releases/latest/download/massastation_darwin_arm64"},"ARM")),(0,l.kt)("li",{parentName:"ul"},"For Intel CPUs (i5, i7...), use\n",(0,l.kt)("a",{parentName:"li",href:"https://github.com/massalabs/station/releases/latest/download/massastation_darwin_amd64"},"AMD")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/massalabs/station/releases/latest/download/massastation_linux_amd64"},"Linux")))),(0,l.kt)("li",{parentName:"ol"},"Start Massa station using the icon tray. If you need help,\n",(0,l.kt)("a",{parentName:"li",href:"https://github.com/massalabs/station/blob/main/INSTALLATION.md"},"this page")," can help."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/massalabs/station-massa-node-manager/wiki"},"Configure your VPS")," and go to\n",(0,l.kt)("a",{parentName:"li",href:"https://my.massa/station/home/"},"station home page"),"."),(0,l.kt)("li",{parentName:"ol"},"Install the node-manager plugin."),(0,l.kt)("li",{parentName:"ol"},'Add your VPS details and click on "start".'),(0,l.kt)("li",{parentName:"ol"},"You're now a Massa node-runner!")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"If you have trouble following this procedure, feel free to\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/massalabs/station/issues/new"},"open a question")," describing your problem.")),(0,l.kt)("h2",{id:"from-binaries-simple-installation"},"From binaries (simple installation)"),(0,l.kt)("p",null,"If you just wish to run a Massa node without compiling it yourself, you can simply download the latest binary below and\ngo to the next step: ",(0,l.kt)("a",{parentName:"p",href:"/docu-dev/docs/node/run"},"Running a node"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/massalabs/massa/releases/download/TEST.24.1/massa_TEST.24.1_release_windows.zip"},"Windows executable")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/massalabs/massa/releases/download/TEST.24.1/massa_TEST.24.1_release_linux.tar.gz"},"Linux binary")," -\nonly works with libc2.28 and higher (for example Ubuntu 20.04 and higher)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/massalabs/massa/releases/download/TEST.24.1/massa_TEST.24.1_release_macos.tar.gz"},"MacOS binary"))),(0,l.kt)("h2",{id:"from-source-code-advanced-installation"},"From source code (advanced installation)"),(0,l.kt)("p",null,"Otherwise, if you wish to run a Massa node from source code, here are the steps to follow:"),(0,l.kt)("h3",{id:"on-ubuntu--macos"},"On Ubuntu / MacOS"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"on Ubuntu, these libs must be installed: ",(0,l.kt)("inlineCode",{parentName:"li"},"sudo apt install pkg-config curl git build-essential libssl-dev libclang-dev cmake")),(0,l.kt)("li",{parentName:"ul"},"on MacOS: ",(0,l.kt)("inlineCode",{parentName:"li"},"brew install llvm cmake")),(0,l.kt)("li",{parentName:"ul"},"install ",(0,l.kt)("a",{parentName:"li",href:"https://www.rust-lang.org/tools/install"},"rustup"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh")),(0,l.kt)("li",{parentName:"ul"},"configure path: ",(0,l.kt)("inlineCode",{parentName:"li"},"source $HOME/.cargo/env")),(0,l.kt)("li",{parentName:"ul"},"check rust version: ",(0,l.kt)("inlineCode",{parentName:"li"},"rustc --version")),(0,l.kt)("li",{parentName:"ul"},"install nigthly: ",(0,l.kt)("inlineCode",{parentName:"li"},"rustup toolchain install nightly-2023-02-27")),(0,l.kt)("li",{parentName:"ul"},"set it as default: ",(0,l.kt)("inlineCode",{parentName:"li"},"rustup default nightly-2023-02-27")),(0,l.kt)("li",{parentName:"ul"},"check rust version: ",(0,l.kt)("inlineCode",{parentName:"li"},"rustc --version")),(0,l.kt)("li",{parentName:"ul"},"clone this repo: ",(0,l.kt)("inlineCode",{parentName:"li"},"git clone --branch testnet https://github.com/massalabs/massa.git"))),(0,l.kt)("h3",{id:"on-windows"},"On Windows"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Set up your Rust environment"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"On Windows, you should first follow the indications from Microsoft to be able to run on a Rust environment ",(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-gb/windows/dev-environment/rust/setup"},"here"),".",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Install Visual Studio (recommended) or the Microsoft C++ Build Tools."),(0,l.kt)("li",{parentName:"ul"},'Once Visual Studio is installed, click on C++ Build Tool. Select on the right column called "installation details" the following packages:',(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"MSCV v142 -- VS 2019"),(0,l.kt)("li",{parentName:"ul"},"Windows 10 SDK"),(0,l.kt)("li",{parentName:"ul"},"C++ CMake tools for Windows"),(0,l.kt)("li",{parentName:"ul"},"Testing Tools Core Feature"))),(0,l.kt)("li",{parentName:"ul"},"Click install on the bottom right to download and install those packages"))),(0,l.kt)("li",{parentName:"ul"},"Install NASM: ",(0,l.kt)("a",{parentName:"li",href:"https://www.nasm.us/pub/nasm/releasebuilds/2.16.01/"},"https://www.nasm.us/pub/nasm/releasebuilds/2.16.01/")," choose win32 or win64 folder depending on your architecture and download then launch the installer."),(0,l.kt)("li",{parentName:"ul"},"Install Chocolatey and run: ",(0,l.kt)("inlineCode",{parentName:"li"},"choco install llvm cmake")),(0,l.kt)("li",{parentName:"ul"},"Install Rust, to be downloaded ",(0,l.kt)("a",{parentName:"li",href:"https://www.rust-lang.org/tools/install"},"here")),(0,l.kt)("li",{parentName:"ul"},"Install Git for windows, to be downloaded ",(0,l.kt)("a",{parentName:"li",href:"https://git-scm.com/download/win"},"here"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Clone the Massa Git Repository"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Open Windows Power Shell",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Clone the latest distributed version: ",(0,l.kt)("inlineCode",{parentName:"li"},"git clone --branch testnet https://github.com/massalabs/massa.git")),(0,l.kt)("li",{parentName:"ul"},"Change default Rust to nightly: ",(0,l.kt)("inlineCode",{parentName:"li"},"rustup default nightly-2023-02-27"))))))}p.isMDXComponent=!0}}]);