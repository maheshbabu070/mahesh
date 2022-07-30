"use strict";(self.webpackChunkcropperjs=self.webpackChunkcropperjs||[]).push([[326],{7334:function(a,n,s){s.r(n),s.d(n,{data:function(){return t}});const t=JSON.parse('{"key":"v-1544ff2a","path":"/zh/api/cropper-viewer.html","title":"CropperViewer","lang":"zh-CN","frontmatter":{},"excerpt":"","headers":[{"level":2,"title":"示例","slug":"示例","children":[{"level":3,"title":"基本","slug":"基本","children":[]},{"level":3,"title":"连接到 CropperSelection","slug":"连接到-cropperselection","children":[]}]},{"level":2,"title":"属性","slug":"属性","children":[]},{"level":2,"title":"插槽","slug":"插槽","children":[]}],"git":{"updatedTime":1659186890000,"contributors":[{"name":"Chen Fengyuan","email":"chenfengyuan@outlook.com","commits":1}]},"filePathRelative":"zh/api/cropper-viewer.md"}')},7148:function(a,n,s){s.r(n),s.d(n,{default:function(){return U}});var t=s(6252);const e=(0,t.uE)('<h1 id="cropperviewer" tabindex="-1"><a class="header-anchor" href="#cropperviewer" aria-hidden="true">#</a> CropperViewer</h1><p><code>CropperViewer</code> 接口提供了用于操作 <code>&lt;cropper-viewer&gt;</code> 元素的布局和表示的属性和方法。</p><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><h3 id="基本" tabindex="-1"><a class="header-anchor" href="#基本" aria-hidden="true">#</a> 基本</h3>',4),o=(0,t._)("div",{class:"language-html ext-html"},[(0,t._)("pre",{class:"language-html"},[(0,t._)("code",null,[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("cropper-viewer")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("cropper-viewer")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n")])])],-1),c=(0,t._)("div",{class:"custom-container tip"},[(0,t._)("p",{class:"custom-container-title"},"提示"),(0,t._)("p",null,[(0,t.Uk)("此元素的默认高度为 "),(0,t._)("code",null,"0"),(0,t.Uk)("。")])],-1),p=(0,t._)("h3",{id:"连接到-cropperselection",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#连接到-cropperselection","aria-hidden":"true"},"#"),(0,t.Uk)(" 连接到 CropperSelection")],-1),l=(0,t._)("div",{class:"language-html ext-html"},[(0,t._)("pre",{class:"language-html"},[(0,t._)("code",null,[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("cropper-canvas")]),(0,t.Uk)(),(0,t._)("span",{class:"token special-attr"},[(0,t._)("span",{class:"token attr-name"},"style"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t._)("span",{class:"token value css language-css"},[(0,t._)("span",{class:"token property"},"height"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(" 240px"),(0,t._)("span",{class:"token punctuation"},";")]),(0,t._)("span",{class:"token punctuation"},'"')])]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"background"),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("cropper-image")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"src"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("/cropperjs/v2/picture.jpg"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"alt"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("Picture"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("cropper-image")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("cropper-shade")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"hidden"),(0,t._)("span",{class:"token punctuation"},">")]),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("cropper-shade")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("cropper-handle")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"action"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("select"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"plain"),(0,t._)("span",{class:"token punctuation"},">")]),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("cropper-handle")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("cropper-selection")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"id"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("cropperSelection"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"initial-aspect-ratio"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("1.5"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"initial-coverage"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("0.5"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"movable"),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"resizable"),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("cropper-handle")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"action"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("move"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"theme-color"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("rgba(255, 255, 255, 0.35)"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("cropper-handle")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("cropper-handle")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"action"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("n-resize"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("cropper-handle")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("cropper-handle")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"action"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("e-resize"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("cropper-handle")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("cropper-handle")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"action"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("s-resize"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("cropper-handle")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("cropper-handle")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"action"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("w-resize"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("cropper-handle")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("cropper-handle")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"action"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("ne-resize"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("cropper-handle")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("cropper-handle")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"action"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("nw-resize"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("cropper-handle")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("cropper-handle")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"action"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("se-resize"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("cropper-handle")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("cropper-handle")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"action"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("sw-resize"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("cropper-handle")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("cropper-selection")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("cropper-canvas")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("div")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"class"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("cropper-viewers"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("cropper-viewer")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"selection"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("#cropperSelection"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token special-attr"},[(0,t._)("span",{class:"token attr-name"},"style"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t._)("span",{class:"token value css language-css"},[(0,t._)("span",{class:"token property"},"width"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(" 320px"),(0,t._)("span",{class:"token punctuation"},";")]),(0,t._)("span",{class:"token punctuation"},'"')])]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("cropper-viewer")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("cropper-viewer")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"selection"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("#cropperSelection"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token special-attr"},[(0,t._)("span",{class:"token attr-name"},"style"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t._)("span",{class:"token value css language-css"},[(0,t._)("span",{class:"token property"},"width"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(" 160px"),(0,t._)("span",{class:"token punctuation"},";")]),(0,t._)("span",{class:"token punctuation"},'"')])]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("cropper-viewer")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("cropper-viewer")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"selection"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("#cropperSelection"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token special-attr"},[(0,t._)("span",{class:"token attr-name"},"style"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t._)("span",{class:"token value css language-css"},[(0,t._)("span",{class:"token property"},"width"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(" 80px"),(0,t._)("span",{class:"token punctuation"},";")]),(0,t._)("span",{class:"token punctuation"},'"')])]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("cropper-viewer")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("cropper-viewer")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"selection"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("#cropperSelection"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token special-attr"},[(0,t._)("span",{class:"token attr-name"},"style"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t._)("span",{class:"token value css language-css"},[(0,t._)("span",{class:"token property"},"width"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(" 40px"),(0,t._)("span",{class:"token punctuation"},";")]),(0,t._)("span",{class:"token punctuation"},'"')])]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("cropper-viewer")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("div")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("style")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t._)("span",{class:"token style"},[(0,t._)("span",{class:"token language-css"},[(0,t.Uk)("\n"),(0,t._)("span",{class:"token selector"},".cropper-viewers"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token property"},"margin-top"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(" 1rem"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token selector"},".cropper-viewers > cropper-viewer"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token property"},"border"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(" 1px solid #ddd"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token property"},"display"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(" inline-block"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token property"},"margin-right"),(0,t._)("span",{class:"token punctuation"},":"),(0,t.Uk)(" 1rem"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n")])]),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("style")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n")])])],-1),u=(0,t._)("h2",{id:"属性",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#属性","aria-hidden":"true"},"#"),(0,t.Uk)(" 属性")],-1),k=(0,t.Uk)("从其父级 "),r=(0,t._)("code",null,"CropperElement",-1),_=(0,t.Uk)(" 继承属性，并实现以下属性："),i=(0,t.uE)('<table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>可选值</th><th>描述</th></tr></thead><tbody><tr><td>resize</td><td><code>string</code></td><td><code>&quot;vertical&quot;</code></td><td><code>&quot;both&quot;</code>, <code>&quot;horizontal&quot;</code>, <code>&quot;vertical&quot;</code>, <code>&quot;none&quot;</code></td><td>指示此元素是否可调整大小，如果是，则在哪个方向。</td></tr><tr><td>selection</td><td><code>string</code></td><td><code>&quot;&quot;</code></td><td>-</td><td>指示要查看的源选区。它必须是 <code>document.querySelector</code> 的有效选择器。</td></tr><tr><td>slottable</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td><td>指示此元素是否启用默认插槽。</td></tr></tbody></table><h2 id="插槽" tabindex="-1"><a class="header-anchor" href="#插槽" aria-hidden="true">#</a> 插槽</h2><p>此元素中没有可用的插槽。</p><blockquote><p>你可以通过将 <code>slottable</code> 属性设置为 <code>true</code> 来启用默认插槽：</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cropper-viewer</span> <span class="token attr-name">slottable</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cropper-viewer</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div></blockquote>',4),d={};var U=(0,s(3744).Z)(d,[["render",function(a,n){const s=(0,t.up)("LiveDemo"),d=(0,t.up)("ClientOnly"),U=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.iD)("div",null,[e,(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[(0,t.Wm)(s,null,{default:(0,t.w5)((()=>[o])),_:1})])),_:1}),c,p,(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[(0,t.Wm)(s,null,{default:(0,t.w5)((()=>[l])),_:1})])),_:1}),u,(0,t._)("p",null,[k,(0,t.Wm)(U,{to:"/zh/api/cropper-element.html"},{default:(0,t.w5)((()=>[r])),_:1}),_]),i])}]])},3744:function(a,n){n.Z=(a,n)=>{const s=a.__vccOpts||a;for(const[a,t]of n)s[a]=t;return s}}}]);