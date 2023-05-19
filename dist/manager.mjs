import { addons, types, useStorybookApi, useChannel } from '@storybook/manager-api';
import r from 'react';
import { IconButton, Icons } from '@storybook/components';

var o="sketch",n=`${o}:download`,i="Sketch Export";function e(){let t=useStorybookApi(),m=useChannel({}),p=r.useCallback(()=>{m(n,{title:t.getCurrentStoryData().id});},[]);return r.createElement(IconButton,{onClick:p,title:"Download Sketch File"},r.createElement(Icons,{icon:"download"}))}addons.register(o,()=>{addons.add(o,{type:types.TOOL,title:i,match:({viewMode:t})=>t==="story",render:e});});
//# sourceMappingURL=out.js.map
//# sourceMappingURL=manager.mjs.map