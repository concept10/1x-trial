"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6035],{57522:function(e,a,t){t.r(a),t.d(a,{MDXContext:function(){return s},MDXProvider:function(){return c},mdx:function(){return x},useMDXComponents:function(){return p},withMDXComponents:function(){return m}});var n=t(29901);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(){return r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},r.apply(this,arguments)}function d(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?d(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),m=function(e){return function(a){var t=p(a.components);return n.createElement(e,r({},a,{components:t}))}},p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},v=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(t),c=o,v=m["".concat(d,".").concat(c)]||m[c]||u[c]||r;return t?n.createElement(v,i(i({ref:a},s),{},{components:t})):n.createElement(v,i({ref:a},s))}));function x(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,d=new Array(r);d[0]=v;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,d[1]=i;for(var s=2;s<r;s++)d[s]=t[s];return n.createElement.apply(null,d)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},84557:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return m},default:function(){return c}});var n=t(3920),o=t(50264),r=(t(29901),t(57522)),d=["components"],i={title:"<Audio />",id:"audio"},l=void 0,s={unversionedId:"audio",id:"audio",isDocsHomePage:!1,title:"<Audio />",description:"Using this component, you can add audio to your video. All audio formats which are supported by Chromium are supported by the component.",source:"@site/docs/audio.md",sourceDirName:".",slug:"/audio",permalink:"/docs/audio",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/audio.md",tags:[],version:"current",frontMatter:{title:"<Audio />",id:"audio"},sidebar:"someSidebar",previous:{title:"useVideoConfig()",permalink:"/docs/use-video-config"},next:{title:"<Composition />",permalink:"/docs/composition"}},m=[{value:"API / Example",id:"api--example",children:[],level:2},{value:"Controlling volume",id:"controlling-volume",children:[],level:2},{value:"Controlling playback speed",id:"controlling-playback-speed",children:[],level:2},{value:"See also",id:"see-also",children:[],level:2}],p={toc:m};function c(e){var a=e.components,t=(0,o.default)(e,d);return(0,r.mdx)("wrapper",(0,n.default)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"Using this component, you can add audio to your video. All audio formats which are supported by Chromium are supported by the component."),(0,r.mdx)("h2",{id:"api--example"},"API / Example"),(0,r.mdx)("p",null,"Use an import or require to load an audio file and pass it to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"src")," props of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"<Audio />")," component."),(0,r.mdx)("p",null,"The component also accepts a ",(0,r.mdx)("inlineCode",{parentName:"p"},"volume")," props which allows you to control the volume of the audio in it's entirety or frame by frame. Read the page on ",(0,r.mdx)("a",{parentName:"p",href:"/docs/using-audio"},"using audio")," to learn more."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"<Audio>")," has two more helper props: ",(0,r.mdx)("inlineCode",{parentName:"p"},"startFrom")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"endAt")," for defining the start frame and end frame. Both are optional and do not get forwarded to the native ",(0,r.mdx)("inlineCode",{parentName:"p"},"<audio>")," element but tell Remotion which portion of the audio should be included."),(0,r.mdx)("div",{className:"shiki-twoslash-fragment"},(0,r.mdx)("pre",{parentName:"div",className:"shiki github-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292e"}},(0,r.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,r.mdx)("div",{parentName:"pre",className:"code-container"},(0,r.mdx)("code",{parentName:"div"},(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"import"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," { ",(0,r.mdx)("data-lsp",{parentName:"span",lsp:'(alias) const Audio: React.ForwardRefExoticComponent<Pick<Omit<React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>, "autoPlay" | "controls" | "loop"> & {\n    ...;\n} & RemotionMainAudioProps, "key" | ... 263 more ... | keyof RemotionMainAudioProps> & React.RefAttributes<...>>\nimport Audio'},"Audio")," } "),(0,r.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"from"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#032F62"}},'"remotion"'),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},";")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"import"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," ",(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const audio: string\nimport audio"},"audio")," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"from"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#032F62"}},'"./audio.mp3"'),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},";")),(0,r.mdx)("div",{parentName:"code",className:"line"},"\xa0"),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"export"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"const"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"const MyVideo: () => JSX.Element"},"MyVideo")),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," () "),(0,r.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"=>"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," {")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,r.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"return"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}}," (")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"    <"),(0,r.mdx)("span",{parentName:"div",style:{color:"#22863A"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},">")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"      <"),(0,r.mdx)("span",{parentName:"div",style:{color:"#22863A"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},">Hello World!</"),(0,r.mdx)("span",{parentName:"div",style:{color:"#22863A"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},">")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"      <"),(0,r.mdx)("span",{parentName:"div",style:{color:"#22863A"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:'(alias) const Audio: React.ForwardRefExoticComponent<Pick<Omit<React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>, "autoPlay" | "controls" | "loop"> & {\n    ...;\n} & RemotionMainAudioProps, "key" | ... 263 more ... | keyof RemotionMainAudioProps> & React.RefAttributes<...>>\nimport Audio'},"Audio"))),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"        "),(0,r.mdx)("span",{parentName:"div",style:{color:"#005CC5"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) src?: string | undefined"},"src")),(0,r.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"{",(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const audio: string\nimport audio"},"audio"),"}")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"        "),(0,r.mdx)("span",{parentName:"div",style:{color:"#005CC5"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) startFrom?: number | undefined"},"startFrom")),(0,r.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"{"),(0,r.mdx)("span",{parentName:"div",style:{color:"#005CC5"}},"59"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"} "),(0,r.mdx)("span",{parentName:"div",style:{color:"#6A737D"}},"// if composition is 30fps, then it will start at 2s")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"        "),(0,r.mdx)("span",{parentName:"div",style:{color:"#005CC5"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) endAt?: number | undefined"},"endAt")),(0,r.mdx)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"{"),(0,r.mdx)("span",{parentName:"div",style:{color:"#005CC5"}},"120"),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"} "),(0,r.mdx)("span",{parentName:"div",style:{color:"#6A737D"}},"// if composition is 30fps, then it will end at 4s")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"      />")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"    </"),(0,r.mdx)("span",{parentName:"div",style:{color:"#22863A"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},">")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"  );")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#24292E"}},"};"))))),(0,r.mdx)("pre",{parentName:"div",className:"shiki github-dark twoslash lsp",style:{backgroundColor:"#0d1117",color:"#c9d1d9"}},(0,r.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,r.mdx)("div",{parentName:"pre",className:"code-container"},(0,r.mdx)("code",{parentName:"div"},(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"import"),(0,r.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," { ",(0,r.mdx)("data-lsp",{parentName:"span",lsp:'(alias) const Audio: React.ForwardRefExoticComponent<Pick<Omit<React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>, "autoPlay" | "controls" | "loop"> & {\n    ...;\n} & RemotionMainAudioProps, "key" | ... 263 more ... | keyof RemotionMainAudioProps> & React.RefAttributes<...>>\nimport Audio'},"Audio")," } "),(0,r.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"from"),(0,r.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#A5D6FF"}},'"remotion"'),(0,r.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},";")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"import"),(0,r.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," ",(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const audio: string\nimport audio"},"audio")," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"from"),(0,r.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#A5D6FF"}},'"./audio.mp3"'),(0,r.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},";")),(0,r.mdx)("div",{parentName:"code",className:"line"},"\xa0"),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"export"),(0,r.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"const"),(0,r.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#D2A8FF"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"const MyVideo: () => JSX.Element"},"MyVideo")),(0,r.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,r.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"="),(0,r.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," () "),(0,r.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"=>"),(0,r.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," {")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"  "),(0,r.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"return"),(0,r.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}}," (")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"    <"),(0,r.mdx)("span",{parentName:"div",style:{color:"#7EE787"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,r.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},">")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"      <"),(0,r.mdx)("span",{parentName:"div",style:{color:"#7EE787"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,r.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},">Hello World!</"),(0,r.mdx)("span",{parentName:"div",style:{color:"#7EE787"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,r.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},">")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"      <"),(0,r.mdx)("span",{parentName:"div",style:{color:"#7EE787"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:'(alias) const Audio: React.ForwardRefExoticComponent<Pick<Omit<React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>, "autoPlay" | "controls" | "loop"> & {\n    ...;\n} & RemotionMainAudioProps, "key" | ... 263 more ... | keyof RemotionMainAudioProps> & React.RefAttributes<...>>\nimport Audio'},"Audio"))),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"        "),(0,r.mdx)("span",{parentName:"div",style:{color:"#79C0FF"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) src?: string | undefined"},"src")),(0,r.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"="),(0,r.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"{",(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const audio: string\nimport audio"},"audio"),"}")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"        "),(0,r.mdx)("span",{parentName:"div",style:{color:"#79C0FF"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) startFrom?: number | undefined"},"startFrom")),(0,r.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"="),(0,r.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"{"),(0,r.mdx)("span",{parentName:"div",style:{color:"#79C0FF"}},"59"),(0,r.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"} "),(0,r.mdx)("span",{parentName:"div",style:{color:"#8B949E"}},"// if composition is 30fps, then it will start at 2s")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"        "),(0,r.mdx)("span",{parentName:"div",style:{color:"#79C0FF"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) endAt?: number | undefined"},"endAt")),(0,r.mdx)("span",{parentName:"div",style:{color:"#FF7B72"}},"="),(0,r.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"{"),(0,r.mdx)("span",{parentName:"div",style:{color:"#79C0FF"}},"120"),(0,r.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"} "),(0,r.mdx)("span",{parentName:"div",style:{color:"#8B949E"}},"// if composition is 30fps, then it will end at 4s")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"      />")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"    </"),(0,r.mdx)("span",{parentName:"div",style:{color:"#7EE787"}},(0,r.mdx)("data-lsp",{parentName:"span",lsp:"(property) JSX.IntrinsicElements.div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>"},"div")),(0,r.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},">")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"  );")),(0,r.mdx)("div",{parentName:"code",className:"line"},(0,r.mdx)("span",{parentName:"div",style:{color:"#C9D1D9"}},"};")))))),(0,r.mdx)("h2",{id:"controlling-volume"},"Controlling volume"),(0,r.mdx)("p",null,"You can use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"volume")," prop to control the loudness of the audio. See ",(0,r.mdx)("a",{parentName:"p",href:"/docs/using-audio#controlling-volume"},"Controlling audio")," for more information."),(0,r.mdx)("h2",{id:"controlling-playback-speed"},"Controlling playback speed"),(0,r.mdx)("p",null,(0,r.mdx)("em",{parentName:"p"},"Available from v2.2")),(0,r.mdx)("p",null,"You can use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"playbackRate")," prop to control the speed of the audio. ",(0,r.mdx)("inlineCode",{parentName:"p"},"1")," is the default and means regular speed, ",(0,r.mdx)("inlineCode",{parentName:"p"},"0.5")," slows down the audio so it's twice as long and ",(0,r.mdx)("inlineCode",{parentName:"p"},"2")," speeds up the audio so it's twice as fast."),(0,r.mdx)("p",null,"While Remotion doesn't limit the range of possible playback speeds, in development mode the ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/playbackRate"},(0,r.mdx)("inlineCode",{parentName:"a"},"HTMLMediaElement.playbackRate"))," API is used which throws errors on extreme values. At the time of writing, Google Chrome throws an exception if the playback rate is below ",(0,r.mdx)("inlineCode",{parentName:"p"},"0.0625")," or above ",(0,r.mdx)("inlineCode",{parentName:"p"},"16"),"."),(0,r.mdx)("h2",{id:"see-also"},"See also"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/docs/audio"},"Using audio")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/docs/audio-visualization"},"Audio visualization")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/docs/video"},(0,r.mdx)("inlineCode",{parentName:"a"},"<Video />")))))}c.isMDXComponent=!0}}]);