class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      options: ['Stuff 1', 'Stuff 2', 'Stuff 3']
    }
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  handlePick() {
    const { options } = this.state;
    const index = Math.floor(Math.random() * options.length);

    alert(options[index]);
  }

  render() {
    const title = 'Indecision';
    const subTitle = 'Decide some stuff.';
    const { options } = this.state;

    return (
      <div>
        <Header title={title} subTitle={subTitle}/>
        <Action 
          hasOptions={options.length > 0}
          handlePick={this.handlePick}
        />
        <Options 
          options={options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
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
  render() {
    const { hasOptions, handlePick } = this.props;
    
    return (
      <div>
        <button 
          onClick={handlePick}
          disabled={!hasOptions}
        >
          What should I do?
        </button>
      </div>
    )
  }
}

class Options extends React.Component {

  render() {
    const { options, handleDeleteOptions } = this.props;

    return (
      <div>
        <button onClick={handleDeleteOptions}>Remove All</button>
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