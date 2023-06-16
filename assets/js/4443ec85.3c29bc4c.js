"use strict";(self.webpackChunkdocu_dev=self.webpackChunkdocu_dev||[]).push([[2239],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8837:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={id:"quickstart",sidebar_label:"Quickstart"},i="Build Your First dApp",l={unversionedId:"build/quickstart",id:"build/quickstart",title:"Build Your First dApp",description:"Welcome, Developer! You're about to embark on an exciting journey where you'll build your very first decentralized application (dApp) using the Massa blockchain. If you're thrilled about the world of blockchain, smart contracts, and dApps, you've come to the right place!",source:"@site/docs/build/quickstart.mdx",sourceDirName:"build",slug:"/build/quickstart",permalink:"/docu-dev/docs/build/quickstart",draft:!1,editUrl:"https://github.com/massalabs/docu-dev/tree/main/docs/build/quickstart.mdx",tags:[],version:"current",lastUpdatedBy:"Adrien LF",lastUpdatedAt:1686896566,formattedLastUpdatedAt:"Jun 16, 2023",frontMatter:{id:"quickstart",sidebar_label:"Quickstart"},sidebar:"buildSidebar",previous:{title:"Home",permalink:"/docu-dev/docs/build/home"},next:{title:"Introduction",permalink:"/docu-dev/docs/build/smart-contract/intro"}},s={},c=[{value:"Getting to Know the Project",id:"getting-to-know-the-project",level:2},{value:"The Smart Contract",id:"the-smart-contract",level:2},{value:"Setting up Your Project",id:"setting-up-your-project",level:3},{value:"Step 1: Initialize Your Smart Contract Project",id:"step-1-initialize-your-smart-contract-project",level:4},{value:"Step 2: Create a .env File",id:"step-2-create-a-env-file",level:4},{value:"Writing and Deploying the Smart Contract",id:"writing-and-deploying-the-smart-contract",level:3},{value:"The Frontend",id:"the-frontend",level:2},{value:"Setting Up Your Project",id:"setting-up-your-project-1",level:3},{value:"Understanding the Code",id:"understanding-the-code",level:3},{value:"Testing your application",id:"testing-your-application",level:2},{value:"Next steps",id:"next-steps",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"build-your-first-dapp"},"Build Your First dApp"),(0,r.kt)("p",null,"Welcome, Developer! You're about to embark on an exciting journey where you'll build your very first decentralized application (dApp) using the Massa blockchain. If you're thrilled about the world of blockchain, smart contracts, and dApps, you've come to the right place!"),(0,r.kt)("p",null,'This guide will help you build a simple "Hello World" dApp. We\'ll use a smart contract written in AssemblyScript and a user-friendly frontend designed in React.'),(0,r.kt)("h2",{id:"getting-to-know-the-project"},"Getting to Know the Project"),(0,r.kt)("p",null,"Here's the scoop: Our application is simple. A user can retrieve a greeting message that was set during the deployment of the dApp. This message is stored on the blockchain and is permanently visible to all users of the dApp."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"The Smart Contract (SC)"),"\nThe smart contract, written in AssemblyScript, is the backbone of our dApp. It houses a single greeting message that users can read.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"The Frontend"),"\nA basic web interface built in React will allow users to read the greeting message. This interface interacts with the Massa blockchain and fetches data from our smart contract."))),(0,r.kt)("h2",{id:"the-smart-contract"},"The Smart Contract"),(0,r.kt)("p",null,"Before we start, here's what you'll need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Node.js and npm installed"),"\nWe recommend using Node.js version 18 or later, and the compatible npm version. You can download and install Node.js and npm from the official website: ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"https://nodejs.org/"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Massa Wallet and your secret key"),"\nYou'll need a funded Massa wallet and your secret key before you deploy your smart contract to the Massa blockchain. "))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Not sure how to create and fund a Massa wallet? Check our guide ",(0,r.kt)("a",{parentName:"p",href:"/docu-dev/docs/build/wallet/intro"},"here"),".")),(0,r.kt)("h3",{id:"setting-up-your-project"},"Setting up Your Project"),(0,r.kt)("p",null,"Here are the steps to set up your smart contract project:"),(0,r.kt)("h4",{id:"step-1-initialize-your-smart-contract-project"},"Step 1: Initialize Your Smart Contract Project"),(0,r.kt)("p",null,"Firstly, open a terminal, and navigate to your preferred directory. Now, let's create your project with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx @massalabs/sc-project-initializer init massa-hello-world\n")),(0,r.kt)("p",null,"With this command, you create a new folder named massa-hello-world with all the necessary files for developing a Massa smart contract."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For more comprehensive details on the layout of the smart contract project, please refer to our guide ",(0,r.kt)("a",{parentName:"p",href:"/docu-dev/docs/build/smart-contract/project-layout"},"here"),"."),(0,r.kt)("p",{parentName:"admonition"},"In the meantime, here are the key components you should be familiar with:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"assembly")),": This is the directory where your smart contract code resides. Within this, you'll find your contract files in the ",(0,r.kt)("inlineCode",{parentName:"p"},"contracts")," subdirectory and your test files in the ",(0,r.kt)("inlineCode",{parentName:"p"},"tests")," subdirectory.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},".env.example")),": This file serves as a template for the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file you'll need to create. It outlines the necessary environment variables required to deploy your smart contract.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"package.json")),": This file contains the npm commands crucial for various operations such as checking, testing, building, and deploying your smart contract.")))),(0,r.kt)("h4",{id:"step-2-create-a-env-file"},"Step 2: Create a .env File"),(0,r.kt)("p",null,"Next, create a .env file at the root of your project directory and define the following environment variables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'WALLET_PRIVATE_KEY="Your_private_key_here"\nJSON_RPC_URL_PUBLIC=https://buildnet.massa.net/api/v2:33035\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"WALLET_PRIVATE_KEY: Store your wallet's private key used to deploy the contract here. Make sure your wallet is funded.\nJSON_RPC_URL_PUBLIC: This is the URL of the JSON-RPC interface of a public or a private Massa node.")),(0,r.kt)("h3",{id:"writing-and-deploying-the-smart-contract"},"Writing and Deploying the Smart Contract"),(0,r.kt)("p",null,"Our smart contract will let users set and get a greeting message. Replace the content of the main.ts file in assembly/contracts with the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Args, stringToBytes } from "@massalabs/as-types";\nimport {\n  callerHasWriteAccess,\n  generateEvent,\n  Storage,\n  Context,\n} from "@massalabs/massa-as-sdk";\n\n/**\n * This function is meant to be called only one time: when the contract is deployed.\n *\n * @param _ - not used\n */\nexport function constructor(_: StaticArray<u8>): void {\n  // This line is important. It ensures that this function can\'t be called in the future.\n  // If you remove this check, someone could call your constructor function and reset your smart contract.\n  if (!Context.isDeployingContract()) {\n    return ;\n  }\n\n  Storage.set("greeting", "Hello, world!");\n  generateEvent(`Greeting has been set`);\n\n  return ;\n}\n')),(0,r.kt)("p",null,"To deploy your smart contract, follow these steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1: Compile Your Smart Contract"))),(0,r.kt)("p",null,"In your project directory, run the following command to compile your smart contract into a WebAssembly (Wasm) file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This command compiles your helloWorld.ts contract into a helloWorld.wasm file.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2: Deploy the Smart Contract"))),(0,r.kt)("p",null,"Now that your smart contract is compiled and ready, let's deploy it to the Massa blockchain. To do this, run the following command in your project directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run deploy\n")),(0,r.kt)("p",null,"Upon successful execution, the console should display the operation id that you can use to track the deployment of your smart contract."),(0,r.kt)("h2",{id:"the-frontend"},"The Frontend"),(0,r.kt)("p",null,"Let's move on to the frontend of your dApp. We'll use React with TypeScript to build a user interface, which will interact with the deployed smart contract on the Massa blockchain."),(0,r.kt)("p",null,"Sounds fun, doesn't it? Let's get started!"),(0,r.kt)("h3",{id:"setting-up-your-project-1"},"Setting Up Your Project"),(0,r.kt)("p",null,"To set up your frontend project, follow these steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1: Initialize Your React Application"))),(0,r.kt)("p",null,"First, open your terminal, navigate to your desired directory, and execute the following command to create a new React project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-react-app my-app --template typescript\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The --template typescript flag sets up a TypeScript template for our React application.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you want you can replace ",(0,r.kt)("inlineCode",{parentName:"p"},"my-app")," in the command with your desired project name.")),(0,r.kt)("p",null,"After the installation is complete, navigate to your project folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd my-app\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2: Installing Massa Web3"))),(0,r.kt)("p",null,"Next up, let's install the Massa Web3 package. This package enables our frontend to interact with the Massa blockchain. Here's how to install it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @massalabs/massa-Web3\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You can find the compatible version of the Massa tools ",(0,r.kt)("a",{parentName:"p",href:"/docu-dev/docs/build/sdk"},"right here"),".")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 3: Building the Frontend"))),(0,r.kt)("p",null,"Let's begin building the frontend of our dApp!"),(0,r.kt)("p",null,"Before writing our component, navigate to the src folder and locate the App.tsx file. "),(0,r.kt)("p",null,"This file serves as the main entry point for your application. We will replace its content with our component's code."),(0,r.kt)("p",null,"Here's the code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n  Args,\n  Client,\n  ClientFactory,\n  fromMAS,\n  strToBytes,\n  bytesToStr,\n  IProvider,\n  ProviderType,\n  WalletClient,\n} from "@massalabs/massa-web3";\n\nimport { useEffect, useState } from "react";\n\nconst baseAccountSecretKey = "SECRET_KEY"; ### TODO Update the constant value!\nconst sc_addr = "SC_ADDRESS"; ### TODO Update the constant value!\n\n// initialize a custom client with the BuildNet endpoints\nconst providers: Array<IProvider> = [\n  {\n    url: "https://buildnet.massa.net/api/v2:33035",\n    type: ProviderType.PUBLIC,\n  } as IProvider,\n  {\n    url: "https://buildnet.massa.net/api/v2:33034",\n    type: ProviderType.PRIVATE,\n  } as IProvider,\n];\n\n/**\n * Content component that handles interactions with a Massa smart contract\n * @returns The rendered component\n */\nfunction Content() {\n  /**\n   * State variables to manage the web3 client and greetings\n   */\n  const [web3client, setWeb3client] = useState<Client | null>(null);\n  const [greeting, setGreeting] = useState<string | null>(null);\n\n  /**\n   * Initialize the web3 client using the custom provider defined above\n   */\n  useEffect(() => {\n    const initClient = async () => {\n      const baseAccount = await WalletClient.getAccountFromSecretKey(\n        baseAccountSecretKey\n      );\n      const client = await ClientFactory.createCustomClient(\n        providers,\n        false,\n        baseAccount\n      );\n      setWeb3client(client);\n    };\n    initClient().catch(console.error);\n  }, []);\n\n  /**\n   * Fetch the greeting when the web3 client is initialized\n   */\n  useEffect(() => {\n    if (web3client) {\n      funcGetGreeting();\n    }\n  }, [web3client]);\n\n  /**\n   * Function to get the current greeting from the smart contract\n   */\n  async function funcGetGreeting() {\n    if (web3client) {\n      let res = await web3client\n        .publicApi()\n        .getDatastoreEntries([\n          { address: sc_addr, key: strToBytes("greeting") },\n        ]);\n      if (res[0].candidate_value) {\n        let greetingDecoded = bytesToStr(res[0].candidate_value);\n        setGreeting(greetingDecoded);\n      }\n    }\n  }\n\n  return (\n    <div\n      style={{\n        display: "flex",\n        flexDirection: "column",\n        justifyContent: "center",\n        alignItems: "center",\n        height: "100vh",\n      }}\n    >\n      <div>Greeting: {greeting}</div>\n    </div>\n  );\n}\n\nexport default Content;\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Make sure to replace SECRET_KEY and SC_ADDRESS with your own secret key and smart contract address.")),(0,r.kt)("h3",{id:"understanding-the-code"},"Understanding the Code"),(0,r.kt)("p",null,"Our code might seem like a mouthful at first, but let's break it down into smaller, digestible parts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Setting Up Providers and Initializing a Custom Client"))),(0,r.kt)("p",null,"For our application, we want to interact with Massa's Buildnet. That's why we're creating a custom client specifically for the Massa's Buildnet using the ClientFactory.createCustomClient method."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Base Account and Secret Key"))),(0,r.kt)("p",null,"We define baseAccountSecretKey as the secret key of your Massa wallet. This key is necessary to create the base account for the client."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Retrieving the Greeting"))),(0,r.kt)("p",null,"We retrieve the current greeting from the smart contract's storage and update the greeting state variable using the funcGetGreeting function."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"User Interface"))),(0,r.kt)("p",null,"The user interface consists of a centered text display that shows the current greeting fetched from your smart contract's storage."),(0,r.kt)("h2",{id:"testing-your-application"},"Testing your application"),(0,r.kt)("p",null,"Finally, let's start our application and perform some basic user acceptance testing!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open your web browser and navigate to ",(0,r.kt)("a",{parentName:"li",href:"http://localhost:3000"},"http://localhost:3000")),(0,r.kt)("li",{parentName:"ol"},'Here, you should see a greeting that says "Hello, World!" This is the message that was set in your smart contract.'),(0,r.kt)("li",{parentName:"ol"},"If you're able to see this greeting, your dApp is functioning correctly.")),(0,r.kt)("p",null,"\ud83c\udf89Congratulations on building and testing your first dApp!"),(0,r.kt)("p",null,"Remember, Rome wasn't built in a day, and neither are amazing dApps! Keep learning!"),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"Congratulations on writing and testing your first dApp using the Massa blockchain! You've taken a crucial step in your blockchain development journey."),(0,r.kt)("p",null,"There's always more to learn. To continue exploring and expanding your knowledge, you can:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Review more detailed guides on ",(0,r.kt)("a",{parentName:"li",href:"/docu-dev/docs/build/smart-contract/intro"},"smart contract development"),"."),(0,r.kt)("li",{parentName:"ul"},"Check out more complex examples of dApps built on Massa."),(0,r.kt)("li",{parentName:"ul"},"Dive deeper into the Massa blockchain documentation and ",(0,r.kt)("a",{parentName:"li",href:"/docu-dev/docs/build/sdk"},"SDKs"),".")))}d.isMDXComponent=!0}}]);