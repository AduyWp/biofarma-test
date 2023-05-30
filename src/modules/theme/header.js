import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useStyles from './style';

const Home = () => {
    const styles = useStyles();

    return (
        <>
            <div className={styles.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={styles.title}>
                            Buku Alamat
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        </>
    )
}

export default Home;
