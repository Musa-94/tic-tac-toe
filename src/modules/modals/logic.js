export const getModalStyles = () => ({
    overlay: {
        right: 0,
        bottom: 0,
        zIndex: 200,
        display: 'flex',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'none',
    },
    content: {
        top: 'none',
        bottom: 'none',
        left: 'none',
        right: 'none',
        display: 'flex',
        border: 'none',
        padding: '0',
        overflowY: 'hidden',
        borderRadius: '0.25em',
        backgroundColor: 'transparent',
    },
});
