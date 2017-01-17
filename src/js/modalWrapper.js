import React from 'react';
import ReactDOM from 'react-dom';
import ReactJModal from './ReactJModal';
import { data } from '../data';
import { modalStyles } from '../sass/modal_styles';

class ModalWrapper extends React.Component {
	constructor() {
		super();
		this.state = {
			isOpen: false
		}
	}

	render() {
		return(
			<div>
				<div className="modal-ctrl" onClick={()=> { this.setState({ isOpen: true }); }}>Try it out!</div>
				<ReactJModal modalStyles = { modalStyles } isOpen = { this.state.isOpen }>
					<div>
						<p>{ data }</p>
					</div>
				</ReactJModal>
			</div>
		);
	}
}

module.exports = ModalWrapper;
