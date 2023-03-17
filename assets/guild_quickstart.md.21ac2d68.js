import{_ as s,c as n,o as a,f as p}from"./app.09abd57f.js";const y=JSON.parse('{"title":"\u5FEB\u901F\u5F00\u59CB","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7528\u6CD5","slug":"\u7528\u6CD5"},{"level":3,"title":"\u7B2C\u4E00\u6B65 main.ts \u6587\u4EF6\u4E2D\u5F15\u7528\u7EC4\u4EF6\u96C6\u3001\u7EC4\u4EF6\u6837\u5F0F","slug":"\u7B2C\u4E00\u6B65-main-ts-\u6587\u4EF6\u4E2D\u5F15\u7528\u7EC4\u4EF6\u96C6\u3001\u7EC4\u4EF6\u6837\u5F0F"},{"level":3,"title":"\u7B2C\u4E8C\u6B65 ./plugin/index.ts \u6587\u4EF6\u4E2D\u5F15\u7528\u7EC4\u4EF6","slug":"\u7B2C\u4E8C\u6B65-plugin-index-ts-\u6587\u4EF6\u4E2D\u5F15\u7528\u7EC4\u4EF6"}],"relativePath":"guild/quickstart.md"}'),l={name:"guild/quickstart.md"},e=p(`<h1 id="\u5FEB\u901F\u5F00\u59CB" tabindex="-1">\u5FEB\u901F\u5F00\u59CB <a class="header-anchor" href="#\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a></h1><p>\u672C\u8282\u5C06\u4ECB\u7ECD\u5982\u4F55\u5728\u9879\u76EE\u4E2D\u4F7F\u7528 yzf-plus</p><h2 id="\u7528\u6CD5" tabindex="-1">\u7528\u6CD5 <a class="header-anchor" href="#\u7528\u6CD5" aria-hidden="true">#</a></h2><h3 id="\u7B2C\u4E00\u6B65-main-ts-\u6587\u4EF6\u4E2D\u5F15\u7528\u7EC4\u4EF6\u96C6\u3001\u7EC4\u4EF6\u6837\u5F0F" tabindex="-1">\u7B2C\u4E00\u6B65 main.ts \u6587\u4EF6\u4E2D\u5F15\u7528\u7EC4\u4EF6\u96C6\u3001\u7EC4\u4EF6\u6837\u5F0F <a class="header-anchor" href="#\u7B2C\u4E00\u6B65-main-ts-\u6587\u4EF6\u4E2D\u5F15\u7528\u7EC4\u4EF6\u96C6\u3001\u7EC4\u4EF6\u6837\u5F0F" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">import { createApp } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import App from &#39;./App.vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import router from &#39;./router&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import store from &#39;./store&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * \u6838\u5FC3</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">import &quot;yzf-plus/theme-chalk/css/index.css&quot;; //\u7EC4\u4EF6\u6837\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">import { usePlugins } from &#39;./utils/plugin&#39;; //\u7EC4\u4EF6\u96C6\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">const app = createApp(App); </span></span>
<span class="line"><span style="color:#A6ACCD;">usePlugins(app);  //use\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">app.use(store).use(router).mount(&#39;#app&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="\u7B2C\u4E8C\u6B65-plugin-index-ts-\u6587\u4EF6\u4E2D\u5F15\u7528\u7EC4\u4EF6" tabindex="-1">\u7B2C\u4E8C\u6B65 ./plugin/index.ts \u6587\u4EF6\u4E2D\u5F15\u7528\u7EC4\u4EF6 <a class="header-anchor" href="#\u7B2C\u4E8C\u6B65-plugin-index-ts-\u6587\u4EF6\u4E2D\u5F15\u7528\u7EC4\u4EF6" aria-hidden="true">#</a></h3><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * ZIcon\u3001ZButton \u7B49\u7EC4\u4EF6\u76F4\u63A5\u5F15\u5165\uFF0C\u5168\u5C40\u6CE8\u518C\u4F7F\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;"> * ZMessage\u3001ZDialog \u7B49\u7EC4\u4EF6\u6309\u9700\u5F15\u5165\uFF0C\u9875\u9762\u76F4\u63A5\u65B9\u6CD5\u8C03\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">import { App } from &quot;vue&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { ZIcon,ZButton } from &quot;yzf-plus&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const plugins = [</span></span>
<span class="line"><span style="color:#A6ACCD;">    ZIcon,</span></span>
<span class="line"><span style="color:#A6ACCD;">    ZButton</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export const usePlugins = (app: App) =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    plugins.map((itemPlugin)=&gt;{</span></span>
<span class="line"><span style="color:#A6ACCD;">        app.use(itemPlugin)</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,7),o=[e];function t(c,i,r,A,C,u){return a(),n("div",null,o)}const D=s(l,[["render",t]]);export{y as __pageData,D as default};
