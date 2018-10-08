console.log('app.js hello world');

var app = {
  title: 'Indecision App',
  subTitle: 'This is some text'
}

var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subTitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var user = {
  name: 'Stephanie',
  age: 28,
  location: 'Portland'
};

var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
)
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);