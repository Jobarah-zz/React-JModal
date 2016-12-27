
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './modal';
import {data} from '../data';
import {modalStyles} from '../sass/modal_styles';

ReactDOM.render( <Modal modalStyles = {modalStyles}>
		<div/>
		<div>
			<p>{data}</p>
		</div>
		<div/>
	</Modal>, document.getElementById('app') );
