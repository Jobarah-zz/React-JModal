# React-JModal

Simple and minimlistic react modal, open to escalability and manipulation to be as flexible as desired.

*Usage:*  
For inline styles for modal, these must be passed as an object, as shown here:  
```
export const modalStyles = {
    mdl: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        zIndex: '9000',
        transform: 'translate(-50%, -50%)'
    }
};

```  
The Object contains 4 keys:  
* mdl  
* mdlOut  
* overlay  
* overlayOut  

The styles are received by the modal this way:  

```

import React from 'react';
import ReactDOM from 'react-dom';
import ReactJModal from './ReactJModal';
import {data} from '../data';
import {modalStyles} from '../sass/modal_styles';

ReactDOM.render( <ReactJModal modalStyles = {modalStyles}>
		<div>
			<p>{data}</p>
		</div>
	</ReactJModal>, document.getElementById('app'));
```

# Live Demo  
https://jobarah.github.io/React-JModal/  

