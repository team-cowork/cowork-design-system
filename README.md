# Cowork Design System

웹과 앱이 함께 쓰는 Cowork 디자인 시스템입니다. 토큰 원본은 `tokens/*.json` 하나이고, 여기서 웹용 CSS와 앱용 Dart를 만듭니다.

```
tokens/                 원본 토큰 (색, 라이트·다크 시맨틱, 글꼴, 간격·둥글기·크기)
scripts/build-tokens.mjs  tokens → CSS, Dart 생성
packages/web/           @team-cowork/design-system (npm): 토큰 CSS, 아이콘, React 컴포넌트, Storybook
packages/flutter/       cowork_design_tokens (git 의존성): Dart 토큰
```

## 명령어

| 명령             | 하는 일                                                                                                         |
| ---------------- | --------------------------------------------------------------------------------------------------------------- |
| `pnpm install`   | 의존성 설치                                                                                                     |
| `pnpm tokens`    | `tokens/*.json`으로 `packages/web/src/styles/tokens.css`, `packages/flutter/lib/cowork_design_tokens.dart` 생성 |
| `pnpm test`      | 토큰 빌드 검증                                                                                                  |
| `pnpm storybook` | Storybook 실행 (http://localhost:6006)                                                                          |
| `pnpm build`     | 토큰 생성 후 웹 패키지를 `packages/web/dist`로 빌드                                                             |

토큰을 바꿀 때는 JSON만 고치고 `pnpm tokens`로 생성 파일을 함께 커밋합니다. 생성 파일은 직접 고치지 않습니다.

## 웹에서 사용하기

```sh
pnpm add @team-cowork/design-system
```

```css
/* app/globals.css */
@import 'tailwindcss';
@import '@team-cowork/design-system/theme.css';
```

```ts
// next.config.ts
experimental: {
  optimizePackageImports: ['@team-cowork/design-system'],
},
```

```tsx
import { Button, PlusIcon } from '@team-cowork/design-system';
```

- `theme.css`가 토큰 변수, Tailwind 테마(`bg-primary`, `typography-label-small` 등), 패키지 컴포넌트의 클래스 스캔(`@source`)을 모두 포함합니다.
- 다크 모드는 `<html class="dark">`로 켭니다.
- 글꼴 파일은 패키지에 없습니다. 쓰는 쪽에서 Inter·Noto Sans KR을 불러옵니다.

## 앱에서 사용하기

```yaml
dependencies:
  cowork_design_tokens:
    git:
      url: https://github.com/team-cowork/cowork-design-system
      path: packages/flutter
      ref: v0.1.0
```

```dart
import 'package:cowork_design_tokens/cowork_design_tokens.dart';

CoworkDarkColors.primary;
CoworkTypography.labelSmall;
CoworkSpacing.s16;
```

## 버전 태그

앱은 `ref: v0.1.0`처럼 git 태그로 이 레포를 받습니다. `pubspec.lock`은 태그가 가리키던 커밋을 기록하므로, 같은 이름의 태그를 다른 커밋으로 옮기면 lock을 그대로 쓰는 쪽과 다시 만든 쪽이 서로 다른 값을 받습니다.

- 값을 바꿀 때는 기존 태그를 옮기지 않고 새 버전 태그(`v0.1.1`, `v0.2.0` 등)를 붙입니다.
- `v*` 태그는 Repository ruleset으로 갱신과 삭제를 막아 두었습니다.

## npm 배포

배포 전에 npm에 `team-cowork` org가 있어야 합니다(public 패키지는 무료).

```sh
cd packages/web
npm version patch
pnpm publish --access public
```

`prepublishOnly`가 빌드를 먼저 돌리고, `files`에 따라 `dist`만 올라갑니다. 앱은 같은 버전으로 `v0.1.0` 같은 git 태그를 붙여 참조합니다.
