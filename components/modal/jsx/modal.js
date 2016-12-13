import React from 'react';

export default class Modal extends React.Component {
	constructor() {
		super();
		this.closeModal = this.closeModal.bind(this);
		this.renderModal = this.renderModal.bind(this);
		this.renderInput = this.renderInput.bind(this);
		this.state = {
			isOpen: true
		}
	}

	closeModal(e) {
		//this.setState({ isOpen: false });
		console.log('this.state');
	}

	renderModal() {
		const { modalStyles, overlayStyles} = this.props;

		return(
			<div className="modal-bkg" style={ overlayStyles }>
				<div className="modal" style={ modalStyles.modal }>
					<input type="button" className="modalClose" style={ modalStyles.modal_close } onClick={() => this.closeModal()} value="✖" />
						{this.props.children}
				</div>
			</div>
		);
	}

	renderInput() {
		return <input type="button" onClick={() => this.closeModal()} value="Click Me!" />
	}
	render() {
		console.log(this.state);
		return(
			// this.state?this.renderModal():null
			this.renderModal()
			)
	}
}

Modal.propTypes = {
	modalStyles: React.PropTypes.object,
	overlayStyles: React.PropTypes.object,
	isOpen: React.PropTypes.bool
};

Modal.defaultProps = {
	modalStyles: {},
	overlayStyles: {},
	isOpen: false
}