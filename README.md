## Hooks before

- 컴포넌트 내부에 상태가 있다면
  - class
- 컴포넌트 내부에 상태가 없다면
  - 라이프 사이클을 사용해야 한다면
    - class
  - 라이프 사이클에 관계 없다면
    - function

## Hooks after

- 구분 없이 class, function 사용

---

### Class 컴포넌트

```javascript
import React from "react";

class ClassComponent extends React.Component {
  render() {
    return <div>Hello</div>;
  }
}
// 사용할 때
ReactDOM.render(<ClassComponent />);
```

### Function 컴포넌트

```javascript
import React from "react";

function FunctionComponent() {
  return <div>Hello</div>;
}

// 두 번째 방법
const FunctionComponent = () => {
  return <div>Hello</div>;
};

//사용할 때
ReactDOM.render(<FunctionComponent />);
```

---

### React.createElement

```js
React.createElement(
  type, // 태그 이름 문자열 | 리액트 컴포넌트 | React.Fragment
  [props], // 리액트 컴포넌트에 넣어주는 데이터 객체
  [...children] // 자식으로 넣어주는 요소들
);
```

- 태그 이름 문자열 type

```js
ReactDOM.render(React.createElement("div", null, "Hello World"));
// <div>Hello World</div>
```

- 리액트 컴포넌트 type

```js
class ClassComponent extends React.Component {
  render() {
    return React.createElement("div", null, "Hello World");
  }
}
// <ClassComponent />
ReactDOM.render(React.createElement(ClassComponent, null, null));
// <div>Hello World</div>
```

- React.Fragment

```js
<div id="main"></div>;
ReactDOM.render(
  React.createElement(
    React.Fragment,
    null,
    `Hello World`,
    `Hello World`,
    `Hello World`
  ),
  document.querySelector("#main")
);
// <div id="main>
//  Hello World
//  Hello World
//  Hello World
// </div>
```

`React.Fragment`를 사용하면 원하는 부분 안에  
배열과 같이 내용을 넣을 수 있음

- 복잡한 리액트 엘리먼트 모임

```html
<div>
  <div>
    <h1>주제</h1>
    <ul>
      <li>Hello</li>
      <li>World</li>
    </ul>
  </div>
</div>
```

```js
ReactDOM.render(
  React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      null,
      React.createElement("h1", null, "주제"),
      React.createElement(
        "ul",
        null,
        React.createElement("li", null, "Hello"),
        React.createElement("li", null, "World")
      )
    )
  )
);
```

---

### jsx

- `Babel`
  - jsx문법을 이해하기 위해 사용
  - jsx 문법으로 작성된 코드를 순수한 js로 컴파일
  - [Babel](www.babeljs.io)

```js
ReactDOM.render(
  <div>
    <div>
      <h1>주제</h1>
      <ul>
        <li>Hello</li>
        <li>World</li>
      </ul>
    </div>
  </div>
);
```

- Why jsx
  - 가독성이 좋다
  - bable 과 같은 컴파일 과정에서  
    문법적 오류 파악이 쉽다
- jsx 문법
  - 최상위 요소가 하나여야 한다.
  - 최상위 요소를 리턴하는 경우,  
    `()`로 감싸야한다.
  - 자식들을 바로 랜더링하고 싶다면,  
    `<>자식들</>`를 사용해야한다,  
    --> `Fragment`
  - `js표현식`을 사용하려면 `{표현식}`을 사용해야한다.
  - `if문`은 사용할 수 없다.
    -> `삼항 연산자` or `&&`를 사용
  - `style`을 이용해 인라인 스타일링 가능
  - `class` 대신 `className`을 사용해 적용 가능
  - 자식 요소가 있으면 꼭 닫아야하고  
    자식 요소가 없으면 열면서 닫아야 한다.  
    -> `<p>~~~</p>`  
    -> `<br />`

### Props, State

- `Props`
  - 컴포넌트 외부에서 컴포넌트에게 주는 데이터
- `State` - 컴포넌트 내부에서 변경할 수 있는 데이터  
  <br />

- 둘 다 변경이 발생하면 랜더가 다시 일어날 수 있음
- `Render func`
  - 컴포넌트를 그리는 방법을 기술한 함수
  - `Props`, `State`를 바탕으로 컴포넌트를 그림
  - 변경되면 컴포넌트를 다시 그림
- `props` 값을 `default`로 지정해줄 때

```js
function Component(props) {
  return (
    <div>
      <h1>{props.message} 이것은 함수로 만든 컴포넌트 입니다. </h1>
    </div>
  );
}
Component.defaultProps = {
  message: "기본값",
};
class ClassComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.message} 이것은 클래스로 만든 컴포넌트 입니다. </h1>
      </div>
    );
  }
  static defaultProps = {
    message: "기본값",
  };
}
// ClassComponent.defaultProps = {
//   message: '기본값',
// }
ReactDOM.render(<Component />, document.querySelector("#main"));
ReactDOM.render(<ClassComponent />, document.querySelector("#sub"));
```

- 값이 지정되어있다면 `default` 값은 무시
- `state`는 객체 형태로만 제공

```js
class ClassComponent extends React.Component {
  // 방법 1
  // state = {
  //   count: 0,
  // };
  // 방법 2
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    return (
      <div>
        <h1>{this.props.message} 이것은 클래스로 만든 컴포넌트 입니다. </h1>
        <p>{this.state.count}</p>
      </div>
    );
  }
  componentDidMount() {
    setTimeout(() => {
      // 방법 1
      // this.setState({
      //   count: this.state.count + 1,
      // });
      // 방법 2
      this.setState((previousState) => {
        const newState = {
          count: previousState.count + 1,
        };
        return newState;
      });
    }, 1000);
  }
  static defaultProps = {
    message: "기본값",
  };
}
```

---

### Event Handling

- `props`에 들어가게 될 `onclick` 이벤트에 대한 처리
- `camelCase` 로만 사용 가능
  - `onClick`, `onMouseEnter`
- 이벤트에 연결된 js 코드는 함수
  - `이벤트={함수}`
- 실제 `DOM` 요소들에만 사용 가능
  - 리액트 컴포넌트에 사용하면 그냥 `props`로 전달
- func compo

```js
function Component() {
  return (
    <div>
      <button
        onClick={() => {
          console.log("clicked");
        }}
      >
        click
      </button>
    </div>
  );
}
ReactDOM.render(<Component />, document.querySelector("#main"));
```

- class compo

```js
class Component extends React.Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button
          onClick={() => {
            console.log("clicked");
            this.setState((state) => ({
              ...state,
              count: state.count + 1,
            }));
          }}
        >
          click
        </button>
      </div>
    );
  }
}
ReactDOM.render(<Component />, document.querySelector("#main"));
```

- mouseenter

```js
class Component extends React.Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button
          onMouseEnter={() => {
            console.log("clicked");
            this.setState((state) => ({
              ...state,
              count: state.count + 1,
            }));
          }}
        >
          click
        </button>
      </div>
    );
  }
}
ReactDOM.render(<Component />, document.querySelector("#main"));
```

---

### Component Lifecycle < 16.3

- 리액트 컴포넌트는 탄생부터 죽음까지  
  여러 지점에서 개발자가 작업이 가능하도록  
  메서드를 오버라이딩 할 수 있게 해준다.
- `componentWillMount`
  - `render`가 되기 전
- `componentDidMount`
  - `render`가 된 후

```js
class App extends React.Component {
  state = {
    age: 25,
  };
  constructor(props) {
    super(props);
    console.log("constructor", props);
  }
  render() {
    console.log("render");
    return (
      <div>
        <h2>
          Hello {this.props.name} - {this.state.age}
        </h2>
      </div>
    );
  }
  componentWillMount() {
    console.log("componentWillMount");
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
}

ReactDOM.render(<App name="uhan" />, document.querySelector("#main"));
```

- console.log =>

```
- constructor
  {name: 'uhan'}
- componentWillMount
- render
- componentDidMount
```

- Component props, state가 변경됐을 때
- `props`가 변경되면
- `componentWillReceiveProps`
- `shouldComponentUpdate`
- `componentWillUpdate`
- `render`
- `componentDidUpdate`
- `state`가 변경되면 `componentWillReceiveProps`는 제외하고 실행

```js
// nextProps = 변경될 props
componentWillReceiveProps(nextProps) {
  console.log('componentWillReceiveProps', nextProps);
}
// nextState = 변경될 state
shouldComponentUpdate(nextProps, nextState) {
  console.log('shouldComponentUpdate', nextProps, nextState);
  // true라면 바로 랜더할 준비
  // false라면 props, state가 변경된다해도 바로 랜더하지 않음
  return true;
}
componentWillUpdate(nextProps, nextState) {
  console.log('componentWillUpdate', nextProps, nextState);
}
// 랜더가 된 후
componentDidUpdate(prevProps, prevState) {
  console.log('componentDidUpdate', prevProps, prevState);
}
```

- `true`라면 `componentDidUpdate`까지 출력
- `false`라면 `shouldComponentUpdate`까지 출력
- `componentWillReceiveProps`
  - `props`를 새로 지정했을 때 바로 호출
  - 여기는 `state`의 변경에 반응하지 않는다.
  - `props` 값에 따라 `state`를 변경해야한다면
    - `setState`를 이용해 변경
    - 그러면 다음 이벤트로 각각 가는 것이 아니라  
      한번에 변경
- `shouldComponentUpdate`
  - `props`만 변경되어도 실행
  - `state`만 변경되어도 실행
  - `props` & `state` 둘 다 변경되어도 실행
  - `newProps`와 `newState` 를 인자로 해서 호출
  - `return type` 이 `boolean` 이어야한다.
    - `true` 면 `render`
    - `false` 면 `render` 가 호출되지 않습니다.
    - 이 함수를 구현하지 않으면, `default`는 `true`
- `componentWillUpdate`
  - 컴포넌트가 재 랜더링 되기 직전에 불린다.
  - 여기선 `setState` 같은 것을 쓰면 안된다.
- `componentDidUpdate`
  - 컴포넌트가 재 랜더링을 마치면 부른다.

### Component 언마운트

- componentWillUnmount

```js
componentWillUnmount() {
  clearInterval(this.interval);
  console.log('componentWillUnmount');
}
```

- 컴포넌트가 사라지게 되면 interval 이라는 setInterval 함수가 사라지게 됨.

---

### Component Lifecycle v16.3

- `constructor`
- `componentWillMount` => `getDerivedStateFromProps`
- `render`
- `componentDidMount`
- ==========================================
- `componentWillReceiveProps` => `getDerivedStateFromProps`
- `shouldComponentUpdate`
- `render`
- `componentWillUpdate` => `getSnapshotBeforeUpdate`
- (`dom` 에 적용되기 직전)
- `componentDidUpdate`
- ==========================================
- `componentWillUnmount`

### getDerivedStateFromProps

- `static` 을 사용해 선언
- `return` 이 있어야하며 없을 경우엔 `null`, 새로운 `state`를 설정 가능

```js
static getDerivedStateFromProps(nextProps, prevState) {
  console.log('getDerivedStateFromProps', nextProps, prevState);
  // 새로운 state를 설정 가능
  return {
    age: 201,
  };
}
```

### snapshot

```js
let i = 0;

class App extends React.Component {
  state = { list: [] };
  render() {
    return (
      <div id="list" style={{ height: 100, overflow: "scroll" }}>
        {this.state.list.map((i) => {
          return <div>{i}</div>;
        })}
      </div>
    );
  }
  componentDidMount() {
    setInterval(() => {
      this.setState((state) => ({
        list: [...state.list, i++],
      }));
    }, 1000);
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevState.list.length == this.state.list.length) returnull;
    const list = document.querySelector("#list");
    return list.scrollHeight - list.scrollTop;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(snapshot);
    if (snapshot == null) return;
    const list = document.querySelector("#list");
    list.scrollTop = list.scrollHeight - snapshot;
  }
}
ReactDOM.render(<App name="uhan" />, document.querySelector("#main"));
```

### Component 에러 캐치

- componentDidCatch
- 에러가 났을 때 캐치
- 단점 > 자신에게 에러가 났을 때 캐치하지 못함

```js
class App extends React.Component {
  state = {
    hasError: false,
  };
  render() {
    if (this.state.hasError) {
      return <div>예상치 못한 에러가 발생</div>;
    }
    return <WebService />;
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }
}
```

---

### Create React App

- Facebook Open Source

```cli
npx create-react-app my-app
```

- `my-app`이라는 디렉토리로 리액트 앱이 설치됨.
- `package.json` - `dependencies`
  - `react-scripts` 라이브러리의 버전이 `create-react-app`의 버전과 같다.
  - @가 붙은 라이브러리는 테스팅을 위한 라이브러리
  - `web-vitals` = google에서 사이트 개선을 위해 측정하는 라이브러리
- `scripts`
  - `start` 개발모드로 로컬에서 실행하는 명령어
    - `react-script start`
    - Starting the development server
  - `build` production모드로 실제 배포를 위한 파일을 만드는 명령어
    - `serve` 명령어를 이용해 `build` 디렉토리를 실행
    - 개발모드와의 차이는 코드를 가독성 없게 만들어 최대한 활용적으로 실행
    - `react-scripts build`
    - Creating an optimized production build
  - `test` 문제가 있는 지 여러 단축어를 통해 테스트를 실행할 수 있는 모드로 변환
    - `react-scripts test`
    - Jest를 통해 test code를 실행
  - `eject` 리액트 앱의 설정을 변경하기 위해 사용
    - 한번 실행하면 다시 되돌릴 수 없음
    - 자유롭게 모든 설정을 변경할 수 있음
    - 관리되고 있는 곳에서 벗어나게 되면 관리하기에 어려움이 있기에 신중하게 결정
    - `react-scripts eject`
- `webpack`
  - `babel-loader`, `css-loader` 등 최종 배포용 파일에 필요한  
    파일 확장자에 맞는 `loader` 에게 나누어주는 역할

---

### ESLint

[ESLint](https://eslint.org)

- 보통 lint라 부름
- 여러 가지 코딩 스타일을 맞추기 위해 사용
- 모든 js 프로젝트에서 사용
  `eslint-test` 디렉토리에서 테스트
- `npx eslint --init` 후 사용 환경에 대한 설정 진행
- `.eslintrc.js` 파일 생성됨
- 내용

```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    // 프로젝트 별 규칙 생성
  },
};
```

- `rules` - `semi`
  - 세미 콜론에 대한 규칙,
  - `semi: ["error", "always"],`
- 검사해볼 땐 `npx eslint 파일명`으로 사용
- `extension`에도 존재
- 뒤에 `--fix` 붙이면 자동으로 고쳐줌
- `create-react-app` 에서는 `package.json` 파일 내에  
  `eslintConfig` 의 이름으로 존재
- 이 곳에 `.eslintrc.js` 파일에서 하듯 규칙 추가 가능

---

### Prettier

- `An opinionated code formatter`
- [prettier](https://prettier.io)
- 포맷팅을 위한 라이브러리
- 관리를 원하는 파일을 `npx prettier 파일명`으로 실행
  - 포맷팅을 진행한 결과를 콘솔창에 출력
- 파일의 변경을, 포맷팅을 원하면 뒤에 `--write` 명령어 덧붙이기
  - 해당 파일이 포맷팅 완료된 파일로 변환됨
- 매번 이렇게 하기 힘들기에 확장으로 설정을 한 후
- 설정에서 `default fomatter`를 `prettier`로 설정한 후
- `format on save` 설정을 체크하면 저장하게 될 때마다 자동으로 고쳐짐
- 커스터마이징 하고 싶은 경우 루트 디렉토리에 `.prettierrc.json` 생성
- 그 후 해당 파일 내에 여러 설정을 추가하면 됨.
  - 자세한 설정 값은 홈페이지에 기술되어있음
- 이 라이브러리가 지향하는 바는 괄호의 폭을 제한하는 편
- `jsx` 파일을 다루다 보면 괄호가 복잡해지는데 쉽게 작성할 수 있음.
- `prettier`와 `eslint`가 충돌이 일어날 수 있기에
- `eslint-config-prettier`를 설정해줘야함
- `create-react-app` 설정 중 `eslint`의 `extends` 부분에
- `prettier` 추가

---

### husky

- `git hooks`을 쉽게 사용하게 해주는 툴
- 깃으로 인해 생기는 이벤트를 쉽게 사용하게 해주는 툴
- [Husky](https://github.com/typicode/husky)
- 깃이 설정된 후에 설치해야 오류를 방지할 수 있음
- `npx husky install` 하면 githook이 생성됨
- `package.json` - `scripts`에  
  `"prepare": "husky install"` 적어준 뒤  
  `npx husky add .husky/pre-commit "npm test"`
- 커밋이 되기 전 점검할 수 있는 기능을 넣을 수 있다.

### lint-staged

- Run linters on git staged files
- `eslint`와 `husky`를 연결해 커밋 전 파일을 점검할 수 있도록
- `scripts`에 `prepare` 설정을 적어준 뒤
- `npx husky add .husky/pre-commit "lint-staged"` 명령어 실행
- 라이브러리를 설치해야함 `npm i lint-staged -D`
- 이제 커밋을 진행할 때 `lint-staged` 라는 명령어가 실행됨
- 해당 명령어에 대한 설정은 `package.json` 에서 추가 가능

```json
  "lint-staged": {
    "**/*.js": [
      "eslint --fix",
      "prettier --write",
      "git add"
    ]
  },
```

- 그 후 커밋 진행하면 수정할 파일 수정된 후 커밋 진행

---

### React Developer

- 크롬 웹스토어에서 다운로드 가능
- `props`, `state` 등 여러 상태들을 볼 수 있고 필요로 하는 값들을  
  넣어보며 확인할 수 있다.

---

### 라우팅

- `SPA` -> `Single Page Application`
- 기존엔 url로 여러 페이지를 받아왔다면 이제는 앱으로 하나의 큰 묶음을 받아온 후  
  클라이언트에게 url에 따라 어떤 화면을 보여줄 지 결정하는 것이다.
- `spa 라우팅 과정`
  - 브라우저에서 최초의 루트 경로로 요청
  - React Web App을 내려준다.
  - 내려받은 앱에서 루트 경로에 맞는 컴포넌트를 보여준다.
  - 다른 페이지로 이동하는 동작을 수행하면
  - 새로운 경로에 맞는 컴포넌트를 보여준다.
- `ReactRouter`
- cra에 내장된 패키지가 아니다
- react-router-dom은 Facebook의 공식 패키지는 아님.
- 가장 대표적인 라우팅 패키지
- `npm i react-router-dom`

### Dynamic 라우팅

- `react-router-dom` v.6 에서 달라진 점
- `<Route path="/" exact component={Home} />`  
  이런 식으로 사용되던 route가  
  `<Route path="/*" element={<Home />}>`  
  이런 식으로 `exact`는 경로 뒤에 \* 표시로 대체 되었고
  컴포넌트를 불러와 사용하던 방식이 그냥 바로 엘리먼트를 불러와 사용하는 방식으로 바뀜.
- `useParams()`
  - `match.params`로 사용하던 구문을 바로 사용 가능
  - `object` 객체로 반환해주기에 파라미터의 값을  
    `useParams().id` 와 같이 주어 사용
- 또한 url의 동적인 라우팅을 위해선

```js
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="Profile/" element={<Profile />}>
      <Route path=":id" element={<Profile />} />
    </Route>
    <Route path="/About" element={<About />} />
  </Routes>
</BrowserRouter>
```

다음과 같이 `Route`를 만들어줘야한다.

- `쿼리스트링`
- 기존 5버전에서 사용하던 props를 받아와 location에서 search를 확인하던 방식에서  
  6버전 이상에서는 useLocation();을 사용
- `URLSearchParams()`
  - `new`를 사용해 써야하며 변수에 지정해주어 `get()`과 같은 함수를 사용해 쓸 수 있다.

```js
export default function About() {
  console.log(useLocation());
  const { search } = useLocation();
  console.log(search);
  const obj = new URLSearchParams(search);
  console.log(obj);
  console.log(obj.get("name"));
  return <div>About Page</div>;
}
```

- 단점
  - 모든 메서드를 기억하고 사용해야한다.
  - 브라우저의 내장 객체이기때문에 브라우저에 따라서 지원하지 않는 경우도 있다.
- `query-string` 단점 극복을 위한 라이브러리
- `npm i query-string -s`

```js
import { useLocation } from "react-router-dom";
import queryString from "query-string";

export default function About() {
  console.log(useLocation());
  const { search } = useLocation();
  const query = queryString.parse(search);
  console.log(query);
  return <div>About Page</div>;
}
```

- 이와 같이 사용할 수 있다. 객체의 형식으로 출력되기에 키 값으로 사용할 수 있다.

### Switch, Not Found

- `Switch`
- 여러 Route 중 순서대로 먼저 맞는 하나만 보여준다.
- `exact`를 뺄 수 있는 로직을 만들 수 있다.
- 가장 마지막에 어디 `path` 에도 맞지 않으면 보여지는 컴포넌트를 설정해  
  `Not Found` 페이지를 만들 수 있다.
- v.6부터는 `Routes`로 네이밍이 변경
- `exact` 옵션이 삭제됨
- `component={}, render={()=><tag />}` 삭제
- `path`는 상대경로로 지정으로 변경
- `Not Found`
- 잘못된 라우터로 접속했을 때 출력되는 화면
- v.5에서는 `Switch`를 사용해 루트 경로에 `exact`를 지정한 뒤  
  에러 페이지에 `path`를 입력하지 않은 채 사용했지만,
- 변경된 사항에서는 `exact` 구문이 없어졌기에 에러 페이지의 `path`에  
  `/*`를 넣어주어 맞지 않는 라우터일 때 출력되도록 작성할 수 있다.
- `exact`가 사라지고 기본 값으로 `exact` 가 적용이 되었다.

### JSX 링크로 라우팅 이동하기

- 리액트에서 `<a>`를 사용해 이동하게 되면 문제가 발생
- 리액트 애플리케이션의 특성을 담은 페이지 이동이 아니라 브라우저의  
  특정 경로로 그냥 이동만 해주는 방식이다.
- 리액트 라우터 돔에서 제공하는 `Link` 컴포넌트를 이용해 이동
- `<Link to="/">Home</Link>`와 같이 사용
- 서버로부터 새로운 파일을 가져오려는 게 아니라 이미 갖고 있는  
  이동하고자 하는 뷰에게 이동할 수 있게 하는 기능을 제공
- 개발자도구로 보면 링크 컴포넌트로 만들어진 공간이 a태그로 html로  
  작성된 것을 알 수 있다.

### Navigation Link

- `import { NavLink } from 'react-router-dom'`
- activeClassName, activeStyle 처럼 active 상태에 대한 스타일 지정 가능
- Route의 path 처럼 동작
- 인데, v.6에서는 activeClassName, activeStyle 사라짐
- `NavLink` 내에 `isActive` props도 없어졌기에

```js
const search = useLocation().search;
const func1 = () => {
  if (search === "") {
    style = style2;
    return console.log("hihi");
  } else if (search === "?name=uhan") {
    style1 = style2;
    return console.log("name=uhan");
  } else {
    style = style1;
  }
};
let style = ({ isActive }) => ({
  color: isActive ? "blue" : "blue",
});
let style1 = ({ isActive }) => ({
  color: isActive ? "blue" : "blue",
});
const style2 = ({ isActive }) => ({
  color: isActive ? "green" : "blue",
});
func1();
```

- 이렇게 해서 `to` 경로에 아이디가 붙은 경우를 처리

```js
<li>
  <NavLink to="About" style={style}>
    About
  </NavLink>
</li>
<li>
  <NavLink to="About?name=uhan" style={style1}>
    About?name=nasa
  </NavLink>
</li>
```

### JS로 라우팅

- `useNavigation()` 을 사용해 `useNavigation("/")` 와 같이  
  해당 URL의 컴포넌트로 이동할 수 있다.
- `App.js`

```js
function App() {
  return (
    <BrowserRouter>
      <Links />
      <NavLinks />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="Profile/" element={<Profile />}>
          <Route path=":id" element={<Profile />} />
        </Route>
        <Route path="/About" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
```

- `Login.jsx`

```js
import LoginButton from "../component/LoginButton";

export default function Login() {
  return (
    <div>
      <h2>Login 페이지 입니다.</h2>
      <LoginButton />
    </div>
  );
}
```

- `LoginButton.jsx`

```js
import { useNavigate } from "react-router-dom";

export default function LoginButton() {
  let navigate = useNavigate();
  function login() {
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }
  return <button onClick={login}>로그인하기</button>;
}
```

### Redirect

- js에서 렌더되면 지정된 경로로 redirect 됨.
- v5 에서는

```js
// boolean data
const isLogin = true;
<Route
  path="/Login"
  render={() => (isLogin ? <Redirect to="/" /> : <Login />)}
/>;
```

- 와 같이 사용했지만 v6에서 `Redirect` 컴포넌트가 없어지면서  
  `element={<Navigate replace to="/" />}`  
  와 같이 리다이렉트시켜줘야한다.
- `render`로 사용하면 에러가 발생하기에

```js
const Redirect = () => {
  if (isLogin) {
    return <Navigate replce to="/" />;
  } else {
    return <Login />;
  }
};
<Route path="/Login" element={Redirect()}>
```

- 와 같은 방식으로 사용해주었다.

---

### Style Loaders

- js, jsx 를 webpack이 babel-loader 를 사용해 컴파일
- bable config가 어떤 문법을 번역할 지 설정해놓고 씀
- 별개로 .css 와 같은 파일은 style-loader, css-loader 를 사용해 컴파일

- css 파일을 import 할 때는 전역적으로 오염되지 않도록 하는 것이 중요
- 기계적으로 자동화되는 부분이 아니기에 여러 규칙들이 존재
- `css`의 경우는 위계를 줄 수 있다.
- ### `BEM`
- 스타일을 정의하는 여러 방법론 중 하나
- 블럭 엘리먼트 모디파이어라는 영역으로 css 클래스의 이름을 정하는 방식
  `.block` - block  
  `.block-elem` - element  
  `.block--hidden` - modifier
- 이런 방식은 css에 익숙하고 css로 스타일링하는 데에 익숙한 팀들이 자주 사용
  <br><br>

- css를 하드하게 사용하다보면 느끼는 한계를 극복하기 위해 `scss` 등을 사용
- `scss`를 사용하기 위해선
- `npm i sass`로 `sass loader`를 설치해주어야한다.

### classnames

- 컴포넌트의 className props를 쉽게 사용할 수 있는 라이브러리
- `classnames`는 함수로 사용되며 여러 인자를 넣어 사용할 수 있다.
- `className` 속성에서 여러 클래스를 다룰 때 클래스 사이를 한 칸 띄워야 하는데,  
  이 떄 간단한 로직임에도 코드가 길어져 불편하기에 해당 라이브러리를 이용한다.
- ex

```js
<button
  onClick={this.startLoading}
  className={
    this.state.loading
      ? `${styles["button"]} ${styles["loading"]}`
      : styles["button"]
  }
  {...this.props}
/>
```

=>

```js
<button
  onClick={this.startLoading}
  className={classNames("button", {
    loading: this.state.loading,
  })}
  {...this.props}
/>
```

- 근데 여기서 `loading` 친구가 module.css로 해쉬값이 생성된 클래스 이름을  
  바로 가져와주지 못하기에
- `classNames` 모듈을 가져올 때 `classnames/bind` 에서 가져와주고
- `const cx = classNames.bind(styles);` 와 같이 bind 함수를 통해 가져와주면

```js
<button
  onClick={this.startLoading}
  className={cx("button", { loading: this.state.loading })}
  {...this.props}
/>
```

- 과 같이 실행했을 때 정상적으로 잘 작동되는 것을 확인할 수 있다.

### Styled Components

- `styled components, emotion`
- `styled-components` 라이브러리를 설치하여 사용
- ex

```js
import styled from "styled-components";

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 20px;
`;

export default StyledButton;
```

- `` 안에 스타일 코드를 작성해주면 스타일이 적용됨.
- `` 안은 문자열이기에 css 문법에 맞지 않아도 오타가 나도 쉽사리 판단하기 힘들다.
- 이러한 단점을 극복하기 위해 플러그인을 사용한다든가의 방법이 있다.
- 스타일을 적용하는 방법들
- `component`에 props를 설정해주어 사용  
  `<StyledButton>button</StyledButton>`  
  `<StyledButton primary={true}>button</StyledButton>`

```jsx
// StyledButton.jsx

import styled, { css } from "styled-components";

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 20px;

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`;

export default StyledButton;
```

- props에 들어온 값이 primary=true 일 경우에 해당 css 구문을 실행시키는 코드  
  `<PrimaryStyledButton>버튼</PrimaryStyledButton>`

```js
// App.js

import StyledButton from "./component/StyledButton";
import styled from "styled-components";

const PrimaryStyledButton = styled(StyledButton)`
  background: palevioletred;
  color: white;
`;
function App() {
  return <PrimaryStyledButton>버튼</PrimaryStyledButton>;
}

export default App;
```

- 다음과 같이 `App.js` 에서 바로 스타일을 적용해줘서 props 없이 스타일을 지정

```js
<StyledButton as="a" href="/">
  버튼
</StyledButton>
```

- `as` 를 사용해 다른 태그처럼 사용할 수 있다.

```js
// App.js

const UppercaseButton = (props) => (
  <button {...props} children={props.children.toUpperCase()} />
);

<StyledButton as={UppercaseButton}>button</StyledButton>;
```

- `as` 를 사용해 생성한 컴포넌트 또한 사용할 수 있다. `{...props}`를 사용해주어야한다.

```js
const MyButton = (props) => (
  <button className={props.className} children={`MyButton ${props.children}`} />
);

const StyledMyButton = styled(MyButton)`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 20px;
`;

function App() {
  return <StyledMyButton>button</StyledMyButton>;
}

export default App;
```

- `MyButton button`의 버튼이 생긴다. 일반적인 방법

```js
const StyledMyButton = styled(MyButton)`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${(props) => props.color || "palevioletred"};
  color: ${(props) => props.color || "palevioletred"};
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 20px;

  :hover {
    border: 2px solid red;
  }

  ::before {
    content: "@";
  }
`;
<StyledMyButton color="black">button</StyledMyButton>;
```

- props로 받아온 값을 이용해 설정해줄 수 있다.
- `hover`, `before` 와 같은 설정도 해줄 수 있다.

---

- `styled-components` 라이브러리를 사용하면 스코프 오염,  
  다른 스타일이 방해를 놓지 않을 수 있다는 장점이 있다.
- 각각의 다른 컴포넌트 별로 스타일을 주다보니 전역 설정을 하기엔 어려운 부분이 있음.
- 전역적으로 스타일을 지정해줄 때에는

```js
const GlobalStyle = createGlobalStyle`
  button {
    color: yellow;
  }
`;
```

- `createGlobalStyle` 내장함수를 사용해 전역적으로 스타일을 지정해줄 수 있다.
- 이 때 전역적으로 적용될 수 있도록 렌더할 때 높은 위치에서 해당 컴포넌트를 선언해주어야한다.
  <br><br>

```js
import styled from "styled-components";

const StyledA = styled.a.attrs((props) => ({
  target: "_BLANK",
}))`
  color: ${(props) => props.color};
`;

export default StyledA;
```

- 다음과 같이 `attrs()`를 사용해 props를 바로 사용할 수 있도록 할 수 있다.
- 저 함수 안에 사용하고자 하는 애트리뷰트 등을 선언해주면 실제 컴포넌트 태그에서  
  선언해주지 않았다 하더라도 적용이 되어 실행된다.

## React Shadow

- `웹 컴포넌트`
- 앵글러 뷰와 마찬가지로 리액트도 컴포넌트 개념을 사용
- `Shadow Dom`
- HTML 안에 본래의 HTML에 영향을 주지 않는 별도의 DOM
- 메인 DOM으로부터 독립적으로 렌더링되는 DOM
- 엘리먼트의 기능을 프라이빗하게 유지할 수 있어,  
  도큐먼트의 다른 부분과의 충돌에 대한 걱정 없이  
  스크립트와 스타일을 작성할 수 있다.
- `npm i react-shadow` 로 해당 라이브러리 설치 가능
- `ERESOLVE unable to resolve dependency tree`
- 해당 오류가 출력된다면
- `npm i react-shadow --force`
  - 로컬에 복제본이 존재하더라고 다시 다운로드
- `npm i react-shadow --legacy-peer-deps`
  - `peerDependencies`를 무시하고 다운로드
- 와 같이 해결할 수 있다.
- `import root from 'react-shadow'`로 root를 불러와  
  Shadow DOM으로 지정할 컴포넌트들을 root 컴포넌트로 감싸면  
  완성!

### Ant Design

- 디자인된 라이브러리, 쉽게 UI 구성 가능
- [ant.design]('www.ant.design')
- `npm i antd`
- 설치한 후 ant-design의 css를 포함시키는 작업을 먼저 진행
- css가 가장 최초에 들어가야함
- index.js에 `import antd/dist/antd.css`
- 전역적으로 불러와 사용할 수도 있고 선택적으로 모듈을 선택해 사용할 수도 있다.
- 선택적으로 사용할 때 자동화하여 사용하는 방법도 있지만 eject를 해야한다.
- 홈페이지에서 코드를 가져와 사용할 수 있음.
- `npm i --save @ant-design/icons` 를 사용해 아이콘 패키지 설치 가능
- ant-design 에서는 컬럼이 차지하는 스팬의 총 합이 24이기에 이를 맞춰주어야한다.
- Row에 gutter를 줄 때는 16 + 8n 의 정수로만 지정해줄 수 있다.
- gutter는 컬럼 사이에 gutter 만큼 띄운다는 의미
- ex

```js
<Row gutter={16}>
  <Col span={12} style={colStyle()} />
  <Col span={12} style={colStyle()} />
</Row>
<Row gutter={16}>
  <Col span={8} style={colStyle()} />
  <Col span={8} style={colStyle()} />
  <Col span={8} style={colStyle()} />
</Row>
<Row gutter={16}>
  <Col span={6} style={colStyle()} />
  <Col span={6} style={colStyle()} />
  <Col span={6} style={colStyle()} />
  <Col span={6} style={colStyle()} />
</Row>
```

- offset 은 그만큼 띄운다는 의미, 컬럼에 사용
- 이때에도 24를 맞춰주어야함

---

## HOC Higher Order Component

- advaced technique in React for reusing component logic
- not part of ther React API
- a pattern that emerges from React's compositional nature
- <strong> HOC는 컴포넌트를 인자로 받아 새로운 컴포넌트를 리턴하는 함수 </strong>
- 로직을 재활용 하기에 좋은 함수
- 주의할 점
  - Don't Use HOCs Inside the render Method
  - Static Methods Must Be Copied Over
  - Refs Aren't Passed Through (feat. React.forwardRef)

## controlled component

- 엘리먼트의 '상태'를 누가 관리하느냐
- 엘리먼트를 갖고 있는 컴포넌트가 관리
  - `Controlled`
- 엘리먼트의 상태를 관리하지 않고, 엘리먼트의 참조만 컴포넌트가 소유
  - `Uncontrolled`

## Hooks & Context

- 1. basic Hooks
- 2. Custom Hooks
- 3. Additional Hooks
- 4. React Router Hooks
- 5. 컴포넌트 간 통신
- 6. Context API

### Basic Hooks

- `useState`, `useEffect`, `useContext`
- [React_Hooks]('https://reactjs.org/docs/hooks-intro.html')
- `useState` => react-hooks/src/example1,2,3
  - Functional Component != Stateless Component
- state를 대체할 수 있다.
- 컴포넌트 사이에서 상태와 관련된 로직을 재사용하기 어렵다.
  - 컨테이너 방식 말고, 상태와 관련된 로직
- 복잡한 컴포넌트들은 이해하기 어렵다
- class는 사람과 기계를 혼동시킨다.
  - 컴파일 단계에서 코드를 최적화하기 어렵게 만든다.
- this.state는 로직에서 레퍼런스를 공유하기 때문에 문제가 발생할 수 있다.
- class component에서 state 사용할 때

```js
import React, { Component } from "react";

export default class Example1 extends Component {
  state = {
    count: 0,
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={this.click}>button</button>
      </div>
    );
  }
  click = () => {
    this.setState({ count: this.state.count + 1 });
  };
}
```

- function component에서 state 사용할 때

```js
import React from "react";

export default function Example2() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={click}>button</button>
    </div>
  );
  function click() {
    setCount(count + 1);
  }
}
```

- `useState`에서 인자로 객체를 받을 수도 있다.

```js
import React from "react";

export default function Example3() {
  const [state, setState] = React.useState({ count: 0 });
  return (
    <div>
      <p>You clicked {state.count} times</p>
      <button onClick={click}>button</button>
    </div>
  );
  function click() {
    setState((state) => {
      return {
        count: state.count + 1,
      };
    });
  }
}
```

- `useEffect` => react-hooks/src/example4,5
- 라이프 사이클 훅을 대체할 수 있다.
  - componentDidMount
  - componentDidUpdate
  - componentWillUnmount
- 대체할 수 있는거지 동등한 역할을 한다고 보기는 어렵다.
- class component에서의 mount

```js
import React, { Component } from "react";

export default class Example4 extends Component {
  state = {
    count: 0,
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={this.click}>button</button>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount", this.state.count);
  }
  componentDidUpdate() {
    console.log("componentDidUpdate", this.state.count);
  }
  click = () => {
    this.setState({ count: this.state.count + 1 });
  };
}
```

- `useEffect`를 사용한 function component에서의 mount 확인

```js
import React from "react";

export default function Example5() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("componentDidMount", count);
    return () => {
      //clean up
      // componentWillUnmount
    };
  }, []);
  React.useEffect(() => {
    console.log("componentDidMount & componentDidUpdate by count", count);
    return () => {
      // clean up
      console.log("clean up by count", count);
    };
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={click}>button</button>
    </div>
  );
  function click() {
    setCount(count + 1);
  }
}
```

### Custom Hooks

- `useSomething`
- 브라우저의 폭이 변경됐을 때 변경된 값을 받아오는 훅

```js
import { useState, useEffect } from "react";

export default function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return width;
}
```

- `useHasMounted` vs `withHasMounted`
- `withHasMounted`-> HOC

```js
// src/hocs/withHasMounted.jsx
import React from "react";

export default function withHasMounted(Component) {
  class NewComponent extends React.Component {
    state = {
      hasMounted: false,
    };
    render() {
      const { hasMounted } = this.state;
      return <Component {...this.props} hasMounted={hasMounted} />;
    }
    componentDidMount() {
      this.setState({ hasMounted: true });
    }
  }

  NewComponent.displayName = `withHasMounted(${Component.name})`;

  return NewComponent;
}

// App.js
import logo from "./logo.svg";
import "./App.css";
import withHasMounted from "./hocs/withHasMounted";

function App({ hasMounted }) {
  console.log(hasMounted);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default withHasMounted(App);

```

- `useHasMounted` -> hooks

```js
// src/hooks/useHasMounted.js
import { useEffect, useState } from "react";

export default function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted;
}

// App.js
import logo from "./logo.svg";
import "./App.css";
import withHasMounted from "./hocs/withHasMounted";
import useHasMounted from "./hooks/useHasMounted";

function App({ hasMounted }) {
  const width = useWindowWidth();
  const hasMountedFromHooks = useHasMounted();
  console.log(hasMounted, hasMountedFromHooks);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default withHasMounted(App);

```

### React Router Hooks

- `useHistory`
- `useLocation`
- `useParamas`
- `useRouteMatch`
- `useHistory`는 `react-router-dom` 6버전으로 오면서 삭제,  
  `useNavigate`로 변경

### 컴포넌트 간 통신

- 하위 컴포넌트 변경하기
  - A 컴포넌트에서 버튼에 온클릭 이벤트를 만들고
  - 버튼을 클릭하면 A 의 스테이트를 변경하여 B 컴포넌트로 내려주는 props 변경
  - B의 props가 변경되면 C의 props에 전달
  - C의 props가 변경되면 D의 props로 전달
  - D의 props가 변경되면 E의 props로 전달

```js
import { useState } from "react";
export default function A() {
  const [value, setValue] = useState("아직 안바뀜");
  return (
    <div>
      <B value={value} />
      <button onClick={click}>E의 값 바꾸기</button>
    </div>
  );
  function click() {
    setValue("E 의 값을 변경");
  }
}

function B({ value }) {
  return (
    <div>
      <p>여긴 B</p>
      <C value={value} />
    </div>
  );
}

function C({ value }) {
  return (
    <div>
      <p>여긴 C</p>
      <D value={value} />
    </div>
  );
}

function D({ value }) {
  return (
    <div>
      <p>여긴 D</p>
      <E value={value} />
    </div>
  );
}

function E({ value }) {
  return (
    <div>
      <p>여긴 E</p>
      <h3>{value}</h3>
    </div>
  );
}
```

- 상위 컴포넌트 변경하기
  - A 함수를 만들고, 그 함수 안에 state를 변경하도록 구현  
    변경으로 인해 p 안의 내용을 변경,
  - 만들어진 함수를 props에 넣어서 B에 전달
  - B의 props의 함수를 C의 props로 전달
  - C의 props의 함수를 D의 props로 전달
  - D의 props의 함수를 E의 props로 전달,  
    E에서 클릭하면 props로 받은 함수 실행

```js
import { useState } from "react";

export default function A() {
  const [value, setValue] = useState("아직 안바뀜");
  return (
    <div>
      <p>{value}</p>
      <B setValue={setValue} />
    </div>
  );
}

function B({ setValue }) {
  return (
    <div>
      <p>여긴 B</p>
      <C setValue={setValue} />
    </div>
  );
}

function C({ setValue }) {
  return (
    <div>
      <p>여긴 C</p>
      <D setValue={setValue} />
    </div>
  );
}

function D({ setValue }) {
  return (
    <div>
      <p>여긴 D</p>
      <E setValue={setValue} />
    </div>
  );
}

function E({ setValue }) {
  return (
    <div>
      <p>여긴 E</p>
      <button onClick={click}>click</button>
    </div>
  );
  function click() {
    setValue("A의 값을 변경");
  }
}
```

- 단순히 부모 자식 관계를 벗어나 사촌, 친척관계에서도 전달하는 때가 많다.
- 그렇기에 props를 전달하는 방식에 주의를 잘 기울여야하고
- 단순히 props를 전달하는 방식으로 애플리케이션의 전체 구조를 해결하기 어려워졌다
- 단순히 컴포넌트 하나 두 개로 연결 되어있는 것이 아니라 많은 컴포넌트간의 통신이 있기에
- `contextAPI`로 극복해야한다.

### Context API, useContext

- 별도의 라이브러리 설치 필요 없음
- 일반적인 리액트 애플리케이션에서 데이터는 위에서 아래로(부모에게서 자식에게)  
  props를 통해 전달되지만,
- 애플리케이션 안의 열 컴포넌트들에 전해줘야하는 props의 경우 `context`로 전달
- 트리 단계마다 명시적으로 props를 넘겨주지 않아도 많은 컴포넌트가 값을 공유할 수 있음.
- #### 하위 컴포넌트 전체에 데이터 공유

  - 데이터를 Set 하는 놈
    - 가장 상위 컴포넌트 -> 프로바이더
  - 데이터를 Get 하는 놈
    - 모든 하위 컴포넌트에서 접근 가능
      - 컨슈머로 하는 방법
      - 클래스 컴포넌트의 this.context
      - 함수 컴포넌트의 useContext

- 데이터 Set

1. 컨텍스트 생성
2. 컨텍스트.프로바이더 사용
3. value를 사용

- 데이터 Get(1) - consumer

1. 컨텍스트 가져오기
2. 컨텍스트.컨슈머 사용
3. value를 사용

- 데이터 Get(2) - class

1. static contextType에 컨텍스트 설정
2. this.context => value 이다.

- 데이터 Get(3) - functional (많이 쓰이는 방식)

1. useContext로 컨텍스트를 인자로 호출
2. useContext의 리턴이 value

### React Testing

- Unit Test
- 사람을 믿으시겠습니까? 테스트 코드를 믿으시겠습니까?
  - 실제로는 사람이 아니라 사람의 감입니다.
  - 코드는 거짓말을 하지 않습니다.
- 통합테스트에 비해 빠르고 쉽습니다.
- 통합테스트를 진행하기 전에 문제를 찾아낼 수 있습니다.
  - 그렇다고, 통합테스트가 성공하리란 보장은 없습니다.
- 테스트 코드가 살아있는(동작을 설명하는) 명세가 됩니다.
  - 테스트를 읽고 어떻게 동작하는지도 예측 가능합니다.
- SW 장인이 되려면 TDD 해야죠

  - 선 코딩 후, (몰아서) 단위테스트가 아니라

- `JEST` 테스팅 프레임워크
- [JEST]('https://jestjs.io')
- 리액트 컴포넌트를 테스트 하기 위해서 많이 쓰임
- facebook/jest
- 리액트의 영향이 크겠지만 가장 핫한 테스트 도구
- Easy Setup
- instant feedback
  - 고친 파일만 빠르게 테스트 다시 해주는 기능 등
- Snapshot Testing
  - 컴포넌트 테스트에 중요한 역할을 하는 스냅샷

```js
// example.test.js
// 파일명에 .test, .spec
// dir 명에 __TESTS__

describe("expect test", () => {
  it("37 to equal 37", () => {
    expect(37).toBe(37);
    // 1 + 2 = 3 이여야 한다. 라는 뜻
  });
  it("{age: 39} to equal {age: 39}", () => {
    expect({ age: 39 }).toEqual({ age: 39 });
    // 1 + 2 = 3 이여야 한다. 라는 뜻
  });
  it(".toHaveLength", () => {
    expect("hello").toHaveLength(5);
  });
  it(".toHaveProperty", () => {
    expect({ name: "lee" }).toHaveProperty("name");
    expect({ name: "lee" }).toHaveProperty("name", "lee");
  });
  it(".toBeDefined", () => {
    expect({ name: "lee" }.name).toBeDefined();
    expect({ name: "lee" }.age).toBeDefined();
  });
  it(".toBeFalsy", () => {
    expect(0).toBeFalsy();
    expect(false).toBeFalsy();
    expect("").toBeFalsy();
    expect(null).toBeFalsy();
    expect(undefined).toBeFalsy();
    expect(NaN).toBeFalsy();
  });
  it(".toBeGreaterThan", () => {
    expect(10).toBeGreaterThan(9);
  });
  it(".toBeGreaterThanOrEqual", () => {
    expect(10).toBeGreaterThanOrEqual(10);
  });
  it(".toBeInstanceOf", () => {
    class test {}
    expect(new test()).toBeInstanceOf(test);
    // error를 쓰로우 한 뒤 정말 에러인지 자식인지
  });
});
```

- 의도에 따라 `.not.to~`와 같이 사용할 수 있다.
- 비동기적인 로직에 대한 테스트  
  `async test with done callback`

```js
describe("use async test", () => {
  it("setTimeout without done", () => {
    setTImeout(() => {
      expect(37).toBe(36);
    }, 1000);
  });
  it("setTimeout with done", (done) => {
    setTimeout(() => {
      expect(37).toBe(36);
      done();
    }, 1000);
  });
});
```

`async test with promise`

```js
// choice 1
describe("use async test", () => {
  it("promise then", () => {
    function p() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(37);
        }, 1000);
      });
    }
    return p().then((data) => expect(data).toBe(37));
  });
  it("promise catch", () => {
    function p() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error("error"));
        }, 1000);
      });
    }
    return p().catch((e) => expect(e).toBeInstanceOf(Error));
  });
});

// choice 2
describe("use async test", () => {
  it("promise .resolves", () => {
    function p() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(37);
        }, 1000);
      });
    }
    return expect(p()).resolves.toBe(37);
  });
  it("promise .rejects", () => {
    function p() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error("error"));
        }, 1000);
      });
    }
    return expect(p()).rejects.toBeInstanceOf(Error);
  });
});
```

`async test with async-await`

- `await`로 막고 데이터를 얻어내 쉽게 사용할 수 있다.

```js
// 1
describe('use async test', () => {
  it('async-await', async () => {
    function p() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(37);
        }, 1000);
      });
    }
    const data = await p();
    return expect(data).toBe(37);
  });
});

// 2
describe('use async test', () => {
  it('async-await, catch', async () => {
    function p() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error('error'));
        }, 1000);
      })'
    }
    try {
      await p();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});
```

### Component test

- CRA 로 설치하면 라이브러리를 따로 설치할 필요없이 내장되어있음.
- `@testing-library/react`

---

## React Advanced

- 1. Optimizing Performance
- 2. React.createPortal
- 3. React.forwardRef

### Optimizing Performance

- 필요할 때만 랜더한다.
- Reconciliation
- 랜더 전후의 일치 여부를 판단하는 규칙
- 서로 다른 타입의 두 엘리먼트는 서로 다른 트리를 만들어낸다.
- 개발자가 key prop을 통해, 여러 랜더링 사이에 어떤 자식 엘리먼트가  
  변경되지 않아야 할지 표시해 줄 수 있다.

```js
class App extends React.Component {
  state = {
    count: 0,
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }
  render() {
    if (this.state.count % 2 === 0) {
      return (
        <div>
          <Foo />
        </div>
      );
    }
    return (
      <span>
        <Foo />
      </span>
    );
  }
}
```

- 다른 타입의 엘리먼트로 감싸져 있으면 다른 것이라 규정해버린다.
- 정말 같은 것이라면 타입 또한 같게 해줘야한다.

```js
import logo from "./logo.svg";
import "./App.css";
import React from "react";

class Foo extends React.Component {
  componentDidMount() {
    console.log("Foo componentDidMount");
  }
  componentWillUnmount() {
    console.log("Foo componentWillUnmount");
  }
  static getDerivedStateFromProps(nextProps, prevProps) {
    console.log("Foo getDerivedStateFromProps", nextProps, prevProps);
    return {};
  }
  render() {
    console.log("Foo render");
    return <p>Foo</p>;
  }
}

class App extends React.Component {
  state = {
    count: 0,
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }
  render() {
    if (this.state.count % 2 === 0) {
      return <Foo name="lee" />;
    }
    return <Foo name="jiwo" />;
  }
}

export default App;
```

- if문에 따라 번갈아가며 랜더가 반복되는 상황
