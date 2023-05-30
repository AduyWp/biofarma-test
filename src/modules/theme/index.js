import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useRouter } from 'next/router';

const Home = () => {
    const router = useRouter();

    return (
        <>
            <h1>Homepage</h1>
            <Button
                fullWidth
                variant="contained" color="primary"
                id="btnInputAddressForm"
                onClick={() => router.push('/addressform/create')}
            >
                <Typography variant="span" type="bold">
                    Tambah Alamat
                </Typography>
            </Button>
            </>
    )
}

export default Home;
