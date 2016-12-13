
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './modal/jsx/modal';
import {data} from './data';

var style = {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 52;
    width: 600px;
    height: 251px;
    display: block;
    margin: 0;
    padding: 0;
    background: aliceblue;
    overflow: auto;
    transform: translate(-50%, -50%);
}

ReactDOM.render( <Modal modalStyles={style}>
		<li>this is a child element</li>
	</Modal>, document.getElementById('app') );
