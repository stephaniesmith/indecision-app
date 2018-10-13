'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.handleAddOne = _this.handleAddOne.bind(_this);
    _this.handleSubOne = _this.handleSubOne.bind(_this);
    _this.handleReset = _this.handleReset.bind(_this);
    _this.state = {
      count: 0
    };
    return _this;
  }

  _createClass(Counter, [{
    key: 'handleAddOne',
    value: function handleAddOne() {
      this.setState(function (prevState) {
        return {
          count: prevState.count + 1
        };
      });
    }
  }, {
    key: 'handleSubOne',
    value: function handleSubOne() {
      this.setState(function (prevState) {
        return {
          count: prevState.count - 1
        };
      });
    }
  }, {
    key: 'handleReset',
    value: function handleReset() {
      this.setState(function () {
        return {
          count: 0
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var count = this.state.count;


      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Count: ',
          count
        ),
        React.createElement(
          'button',
          { onClick: this.handleAddOne },
          '+1'
        ),
        React.createElement(
          'button',
          { onClick: this.handleSubOne },
          '-1'
        ),
        React.createElement(
          'button',
          { onClick: this.handleReset },
          'reset'
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

var Visibility = function (_React$Component2) {
  _inherits(Visibility, _React$Component2);

  function Visibility(props) {
    _classCallCheck(this, Visibility);

    var _this2 = _possibleConstructorReturn(this, (Visibility.__proto__ || Object.getPrototypeOf(Visibility)).call(this, props));

    _this2.handleToggle = _this2.handleToggle.bind(_this2);
    _this2.state = {
      visibility: false
    };
    return _this2;
  }

  _createClass(Visibility, [{
    key: 'handleToggle',
    value: function handleToggle() {
      this.setState(function (prevState) {
        return {
          visibility: !prevState.visibility
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var visibility = this.state.visibility;


      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Visibility'
        ),
        React.createElement(
          'button',
          { onClick: this.handleToggle },
          visibility ? 'Hide' : 'Show'
        ),
        visibility && React.createElement(
          'p',
          null,
          'Can you see me?!'
        )
      );
    }
  }]);

  return Visibility;
}(React.Component);

ReactDOM.render(React.createElement(Visibility, null), document.getElementById('app'));

// console.log('app.js hello world');

// const app = {
//   title: 'Indecision App',
//   subTitle: 'This is some text',
//   options: []
// }

// const onFormSubmit = e => {
//   e.preventDefault();

//   const option = e.target.elements.option.value;

//   if(option) {
//     app.options.push(option);
//     e.target.elements.option.value = '';
//     render();
//   }
// } 

// const removeAll = () => {
//   app.options = [];
//   render();
// }

// const onMakeDecision = () => {
//   const randomNum = Math.floor(Math.random() * app.options.length);
//   const option = app.options[randomNum];
//   alert(option);
// }

// const appRoot = document.getElementById('app');

// const render = () => {
//   const template = (
//     <div>
//       <h1>{app.title}</h1>
//       {app.subTitle && <p>{app.subTitle}</p>}
//       <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>

//       <button disabled={app.options.length === 0}onClick={onMakeDecision}>What should I do?</button>
//       <button onClick={removeAll}>Remove All</button>
//       <ol>
//         {
//           app.options.map((option, index) => <li key={index}>{option}</li>)
//         }  
//       </ol>
//       <form onSubmit={onFormSubmit}>
//         <input type="text" name="option"/>
//         <button>Add Option</button>
//       </form>
//     </div>
//   );

//   ReactDOM.render(template, appRoot);
// }

// render()
