import assert from 'node:assert/strict';
import { test } from 'node:test';

import { buildCss, buildDart, loadTokens } from './build-tokens.mjs';

const tokens = loadTokens();

test('CSS: 라이트는 :root, 다크는 .dark에서 기본 팔레트를 참조한다', () => {
  const css = buildCss(tokens);
  const [rootBlock, darkBlock] = css.split('.dark {');
  assert.match(
    rootBlock,
    /--cowork-semantic-primary: var\(--cowork-primitive-red-500\);/,
  );
  assert.match(
    darkBlock,
    /--cowork-semantic-primary: var\(--cowork-primitive-red-400\);/,
  );
  assert.match(
    rootBlock,
    /--cowork-typography-display-small-font-size: 1.625rem;/,
  );
  assert.match(
    css,
    /@utility typography-label-small \{[^}]*var\(--cowork-typography-label-small-font-size\)[^}]*var\(--font-weight-semibold\)/,
  );
  assert.doesNotMatch(
    css,
    /--text-/,
    '글꼴 크기가 text-* 유틸리티로 노출되면 색 클래스와 충돌한다',
  );
});

test('Dart: 같은 원본에서 Color 상수와 TextStyle을 만든다', () => {
  const dart = buildDart(tokens);
  assert.match(dart, /static const Color red500 = Color\(0xFFF04452\);/);
  assert.match(
    dart,
    /class CoworkDarkColors \{[^}]*primary = CoworkPrimitiveColors\.red400;/,
  );
  assert.match(dart, /static const double s4 = 4\.0;/);
  assert.match(dart, /height: 35 \/ 26,/);
});

test('존재하지 않는 토큰을 참조하면 빌드가 실패한다', () => {
  const broken = structuredClone(tokens);
  broken.dark.semantic.primary.$value = '{color.red.450}';
  assert.throws(
    () => buildCss(broken),
    /Unknown token reference: \{color\.red\.450\}/,
  );
  assert.throws(() => buildDart(broken), /Unknown token reference/);
});
