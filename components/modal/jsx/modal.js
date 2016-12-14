import React from 'react';

export default class Modal extends React.Component {
	constructor() {
		super();
		this.closeModal = this.closeModal.bind(this);
		this.renderModal = this.renderModal.bind(this);
		this.state = {
			isOpen: true
		}
	}

	closeModal(e) {
		this.setState({ isOpen: false });
		console.log("clicked");
	}

	renderModal() {

		const { modalStyles, overlayStyles} = this.props;
		
		let hiddenModalStyle = this.state.isOpen?modalStyles.modal:modalStyles.fade_out;
		let overlayStylesDynamic = this.state.isOpen?overlayStyles:modalStyles.fade_out_overlay;
		let containerStylesDynamic = this.state.isOpen?null:modalStyles.fade_modal_container;

		return (
			<div className="modal-container" style={containerStylesDynamic}>
				<div className="modal-bkg" style={ overlayStylesDynamic }>
					<div className="modal" style={ Object.assign(hiddenModalStyle) }>
						<div className="modalClose" onClick={() => this.closeModal()}>✖</div>
						{this.props.children}
					</div>
				</div>
			</div>
			);
	}
	render() {
		return(
			// this.state.isOpen?this.renderModal():null
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