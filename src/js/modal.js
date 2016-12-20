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

	closeModal() {

		this.setState({ isOpen: false });
	}

	renderModal() {

		const { modalStyles, overlayStyles} = this.props;
		const _modalStyles = this.state.isOpen ? modalStyles.mdl : modalStyles.fade_out;
		const _overlayStyles = this.state.isOpen ? overlayStyles : modalStyles.fade_out_overlay;

        const cotainerClass = this.state.isOpen ? "mdl-container mdl-sh" : "mdl-container mdl-sh out";

		return (
            <div className={cotainerClass}>

                <div className="mdl-overlay" style={ _overlayStyles } onClick={() => this.closeModal()} >
                    <div className="mdl" >
                        {this.props.children}
                    </div>
                </div>
			</div>
			);
	}

	render() {

		return (
			this.renderModal()
		);
	}
}
