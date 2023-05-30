import useStyles from './style';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import React from 'react';

const CustomTextField = ({
    type = null,
    placeholder = '',
    disabled = false,
    onChange = () => {},
    value = '',
    className = '',
    label = '',
    fullWidth = true,
    shrink = true,
    error = false,
    errorMessage = '',
    variant = 'standard',
    loading = false,
    footer,
    ...other
}) => {
    const styles = useStyles();

    let customTextFieldInput = (
        <FormControl disabled={disabled || loading} fullWidth={fullWidth} error={error} variant={variant}>
            <InputLabel shrink={shrink} htmlFor={label} className={styles.label}>
                {label}
            </InputLabel>
            <Input
                // id={label}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                endAdornment={<>{loading ? <CircularProgress color="inherit" size={20} /> : null}</>}
                {...other}
            />
            {React.isValidElement(footer) ? (
                footer
            ) : (
                <Typography variant="p" color={error ? 'red' : 'default'}>
                    {errorMessage}
                </Typography>
            )}
        </FormControl>
    );
    
    return customTextFieldInput;
};

export default CustomTextField;
