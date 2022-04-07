"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7191,4957,8723,8e3,5730],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>d,mdx:()=>h,useMDXComponents:()=>p,withMDXComponents:()=>u});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),u=function(e){return function(t){var n=p(t.components);return o.createElement(e,a({},t,{components:n}))}},p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return n?o.createElement(f,l(l({ref:t},c),{},{components:n})):o.createElement(f,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},58215:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var o=n(67294);const r=function(e){var t=e.children,n=e.hidden,r=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},55064:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var o=n(87462),r=n(67294),a=n(72389),i=n(79443);const l=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var s=n(83039),c=n(86010);const u="tabItem_1uMI";function p(e){var t,n,o,a=e.lazy,i=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=d?d:h.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),v=(0,s.duplicates)(y,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=h[0])?void 0:o.props.value;if(null!==g&&!y.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=l(),k=b.tabGroupChoices,w=b.setTabGroupChoices,x=(0,r.useState)(g),N=x[0],P=x[1],O=[],T=(0,s.useScrollPositionBlocker)().blockElementScrollPositionUntilNextRender;if(null!=m){var C=k[m];null!=C&&C!==N&&y.some((function(e){return e.value===C}))&&P(C)}var D=function(e){var t=e.currentTarget,n=O.indexOf(t),o=y[n].value;o!==N&&(T(t),P(o),null!=m&&w(m,o))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var o=O.indexOf(e.currentTarget)+1;n=O[o]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;n=O[r]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.default)("tabs",{"tabs--block":i},f)},y.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,c.default)("tabs__item",u,{"tabs__item--active":N===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:E,onFocus:D,onClick:D},null!=n?n:t)}))),a?(0,r.cloneElement)(h.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function d(e){var t=(0,a.default)();return r.createElement(p,(0,o.Z)({key:String(t)},e))}},82924:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n(67294).createContext(void 0)},85350:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(67294),r=n(82924);const a=function(){var e=(0,o.useContext)(r.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},75960:(e,t,n)=>{n.d(t,{Z:()=>m});var o=n(87462),r=n(67294),a=n(24544),i=n(7694),l=n(13618),s="0.41.1",c="0.41.2-SNAPSHOT",u="0.9.0",p="0.46.0",d=n(85350);const m=function(e){var t=e.language,n=e.code.replace(/{{site.lithoVersion}}/g,s).replace(/{{site.soloaderVersion}}/g,u).replace(/{{site.lithoSnapshotVersion}}/g,c).replace(/{{site.flipperVersion}}/g,p).trim(),m=(0,d.Z)().isDarkTheme?l.Z:i.Z;return r.createElement(a.ZP,(0,o.Z)({},a.lG,{code:n,language:t,theme:m}),(function(e){var t=e.className,n=e.style,o=e.tokens,a=e.getLineProps,i=e.getTokenProps;return r.createElement("pre",{className:t,style:n},o.map((function(e,t){return r.createElement("div",a({line:e,key:t}),e.map((function(e,t){return r.createElement("span",i({token:e,key:t}))})))})))}))}},77937:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>c,toc:()=>u,default:()=>d});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=(n(55064),n(58215),n(75960),["components"]),l={id:"kotlin-intro",title:"Setup and Intro",keywords:["litho","litho kotlin","kotlin litho"],custom_edit_url:"https://www.internalfb.com/intern/diffusion/FBS/browsefile/master/fbandroid/libraries/components/docs/kotlin/setup-and-intro.mdx"},s=void 0,c={unversionedId:"kotlin/kotlin-intro",id:"kotlin/kotlin-intro",isDocsHomePage:!1,title:"Setup and Intro",description:"This page covers how to convert existing code from Java Spec API to Kotlin API. Please refer to this page for the main docs.",source:"@site/../docs/kotlin/setup-and-intro.mdx",sourceDirName:"kotlin",slug:"/kotlin/kotlin-intro",permalink:"/docs/kotlin/kotlin-intro",editUrl:"https://www.internalfb.com/intern/diffusion/FBS/browsefile/master/fbandroid/libraries/components/docs/kotlin/setup-and-intro.mdx",tags:[],version:"current",frontMatter:{id:"kotlin-intro",title:"Setup and Intro",keywords:["litho","litho kotlin","kotlin litho"],custom_edit_url:"https://www.internalfb.com/intern/diffusion/FBS/browsefile/master/fbandroid/libraries/components/docs/kotlin/setup-and-intro.mdx"}},u=[{value:"About these Docs",id:"about-these-docs",children:[],level:2},{value:"Adding Dependencies",id:"adding-dependencies",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.mdx)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,a.mdx)("h5",{parentName:"div"},(0,a.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,a.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.mdx)("div",{parentName:"div",className:"admonition-content"},(0,a.mdx)("p",{parentName:"div"},(0,a.mdx)("strong",{parentName:"p"},"This page covers how to convert existing code from Java Spec API to Kotlin API.")," Please refer to this ",(0,a.mdx)("strong",{parentName:"p"},(0,a.mdx)("a",{parentName:"strong",href:"/docs/tutorial/overview"},"page"))," for the main docs."))),(0,a.mdx)("h2",{id:"about-these-docs"},"About these Docs"),(0,a.mdx)("p",null,"The Kotlin API section of the Litho docs are aimed at Developers already familiar with general Java Spec API and Litho concepts. Within the Kotlin API section, comparisons are made between use of the Java Spec API and the Kotlin API."),(0,a.mdx)("p",null,"Your next step:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"If you aren't familiar with Litho, start with the ",(0,a.mdx)("a",{parentName:"li",href:"/docs/tutorial/overview"},"introductory pages")," then return here later."),(0,a.mdx)("li",{parentName:"ul"},"If you're new to the Litho Kotlin API, start with the ",(0,a.mdx)("a",{parentName:"li",href:"/docs/kotlin/kotlin-api-basics"},"Kotlin API basics"),"."),(0,a.mdx)("li",{parentName:"ul"},"If you just want a reference comparing features in the Spec API to their equivalents in Kotlin, have a look at the ",(0,a.mdx)("a",{parentName:"li",href:"/docs/kotlin/kotlin-api-cheatsheet"},"cheatsheet"),".")),(0,a.mdx)("h2",{id:"adding-dependencies"},"Adding Dependencies"),(0,a.mdx)("p",null,"To use the Kotlin Litho API, you'll need to add the following dependencies into your BUCK file:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="BUCK"',title:'"BUCK"'},'deps = [\n    "//fbandroid/libraries/components:litho_core_kotlin",\n    "//fbandroid/libraries/components/litho-widget-kotlin/src/main/kotlin/com/facebook/litho/kotlin/widget:widget", # for widgets\n],\n')),(0,a.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,a.mdx)("h5",{parentName:"div"},(0,a.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,a.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.mdx)("div",{parentName:"div",className:"admonition-content"},(0,a.mdx)("p",{parentName:"div"},"If you're getting an ",(0,a.mdx)("inlineCode",{parentName:"p"},"unresolved supertypes: com.facebook.litho.KComponent")," or ",(0,a.mdx)("inlineCode",{parentName:"p"},"incompatible types: com.facebook.<Your new KComponent> cannot be converted to com.facebook.litho.Component")," error, be sure to also add the ",(0,a.mdx)("inlineCode",{parentName:"p"},"litho_core_kotlin")," dependency in the BUCK file for the module that is using the Kotlin component."))))}d.isMDXComponent=!0},24544:(e,t,n)=>{n.d(t,{ZP:()=>f,lG:()=>i});var o=n(87410);const r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var a=n(67294),i={Prism:o.default,theme:r};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s.apply(this,arguments)}var c=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=s({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=s({},n,{backgroundColor:null}),r};function m(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}const f=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),l(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,a=s({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(a.style=i.plain),void 0!==r&&(a.style=void 0!==a.style?s({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),l(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return a[n[0]];var i=o?{display:"inline-block"}:{},l=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[i].concat(l))}})),l(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,a=e.token,i=s({},m(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==r&&(i.style=void 0!==i.style?s({},i.style,r):r),void 0!==n&&(i.key=n),o&&(i.className+=" "+o),i})),l(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var a=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,a=this.getThemeDict(this.props),i=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],a=0,i=0,l=[],s=[l];i>-1;){for(;(a=o[i]++)<r[i];){var d=void 0,m=t[i],f=n[i][a];if("string"==typeof f?(m=i>0?m:["plain"],d=f):(m=p(m,f.type),f.alias&&(m=p(m,f.alias)),d=f.content),"string"==typeof d){var h=d.split(c),y=h.length;l.push({types:m,content:h[0]});for(var v=1;v<y;v++)u(l),s.push(l=[]),l.push({types:m,content:h[v]})}else i++,t.push(m),n.push(d),o.push(0),r.push(d.length)}i--,t.pop(),n.pop(),o.pop(),r.pop()}return u(l),s}(void 0!==i?this.tokenize(t,o,i,n):[o]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component)},13618:(e,t,n)=>{n.d(t,{Z:()=>o});const o={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]}},7694:(e,t,n)=>{n.d(t,{Z:()=>o});const o={plain:{color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]}}}]);