class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subTitle = 'Decide some stuff.';
    const options = ['Stuff 1', 'Stuff 2', 'Stuff 3'];

    return (
      <div>
        <Header title={title} subTitle={subTitle}/>
        <Action/>
        <Options options={options}/>
        <AddOption/>
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    const { title, subTitle } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  handlePick() {
    alert('handle')
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {

  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }

  handleRemoveAll() {
    console.log('clicked');
  }
  render() {
    const { options } = this.props;

    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        {options.map((option, index) => <Option key={index} option={option}/>)}
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    const { option } = this.props;
    return (
      <div>
        {option}
      </div>
    )
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();

    if(option) {
      alert(option);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleAddOption}>
        <input type="text" name="option"/>
        <button>Submit</button>
      </form>
    )
  }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));