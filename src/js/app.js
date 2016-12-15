
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './modal';
import {data} from '../data';
import {modal_style, overlay_style} from '../sass/modal_styles';

ReactDOM.render( <Modal modalStyles = {modal_style} overlayStyles = {overlay_style}>
		<div style={ modal_style.title_styles }></div>
		<div style={ modal_style.modal_data }>
			<p>{data}</p>
		</div>
		<div style={ modal_style.footer_styles }></div>
	</Modal>, document.getElementById('app') );
