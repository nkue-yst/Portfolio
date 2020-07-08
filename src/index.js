import React from 'react';
import ReactDOM from 'react-dom';
import MenuBar from './MenuBar'
import './index.css';

class Index extends React.Component {
  render() {
    return (
      <MenuBar />
    );
  }
}

ReactDOM.render (
  <Index />,
  document.getElementById('root')
);
