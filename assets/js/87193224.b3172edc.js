"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7712,6972,2304,4882,6127,7940,1646],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>d,mdx:()=>y,useMDXComponents:()=>p,withMDXComponents:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){return function(t){var n=p(t.components);return a.createElement(e,o({},t,{components:n}))}},p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var a=n(67294),r=n(34334);const o="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},65488:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var a=n(83117),r=n(67294),o=n(34334),l=n(72389),s=n(67392),i=n(7094),c=n(12466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n,l=e.lazy,d=e.block,m=e.defaultValue,h=e.values,y=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,s.l)(g,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var x=(0,i.U)(),C=x.tabGroupChoices,w=x.setTabGroupChoices,N=(0,r.useState)(k),S=N[0],O=N[1],T=[],P=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=y){var _=C[y];null!=_&&_!==S&&g.some((function(e){return e.value===_}))&&O(_)}var j=function(e){var t=e.currentTarget,n=T.indexOf(t),a=g[n].value;a!==S&&(P(t),O(a),null!=y&&w(y,String(a)))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=T.indexOf(e.currentTarget)+1;n=null!=(a=T[r])?a:T[0];break;case"ArrowLeft":var o,l=T.indexOf(e.currentTarget)-1;n=null!=(o=T[l])?o:T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},f)},g.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return T.push(e)},onKeyDown:E,onFocus:j,onClick:j},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":S===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(v.filter((function(e){return e.props.value===S}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function m(e){var t=(0,l.default)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},7772:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(83117),r=n(67294),o=n(23746),l=n(7694),s=n(13618),i="0.42.0",c="0.43.0-SNAPSHOT",u="0.10.4",p="0.142.0",d=n(86668);const m=function(e){var t=e.language,n=e.code.replace(/{{site.lithoVersion}}/g,i).replace(/{{site.soloaderVersion}}/g,u).replace(/{{site.lithoSnapshotVersion}}/g,c).replace(/{{site.flipperVersion}}/g,p).trim(),m=(0,d.L)().isDarkTheme?s.Z:l.Z;return r.createElement(o.ZP,(0,a.Z)({},o.lG,{code:n,language:t,theme:m}),(function(e){var t=e.className,n=e.style,a=e.tokens,o=e.getLineProps,l=e.getTokenProps;return r.createElement("pre",{className:t,style:n},a.map((function(e,t){return r.createElement("div",o({line:e,key:t}),e.map((function(e,t){return r.createElement("span",l({token:e,key:t}))})))})))}))}},29612:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),l=(n(65488),n(85162),n(7772),["components"]),s={id:"use-state",title:"useState"},i=void 0,c={unversionedId:"mainconcepts/use-state",id:"mainconcepts/use-state",title:"useState",description:"useState is a hook that allows a component to persist and update a single value across renders and is the most common hook you'll encounter.",source:"@site/../docs/mainconcepts/use-state.mdx",sourceDirName:"mainconcepts",slug:"/mainconcepts/use-state",permalink:"/docs/mainconcepts/use-state",draft:!1,editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/mainconcepts/use-state.mdx",tags:[],version:"current",frontMatter:{id:"use-state",title:"useState"},sidebar:"mainSidebar",previous:{title:"Introduction to Hooks",permalink:"/docs/mainconcepts/hooks-intro"},next:{title:"useEffect",permalink:"/docs/mainconcepts/use-effect"}},u={},p=[{value:"Declaring and Using State",id:"declaring-and-using-state",level:2},{value:"Updating State",id:"updating-state",level:2},{value:"Value vs. Lambda variants",id:"value-vs-lambda-variants",level:3},{value:"Using state in child components",id:"using-state-in-child-components",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.mdx)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"useState")," is a hook that allows a component to persist and update a single value across renders and is the most common hook you'll encounter."),(0,o.mdx)("p",null,"To familiarize yourself with the concept and rules for hooks, see the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/mainconcepts/hooks-intro"},"Introduction to Hooks")," page."),(0,o.mdx)("h2",{id:"declaring-and-using-state"},"Declaring and Using State"),(0,o.mdx)("p",null,"Declare state with ",(0,o.mdx)("inlineCode",{parentName:"p"},"useState"),", passing an initial value. ",(0,o.mdx)("inlineCode",{parentName:"p"},"useState")," will always return a ",(0,o.mdx)("inlineCode",{parentName:"p"},"State<T>")," holding whatever the current value of that state is. On the first render, this is the initial value, however in subsequent renders it will include any updates that have been commited for that state variable."),(0,o.mdx)("p",null,"The following code shows an example of a component that renders a counter that increments when it is clicked. ",(0,o.mdx)("inlineCode",{parentName:"p"},"useState")," is used to track the value of that counter over time:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"{3,6}","{3,6}":!0},'class CounterComponent : KComponent() {\n  override fun ComponentScope.render(): Component {\n    val clicks = useState { 0 }\n    return Text(\n        style = Style.onClick { clicks.update { c -> c + 1 } },\n        text = "Clicks: ${clicks.value}")\n  }\n}\n')),(0,o.mdx)("h2",{id:"updating-state"},"Updating State"),(0,o.mdx)("admonition",{type:"note"},(0,o.mdx)("p",{parentName:"admonition"},(0,o.mdx)("inlineCode",{parentName:"p"},"update")," causes the re-render to be ",(0,o.mdx)("strong",{parentName:"p"},"async by default"),". If you need to perform a synchronous state update (that is, one which will cause a re-render synchronously on the current thread), use ",(0,o.mdx)("inlineCode",{parentName:"p"},"updateSync"),".")),(0,o.mdx)("p",null,"To update state, use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"update")," method on the ",(0,o.mdx)("inlineCode",{parentName:"p"},"State<T>")," returned from ",(0,o.mdx)("inlineCode",{parentName:"p"},"useState"),": this will trigger a render pass with the new state value:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"file=sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/CheckboxComponent.kt start=start_example end=end_example",file:"sample/src/main/java/com/facebook/samples/litho/kotlin/documentation/CheckboxComponent.kt",start:"start_example",end:"end_example"},"class CheckboxComponent : KComponent() {\n  override fun ComponentScope.render(): Component? {\n    val isChecked = useState { false }\n\n    return Column(style = Style.onClick { isChecked.update { currValue -> !currValue } }) {\n      child(\n          Image(\n              drawable =\n                  drawableRes(\n                      if (isChecked.value) {\n                        android.R.drawable.checkbox_on_background\n                      } else {\n                        android.R.drawable.checkbox_off_background\n                      })))\n    }\n  }\n}\n")),(0,o.mdx)("h3",{id:"value-vs-lambda-variants"},"Value vs. Lambda variants"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"update")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"updateSync")," have two variants:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("strong",{parentName:"li"},"Value variant")," - takes a determined value, such as ",(0,o.mdx)("inlineCode",{parentName:"li"},"myState.update(1)"),"."),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("strong",{parentName:"li"},"Lambda variant")," - takes a lambda receiving the old value which can be used to compute a new value, such as ",(0,o.mdx)("inlineCode",{parentName:"li"},"myState.update { c -> c + 1 }"),".")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"The basic rule of thumb is: use the lambda variant when you need to perform an update that depends on the old state value.")," This is because ",(0,o.mdx)("inlineCode",{parentName:"p"},"value")," on ",(0,o.mdx)("inlineCode",{parentName:"p"},"State")," is a snapshot of that state for the current render and may not reflect any renders that have occurred since (or are currently occuring on other threads)."),(0,o.mdx)("p",null,"For example, if your state update increments a counter, then using the function version of ",(0,o.mdx)("inlineCode",{parentName:"p"},"update")," with ",(0,o.mdx)("inlineCode",{parentName:"p"},"count -> count + 1")," enables you to account for updates that are in flight but not yet applied (such as if the user has tapped a button triggering the update multiple times in succession)."),(0,o.mdx)("h2",{id:"using-state-in-child-components"},"Using state in child components"),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"Avoid passing a State directly to the child component"),". Instead, pass a lambda to the child which it can invoke to notify the parent to update the state:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"{3,5} file=sample/src/main/java/com/facebook/samples/litho/kotlin/state/StateParentChildComponent.kt start=start_example_parent end=end_example_parent","{3,5}":!0,file:"sample/src/main/java/com/facebook/samples/litho/kotlin/state/StateParentChildComponent.kt",start:"start_example_parent",end:"end_example_parent"},'class StateParentChildComponent : KComponent() {\n  override fun ComponentScope.render(): Component {\n    val clicks = useState { 0 }\n    return Column {\n      child(ChildComponent { clicks.update { c -> c + 1 } })\n      child(Text(text = "Counter: ${clicks.value}"))\n    }\n  }\n}\n')),(0,o.mdx)("p",null,"And then in the child component:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-kotlin",metastring:"{1,4} file=sample/src/main/java/com/facebook/samples/litho/kotlin/state/ChildComponent.kt start=start_example_child end=end_example_child","{1,4}":!0,file:"sample/src/main/java/com/facebook/samples/litho/kotlin/state/ChildComponent.kt",start:"start_example_child",end:"end_example_child"},'class ChildComponent(private val onIncrementCounter: () -> Unit) : KComponent() {\n  override fun ComponentScope.render(): Component {\n    return Text(\n        style = Style.onClick { onIncrementCounter() },\n        text = "Tap to increment the parent!",\n    )\n  }\n}\n')))}m.isMDXComponent=!0},23746:(e,t,n)=>{n.d(t,{ZP:()=>h,lG:()=>l});var a=n(87410);const r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var o=n(67294),l={Prism:a.Z,theme:r};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}var c=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=i({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=i({},n,{backgroundColor:null}),r};function m(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}const h=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=i({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==r&&(o.style=void 0!==o.style?i({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),s(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var l=a?{display:"inline-block"}:{},s=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(s))}})),s(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,l=i({},m(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?i({},l.style,r):r),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),s(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,l=0,s=[],i=[s];l>-1;){for(;(o=a[l]++)<r[l];){var d=void 0,m=t[l],h=n[l][o];if("string"==typeof h?(m=l>0?m:["plain"],d=h):(m=p(m,h.type),h.alias&&(m=p(m,h.alias)),d=h.content),"string"==typeof d){var y=d.split(c),f=y.length;s.push({types:m,content:y[0]});for(var v=1;v<f;v++)u(s),i.push(s=[]),s.push({types:m,content:y[v]})}else l++,t.push(m),n.push(d),a.push(0),r.push(d.length)}l--,t.pop(),n.pop(),a.pop(),r.pop()}return u(s),i}(void 0!==l?this.tokenize(t,a,l,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component)},13618:(e,t,n)=>{n.d(t,{Z:()=>a});const a={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]}},7694:(e,t,n)=>{n.d(t,{Z:()=>a});const a={plain:{color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]}}}]);