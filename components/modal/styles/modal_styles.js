export const modal_style = {
    modal:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        zIndex: '52',
        width: '60%',
        height: '33.3%',
        display: 'block',
        margin: '0',
        padding: '0',
        background: '#e5e5e5',
        transform: 'translate(-50%, -50%)',
        borderRadius: '2% 0'
        },
    title_styles: {
        position: 'relative',
        top: '0',
        height: '15%',
        width: '100%',
        borderBottom: '1px solid rgb(210, 77, 87)',
        borderBottom: '1px solid rgba(210, 77, 87, .2)',
        webkitBackgroundClip: 'padding-box',
        backgroundClip: 'padding-box'
    },
    modal_data: {
        height: '70%',
        overflow: 'auto',
    },
    footer_styles: {
        position: 'relative',
        bottom: '0',
        height: '15%',
        width: '100%',
        borderTop: '1px solid rgb(210, 77, 87)',
        borderTop: '1px solid rgba(210, 77, 87, .2)',
        WebkitBackgroundClip: 'padding-box',
        backgroundClip: 'padding-box'
    },
    modal_close: {
        position: 'absolute',
        top: '1%',
        right: '1%',
        font: '14px/100% arial, sans-serif',
        textDecoration: 'none',
        textShadow: '0 1px 0 #fff',
        color: '#777',
        cursor: 'pointer'
    }
}

export const overlay_style = {
    top: '0',
    left: '0',
    position: 'fixed',
    width: '100%',
    height: '100%',
    padding: '0',
    background: '#000',
    opacity: '.8'
}