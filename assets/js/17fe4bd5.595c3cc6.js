"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6860,3725,7801,3841,4957,8723,8e3,5730],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>u,MDXProvider:()=>d,mdx:()=>y,useMDXComponents:()=>p,withMDXComponents:()=>c});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),c=function(e){return function(t){var n=p(t.components);return o.createElement(e,a({},t,{components:n}))}},p=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,h=c["".concat(i,".").concat(d)]||c[d]||m[d]||a;return n?o.createElement(h,l(l({ref:t},u),{},{components:n})):o.createElement(h,l({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},13919:(e,t,n)=>{function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!o(e)}n.d(t,{b:()=>o,Z:()=>r})},44996:(e,t,n)=>{n.r(t),n.d(t,{useBaseUrlUtils:()=>a,default:()=>i});var o=n(52263),r=n(13919);function a(){var e=(0,o.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,o){var a=void 0===o?{}:o,i=a.forcePrependBaseUrl,l=void 0!==i&&i,s=a.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(l)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+c:c}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},58215:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var o=n(67294);const r=function(e){var t=e.children,n=e.hidden,r=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},55064:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var o=n(87462),r=n(67294),a=n(72389),i=n(79443);const l=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var s=n(83039),u=n(86010);const c="tabItem_1uMI";function p(e){var t,n,o,a=e.lazy,i=e.block,p=e.defaultValue,d=e.values,m=e.groupId,h=e.className,y=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:y.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),g=(0,s.duplicates)(f,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===p?p:null!=(t=null!=p?p:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=y[0])?void 0:o.props.value;if(null!==v&&!f.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=l(),w=b.tabGroupChoices,k=b.setTabGroupChoices,x=(0,r.useState)(v),C=x[0],O=x[1],T=[],P=(0,s.useScrollPositionBlocker)().blockElementScrollPositionUntilNextRender;if(null!=m){var L=w[m];null!=L&&L!==C&&f.some((function(e){return e.value===L}))&&O(L)}var N=function(e){var t=e.currentTarget,n=T.indexOf(t),o=f[n].value;o!==C&&(P(t),O(o),null!=m&&k(m,o))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var o=T.indexOf(e.currentTarget)+1;n=T[o]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.default)("tabs",{"tabs--block":i},h)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,className:(0,u.default)("tabs__item",c,{"tabs__item--active":C===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:j,onFocus:N,onClick:N},null!=n?n:t)}))),a?(0,r.cloneElement)(y.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function d(e){var t=(0,a.default)();return r.createElement(p,(0,o.Z)({key:String(t)},e))}},82924:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n(67294).createContext(void 0)},85350:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(67294),r=n(82924);const a=function(){var e=(0,o.useContext)(r.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},75960:(e,t,n)=>{n.d(t,{Z:()=>m});var o=n(87462),r=n(67294),a=n(24544),i=n(7694),l=n(13618),s="0.41.1",u="0.41.2-SNAPSHOT",c="0.9.0",p="0.46.0",d=n(85350);const m=function(e){var t=e.language,n=e.code.replace(/{{site.lithoVersion}}/g,s).replace(/{{site.soloaderVersion}}/g,c).replace(/{{site.lithoSnapshotVersion}}/g,u).replace(/{{site.flipperVersion}}/g,p).trim(),m=(0,d.Z)().isDarkTheme?l.Z:i.Z;return r.createElement(a.ZP,(0,o.Z)({},a.lG,{code:n,language:t,theme:m}),(function(e){var t=e.className,n=e.style,o=e.tokens,a=e.getLineProps,i=e.getTokenProps;return r.createElement("pre",{className:t,style:n},o.map((function(e,t){return r.createElement("div",a({line:e,key:t}),e.map((function(e,t){return r.createElement("span",i({token:e,key:t}))})))})))}))}},67136:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>u,metadata:()=>c,toc:()=>p,default:()=>m});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=(n(55064),n(58215),n(44996)),l=(n(75960),["components"]),s={id:"migration-strategies",title:"Migration Strategies"},u=void 0,c={unversionedId:"kotlin/migration-strategies",id:"kotlin/migration-strategies",isDocsHomePage:!1,title:"Migration Strategies",description:"Prerequisites",source:"@site/../docs/kotlin/migration-strategies.mdx",sourceDirName:"kotlin",slug:"/kotlin/migration-strategies",permalink:"/docs/kotlin/migration-strategies",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/kotlin/migration-strategies.mdx",tags:[],version:"current",frontMatter:{id:"migration-strategies",title:"Migration Strategies"},sidebar:"mainSidebar",previous:{title:"Built-in widgets",permalink:"/docs/widgets/builtin-widgets"},next:{title:"Compatibility with Custom Views",permalink:"/docs/kotlin/custom-view-compat"}},p=[{value:"Prerequisites",id:"prerequisites",children:[],level:3},{value:"Adopting Litho in your app",id:"adopting-litho-in-your-app",children:[{value:"Bottom-up",id:"bottom-up",children:[],level:4},{value:"Top-down",id:"top-down",children:[],level:4}],level:2}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.mdx)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.mdx)("p",null,"Before diving into this page, you might find it helpful to review the following tutorials:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/docs/tutorial/project-setup"},"Setting up the Project")," - the required settings and dependencies to add Litho to your project."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/docs/tutorial/first-components"},"Component and Props")," - write a simple component, extend it to accept props, and learn about Flexbox in Litho.")),(0,a.mdx)("h2",{id:"adopting-litho-in-your-app"},"Adopting Litho in your app"),(0,a.mdx)("p",null,"Using Litho in a new surface is fairly straightforward: you can put a LithoView at the root of your new Fragment or Activity and start writing your components.\nHowever, adopting Litho within an existing surface needs to be done more incrementally and can require a bit more thought."),(0,a.mdx)("p",null,"Litho Components can interoperate with Views in the same App or even in the same surface, so you can migrate View surfaces to Litho incrementally and maintain a hybrid Component-View UI.\nThere are two common strategies for incrementally migrating to Litho: ",(0,a.mdx)("a",{parentName:"p",href:"#bottom-up"},"Bottom Up")," and ",(0,a.mdx)("a",{parentName:"p",href:"#top-down"},"Top-down"),", as detailed in the following sub-sections."),(0,a.mdx)("h4",{id:"bottom-up"},"Bottom-up"),(0,a.mdx)("p",null,"With the bottom-up approach, you break down the UI into smaller pieces that can be converted incrementally. The View or ViewGroup in the original implementation is replaced by a LithoView that you attach as child to the root ViewGroup of your UI."),(0,a.mdx)("p",null,"Consider the following UI as an example:"),(0,a.mdx)("img",{src:(0,i.default)("/images/post-breakdown.png"),alt:"post-breakdown"}),(0,a.mdx)("p",null,"You can identify three UI blocks which can be converted independently into three Litho Components: Header, Media and Footer. You will have three LithoViews in your UI to render the Components."),(0,a.mdx)("p",null,"These Components are composed with smaller widgets such as Text or Image, similar to how Views are arranged in a ViewGroup.\nLitho provides ",(0,a.mdx)("a",{parentName:"p",href:"/docs/widgets/builtin-widgets"},"a library of widget Components"),", which you can immediately start using. If your app has a custom design system that implements custom views for primitives such as Button, Text or Image, you can start by creating Components for these first; you can also reuse them across the app to convert multiple surfaces to Litho."),(0,a.mdx)("p",null,"Once you have completed the incremental conversion, you can coalesce all the individual Components into a single Component and use one LithoView as the root of the UI."),(0,a.mdx)("p",null,"It is recommended to use the bottom-approach when you want to leverage performance optimisations such as incremental mount and view flattening sooner than you would with the top-down approach."),(0,a.mdx)("h4",{id:"top-down"},"Top-down"),(0,a.mdx)("p",null,"With the top-down approach, you replace the root ViewGroup of your UI with a LithoView and wrap the root View representing the UI into a Mountable Component. As you convert smaller parts of the UI into Components, you extract them out of the Mountable Component and into individual LithoViews."),(0,a.mdx)("p",null,"Some scenarios when the top-down approach is suitable include:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Using Litho for the architecture of your surface and for writing new features, but existing Views might not be immediately converted to Litho."),(0,a.mdx)("li",{parentName:"ul"},"Converting a list surface to ",(0,a.mdx)("a",{parentName:"li",href:"/docs/sections/start/"},"Sections"),". The root of the surface is a LithoView rendering a ",(0,a.mdx)("inlineCode",{parentName:"li"},"RecyclerCollectionComponent"),", while the individual list items can be either Views or Litho Components. You can leverage the Litho Lists API for features such as asynchronous data diffing or granular RecyclerView Adapter updates before converting the entire UI to Litho.")))}m.isMDXComponent=!0},24544:(e,t,n)=>{n.d(t,{ZP:()=>h,lG:()=>i});var o=n(87410);const r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var a=n(67294),i={Prism:o.default,theme:r};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s.apply(this,arguments)}var u=/\r\n|\r|\n/,c=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=s({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=s({},n,{backgroundColor:null}),r};function m(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}const h=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),l(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,a=s({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(a.style=i.plain),void 0!==r&&(a.style=void 0!==a.style?s({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),l(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return a[n[0]];var i=o?{display:"inline-block"}:{},l=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[i].concat(l))}})),l(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,a=e.token,i=s({},m(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==r&&(i.style=void 0!==i.style?s({},i.style,r):r),void 0!==n&&(i.key=n),o&&(i.className+=" "+o),i})),l(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var a=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,a=this.getThemeDict(this.props),i=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],a=0,i=0,l=[],s=[l];i>-1;){for(;(a=o[i]++)<r[i];){var d=void 0,m=t[i],h=n[i][a];if("string"==typeof h?(m=i>0?m:["plain"],d=h):(m=p(m,h.type),h.alias&&(m=p(m,h.alias)),d=h.content),"string"==typeof d){var y=d.split(u),f=y.length;l.push({types:m,content:y[0]});for(var g=1;g<f;g++)c(l),s.push(l=[]),l.push({types:m,content:y[g]})}else i++,t.push(m),n.push(d),o.push(0),r.push(d.length)}i--,t.pop(),n.pop(),o.pop(),r.pop()}return c(l),s}(void 0!==i?this.tokenize(t,o,i,n):[o]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component)},13618:(e,t,n)=>{n.d(t,{Z:()=>o});const o={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]}},7694:(e,t,n)=>{n.d(t,{Z:()=>o});const o={plain:{color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]}}}]);