'use strict';

var managerApi = require('@storybook/manager-api');
var r = require('react');
var components = require('@storybook/components');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var r__default = /*#__PURE__*/_interopDefault(r);

var o="sketch",e=`${o}:download`,i="Sketch Export";function n(){let t=managerApi.useStorybookApi(),l=managerApi.useChannel({}),d=r__default.default.useCallback(()=>{console.log("downloadCurrent"),l(e,{title:t.getCurrentStoryData().id});},[]);return r__default.default.createElement(components.IconButton,{onClick:d,title:"Download Sketch File"},r__default.default.createElement(components.Icons,{icon:"download"}))}managerApi.addons.register(o,()=>{managerApi.addons.add(o,{type:managerApi.types.TOOL,title:i,match:({viewMode:t})=>t==="story",render:n});});
//# sourceMappingURL=out.js.map
//# sourceMappingURL=manager.js.map