console.log('app.js hello world');

const app = {
  title: 'Indecision App',
  subTitle: 'This is some text',
  options: ['One', 'Two']
}

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subTitle && <p>{app.subTitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

const user = {
  name: 'Stephanie',
  age: 29,
  location: 'Portland'
};

function getLocation(location) {
  if(location) return <p>Location: {location}</p>;
}

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
)
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);