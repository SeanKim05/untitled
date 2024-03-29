// function useState(initValue) {
//   let _value = initValue;
//   const state = () => _value;
//   const setState = (newValue) => {
//     _value = newValue;
//   };
//   return [state, setState];
// }

// const [count, setCount] = useState(1);
// console.log(count());
// setCount(2);
// console.log(count());

// const React = (function () {
//   let _value;
//   function useState(initValue) {
//     const state = () => _value || initValue;
//     const setState = (newValue) => {
//       _value = newValue;
//     };
//     return [state, setState];
//   }
//   return { useState };
// })();

// const [count, setCount] = React.useState(1);
// console.log(count());
// setCount(2);
// console.log(count());
////////////////////

// const React = (function () {
//   let _value;
//   function useState(initValue) {
//     const state = _value || initValue;
//     const setState = (newValue) => {
//       _value = newValue;
//     };
//     return [state, setState];
//   }
//   function render(Component) {
//     const Comp = Component();
//     Comp.render();
//     return Comp;
//   }
//   return { useState, render };
// })();

// function Component() {
//   const [count, setCount] = React.useState(1);
//   return {
//     render: () => console.log(count),
//     click: () => setCount(count + 1),
//   };
// }

// var App = React.render(Component);
// App.click();
// App = React.render(Component);
// App.click();

const React = (function () {
  let statesArr = [];
  let index = 0;

  function useState(initValue) {
    const state = statesArr[index] || initValue;
    const _index = index;
    const setState = (newValue) => {
      statesArr[_index] = newValue;
    };
    index++;
    return [state, setState];
  }
  function render(Component) {
    index = 0;
    const Comp = Component();
    Comp.render();
    return Comp;
  }
  return { useState, render };
})();

function Component() {
  const [count, setCount] = React.useState(1);
  const [fruit, setFruit] = React.useState("pear");
  return {
    render: () => console.log({ count, fruit }),
    click: () => setCount(count + 1),
    type: (input) => setFruit(input),
  };
}

var App = React.render(Component);
App.click();
App = React.render(Component);
App.type("apple");
App = React.render(Component);
