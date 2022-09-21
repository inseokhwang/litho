"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8845],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>p,MDXProvider:()=>s,mdx:()=>b,useMDXComponents:()=>d,withMDXComponents:()=>m});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},r.apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=o.createContext({}),m=function(e){return function(n){var t=d(n.components);return o.createElement(e,r({},n,{components:t}))}},d=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=d(e.components);return o.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=d(t),s=i,f=m["".concat(a,".").concat(s)]||m[s]||u[s]||r;return t?o.createElement(f,l(l({ref:n},p),{},{components:t})):o.createElement(f,l({ref:n},p))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<r;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},34828:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>p,default:()=>f,frontMatter:()=>c,metadata:()=>m,toc:()=>s});var o=t(83117),i=t(80102),r=(t(67294),t(3905)),a=t(86341),l=["components"],c={id:"enabling-reconciliation",title:"Enabling Reconciliation"},p=void 0,m={unversionedId:"deep-dive/reconciliation/enabling-reconciliation",id:"deep-dive/reconciliation/enabling-reconciliation",title:"Enabling Reconciliation",description:"Reconciliation is enabled by default.",source:"@site/../docs/deep-dive/reconciliation/enabling-reconciliation.mdx",sourceDirName:"deep-dive/reconciliation",slug:"/deep-dive/reconciliation/enabling-reconciliation",permalink:"/docs/deep-dive/reconciliation/enabling-reconciliation",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/deep-dive/reconciliation/enabling-reconciliation.mdx",tags:[],version:"current",frontMatter:{id:"enabling-reconciliation",title:"Enabling Reconciliation"}},d={},s=[{value:"ComponentTree",id:"componenttree",level:2},{value:"RecyclerCollectionComponent",id:"recyclercollectioncomponent",level:2},{value:"Sections",id:"sections",level:2}],u={toc:s};function f(e){var n=e.components,t=(0,i.Z)(e,l);return(0,r.mdx)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("admonition",{type:"info"},(0,r.mdx)("p",{parentName:"admonition"},"Reconciliation is enabled by default.")),(0,r.mdx)(a.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,r.mdx)("admonition",{type:"caution"},(0,r.mdx)("p",{parentName:"admonition"},"Reconciliation has been explicitly disabled throughout fbsource because reconciliation skips some lifecycle calls that some components may have (incorrectly) come to rely on. Before proceeding, please remove the use of the following deprecated APIs in your surface."))),(0,r.mdx)(a.OssOnly,{mdxType:"OssOnly"},(0,r.mdx)("admonition",{type:"caution"},(0,r.mdx)("p",{parentName:"admonition"},"Before proceeding, please remove the use of the following deprecated APIs in your surface."))),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"// Remove use of\nLithoView#create(Context, Component, boolean): LithoView\nLithoView#create(ComponentContext, Component, boolean): LithoView\nLithoView#setComponentWithoutReconciliation(Component): void\nLithoView#setComponentAsyncWithoutReconciliation(Component): void\n\n// Instead use\nLithoView#create(Context, Component): LithoView\nLithoView#create(ComponentContext, Component): LithoView\nLithoView#setComponent(Component): void\nLithoView#setComponentAsync(Component): void\n")),(0,r.mdx)(a.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,r.mdx)("admonition",{type:"info"},(0,r.mdx)("p",{parentName:"admonition"},"Please remove the use of the prop ",(0,r.mdx)("inlineCode",{parentName:"p"},"isReconciliationEnabled")," from ",(0,r.mdx)("inlineCode",{parentName:"p"},"FBInfiniteHScroll")," in your surface."))),(0,r.mdx)("h2",{id:"componenttree"},"ComponentTree"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"ComponentTree")," builder exposes an API to enable or disable reconciliation:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"ComponentTree.create(context)\n  .isReconciliationEnabled(true)\n  .build();\n")),(0,r.mdx)(a.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,r.mdx)("p",null,"Example integrations:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://fburl.com/diffusion/azpz7q8u"},"Feed")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://fburl.com/diffusion/xv0puz80"},"Story Viewer")))),(0,r.mdx)("admonition",{type:"note"},(0,r.mdx)("p",{parentName:"admonition"},"In this integration, the config is not passed into any Sections within the component hierarchy. It needs to be explicitly set in the Sections (see below). There are plans to enable\npropagation over the Section boundary in future milestones.")),(0,r.mdx)("h2",{id:"recyclercollectioncomponent"},"RecyclerCollectionComponent"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"RecyclerBinderConfiguration")," and the ",(0,r.mdx)("inlineCode",{parentName:"p"},"RecyclerBinder")," builders both expose an API to enable or disable reconciliation:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"RecyclerBinderConfiguration.create()\n  .isReconciliationEnabled(false)\n  .build();\n")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"new RecyclerBinder.Builder()\n  .isReconciliationEnabled(true)\n  .build(context);\n")),(0,r.mdx)(a.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,r.mdx)("p",null,"Example integrations:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://fburl.com/diffusion/l10jx2ys"},"Notifications Tab")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://fburl.com/diffusion/ld30lvlm"},"Watch Tab")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://fburl.com/diffusion/tp4j1arg"},"Profile Tab")))),(0,r.mdx)("h2",{id:"sections"},"Sections"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"ComponentRenderInfo")," builder exposes an API to enable or disable reconciliation for individual Sections in a ",(0,r.mdx)("inlineCode",{parentName:"p"},"GroupSectionSpec"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"ComponentRenderInfo.create()\n  .component(component)\n  .customAttribute(ComponentRenderInfo.RECONCILIATION_ENABLED, false)\n  .build();\n")),(0,r.mdx)(a.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,r.mdx)("p",null,"Example integrations:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://fburl.com/diffusion/2h1npnoj"},"PaginatedStoriesHScrollSectionSpec")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://fburl.com/diffusion/jhsnym17"},"StoriesHScrollSectionSpec")))))}f.isMDXComponent=!0}}]);