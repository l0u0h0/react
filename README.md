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