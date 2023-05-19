'use strict';

var managerApi = require('@storybook/manager-api');
var r = require('react');
var components = require('@storybook/components');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var r__default = /*#__PURE__*/_interopDefault(r);

var o="sketch",n=`${o}:download`,i="Sketch Export";function e(){let t=managerApi.useStorybookApi(),m=managerApi.useChannel({}),p=r__default.default.useCallback(()=>{m(n,{title:t.getCurrentStoryData().id});},[]);return r__default.default.createElement(components.IconButton,{onClick:p,title:"Download Sketch File"},r__default.default.createElement(components.Icons,{icon:"download"}))}managerApi.addons.register(o,()=>{managerApi.addons.add(o,{type:managerApi.types.TOOL,title:i,match:({viewMode:t})=>t==="story",render:e});});
//# sourceMappingURL=out.js.map
//# sourceMappingURL=manager.js.map