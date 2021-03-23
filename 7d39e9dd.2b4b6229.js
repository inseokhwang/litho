(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"dependenciesCode",(function(){return p})),n.d(t,"default",(function(){return b}));var o=n(2),r=n(6),a=(n(0),n(161)),i=n(163),c=n(169),s={id:"event-handler-testing",title:"Event Handler Testing"},l={unversionedId:"testing/event-handler-testing",id:"testing/event-handler-testing",isDocsHomePage:!1,title:"Event Handler Testing",description:"Moved from old website without any change.",source:"@site/docs/testing/event-handler-testing.mdx",slug:"/testing/event-handler-testing",permalink:"/docs/testing/event-handler-testing",editUrl:"https://github.com/facebook/litho/edit/master/website/docs/testing/event-handler-testing.mdx",version:"current",sidebar:"mainSidebar",previous:{title:"Matching @InjectProp",permalink:"/docs/testing/injectprop-matching"},next:{title:"Testing Sections",permalink:"/docs/testing/sections-testing"}},u=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"What to test for",id:"what-to-test-for",children:[]},{value:"Testing handler presence",id:"testing-handler-presence",children:[]},{value:"Next",id:"next",children:[]}],p="testImplementation 'com.facebook.litho:litho-testing:{{site.lithoVersion}}'",d={rightToc:u,dependenciesCode:p};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"Content needs to be updated")),Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Moved from old website without any change."))),Object(a.b)("p",null,"This document provides a quick example of how to write tests for your event\nhandlers. You should be familiar with ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"subcomponent-testing"}),"TestSpecs"),"\nbefore diving into this topic."),Object(a.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(a.b)("p",null,"The package is shipped as a separate module. It is available via maven as\n",Object(a.b)("inlineCode",{parentName:"p"},"com.facebook.litho:litho-testing"),". To include it in your gradle build, add this\nline to your ",Object(a.b)("inlineCode",{parentName:"p"},"dependencies")," block:"),Object(a.b)(c.a,{language:"groovy",code:p,mdxType:"VersionedCodeBlock"}),Object(a.b)("h2",{id:"what-to-test-for"},"What to test for"),Object(a.b)("p",null,"We are going to work with this spec in our example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),'@LayoutSpec\npublic class LearningStateComponentSpec {\n\n  @PropDefault static final boolean canClick = true;\n\n  @OnCreateInitialState\n  static void onCreateInitialState(\n    ComponentContext c,\n    StateValue<Integer> count) {\n\n    count.set(0);\n  }\n\n  @OnCreateLayout\n  static Component onCreateLayout(\n    ComponentContext c,\n    @Prop(optional = true) boolean canClick,\n    @State Integer count) {\n\n    return Text.create(c)\n        .text("Clicked " + count + " times.")\n        .textSizeDip(50)\n        .clickHandler(canClick ? LearningStateComponent.onClick(c) : null)\n        .backgroundRes(android.R.color.holo_blue_light)\n        .alignSelf(STRETCH)\n        .paddingDip(BOTTOM, 20)\n        .paddingDip(TOP, 40)\n        .build();\n  }\n\n  @OnUpdateState\n  static void incrementClickCount(StateValue<Integer> count) {\n    count.set(count.get() + 1);\n  }\n\n  @OnEvent(ClickEvent.class)\n  static void onClick(ComponentContext c) {\n    LearningStateComponent.incrementClickCount(c);\n  }\n}\n')),Object(a.b)("video",{loop:"true",autoplay:"true",class:"video",width:"300px"},Object(a.b)("source",{type:"video/mp4",src:Object(i.a)("/videos/state_taps.mp4")})),Object(a.b)("p",null,"When testing event handlers, it is important to remember what you actually want\nto validate in your unit test. You may be getting this inkling to ensure that a\nclick event you issue triggers the callback you pass in as your prop. ",Object(a.b)("em",{parentName:"p"},"When you\ndo this, you are actually testing the framework.")," This is not what you want to\nspend your time on. While writing high-level end-to-end tests ensuring that your\ntouch events have the right effects, this is not what you should concern\nyourself with for unit tests."),Object(a.b)("h2",{id:"testing-handler-presence"},"Testing handler presence"),Object(a.b)("p",null,"Instead, let's focus on the actual logic that we have in our spec. Whether or\nnot we have a click handler depends on the prop ",Object(a.b)("inlineCode",{parentName:"p"},"canClick"),". It is very common\nfor handlers to be set conditionally based on a prop. In our test, we are going\nto limit ourselves to checking if a handler is set or not. For that we can use\nthe TestSpec matchers we have learned about before."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"@RunWith(LithoTestRunner.class)\npublic class LearningStateComponentSpecTest {\n  @Rule public ComponentsRule mComponentsRule = new ComponentsRule();\n\n  @Test\n  public void testComponentOnClick() {\n    final ComponentContext c = mComponentsRule.getContext();\n    final Component component = LearningStateComponent.create(\n        c)\n        .canClick(true)\n        .build();\n\n    LithoAssertions.assertThat(c, component).has(\n        SubComponentExtractor.subComponentWith(\n          c,\n          TestText.matcher(c)\n            .clickHandler(IsNull.<EventHandler<ClickEvent>>notNullValue(null)).build())\n    );\n  }\n\n  @Test\n  public void testNoComponentOnClick() {\n    final ComponentContext c = mComponentsRule.getContext();\n    final Component component = LearningStateComponent.create(\n        c)\n        .canClick(false)\n        .build();\n\n    LithoAssertions.assertThat(c, component).has(\n        SubComponentExtractor.subComponentWith(\n          c,\n          TestText.matcher(c)\n            .clickHandler(IsNull.<EventHandler<ClickEvent>>nullValue(null)).build())\n    );\n  }\n}\n")),Object(a.b)("p",null,"As you can see here, we can match against a click handler just like any other\nprop set on a sub-component. Matching against a specific instance of an\n",Object(a.b)("inlineCode",{parentName:"p"},"EventHandler")," is currently not supported."),Object(a.b)("h2",{id:"next"},"Next"),Object(a.b)("p",null,"Either head back to the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"testing-overview"}),"testing overview")," or\ncontinue with the next section, ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"espresso-testing"}),"Espresso"),"."))}b.isMDXComponent=!0},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return y}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=o,y=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return n?r.a.createElement(y,c(c({ref:t},l),{},{components:n})):r.a.createElement(y,c({ref:t},l))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},162:function(e,t,n){"use strict";var o=n(0),r=n(20);t.a=function(){var e=Object(o.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},163:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var o=n(162),r=n(164);function a(){var e=Object(o.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,o){var a=void 0===o?{}:o,i=a.forcePrependBaseUrl,c=void 0!==i&&i,s=a.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(c)return t+n;var u=!n.startsWith(t)?t+n.replace(/^\//,""):n;return l?e+u:u}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},164:function(e,t,n){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!o(e)}n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}))},166:function(e,t,n){"use strict";var o=n(0),r=n(167);t.a=function(){var e=Object(o.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},167:function(e,t,n){"use strict";var o=n(0),r=n.n(o).a.createContext(void 0);t.a=r},168:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var o=n(19),r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},a=n(0),i={Prism:o.a,theme:r};function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var l=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=s({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=s({},n,{backgroundColor:null}),r};function b(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var y=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),c(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),c(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,a=s({},b(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(a.style=i.plain),void 0!==r&&(a.style=void 0!==a.style?s({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),c(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return a[n[0]];var i=o?{display:"inline-block"}:{},c=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[i].concat(c))}})),c(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,a=e.token,i=s({},b(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==r&&(i.style=void 0!==i.style?s({},i.style,r):r),void 0!==n&&(i.key=n),o&&(i.className+=" "+o),i}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,a=this.getThemeDict(this.props),i=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],a=0,i=0,c=[],s=[c];i>-1;){for(;(a=o[i]++)<r[i];){var d=void 0,b=t[i],y=n[i][a];if("string"==typeof y?(b=i>0?b:["plain"],d=y):(b=p(b,y.type),y.alias&&(b=p(b,y.alias)),d=y.content),"string"==typeof d){var h=d.split(l),m=h.length;c.push({types:b,content:h[0]});for(var g=1;g<m;g++)u(c),s.push(c=[]),c.push({types:b,content:h[g]})}else i++,t.push(b),n.push(d),o.push(0),r.push(d.length)}i--,t.pop(),n.pop(),o.pop(),r.pop()}return u(c),s}(void 0!==i?t.tokenize(o,i,n):[o]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);t.a=y},169:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var o=n(2),r=n(0),a=n.n(r),i=n(168),c={plain:{color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]},s={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]},l="0.40.0",u="0.40.1-SNAPSHOT",p="0.9.0",d="0.46.0",b=n(166),y=function(e){var t=e.language,n=e.code.replace(/{{site.lithoVersion}}/g,l).replace(/{{site.soloaderVersion}}/g,p).replace(/{{site.lithoSnapshotVersion}}/g,u).replace(/{{site.flipperVersion}}/g,d),r=Object(b.a)().isDarkTheme?s:c;return a.a.createElement(i.a,Object(o.a)({},i.b,{code:n,language:t,theme:r}),(function(e){var t=e.className,n=e.style,o=e.tokens,r=e.getLineProps,i=e.getTokenProps;return a.a.createElement("pre",{className:t,style:n},o.map((function(e,t){return a.a.createElement("div",r({line:e,key:t}),e.map((function(e,t){return a.a.createElement("span",i({token:e,key:t}))})))})))}))}}}]);