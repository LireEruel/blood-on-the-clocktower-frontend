# blood-on-the-clocktower-frontend

## 기술 스택

1. Vue3 (JS 프레임워크)
   - Vue는 흔히 Vue 2와 Vue 3으로 나뉩니다. Vue 2는 2023년을 마지막으로 기술 지원이 끊기기 때문에 Vue 3으로 선택하였습니다.
   - **composition API**
     - Vue 3는 options API와 composition API 모두 선택할 수 있습니다. 팀원들이 기존 사용하던 프로그래밍 언어로 하는 개발이 composition API와 더 친숙할 것이라고 예측하여 composition API로 선택하였습니다.
   - **script setup**
     - 반복되는 코드를 줄이고 작업 속도를 높이기 위해 간결한 script setup을 선택했습니다.
2. TypeScript (언어)
   - TypeScript가 이제 주류로 자리잡고 있기도 하고, 함께할 팀원들에게는 TS가 더 친숙하다는 기존의 합의가 있어 TS로 선택하였습니다.
3. Vite (빌드 도구)
   - Vue3 의 공식 빌드 도구로 채택되기도 했고, web-pack보다 빠르고 간결하여 선택했습니다.

## 실행 방법

```sh
yarn
```

- 만약 terminal에서 yarn명령어를 인식할 수 없다면 yarn 먼저 설치해주세요. [설치방법](https://www.biew.co.kr/entry/Yarn-Package-Manager-%EC%84%A4%EC%B9%98-%EB%B0%8F-%EC%82%AC%EC%9A%A9%EB%B0%A9%EB%B2%95%EC%82%AC%EC%9A%A9-%EA%B0%80%EC%9D%B4%EB%93%9C)
- 이 명령어를 통해 프로젝트 개발 및 실행에 필요한 패키지를 자동으로 설치하게 됩니다.
- 앞으로도 패키지 설치를 위해서는 npm 대신 yarn 을 사용해주세요.

```sh
yarn dev
```

- 실행 후 잠시 기다리면 실행이 됩니다.

## 프로젝트 구조

[bulletproof-vue](https://github.com/hirotaka/bulletproof-vue) 를 참고하여 프로젝트 구조를 잡았습니다. api도 설정은 넣어 놨지만, socket만 사용할 경우 추구 학제할 예정입니다.

```
|-- husky //Git 훅을 사용하여 코드베이스를 더 깔끔하게 유지하는 데 도움이 되는 라이브러리
    |-- pre-commit // 커밋 전에 eslint와 타입 체크
    |-- pre-push // push 전에 main와 dev인지 브랜치 체크하고 main/dev에 직접적으로 push할 수 없도록 함.
|-- dist // build된 파일이 들어갑니다.
|--src
    |-- api // api를 사용하지 않게 되면 삭제 예정
        |- auth
            |- auth.http // http 문서로 api를 쉽게 테스트할 수 있습니다.
            |- auth.ts
    |-- assets // img, scss 같은 것들 보관하는 곳
    |-- components // 공통 컴포넌트
        |-- layouts
            |-- DefaultHeader.vue // 채팅방에서 쓰이는 기본 header
        |-- ChatArea.vue
        |-- RoomList.vue
        |-- TimerLabel.vue
    |-- lib // 라이브러리 사용시 프로젝트에 맞게 재구성한 것들을 넣어놓습니다.
        |-- commonAxios.ts
    |-- router // ★ 페이지와 url 연결하는 곳 ★
        |-- index.ts
    |-- stores // 상태 관리 store들 우리는 상태관리에 pinia를 사용합니다.
        |-- chat.ts
        |-- user.ts
    |-- types // 객체들의 타입 정의
        |-- chat.ts
    |-- views // 화면 폴더
        |-- CentralPlaza
            |-- CentralPlazaMorning.vue // 중앙 광장 - 낮
        |-- LandingView.vue
    |-- App.vue // 최상위 컴포넌트 ★바꿀 일 있으면 PR시 App.vue 수정했음을 반드시 적어주세요
    |-- main.ts // 앱의 전역적인 설정을 합니다. ★바꿀 일 있으면 PR시 App.vue 수정했음을 반드시 적어주세요
    |-- shims-vue.d.ts // .vue 파일에 대한 TS 설정입니다. 수정하지 마세요!
|-- eslintrc.json // 코딩스타일을 일관적으로 유지하기 위한 설정
|-- index.html // 기본 html 파일입니다. ★바꿀 일 있으면 PR시 App.vue 수정했음을 반드시 적어주세요
|-- vite.config.ts // 빌드 도구인 vite 설정입니다. ★바꿀 일 있으면 PR시 App.vue 수정했음을 반드시 적어주세요
|-- yarn.lock // 패키지 관리 도구인 yarn 설정 파일입니다. 자동 생성 되는 거니 임의로 수정하지 마세요.

```
