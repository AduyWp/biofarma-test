import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(() => ({
    rootContainer: {
        textAlign: 'left',
    },
    listContainer: {
        flexGrow: 1,
        marginTop: '20px',
    },
    gridItems:{
        margin: '15px 0',
    },
    paper: {
        height: '100%',
        width: '95%',
        padding: '10px 15px',
        margin: '0 auto',
    },
    title: {
        flexGrow: 1,
        fontSize: '14px',
        letterSpacing: '.5px',
    },
    buttonAdd: {
        textTransform: 'capitalize !important',
        fontSize: '14px !important',
        letterSpacing: '.5px !important',
    },
    buttonDirection: {
        textTransform: 'capitalize !important',
        fontSize: '14px !important',
        letterSpacing: '.5px !important',
        marginTop: '15px !important',
    },
    buttonRemove: {
        textTransform: 'capitalize !important',
        fontSize: '14px !important',
        letterSpacing: '.5px !important',
        marginTop: '15px !important',
        marginLeft: '10px !important',
    },
    dataName: {
        textTransform: 'capitalize',
    },
    appBar: {
        position: 'relative',
    },
    mapsDialog: {
        width: '100%',
        height: '100%',
    },
}));
