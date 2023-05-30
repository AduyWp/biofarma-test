import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(() => ({
    root: {
        textAlign: 'right',
    },
    title: {
        flexGrow: 1,
        fontSize: '14px',
        letterSpacing: '.5px',
    },
    button: {
        textTransform: 'capitalize',
        fontSize: '14px',
        letterSpacing: '.5px',
    }
}));
