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