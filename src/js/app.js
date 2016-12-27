
import React from 'react';
import ReactDOM from 'react-dom';
import ReactJModal from './modal';
import {data} from '../data';
import {modalStyles} from '../sass/modal_styles';

ReactDOM.render( <ReactJModal modalStyles = {modalStyles}>
		<div>
			<p>{data}</p>
		</div>
	</ReactJModal>, document.getElementById('app') );
