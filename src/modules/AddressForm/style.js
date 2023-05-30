import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles(() => ({
    resultWrapper: {
        position: 'relative',
        height: '40vh',
    },
    resultSelfieWrapper: {
        position: 'relative',
        paddingLeft: '5rem',
        paddingRight: '5rem',
    },
    imageWrapper: {
        position: 'relative',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        paddingTop: '63%',
        '& img': {
            borderRadius: '1rem',
        },
    },
    imageSelfieWrapper: {
        position: 'relative',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        paddingTop: '177.8%',
        '& img': {
            borderRadius: '1rem',
        },
    },
    btnWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '30px',
        padding: '0 16px',
        position: 'absolute',
        bottom: 40,
        width: '100%',
        '& button': {
            width: '100%',
        },
    },
    retakeBtn: {
        backgroundColor: '#FFFFFF',
        boxShadow: 'none',
        border: '1px solid #161616',
        '&:hover': {
            backgroundColor: '#000000',
            '& span': {
                color: '#FFFFFF',
            },
        },
    },
    detailWrapper: {
        padding: '0 16px',
        position: 'relative',
        paddingTop: '10vh',
    },
    titleHeader: {
        fontSize: '14px',
    },
    dataWrapper: {
        paddingTop: '1rem',
        '& .MuiFormControl-fullWidth': {
            border: '1px solid #161616',
            borderRadius: '0.25rem',
            height: 42,
            marginBottom: '1rem',
            '& .MuiInput-underline': {
                margin: 0,
                height: '100%',
                '&:before': {
                    border: 'none !important',
                },
                '&:after': {
                    border: 'none !important',
                },
                '& input': {
                    fontSize: '1rem',
                    padding: 0,
                    height: '100%',
                },
            },
            '& p': {
                display: 'none',
            },
            '& input': {
                padding: '0 .5rem !important',
                borderRadius: '0.25rem',
            },
        },
    },
    dataName: {
        fontSize: '12px',
    },
    dataValue: {
        fontSize: '14px',
    },
    iconTooltip: {
        color: '#3BB8D4 !important',
        padding: '4px !important',
    },
    dataChanger: {
        fontSize: '12px',
        color: '#9CAE5A !important',
        cursor: 'pointer',
    },
    numberIdWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inputField: {
        marginTop: '0px',
        width: '100%',
    },
}));
