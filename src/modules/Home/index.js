import React from 'react';
import Typography from '@material-ui/core/Typography';
import useStyles from './style';
import Button from '@material-ui/core/Button';
import { useRouter } from 'next/router';

const Home = () => {
    const router = useRouter();
    const styles = useStyles();

    return (
        <>
            <div className={styles.root}>
                <Button
                    className={styles.button}
                    id="btnInputAddressForm"
                    variant="contained"
                    color="primary"
                    onClick={() => router.push('/addressform/create')}
                >
                    <Typography variant="span" type="bold">
                        Tambah Alamat
                    </Typography>
                </Button>
            </div>
            <Typography variant="h6" className={styles.title}>
                Homepage
            </Typography>
        </>
    )
}

export default Home;
