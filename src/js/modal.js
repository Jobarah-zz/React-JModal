import React from 'react';

export default class Modal extends React.Component {

	static propTypes = {
		modalStyles: React.PropTypes.object,
		overlayStyles: React.PropTypes.object,
		isOpen: React.PropTypes.bool
	};

	static defaultProps = {
		modalStyles: {},
		overlayStyles: {},
		isOpen: false
	};

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
	}

	renderModal() {

		const { modalStyles, overlayStyles} = this.props;
		// let hiddenModalStyle = this.state.isOpen ? modalStyles.modal : modalStyles.fade_out;
		let overlayStylesDynamic = this.state.isOpen ? overlayStyles : modalStyles.fade_out_overlay;
		let containerStylesDynamic = this.state.isOpen ? null : modalStyles.fade_modal_container;

		return (
			<div className="mdl-overlay" style={ overlayStylesDynamic }>
				<div className="mdl" style={ modalStyles.mdl }>
					{this.props.children}
				</div>
			</div>
			);
	}

	render() {

		return (
			// this.state.isOpen?this.renderModal():null
			this.renderModal()
		);
	}
}
