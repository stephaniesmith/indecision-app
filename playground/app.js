class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: props.options
    }
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if(options) this.setState(() => ({ options }));
    } catch(e) {

    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { options } = this.state;

    if(prevState.options.length !== options.length) {
      const json = JSON.stringify(options)
      localStorage.setItem('options', json)
    }
  }

  componentWillUnmount() {
    console.log('Goodbye!');
  }
  
  
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState(prevState => {
      return {
        options: prevState.options.filter(option => optionToRemove !== option)
      }
    });
  }

  handlePick() {
    const { options } = this.state;
    const index = Math.floor(Math.random() * options.length);

    alert(options[index]);
  }

  handleAddOption(option) {
    const { options } = this.state;
    if(!option) {
      return 'Enter valid value to add item'
    } else if (options.indexOf(option) > -1) {
      return 'This option already exists'
    }
    this.setState(prevState => ({
        options: prevState.options.concat(option)
      }))
  }

  render() {
    const subTitle = 'Decide some stuff.';
    const { options } = this.state;

    return (
      <div>
        <Header subTitle={subTitle}/>
        <Action 
          hasOptions={options.length > 0}
          handlePick={this.handlePick}
        />
        <Options 
          options={options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: []
}

const Header = props => {
  const { title, subTitle } = props;
  return (
    <div>
      <h1>{title}</h1>
      {subTitle && <h2>{subTitle}</h2>}
    </div>
  )
}

Header.defaultProps = {
  title: 'Indecision'
}


const Action = props => {
  const { hasOptions, handlePick } = props;
  
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

const Options = props => {
  const { options, handleDeleteOptions, handleDeleteOption } = props;

  return (
    <div>
      <button onClick={handleDeleteOptions}>Remove All</button>
      {options.length === 0 && <p>Please add an option to get started!</p>}
      {
        options.map((option, index) => (
          <Option
            key={index}
            option={option}
            handleDeleteOption={handleDeleteOption}
          />
        ))
      }
    </div>
  )
}

const Option = props => {
  const { option, handleDeleteOption } = props;
  return (
    <div>
      {option}
      <button
        onClick={e => {
          handleDeleteOption(option)
        }}
      >
        remove
      </button>
    </div>
  )
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }

  handleAddOption(e) {
    e.preventDefault();
    const { handleAddOption } = this.props;

    const option = e.target.elements.option.value.trim();
    const error = handleAddOption(option);

    this.setState(() => ({ error }));

    if(!error) e.target.elements.option.value = '';
  }

  render() {
    const { error } = this.state;

    return (
      <div>
      {error && <p>{error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));