import { addons, types, useStorybookApi, useChannel } from '@storybook/manager-api';
import r from 'react';
import { IconButton, Icons } from '@storybook/components';

var o="sketch",e=`${o}:download`,i="Sketch Export";function n(){let t=useStorybookApi(),l=useChannel({}),d=r.useCallback(()=>{console.log("downloadCurrent"),l(e,{title:t.getCurrentStoryData().id});},[]);return r.createElement(IconButton,{onClick:d,title:"Download Sketch File"},r.createElement(Icons,{icon:"download"}))}addons.register(o,()=>{addons.add(o,{type:types.TOOL,title:i,match:({viewMode:t})=>t==="story",render:n});});
//# sourceMappingURL=out.js.map
//# sourceMappingURL=manager.mjs.map