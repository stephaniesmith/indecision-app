class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleSubOne = this.handleSubOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    }
  }
  handleAddOne() {
    this.setState(prevState => {
      return { 
        count: prevState.count + 1
      }
    })
  }

  handleSubOne() {
    this.setState(prevState => {
      return { 
        count: prevState.count - 1
      }
    })
  }

  handleReset() {
    this.setState(prevState => {
      return { 
        count: 0
      }
    })
  }

  render() {
    const { count } = this.state

    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleSubOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter/>, document.getElementById('app'));

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