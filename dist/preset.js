'use strict';

var r=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});function s(e=[]){return [...e,r.resolve("./manager.mjs")]}function a(e=[]){return [...e,r.resolve("./preview.mjs")]}var p={managerEntries:s,previewAnnotations:a,previewHead:e=>`
    ${e}
    <script async defer src="https://unpkg.com/story2sketch@1.7.1/lib/browser/page2layers.bundle.js" type="text/javascript"><\/script>
    `};

module.exports = p;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=preset.js.map