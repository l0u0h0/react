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
import React from 'react';

class ClassComponent extends React.Component {
  render() {
    return (<div>Hello</div>);
  }
}
// 사용할 때
ReactDOM.render(
  <ClassComponent />
)
```
### Function 컴포넌트
```javascript
import React from 'react'

function FunctionComponent() {
  return <div>Hello</div>;
}

// 두 번째 방법
const FunctionComponent = () => {
  return <div>Hello</div>;
}

//사용할 때
ReactDOM.render(
  <FunctionComponent />
)
```
---
### React.createElement
```js
React.createElement(
  type, // 태그 이름 문자열 | 리액트 컴포넌트 | React.Fragment
  [props], // 리액트 컴포넌트에 넣어주는 데이터 객체
  [...children] // 자식으로 넣어주는 요소들
)
```
- 태그 이름 문자열 type
```js
ReactDOM.render(
  React.createElement('div', null, "Hello World")
);
// <div>Hello World</div>
```
- 리액트 컴포넌트 type
```js
class ClassComponent extends React.Component {
  render() {
    return React.createElement(
      'div', null, "Hello World");
  }
}
// <ClassComponent />
ReactDOM.render(
  React.createElement(ClassComponent, null, null)
);
// <div>Hello World</div>
```
- React.Fragment
```js
<div id="main">
</div>
ReactDOM.render(
  React.createElement(
    React.Fragment,
    null,
    `Hello World`,
    `Hello World`,
    `Hello World`
  ),
  document.querySelector("#main")
)
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
    <h1>
      주제
    </h1>
    <ul>
      <li>
        Hello
      </li>
      <li>
        World
      </li>
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
        React.createElement("li", null, "Hello"), React.createElement("li", null, "World")
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
    <h1>
      주제
    </h1>
    <ul>
      <li>
        Hello
      </li>
      <li>
        World
      </li>
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
- `State`
    - 컴포넌트 내부에서 변경할 수 있는 데이터  
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
  message: '기본값',
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
    message: '기본값',
  };
}
// ClassComponent.defaultProps = {
//   message: '기본값',
// }
ReactDOM.render(
  <Component />,
  document.querySelector("#main")
);
ReactDOM.render(
  <ClassComponent />,
  document.querySelector("#sub")
);
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
    this.state = {count: 0};
  }
  render() {
    return (
      <div>
        <h1>{this.props.message} 이것은 클래스로 만든 컴포넌트 입니다. </h1>
        <p>
          {this.state.count}
        </p>
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
          count: previousState.count + 1
        }
        return newState;
      });
    }, 1000);
  }
  static defaultProps = {
    message: '기본값',
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
ReactDOM.render(
  <Component />, document.querySelector("#main")
);
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
ReactDOM.render(
  <Component />, document.querySelector("#main")
);
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
ReactDOM.render(
  <Component />, document.querySelector("#main")
);
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
    console.log('constructor', props);
  }
  render() {
    console.log('render');
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

ReactDOM.render(<App name="uhan"/>, document.querySelector("#main"));
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
  state = {list: []};
  render() {
    return (
      <div id="list" style={{height: 100, overflow: "scroll"}}>
        {this.state.list.map(i => {
          return <div>{i}</div>;
        })}
      </div>
    );
  }
  componentDidMount() {
    setInterval(() => {
      this.setState(state => ({
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
ReactDOM.render(<App name="uhan"/>, document.querySelector("#main"));
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
    return (<WebService />);
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