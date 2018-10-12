class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Decide some stuff.</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        Options components Here
      </div>
    )
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        Add Options Here
      </div>
    )
  }
}

const jsx = (
  <div>
    <Header/>
    <Action/>
    <Options/>
    <AddOption/>
  </div>
);

ReactDOM.render(jsx, document.getElementById('app'));