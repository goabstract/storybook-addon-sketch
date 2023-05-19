import { addons, types } from '@storybook/manager-api';
import { ADDON_ID, NAME } from './constants';
import SketchPlugin from './components/sketch-download';

addons.register(ADDON_ID, () => {
  addons.add(ADDON_ID, {
    type: types.TOOL,
    title: NAME,
    match: ({ viewMode }) => viewMode === 'story',
    render: SketchPlugin
  });
});
