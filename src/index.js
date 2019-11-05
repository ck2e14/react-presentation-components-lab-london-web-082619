import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';


saySup = () => {
  console.log('sup')
}



ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={this.saySup} />
  </div>,
  document.getElementById('root')
);