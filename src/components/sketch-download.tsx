import React from 'react';
import { useStorybookApi, useChannel } from '@storybook/manager-api';
import { Icons, IconButton } from '@storybook/components';
import { DOWNLOAD_EVENT } from '../constants';

export default function SketchPlugin() {
  const api = useStorybookApi();
  const emit = useChannel({});

  const downloadCurrent = React.useCallback(() => {
    console.log('downloadCurrent');
    emit(DOWNLOAD_EVENT, { title: api.getCurrentStoryData().id });
  }, []);

  return (
    <IconButton onClick={downloadCurrent} title="Download Sketch File">
      <Icons icon="download" />
    </IconButton>
  );
}
