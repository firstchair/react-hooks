/* eslint-disable react/jsx-no-literals */
import type { StoryObj } from '@storybook/react';
import { type ReactElement, useState } from 'react';
import { useEventListener } from './useEventListener.js';

export default {
  title: 'hooks/useEventListener',
};

function DemoComponent(): ReactElement {
  const [text, setText] = useState<ReadonlyArray<string>>([]);

  useEventListener(typeof document === 'undefined' ? undefined : document, 'focusin', (event) => {
    // eslint-disable-next-line no-console
    setText((previous) => [
      ...previous,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      (event.target as HTMLButtonElement).textContent!,
    ]);
  });

  return (
    <div>
      <button type="button">Button 1</button>
      <button type="button">Button 2</button>
      <button type="button">Button 3</button>

      <p>Change focus to listen to the focusin event on the document</p>

      <ul>
        {text.map((key, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={index}>{key}</li>
        ))}
      </ul>
    </div>
  );
}

export const Demo: StoryObj = {
  render() {
    return <DemoComponent />;
  },
};
