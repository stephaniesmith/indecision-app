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

let count = 0;

const addOne = () => {
  console.log('addOne');
}

const subOne = () => {
  console.log('subOne');
}

const reset = () => {
  console.log('reset');
}

const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={subOne}>-1</button>
    <button onClick={reset}>reset</button>
  </div>
)
const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);