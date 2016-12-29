import React from 'react';

class ReactJModal extends React.Component {

    static propTypes = {
        modalStyles: React.PropTypes.object,
        isOpen: React.PropTypes.bool
    };


    static defaultProps = {
        modalStyles: {},
        isOpen: false
    };

    constructor() {

        super();
        this.closeModal = this.closeModal.bind(this);
        this.renderModal = this.renderModal.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.state = {
            isOpen: true
        };
    }

    componentWillMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    closeModal() {

        this.setState({ isOpen: false });
    }

    handleKeyPress(event) {
        if(event.keyCode === 27 && this.state.isOpen) {
            this.closeModal();
        }
    }

    renderModal() {

        const { modalStyles } = this.props;
        const _modalStyles = this.state.isOpen ? modalStyles.mdl : modalStyles.mdlOut;
        const _overlayStyles = this.state.isOpen ? modalStyles.overlay : modalStyles.overlayOut;

        const cotainerClass = this.state.isOpen ? 'mdl-container' : 'mdl-container out';

        return (
            <div className={cotainerClass}>
                <div className="mdl-overlay" style={ _overlayStyles } onClick={() => this.closeModal()}/>
                <div className="mdl" style={ _modalStyles }>
                    {this.props.children}
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

module.exports = ReactJModal;
