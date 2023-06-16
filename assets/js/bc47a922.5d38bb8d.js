"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[5077],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>k});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=n.createContext({}),o=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},p=function(e){var a=o(e.components);return n.createElement(l.Provider,{value:a},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=o(t),d=s,k=c["".concat(l,".").concat(d)]||c[d]||h[d]||r;return t?n.createElement(k,m(m({ref:a},p),{},{components:t})):n.createElement(k,m({ref:a},p))}));function k(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,m=new Array(r);m[0]=d;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[c]="string"==typeof e?e:s,m[1]=i;for(var o=2;o<r;o++)m[o]=t[o];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9268:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>m,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var n=t(7462),s=(t(7294),t(3905));const r={id:"consensus-quality",sidebar_label:"Consensus quality initiatives"},m="Consensus quality initiatives",i={unversionedId:"learn/architecture/consensus-quality",id:"learn/architecture/consensus-quality",title:"Consensus quality initiatives",description:"This section describes the mechanisms we use to maximize the consensus quality on Massa blockchain.",source:"@site/docs/learn/architecture/consensus-quality.mdx",sourceDirName:"learn/architecture",slug:"/learn/architecture/consensus-quality",permalink:"/docu-dev/docs/learn/architecture/consensus-quality",draft:!1,editUrl:"https://github.com/massalabs/docu-dev/tree/main/docs/learn/architecture/consensus-quality.mdx",tags:[],version:"current",lastUpdatedBy:"Adrien LF",lastUpdatedAt:1686896566,formattedLastUpdatedAt:"Jun 16, 2023",frontMatter:{id:"consensus-quality",sidebar_label:"Consensus quality initiatives"},sidebar:"learnSidebar",previous:{title:"Operation lifecycle",permalink:"/docu-dev/docs/learn/architecture/operation-lifecycle"}},l={},o=[{value:"Endorsement",id:"endorsement",level:2},{value:"Endorsement structure",id:"endorsement-structure",level:3},{value:"Endorsement lifecycle",id:"endorsement-lifecycle",level:3},{value:"Incentives and penalties",id:"incentives-and-penalties",level:3},{value:"Technical decisions",id:"technical-decisions",level:3},{value:"Slashing",id:"slashing",level:2},{value:"Node banning",id:"node-banning",level:2}],p={toc:o},c="wrapper";function h(e){let{components:a,...t}=e;return(0,s.kt)(c,(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"consensus-quality-initiatives"},"Consensus quality initiatives"),(0,s.kt)("p",null,"This section describes the mechanisms we use to maximize the consensus quality on Massa blockchain. "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"to do")),(0,s.kt)("h2",{id:"endorsement"},"Endorsement"),(0,s.kt)("p",null,"Massa uses the Proof-of-Stake selection mechanism with Nakamoto consensus. In that context, when there are multiple cliques\nin close competition, we want all nodes to converge towards a single clique as fast as possible to minimize finality time\nand maximize the quality of the consensus. To achieve this, we draw inspiration from Tezos and introduce the concept of Endorsement."),(0,s.kt)("p",null,"Each block header in Massa contains ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"E")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"E")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"E")))))," ordered endorsement slots. An endorsement includes the slot it belongs to, the hash\nof the endorsed block, the endorsement slot index, the creator's public key, and a signature. At each slot, a Proof-of-Stake\nselection mechanism chooses the block creator and E other stakers who can create endorsements for that slot. Endorsements can\nbe seen as votes endorsing the parent block in the corresponding thread. "),(0,s.kt)("p",null,"The attacker's likelihood of consecutive PoS draws decreases exponentially. With endorsements, ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"E"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mn",{parentName:"mrow"},"1")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"E+1")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7667em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"E"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"))))),' draws occur at each slot,\nincreasing safety and convergence speed. The consensus algorithm selects the clique with the highest fitness as the blockclique, where\nthe fitness is determined by the number of PoS draws involved in creating the block. This mechanism enhances safety and convergence\nspeed by allowing block producers to select the best clique based on the endorsements\' "votes." '),(0,s.kt)("h3",{id:"endorsement-structure"},"Endorsement structure"),(0,s.kt)("p",null,"Note that the ",(0,s.kt)("em",{parentName:"p"},"WrappedEndorsement")," structure includes the underlying ",(0,s.kt)("em",{parentName:"p"},"Endorsement")," as well as the signature,\nand the public key of the endorsement producer."),(0,s.kt)("p",null,"Within a block, endorsements are fully included inside the header."),(0,s.kt)("p",null,"A header is invalidated if:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"it contains strictly more than ",(0,s.kt)("em",{parentName:"li"},"E")," endorsements"),(0,s.kt)("li",{parentName:"ul"},"at least one of the endorsements fails deserialization or signature verification"),(0,s.kt)("li",{parentName:"ul"},"at least one of the endorsements endorses a block different than the parent of the including block within its own thread"),(0,s.kt)("li",{parentName:"ul"},"any of the endorsements should not have been produced at that (",(0,s.kt)("em",{parentName:"li"},"endorsement.slot"),", ",(0,s.kt)("em",{parentName:"li"},"endorsement.index"),") according to the selector"),(0,s.kt)("li",{parentName:"ul"},"there is strictly more than one endorsement with a given ",(0,s.kt)("em",{parentName:"li"},"endorsement.index"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct Endorsement {\n  /// slot in which the endorsement can be included\n  pub slot: Slot,\n  /// endorsement index inside the including block\n  pub index: u32,\n  /// Hash of endorsed block.\n  /// This is the parent in thread `self.slot.thread` of the block in which the endorsement is included\n  pub endorsed_block: BlockId,\n}\n")),(0,s.kt)("h3",{id:"endorsement-lifecycle"},"Endorsement lifecycle"),(0,s.kt)("p",null,"To create endorsements for a specific slot ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"S")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"S")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"S"))))),", the Endorsement Factory wakes up at a certain timestamp and checks\nthe endorsement producer draws for that slot. The factory asks Consensus for the latest blockclique block with a lower period than S.period to choose the block to endorse.\nThe created endorsements are sent to the Endorsement Pool for future inclusion in blocks and propagated through the\nProtocol to other nodes."),(0,s.kt)("p",null,"In the Protocol, endorsements can be received from other modules or nodes. Received endorsements are propagated and added\nto the Endorsement Pool if they are not already known. The Endorsement Pool stores a limited number of endorsements that\ncan potentially be included in future blocks. Consensus notifies the Endorsement Pool of newly finalized blocks, allowing\nit to remove endorsements that can only be included in already-finalized slots."),(0,s.kt)("p",null,"When the Block Factory produces a block and needs to include endorsements in its header, it requests the Endorsement Pool\nfor the endorsements that endorse the block's parent in its thread and can be included in the block's slot."),(0,s.kt)("h3",{id:"incentives-and-penalties"},"Incentives and penalties"),(0,s.kt)("p",null,"To incentivize the creation and endorsement of blocks, as well as the inclusion of endorsements in blocks, a revenue split is implemented. The total revenue generated by a block, denoted as ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"R")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"R")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.00773em"}},"R"))))),", is divided into ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mi",{parentName:"mrow"},"E")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1+E")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"E")))))," equal parts, where ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"E")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"E")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"E")))))," is the number of endorsements."),(0,s.kt)("p",null,"Each part, denoted as ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"r")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"r")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"))))),", is distributed as follows:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The block creator receives ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"r")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"r")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r")))))," to motivate block creation, even without endorsements."),(0,s.kt)("li",{parentName:"ul"},"For each successfully included endorsement:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"The block creator receives ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,s.kt)("mn",{parentName:"mrow"},"3")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"r/3")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,s.kt)("span",{parentName:"span",className:"mord"},"/3")))))," to incentivize endorsement inclusion."),(0,s.kt)("li",{parentName:"ul"},"The endorsement creator receives ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,s.kt)("mn",{parentName:"mrow"},"3")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"r/3")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,s.kt)("span",{parentName:"span",className:"mord"},"/3")))))," to motivate endorsement creation."),(0,s.kt)("li",{parentName:"ul"},"The creator of the endorsed block receives ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"r"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,s.kt)("mn",{parentName:"mrow"},"3")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"r/3")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,s.kt)("span",{parentName:"span",className:"mord"},"/3")))))," to encourage timely block emission for endorsement.")))),(0,s.kt)("p",null,"This revenue split increases the frequency at which stakers receive coins, reducing the need for staking pools."),(0,s.kt)("h3",{id:"technical-decisions"},"Technical decisions"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"to do")),(0,s.kt)("h2",{id:"slashing"},"Slashing"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"to do")),(0,s.kt)("h2",{id:"node-banning"},"Node banning"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"to do")))}h.isMDXComponent=!0}}]);