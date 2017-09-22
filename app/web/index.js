import React from 'react';
import ReactDOM from 'react-dom';

import HelloUI from './components/HelloUI.component';

ReactDOM.render(<HelloUI/>,document.getElementById('app'));

if(module.hot){
    module.hot.accept('./components/HelloUI.component.js', () => {
		const HelloUI = require('./components/HelloUI.component.js').default;
		console.log('>>>>>> Router Updated !! <<<<<<<')
		ReactDOM.render(
			<HelloUI/>,
			document.getElementById('app')
		);
	});
}


