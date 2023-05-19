import { useChannel } from '@storybook/preview-api';
import { DOWNLOAD_EVENT } from './constants';
import downloadFile from './download-file';

function downloadPage({ title }: { title: string }) {
  console.log('downloadPage')

  const page =(window as any).page2layers.getPage({
    title,
    width: 1920,
    height: 5000
  });

  page.layers = [
    (window as any).page2layers.getSymbol({
      fixPseudo: true,
      removePreviewMargin: true,
      querySelector: '#storybook-root'
    })
  ];

  downloadFile(`${title}.asketch.json`, page);
}

const decorator = (getStory: any) => {
  useChannel({
    [DOWNLOAD_EVENT]: downloadPage
  })
 
  return getStory();
};

const preview = {
  decorators: [decorator]
};

export default preview;
