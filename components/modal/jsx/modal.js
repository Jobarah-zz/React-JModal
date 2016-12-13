import React from 'react';

export default class Modal extends React.Component {
	render() {
		const { modalStyles, overlayStyles } = this.props;

		return(
			<div className="modal-bkg" style={ overlayStyles }>
				<div className="modal" style={ modalStyles }>
					<div className="title"></div>
					<div className="modal-data-holder">
						{this.props.children}
					</div>
					<div className="footer"></div>
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