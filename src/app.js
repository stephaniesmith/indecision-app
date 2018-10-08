console.log('app.js hello world');

var template = (
  <div>
    <h1>Indecision App</h1>
    <p>This is some text</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var templateTwo = (
  <div>
    <h1>Stephanie Smith</h1>
    <p>Age: 28</p>
    <p>Location: Portland</p>
  </div>
)
const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);