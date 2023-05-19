import { useChannel } from '@storybook/preview-api';
import { saveAs } from 'file-saver';

var a="sketch",t=`${a}:download`;var i=(o,e)=>{let n=new Blob([JSON.stringify(e)],{type:"text/plain;charset=utf-8"});saveAs(n,o);},r=i;function l({title:o}){let e=window.page2layers.getPage({title:o,width:1920,height:5e3});e.layers=[window.page2layers.getSymbol({fixPseudo:!0,removePreviewMargin:!0,querySelector:"#storybook-root"})],r(`${o}.asketch.json`,e);}var d=o=>(useChannel({[t]:l}),o()),p={decorators:[d]},h=p;

export { h as default };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=preview.mjs.map