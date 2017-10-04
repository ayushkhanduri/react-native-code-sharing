import React from 'react';
import ReactDOM from 'react-dom';

import HelloComponent from '../shared/Hello.component';

ReactDOM.render(<HelloComponent/>,document.getElementById('app'));

if(module.hot){
    module.hot.accept('../shared/Hello.component.js', () => {
		const HelloComponent = require('../shared/Hello.component.js').default;
		console.log('>>>>>> Router Updated !! <<<<<<<')
		ReactDOM.render(
			<HelloComponent/>,
			document.getElementById('app')
		);
	});
}


