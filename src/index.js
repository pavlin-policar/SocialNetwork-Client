import React from 'react';
import ReactDOM from 'react-dom';
import a11y from 'react-a11y';
import routes from './routes';
import App from './App.react';

// Uncomment this to get information about accessiblity on devices. Toggle at
// your own risk.
//a11y(React, { includeSrcNode: true });

ReactDOM.render(routes, document.getElementById('react-root'));
