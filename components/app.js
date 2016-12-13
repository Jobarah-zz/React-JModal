
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './modal/jsx/modal';
import {data} from './data';
import {modal_style, overlay_style} from './modal/styles/modal_styles';

ReactDOM.render( <Modal modalStyles = {modal_style} overlayStyles = {overlay_style}>
		<li>this is a child element</li>
        <li>child 2 </li>
        <li>child 3 </li>
	</Modal>, document.getElementById('app') );
