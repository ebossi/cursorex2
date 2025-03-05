# 프로젝트 규칙 및 가이드라인

## 컴포넌트 구성요소

### ShadCN Components

- 모든 UI 컴포넌트는 [ShadCN](https://shadcn.com/) 라이브러리를 사용해야 합니다.
- 컴포넌트 설치 전, `/components/ui` 디렉토리 내의 컴포넌트 목록을 확인해야 합니다.
- 컴포넌트를 설치하려면 다음 명령어를 사용하세요:
  - `npx shadcn@latest add`

### 아이콘

- 모든 아이콘은 [Lucide React](https://lucide-react.com/) 라이브러리를 사용해야 합니다.
- 아이콘 임포트 방법: `import { IconName } from "lucide-react"`
- 예시: `import { Search, Menu } from "lucide-react"`

### 컴포넌트 구조

- 모든 컴포넌트는 `/components` 디렉토리 내에 위치해야 합니다.
- UI 컴포넌트는 `/components/ui` 디렉토리에 위치해야 합니다.
- 페이지별 컴포넌트는 `/app` 디렉토리 내 해당 라우트에 위치해야 합니다.

## 성능 및 유지 보수

- 모든 컴포넌트는 TypeScript 타입을 정의해야 합니다.
- 컴포넌트는 재사용 가능하도록 설계되어야 합니다.

이 프로젝트에서는 다음의 규칙과 가이드라인을 준수합니다. 이 규칙들을 지키면, 코드의 유지 보수와 확장이 용이해질 것입니다!

## 시작하기

### 개발 서버 실행
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
