"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4087],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>l,MDXProvider:()=>u,mdx:()=>S,useMDXComponents:()=>m,withMDXComponents:()=>p});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i.apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){return function(t){var n=m(t.components);return o.createElement(e,i({},t,{components:n}))}},m=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=m(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=m(n),u=r,h=p["".concat(a,".").concat(u)]||p[u]||d[u]||i;return n?o.createElement(h,s(s({ref:t},l),{},{components:n})):o.createElement(h,s({ref:t},l))}));function S(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},24885:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var o=n(83117),r=n(80102),i=(n(67294),n(3905)),a=["components"],s={id:"sections-testing",title:"Testing Sections"},c=void 0,l={unversionedId:"testing/sections-testing",id:"testing/sections-testing",title:"Testing Sections",description:"The SectionsTestHelper provides easy-to-use helper functions to test the output of GroupSectionSpecs and state updates.",source:"@site/../docs/testing/sections-testing.md",sourceDirName:"testing",slug:"/testing/sections-testing",permalink:"/docs/testing/sections-testing",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/testing/sections-testing.md",tags:[],version:"current",frontMatter:{id:"sections-testing",title:"Testing Sections"}},p={},m=[{value:"Testing Children",id:"testing-children",level:2},{value:"Testing State",id:"testing-state",level:2},{value:"Testing Events",id:"testing-events",level:2},{value:"Testing Other Lifecycle Methods",id:"testing-other-lifecycle-methods",level:2}],u={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.mdx)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/testing/sections/SectionsTestHelper.html"},"SectionsTestHelper")," provides easy-to-use helper functions to test the output of GroupSectionSpecs and state updates."),(0,i.mdx)("p",null,"To demonstrate the testing functionality, consider the following simple group section with a list of text and an optional image header:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},'/**\n * Dummy {@link GroupSectionSpec} to illustrate how to test sections.\n */\n@GroupSectionSpec\npublic class VerySimpleGroupSectionSpec {\n\n  @OnCreateInitialState\n  protected static void onCreateInitialState(\n      SectionContext c,\n      StateValue<Integer> extra) {\n    extra.set(0);\n  }\n\n  @OnCreateChildren\n  protected static Children onCreateChildren(\n      SectionContext c,\n      @State int extra,\n      @Prop int numberOfDummy) {\n    Children.Builder builder = Children.create();\n\n    if (extra > 0) {\n      builder.child(SingleComponentSection.create(c)\n          .component(Image.create(c).drawable(new ColorDrawable()).build()));\n    }\n\n    for (int i = 0; i < numberOfDummy+extra; i++) {\n      builder.child(SingleComponentSection.create(c)\n          .component(Text.create(c).text("Lol hi " + i).build())\n          .key("key" + i)\n          .build());\n    }\n    return builder.build();\n  }\n\n  @OnDataBound\n  static void onDataBound(\n      SectionContext c,\n      @Prop int numberOfDummy,\n      @State(canUpdateLazily = true) int extra) {\n    VerySimpleGroupSection.lazyUpdateExtra(c, extra - numberOfDummy);\n  }\n\n  @OnUpdateState\n  static void onUpdateState(\n      StateValue<Integer> extra,\n      @Param int newExtra) {\n    extra.set(newExtra);\n  }\n\n  @OnEvent(ClickEvent.class)\n  static void onImageClick(\n      SectionContext c) {\n    VerySimpleGroupSection.onUpdateState(3);\n  }\n}\n')),(0,i.mdx)("h2",{id:"testing-children"},"Testing Children"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"SectionComponentTestHelper")," helps you test a group section spec's ",(0,i.mdx)("inlineCode",{parentName:"p"},"@OnCreateChildren")," method by returning the children of a section as a list of ",(0,i.mdx)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/testing/sections/SubSection.html"},"SubSection"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},'\n  @Test\n  public void testInitialChildren() throws Exception {\n\n    Section s = mTester.prepare(\n        VerySimpleGroupSection.create(mTester.getContext()).numberOfDummy(4).build());\n\n    List<SubSection> subSections = mTester.getChildren(s);\n\n    assertThat(subSections)\n        .isEqualTo(\n            ImmutableList.of(\n                SubSection.of(\n                    SingleComponentSection.create(mTester.getContext())\n                        .key("key0")\n                        .component(Text.create(mTester.getContext()).text("Lol hi 0"))\n                        .build()),\n                SubSection.of(SingleComponentSection.class),\n                SubSection.of(SingleComponentSection.class),\n                SubSection.of(SingleComponentSection.class)));\n  }\n\n')),(0,i.mdx)("admonition",{type:"tip"},(0,i.mdx)("p",{parentName:"admonition"},(0,i.mdx)("inlineCode",{parentName:"p"},"SubSections")," can either be matched by exact props or by section class and are best used as existence checks.")),(0,i.mdx)("h2",{id:"testing-state"},"Testing State"),(0,i.mdx)("p",null,"Sometimes, a section's behaviour is based on both external props and internal state. You can change state variables and test new behaviour by performing state updates on the scoped context:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"\n  @Test\n  public void testStateUpdate() throws Exception {\n\n    Section s = mTester.prepare(\n        VerySimpleGroupSection.create(mTester.getContext()).numberOfDummy(4).build());\n\n    assertThat(mTester.getChildren(s).size()).isEqualTo(4);\n\n    VerySimpleGroupSection.onUpdateState(mTester.getScopedContext(s), 5);\n\n    assertThat(mTester.getChildren(s).size()).isGreaterThan(4);\n  }\n\n")),(0,i.mdx)("h2",{id:"testing-events"},"Testing Events"),(0,i.mdx)("p",null,"Sections, which heavily uses the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/codegen/events-for-specs"},"event handling system"),", and the ",(0,i.mdx)("inlineCode",{parentName:"p"},"SectionComponentTestHelper"),", which has helper methods, both make testing events easier. Simply create an event handler using the scoped context and dispatch your event to execute the event handler:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"\n  @Test\n  public void testClickHandler() throws Exception {\n    Section s = mTester.prepare(\n        VerySimpleGroupSection.create(mTester.getContext()).numberOfDummy(4).build());\n\n\n    SectionComponentTestHelper.dispatchEvent(\n        s,\n        VerySimpleGroupSection.onImageClick(mTester.getScopedContext(s)),\n        new ClickEvent());\n\n    VerySimpleGroupSection.VerySimpleGroupSectionStateContainerImpl stateContainer =\n        mTester.getStateContainer(s);\n\n    assertThat(stateContainer.extra).isEqualTo(3);\n  }\n")),(0,i.mdx)("h2",{id:"testing-other-lifecycle-methods"},"Testing Other Lifecycle Methods"),(0,i.mdx)("p",null,"Testing other lifecycle methods is as simple as calling the lifecycle method with the section under test and its corresponding scoped context:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"  @Test\n  public void testDataBound() throws Exception {\n    Section<VerySimpleGroupSection> s = mTester.prepare(\n        VerySimpleGroupSection.create(mTester.getContext()).numberOfDummy(4).build());\n\n    s.dataBound(mTester.getScopedContext(s), s);\n\n    VerySimpleGroupSection.VerySimpleGroupSectionStateContainerImpl stateContainer =\n        mTester.getStateContainer(s);\n\n    assertThat(stateContainer.extra).isEqualTo(-4);\n  }\n")),(0,i.mdx)("p",null,"For the full GitHub source of this example, see the ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/facebook/litho/blob/master/litho-it/src/test/java/com/facebook/litho/sections/common/VerySimpleGroupSectionSpecTest.java"},"VerySimpleGroupSectionSpecTest"),"."),(0,i.mdx)("p",null,"Testing for sections is still basic so, if you run into any missing functionality, ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/facebook/litho/issues/new"},"raise a GitHub Facebook issue")," and describe your use case."))}d.isMDXComponent=!0}}]);