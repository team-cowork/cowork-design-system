import type { Preview } from '@storybook/react-vite';

import './preview.css';

const preview: Preview = {
  globalTypes: {
    theme: {
      description: '라이트·다크 테마',
      toolbar: {
        title: 'Theme',
        icon: 'mirror',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: { theme: 'dark' },
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story, { globals }) => {
      document.documentElement.classList.toggle(
        'dark',
        globals.theme === 'dark',
      );
      return (
        <div className="min-h-screen bg-background p-8 font-cowork text-on-background">
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
