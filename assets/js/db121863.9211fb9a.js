"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2632],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>u,mdx:()=>g,useMDXComponents:()=>l,withMDXComponents:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),m=function(e){return function(t){var n=l(t.components);return r.createElement(e,i({},t,{components:n}))}},l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=o,h=m["".concat(a,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(h,p(p({ref:t},c),{},{components:n})):r.createElement(h,p({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},79450:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>p,metadata:()=>c,toc:()=>l});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],p={id:"testing-treeprops",title:"Matching @TreeProp"},s=void 0,c={unversionedId:"testing/testing-treeprops",id:"testing/testing-treeprops",title:"Matching @TreeProp",description:"For help with setting up the test environment, see the Getting Started page.",source:"@site/../docs/testing/testing-treeprops.mdx",sourceDirName:"testing",slug:"/testing/testing-treeprops",permalink:"/docs/testing/testing-treeprops",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/testing/testing-treeprops.mdx",tags:[],version:"current",frontMatter:{id:"testing-treeprops",title:"Matching @TreeProp"}},m={},l=[{value:"Testing components with @TreeProp",id:"testing-components-with-treeprop",level:2}],u={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.mdx)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("admonition",{title:"Tips",type:"tip"},(0,i.mdx)("p",{parentName:"admonition"},"For help with setting up the test environment, see the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/testing/unit-testing"},"Getting Started")," page."),(0,i.mdx)("p",{parentName:"admonition"},"Before learning about ",(0,i.mdx)("inlineCode",{parentName:"p"},"@TreeProp")," matching, it's recommended you become familiar with ",(0,i.mdx)("a",{parentName:"p",href:"/docs/testing/subcomponent-testing"},"sub-component testing"),".")),(0,i.mdx)("h2",{id:"testing-components-with-treeprop"},"Testing components with @TreeProp"),(0,i.mdx)("p",null,"While ",(0,i.mdx)("inlineCode",{parentName:"p"},"@Prop"),"s are received from the immediate parent, ",(0,i.mdx)("a",{parentName:"p",href:"/docs/codegen/passing-data-to-components/treeprops"},(0,i.mdx)("inlineCode",{parentName:"a"},"@TreeProp")),"s can be passed down to a component from any of its ancestors in the current component hierarchy. When testing hierarchies containing components that contain ",(0,i.mdx)("inlineCode",{parentName:"p"},"@TreeProp"),", the TreeProp should be passed down to the components as expected. Following is an example LayoutSpec:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"@LayoutSpec\nclass ComponentWithTreePropSpec {\n  @OnCreateLayout\n  static Component onCreateLayout(\n      ComponentContext c,\n      @Prop String normalProp,\n      @TreeProp UserContext userContext) { // <- Passed down by an ancestor.\n    // ...\n  }\n}\n")),(0,i.mdx)("p",null,"To test a component that uses ",(0,i.mdx)("inlineCode",{parentName:"p"},"@TreeProp"),"s, you can use ",(0,i.mdx)("inlineCode",{parentName:"p"},"LithoViewRule#setTreeProp(Class, Object)"),". This will set ",(0,i.mdx)("inlineCode",{parentName:"p"},"@TreeProp"),"s on the hierachy, making them available to the components:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"@RunWith(LithoTestRunner.class)\npublic class ComponentWithTreePropTest {\n\n  public final @Rule LithoViewRule mLithoViewRule = new LithoViewRule();\n\n  @Test\n  public void test() {\n    final ComponentContext c = mLithoViewRule.getContext();\n    final Component component = ComponentWithTreeProp.create(c).build();\n\n    mLithoViewRule\n      .attachToWindow()\n      .setTreeProp(UserContext.class, new UserContext()) // setting tree props for the hierarchy.\n      .setRoot(component)\n      .measure()\n      .layout();\n\n    // test assertions as usual\n  }\n}\n")),(0,i.mdx)("admonition",{type:"info"},(0,i.mdx)("p",{parentName:"admonition"},(0,i.mdx)("inlineCode",{parentName:"p"},"@TestSpec")," does not support matching ",(0,i.mdx)("inlineCode",{parentName:"p"},"@TreeProp"),".")))}d.isMDXComponent=!0}}]);