import type { ReactElement } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import color from '../../../../tokens/color.json' with { type: 'json' };
import light from '../../../../tokens/semantic.light.json' with { type: 'json' };
import typography from '../../../../tokens/typography.json' with { type: 'json' };
import * as exports from '../index.js';

const meta: Meta = { title: 'Foundations' };
export default meta;

const names = (group: object) =>
  Object.keys(group).filter((key) => !key.startsWith('$'));
const palettes = Object.entries(color.color as Record<string, unknown>).filter(
  (entry): entry is [string, object] =>
    typeof entry[1] === 'object' &&
    entry[1] !== null &&
    !('$value' in entry[1]),
);

function Swatch({ cssVar, label }: { cssVar: string; label: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div
        className="h-14 rounded-lg border border-outline-variant"
        style={{ background: `var(${cssVar})` }}
      />
      <span className="typography-subtext-small text-on-surface-variant">
        {label}
      </span>
    </div>
  );
}

export const Colors: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-4">
        <h2 className="typography-title-small">Semantic</h2>
        <div className="grid grid-cols-6 gap-4">
          {names(light.semantic).map((name) => (
            <Swatch
              key={name}
              cssVar={`--cowork-semantic-${name}`}
              label={name}
            />
          ))}
        </div>
      </section>
      {palettes.map(([group, steps]) => (
        <section key={group} className="flex flex-col gap-4">
          <h2 className="typography-title-small">Primitive / {group}</h2>
          <div className="grid grid-cols-7 gap-4">
            {names(steps).map((step) => (
              <Swatch
                key={step}
                cssVar={`--cowork-primitive-${group}-${step}`}
                label={`${group}-${step}`}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  ),
};

export const Typography: StoryObj = {
  render: () => (
    <div className="flex flex-col divide-y divide-outline-variant">
      {Object.entries(typography.typography)
        .filter(([key]) => !key.startsWith('$'))
        .map(([name, token]) => {
          const { fontSize, lineHeight, fontWeight } = (
            token as {
              $value: {
                fontSize: number;
                lineHeight: number;
                fontWeight: string;
              };
            }
          ).$value;
          const weight = fontWeight.slice(1, -1).split('.').at(-1);
          return (
            <div key={name} className="flex items-center gap-8 py-4">
              <div className="w-64 shrink-0 typography-subtext-medium text-on-surface-variant">
                typography-{name}
                <br />
                {fontSize}/{lineHeight} · {weight}
              </div>
              <p
                style={{
                  fontSize: `var(--cowork-typography-${name}-font-size)`,
                  lineHeight: `var(--cowork-typography-${name}-line-height)`,
                  fontWeight: `var(--font-weight-${weight})`,
                }}
              >
                함께 만드는 협업 Cowork
              </p>
            </div>
          );
        })}
    </div>
  ),
};

const icons = Object.entries(exports).filter(
  ([name]) =>
    (name.endsWith('Icon') && name !== 'Icon') || name === 'CoworkLogo',
) as [string, (props: { width: number; height: number }) => ReactElement][];

export const Icons: StoryObj = {
  render: () => (
    <div className="grid grid-cols-8 gap-4">
      {icons.map(([name, Component]) => (
        <div
          key={name}
          className="flex flex-col items-center gap-2 rounded-lg bg-surface-container p-4"
        >
          <Component width={24} height={24} />
          <span className="typography-subtext-small text-on-surface-variant">
            {name}
          </span>
        </div>
      ))}
    </div>
  ),
};
