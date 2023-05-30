import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    container: {
        width: '100%',
        height: '100%',
        maxHeight: 100,
        margin: '10, 0, 20, 0',
    },
    label: {
        textTransform: 'capitalize',
    },
}));

export default useStyles;
