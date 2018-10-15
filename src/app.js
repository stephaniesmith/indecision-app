import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

const Layout = props => {
  return (
    <div>
      <header>Header</header>
      {props.children}
      <footer>Footer</footer>
    </div>
  )
};

const template = (
  <div>
    <h1>Page Title</h1>
    <p>This is my page</p>
  </div>
)

ReactDOM.render((
  <Layout>
    <div>
      <h1>Page Title</h1>
      <p>This is my page</p>
    </div>  
  </Layout>
), document.getElementById('app'));