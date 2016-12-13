import React from 'react';

export default class Modal extends React.Component {
	render() {
		const { modalStyles } = this.props;

		return(
			<div className="modal-bkg">
				<div className="modal-data-holder" styles={ modalStyles }>
					{this.props.children}
				</div>
			</div>
		);
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