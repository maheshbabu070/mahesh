"use strict";(self.webpackChunkcropperjs=self.webpackChunkcropperjs||[]).push([[953],{2566:function(e,n,l){l.r(n),l.d(n,{data:function(){return a}});const a=JSON.parse('{"key":"v-82a7da4a","path":"/zh/api/cropper-image.html","title":"CropperImage","lang":"zh-CN","frontmatter":{},"excerpt":"","headers":[{"level":2,"title":"示例","slug":"示例","children":[{"level":3,"title":"基本","slug":"基本","children":[]},{"level":3,"title":"有图片源","slug":"有图片源","children":[]}]},{"level":2,"title":"属性","slug":"属性","children":[]},{"level":2,"title":"方法","slug":"方法","children":[{"level":3,"title":"$ready","slug":"ready","children":[]},{"level":3,"title":"$center","slug":"center","children":[]},{"level":3,"title":"$move","slug":"move","children":[]},{"level":3,"title":"$moveTo","slug":"moveto","children":[]},{"level":3,"title":"$rotate","slug":"rotate","children":[]},{"level":3,"title":"$zoom","slug":"zoom","children":[]},{"level":3,"title":"$scale","slug":"scale","children":[]},{"level":3,"title":"$skew","slug":"skew","children":[]},{"level":3,"title":"$translate","slug":"translate","children":[]},{"level":3,"title":"$transform","slug":"transform","children":[]},{"level":3,"title":"$setTransform","slug":"settransform","children":[]},{"level":3,"title":"$getTransform","slug":"gettransform","children":[]},{"level":3,"title":"$resetTransform","slug":"resettransform","children":[]}]},{"level":2,"title":"事件","slug":"事件","children":[{"level":3,"title":"transform","slug":"transform-1","children":[]}]},{"level":2,"title":"插槽","slug":"插槽","children":[]}],"git":{"updatedTime":1659186890000,"contributors":[{"name":"Chen Fengyuan","email":"chenfengyuan@outlook.com","commits":1}]},"filePathRelative":"zh/api/cropper-image.md"}')},5432:function(e,n,l){l.r(n),l.d(n,{default:function(){return be}});var a=l(6252);const o=(0,a.uE)('<h1 id="cropperimage" tabindex="-1"><a class="header-anchor" href="#cropperimage" aria-hidden="true">#</a> CropperImage</h1><p><code>CropperImage</code> 接口提供了用于操作 <code>&lt;cropper-image&gt;</code> 元素的布局和表示的属性和方法。</p><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><h3 id="基本" tabindex="-1"><a class="header-anchor" href="#基本" aria-hidden="true">#</a> 基本</h3>',4),t=(0,a._)("div",{class:"language-html ext-html"},[(0,a._)("pre",{class:"language-html"},[(0,a._)("code",null,[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("cropper-image")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("cropper-image")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n")])])],-1),s=(0,a._)("div",{class:"custom-container tip"},[(0,a._)("p",{class:"custom-container-title"},"提示"),(0,a._)("p",null,[(0,a.Uk)("此元素的默认宽度和高度为 "),(0,a._)("code",null,"0"),(0,a.Uk)("。")])],-1),i=(0,a._)("h3",{id:"有图片源",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#有图片源","aria-hidden":"true"},"#"),(0,a.Uk)(" 有图片源")],-1),r=(0,a._)("div",{class:"language-html ext-html"},[(0,a._)("pre",{class:"language-html"},[(0,a._)("code",null,[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("cropper-image")]),(0,a.Uk)(),(0,a._)("span",{class:"token attr-name"},"src"),(0,a._)("span",{class:"token attr-value"},[(0,a._)("span",{class:"token punctuation attr-equals"},"="),(0,a._)("span",{class:"token punctuation"},'"'),(0,a.Uk)("/cropperjs/v2/picture.jpg"),(0,a._)("span",{class:"token punctuation"},'"')]),(0,a.Uk)(),(0,a._)("span",{class:"token attr-name"},"alt"),(0,a._)("span",{class:"token attr-value"},[(0,a._)("span",{class:"token punctuation attr-equals"},"="),(0,a._)("span",{class:"token punctuation"},'"'),(0,a.Uk)("Picture"),(0,a._)("span",{class:"token punctuation"},'"')]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("cropper-image")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n")])])],-1),c=(0,a._)("h2",{id:"属性",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#属性","aria-hidden":"true"},"#"),(0,a.Uk)(" 属性")],-1),d=(0,a.Uk)("从其父级 "),p=(0,a._)("code",null,"CropperElement",-1),u=(0,a.Uk)(" 继承属性，并实现以下属性："),g=(0,a.uE)('<table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>可选值</th><th>描述</th></tr></thead><tbody><tr><td>rotatable</td><td><code>boolean</code></td><td><code>true</code></td><td>-</td><td>指示此元素是否可旋转。</td></tr><tr><td>scalable</td><td><code>boolean</code></td><td><code>true</code></td><td>-</td><td>指示此元素是否可缩放。</td></tr><tr><td>skewable</td><td><code>boolean</code></td><td><code>true</code></td><td>-</td><td>指示此元素是否可倾斜。</td></tr><tr><td>slottable</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td><td>指示此元素是否启用默认插槽。</td></tr><tr><td>translatable</td><td><code>boolean</code></td><td><code>true</code></td><td>-</td><td>指示此元素是否可移动。</td></tr></tbody></table><p>默认情况下，内置的 <code>&lt;img&gt;</code> 元素将继承以下属性：</p><ul><li><code>alt</code></li><li><code>crossorigin</code></li><li><code>decoding</code></li><li><code>importance</code></li><li><code>loading</code></li><li><code>referrerpolicy</code></li><li><code>sizes</code></li><li><code>src</code></li><li><code>srcset</code></li></ul><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2><h3 id="ready" tabindex="-1"><a class="header-anchor" href="#ready" aria-hidden="true">#</a> $ready</h3><ul><li><p><strong>语法</strong>：</p><ul><li><code>$ready()</code></li><li><code>$ready(callback)</code></li></ul></li><li><p><strong>参数</strong>：</p><ul><li><code>callback</code>： <ul><li>类型：<code>Function</code></li><li>成功加载图片后执行的回调。</li></ul></li></ul></li><li><p><strong>返回值</strong>：</p><ul><li>类型：<code>Promise</code></li><li>一个以图片元素为给定值解析后的 Promise。</li></ul></li><li><p><strong>示例</strong>：</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> cropperImage <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CropperImage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\ncropperImage<span class="token punctuation">.</span><span class="token function">$ready</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">image</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>image<span class="token punctuation">.</span>naturalWidth<span class="token punctuation">,</span> image<span class="token punctuation">.</span>naturalHeight<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ncropperImage<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&#39;/cropperjs/v2/picture.jpg&#39;</span><span class="token punctuation">;</span>\n</code></pre></div></li></ul><p>成功加载图像后延迟执行回调。</p><h3 id="center" tabindex="-1"><a class="header-anchor" href="#center" aria-hidden="true">#</a> $center</h3><ul><li><strong>语法</strong>： <ul><li><code>$center()</code></li><li><code>$center(size)</code></li></ul></li><li><strong>参数</strong>： <ul><li><code>size</code>： <ul><li>类型：<code>string</code></li><li>可选值：<code>&#39;contain&#39;</code>, and <code>&#39;cover&#39;</code>.</li><li>图像的尺寸模式。</li></ul></li></ul></li><li><strong>返回值</strong>： <ul><li>类型：<code>CropperImage</code></li><li>元素实例。</li></ul></li></ul><p>将图像与其父元素的中心对齐。</p><h3 id="move" tabindex="-1"><a class="header-anchor" href="#move" aria-hidden="true">#</a> $move</h3><ul><li><strong>语法</strong>： <ul><li><code>$move(x)</code></li><li><code>$move(x, y)</code></li></ul></li><li><strong>参数</strong>： <ul><li><code>x</code>： <ul><li>类型：<code>number</code></li><li>水平方向的移动距离。</li></ul></li><li><code>y</code>： <ul><li>类型：<code>number</code></li><li>默认值：<code>x</code></li><li>垂直方向的移动距离。</li></ul></li></ul></li><li><strong>返回值</strong>： <ul><li>类型：<code>CropperImage</code></li><li>元素实例。</li></ul></li></ul><p>移动图像。</p><h3 id="moveto" tabindex="-1"><a class="header-anchor" href="#moveto" aria-hidden="true">#</a> $moveTo</h3><ul><li><strong>语法</strong>： <ul><li><code>$moveTo(x)</code></li><li><code>$moveTo(x, y)</code></li></ul></li><li><strong>参数</strong>： <ul><li><code>x</code>： <ul><li>类型：<code>number</code></li><li>水平方向的新位置。</li></ul></li><li><code>y</code>： <ul><li>类型：<code>number</code></li><li>默认值：<code>x</code></li><li>垂直方向的新位置。</li></ul></li></ul></li><li><strong>返回值</strong>： <ul><li>类型：<code>CropperImage</code></li><li>元素实例。</li></ul></li></ul><p>移动图像到指定位置。</p><h3 id="rotate" tabindex="-1"><a class="header-anchor" href="#rotate" aria-hidden="true">#</a> $rotate</h3><ul><li><strong>语法</strong>：<code>$rotate(angle)</code></li><li><strong>参数</strong>： <ul><li><code>angle</code>： <ul><li>类型：<code>number | string</code></li><li>旋转角度（以弧度为单位）。默认单位是 <code>rad</code>。</li></ul></li><li><code>x</code>： <ul><li>类型：<code>number</code></li><li>默认值：图像在水平方向的中心。</li><li>水平方向的旋转原点。</li></ul></li><li><code>y</code>： <ul><li>类型：<code>number</code></li><li>默认值：图像在垂直方向的中心。</li><li>垂直方向的旋转原点。</li></ul></li></ul></li><li><strong>返回值</strong>： <ul><li>类型：<code>CropperImage</code></li><li>元素实例。</li></ul></li><li><strong>示例</strong>： <ul><li><code>$rotate(0.8)</code></li><li><code>$rotate(&#39;0.8rad&#39;)</code></li><li><code>$rotate(&#39;45deg&#39;)</code></li><li><code>$rotate(&#39;50grad&#39;)</code></li><li><code>$rotate(&#39;0.1turn&#39;)</code></li><li><code>$rotate(&#39;90deg&#39;, 0, 0)</code></li></ul></li></ul>',18),m=(0,a.Uk)("旋转图像。它类似于 CSS 函数 "),k={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/rotate()",target:"_blank",rel:"noopener noreferrer"},h=(0,a.Uk)("rotate()"),f=(0,a.Uk)(" 或 "),b={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/rotate",target:"_blank",rel:"noopener noreferrer"},v=(0,a.Uk)("CanvasRenderingContext2D.rotate()"),_=(0,a.Uk)("。"),C=(0,a.uE)('<h3 id="zoom" tabindex="-1"><a class="header-anchor" href="#zoom" aria-hidden="true">#</a> $zoom</h3><ul><li><p><strong>语法</strong>：</p><ul><li><code>$zoom(scale)</code></li><li><code>$zoom(scale, x, y)</code></li></ul></li><li><p><strong>参数</strong>：</p><ul><li><code>scale</code>： <ul><li>类型：<code>number</code></li><li>缩放系数。正数表示放大，负数表示缩小。</li></ul></li><li><code>x</code>： <ul><li>类型：<code>number</code></li><li>默认值：图像在水平方向的中心。</li><li>水平方向的缩放原点。</li></ul></li><li><code>y</code>： <ul><li>类型：<code>number</code></li><li>默认值：图像在垂直方向的中心。</li><li>垂直方向的缩放原点。</li></ul></li></ul></li><li><p><strong>返回值</strong>：</p><ul><li>类型：<code>CropperImage</code></li><li>元素实例。</li></ul></li><li><p><strong>示例</strong>：</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>cropperImage<span class="token punctuation">.</span><span class="token function">$zoom</span><span class="token punctuation">(</span><span class="token number">0.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 放大 10%</span>\ncropperImage<span class="token punctuation">.</span><span class="token function">$zoom</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">0.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 缩小 10%</span>\ncropperImage<span class="token punctuation">.</span><span class="token function">$zoom</span><span class="token punctuation">(</span><span class="token number">0.1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 以图片左上角为原点放大 10%</span>\ncropperImage<span class="token punctuation">.</span><span class="token function">$zoom</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">0.1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 以图片左上角为原点缩小 10%</span>\n</code></pre></div></li></ul><p>缩放图像。</p><h3 id="scale" tabindex="-1"><a class="header-anchor" href="#scale" aria-hidden="true">#</a> $scale</h3><ul><li><p><strong>语法</strong>：</p><ul><li><code>$scale(x)</code></li><li><code>$scale(x, y)</code></li></ul></li><li><p><strong>参数</strong>：</p><ul><li><code>x</code>： <ul><li>类型：<code>number</code></li><li>水平方向的缩放系数。</li></ul></li><li><code>y</code>： <ul><li>类型：<code>number</code></li><li>默认值：<code>x</code></li><li>垂直方向的缩放系数。</li></ul></li></ul></li><li><p><strong>返回值</strong>：</p><ul><li>类型：<code>CropperImage</code></li><li>元素实例。</li></ul></li><li><p><strong>示例</strong>：</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>cropperImage<span class="token punctuation">.</span><span class="token function">$scale</span><span class="token punctuation">(</span><span class="token number">1.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 放大 10%</span>\ncropperImage<span class="token punctuation">.</span><span class="token function">$scale</span><span class="token punctuation">(</span><span class="token number">0.9</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 缩小 10%</span>\ncropperImage<span class="token punctuation">.</span><span class="token function">$scale</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 翻转水平和垂直方向</span>\ncropperImage<span class="token punctuation">.</span><span class="token function">$scale</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 翻转水平方向</span>\ncropperImage<span class="token punctuation">.</span><span class="token function">$scale</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 翻转垂直方向</span>\n</code></pre></div></li></ul>',5),$=(0,a.Uk)("缩放图像。它类似于 CSS 函数 "),x={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/scale()",target:"_blank",rel:"noopener noreferrer"},U=(0,a.Uk)("scale()"),z=(0,a.Uk)(" 或 "),I={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/scale",target:"_blank",rel:"noopener noreferrer"},y=(0,a.Uk)("CanvasRenderingContext2D.scale()"),W=(0,a.Uk)("。"),w=(0,a.uE)('<h3 id="skew" tabindex="-1"><a class="header-anchor" href="#skew" aria-hidden="true">#</a> $skew</h3><ul><li><strong>语法</strong>： <ul><li><code>$skew(x)</code></li><li><code>$skew(x, y)</code></li></ul></li><li><strong>参数</strong>： <ul><li><code>x</code>： <ul><li>类型：<code>number | string</code></li><li>水平方向的倾斜角度。默认单位是 <code>rad</code>。</li></ul></li><li><code>y</code>： <ul><li>类型：<code>number | string</code></li><li>默认值：<code>x</code></li><li>垂直方向的倾斜角度。默认单位是 <code>rad</code>。</li></ul></li></ul></li><li><strong>返回值</strong>： <ul><li>类型：<code>CropperImage</code></li><li>元素实例。</li></ul></li><li><strong>示例</strong>： <ul><li><code>$skew(0.8)</code></li><li><code>$skew(&#39;0.8rad&#39;)</code></li><li><code>$skew(&#39;45deg&#39;)</code></li><li><code>$skew(&#39;50grad&#39;)</code></li><li><code>$skew(&#39;0.1turn&#39;)</code></li><li><code>$skew(0, 0.8)</code></li></ul></li></ul>',2),S=(0,a.Uk)("倾斜图像。它类似于 CSS 函数 "),T={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/skew()",target:"_blank",rel:"noopener noreferrer"},j=(0,a.Uk)("skew()"),D=(0,a.Uk)("。"),R=(0,a.uE)('<h3 id="translate" tabindex="-1"><a class="header-anchor" href="#translate" aria-hidden="true">#</a> $translate</h3><ul><li><strong>语法</strong>： <ul><li><code>$translate(x)</code></li><li><code>$translate(x, y)</code></li></ul></li><li><strong>参数</strong>： <ul><li><code>x</code>： <ul><li>类型：<code>number</code></li><li>水平方向的平移距离。</li></ul></li><li><code>y</code>： <ul><li>类型：<code>number</code></li><li>默认值：<code>x</code></li><li>垂直方向的平移距离。</li></ul></li></ul></li><li><strong>返回值</strong>： <ul><li>类型：<code>CropperImage</code></li><li>元素实例。</li></ul></li></ul>',2),N=(0,a.Uk)("平移图像。它类似于 CSS 函数 "),E={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/translate()",target:"_blank",rel:"noopener noreferrer"},A=(0,a.Uk)("translate()"),P=(0,a.Uk)(" 或 "),q={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/translate",target:"_blank",rel:"noopener noreferrer"},O=(0,a.Uk)("CanvasRenderingContext2D.translate()"),L=(0,a.Uk)("。"),F=(0,a.uE)('<h3 id="transform" tabindex="-1"><a class="header-anchor" href="#transform" aria-hidden="true">#</a> $transform</h3><ul><li><strong>语法</strong>：<code>$transform(a, b, c, d, e, f)</code></li><li><strong>参数</strong>： <ul><li><code>a</code>： <ul><li>类型：<code>number</code></li><li>水平方向的缩放系数。</li></ul></li><li><code>b</code>： <ul><li>类型：<code>number</code></li><li>垂直方向的倾斜角度。</li></ul></li><li><code>c</code>： <ul><li>类型：<code>number</code></li><li>水平方向的倾斜角度。</li></ul></li><li><code>d</code>： <ul><li>类型：<code>number</code></li><li>垂直方向的缩放系数。</li></ul></li><li><code>e</code>： <ul><li>类型：<code>number</code></li><li>水平方向的平移距离。</li></ul></li><li><code>f</code>： <ul><li>类型：<code>number</code></li><li>垂直方向的平移距离。</li></ul></li></ul></li><li><strong>返回值</strong>： <ul><li>类型：<code>CropperImage</code></li><li>元素实例。</li></ul></li></ul>',2),Z=(0,a.Uk)("变换图像。它类似于 CSS 函数 "),H={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-function/matrix()",target:"_blank",rel:"noopener noreferrer"},J=(0,a.Uk)("matrix()"),M=(0,a.Uk)(" 或 "),B={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/transform",target:"_blank",rel:"noopener noreferrer"},G=(0,a.Uk)("CanvasRenderingContext2D.transform()"),K=(0,a.Uk)("。"),Q=(0,a.uE)('<h3 id="settransform" tabindex="-1"><a class="header-anchor" href="#settransform" aria-hidden="true">#</a> $setTransform</h3><ul><li><strong>语法</strong>： <ul><li><code>$setTransform(a, b, c, d, e, f)</code></li><li><code>$setTransform(a)</code></li></ul></li><li><strong>参数</strong>： <ul><li><code>a</code>： <ul><li>类型：<code>number | Array</code></li><li>水平方向的缩放系数，或变换矩阵。</li></ul></li><li><code>b</code>： <ul><li>类型：<code>number</code></li><li>垂直方向的倾斜角度。</li></ul></li><li><code>c</code>： <ul><li>类型：<code>number</code></li><li>水平方向的倾斜角度。</li></ul></li><li><code>d</code>： <ul><li>类型：<code>number</code></li><li>垂直方向的缩放系数。</li></ul></li><li><code>e</code>： <ul><li>类型：<code>number</code></li><li>水平方向的平移距离。</li></ul></li><li><code>f</code>： <ul><li>类型：<code>number</code></li><li>垂直方向的平移距离。</li></ul></li></ul></li><li><strong>返回值</strong>： <ul><li>类型：<code>CropperImage</code></li><li>元素实例。</li></ul></li></ul>',2),V=(0,a.Uk)("将当前变换重置（覆盖）为指定的单位矩阵，然后调用由该方法的参数描述的变换。这使你可以缩放、旋转、平移（移动）和倾斜上下文。它类似于 "),X={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/setTransform",target:"_blank",rel:"noopener noreferrer"},Y=(0,a.Uk)("CanvasRenderingContext2D.setTransform()"),ee=(0,a.Uk)("。"),ne=(0,a.uE)('<h3 id="gettransform" tabindex="-1"><a class="header-anchor" href="#gettransform" aria-hidden="true">#</a> $getTransform</h3><ul><li><strong>语法</strong>：<code>$getTransform()</code></li><li><strong>返回值</strong>： <ul><li>类型：<code>Array</code></li><li>元素的当前变换矩阵。</li></ul></li></ul>',2),le=(0,a.Uk)("检索应用于元素的当前变换矩阵。它类似于 "),ae={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/getTransform",target:"_blank",rel:"noopener noreferrer"},oe=(0,a.Uk)("CanvasRenderingContext2D.getTransform()"),te=(0,a.Uk)("。"),se=(0,a.uE)('<h3 id="resettransform" tabindex="-1"><a class="header-anchor" href="#resettransform" aria-hidden="true">#</a> $resetTransform</h3><ul><li><strong>语法</strong>： <ul><li><code>$resetTransform()</code></li></ul></li><li><strong>等同于</strong>： <ul><li><code>$setTransform(1, 0, 0, 1, 0, 0)</code></li><li><code>$setTransform([1, 0, 0, 1, 0, 0])</code></li></ul></li><li><strong>返回值</strong>： <ul><li>类型：<code>CropperImage</code></li><li>元素实例。</li></ul></li></ul>',2),ie=(0,a.Uk)("将当前变换重置为初始单位矩阵。它类似于 "),re={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/resetTransform",target:"_blank",rel:"noopener noreferrer"},ce=(0,a.Uk)("CanvasRenderingContext2D.resetTransform()"),de=(0,a.Uk)("。"),pe=(0,a.uE)('<h2 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h2><h3 id="transform-1" tabindex="-1"><a class="header-anchor" href="#transform-1" aria-hidden="true">#</a> transform</h3><ul><li>事件： <ul><li><strong>event.bubbles</strong>：<code>true</code></li><li><strong>event.cancelable</strong>：<code>true</code></li><li><strong>event.composed</strong>：<code>true</code></li><li><strong>event.detail</strong>： <ul><li>类型：<code>Object</code></li><li>图像的变换信息。</li></ul></li><li><strong>event.detail.matrix</strong>： <ul><li>类型：<code>Array</code></li><li>新的（下一个）矩阵对象。</li></ul></li><li><strong>event.detail.oldMatrix</strong>： <ul><li>类型：<code>Array</code></li><li>旧的（当前）矩阵对象。</li></ul></li></ul></li></ul>',3),ue=(0,a.Uk)("当元素的 "),ge={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform",target:"_blank",rel:"noopener noreferrer"},me=(0,a._)("code",null,"transform",-1),ke=(0,a.Uk)(" CSS 属性将要变更时，将触发该事件。"),he=(0,a.uE)('<h2 id="插槽" tabindex="-1"><a class="header-anchor" href="#插槽" aria-hidden="true">#</a> 插槽</h2><p>此元素中没有可用的插槽。</p><blockquote><p>你可以通过将 <code>slottable</code> 属性设置为 <code>true</code> 来启用默认插槽：</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cropper-image</span> <span class="token attr-name">slottable</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cropper-image</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div></blockquote>',3),fe={};var be=(0,l(3744).Z)(fe,[["render",function(e,n){const l=(0,a.up)("LiveDemo"),fe=(0,a.up)("ClientOnly"),be=(0,a.up)("RouterLink"),ve=(0,a.up)("ExternalLinkIcon");return(0,a.wg)(),(0,a.iD)("div",null,[o,(0,a.Wm)(fe,null,{default:(0,a.w5)((()=>[(0,a.Wm)(l,null,{default:(0,a.w5)((()=>[t])),_:1})])),_:1}),s,i,(0,a.Wm)(fe,null,{default:(0,a.w5)((()=>[(0,a.Wm)(l,null,{default:(0,a.w5)((()=>[r])),_:1})])),_:1}),c,(0,a._)("p",null,[d,(0,a.Wm)(be,{to:"/zh/api/cropper-element.html"},{default:(0,a.w5)((()=>[p])),_:1}),u]),g,(0,a._)("p",null,[m,(0,a._)("a",k,[h,(0,a.Wm)(ve)]),f,(0,a._)("a",b,[v,(0,a.Wm)(ve)]),_]),C,(0,a._)("p",null,[$,(0,a._)("a",x,[U,(0,a.Wm)(ve)]),z,(0,a._)("a",I,[y,(0,a.Wm)(ve)]),W]),w,(0,a._)("p",null,[S,(0,a._)("a",T,[j,(0,a.Wm)(ve)]),D]),R,(0,a._)("p",null,[N,(0,a._)("a",E,[A,(0,a.Wm)(ve)]),P,(0,a._)("a",q,[O,(0,a.Wm)(ve)]),L]),F,(0,a._)("p",null,[Z,(0,a._)("a",H,[J,(0,a.Wm)(ve)]),M,(0,a._)("a",B,[G,(0,a.Wm)(ve)]),K]),Q,(0,a._)("p",null,[V,(0,a._)("a",X,[Y,(0,a.Wm)(ve)]),ee]),ne,(0,a._)("p",null,[le,(0,a._)("a",ae,[oe,(0,a.Wm)(ve)]),te]),se,(0,a._)("p",null,[ie,(0,a._)("a",re,[ce,(0,a.Wm)(ve)]),de]),pe,(0,a._)("p",null,[ue,(0,a._)("a",ge,[me,(0,a.Wm)(ve)]),ke]),he])}]])},3744:function(e,n){n.Z=(e,n)=>{const l=e.__vccOpts||e;for(const[e,a]of n)l[e]=a;return l}}}]);