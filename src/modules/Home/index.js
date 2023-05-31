import React, {useEffect, useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import useStyles from './style';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { useRouter } from 'next/router';
import { useGeolocated } from "react-geolocated";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Home = () => {
    const router = useRouter();
    const styles = useStyles();

    const [listAddress, setListAddress] = useState([]);

    useEffect(() => {
        setListAddress(JSON.parse(localStorage.getItem('addressList') || "[]"));
    }, []);

    // Directions
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      localStorage.removeItem('addressListDetail')
    };

    // For Directions
    const { coords, isGeolocationEnabled } =
    useGeolocated({
        positionOptions: {
            enableHighAccuracy: false,
        },
        userDecisionTimeout: 5000,
    });

    const [coordsDestination, setCoordsDestination] = useState()
    const coorddinate = [
        {lat: coords?.latitude, lng: coords?.longitude}, // FROM
        {lat: coordsDestination?.lat, lng: coordsDestination?.lng} // TO
    ]

    let coordinateString = '';
    for (const item of coorddinate) {
        coordinateString += '!4m3!3m2!1d' + item.lat + '!2d' + item.lng;
    }
    const epochNow = Date.now();
    let urlConstruct = `https://www.google.com/maps/embed?pb=!1m${coorddinate.length * 4 + 16}`;
    urlConstruct += `!1m12!1m3!1d1.0!2d${coorddinate[0].lng}!3d${coorddinate[0].lng}`;
    urlConstruct += `!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1`;
    urlConstruct += `!4m${coorddinate.length * 4 + 1}!3e0${coordinateString}`;
    urlConstruct += `!5e0!3m2!1sen!2sau!4v${epochNow}000!5m2!1sen!2sau`;

    return (
        <>
            <Box className={styles.rootContainer}>
                <Button
                    className={styles.buttonAdd}
                    id="btnInputAddressForm"
                    variant="contained"
                    color="primary"
                    onClick={() => router.push('/addressform/create')}
                >
                    <Typography variant="subtitle1">
                        Tambah Alamat
                    </Typography>
                </Button>
            </Box>
            <Box className={styles.listContainer}>
                {listAddress?.length !== 0 ?
                    <Grid container spacing={{ xs: 1, md: 2 }}>
                        {listAddress?.map((data, index) => (
                            <Grid item xs={12} sm={6} index={index} className={styles.gridItems}>
                                <Paper className={styles.paper}>
                                    <Grid container spacing={2} className={styles.dataWrapper}>
                                        <Grid item sm={6}>
                                            <Typography variant="subtitle1" type="regular" className={styles.dataName}>
                                                Provinsi :
                                            </Typography>
                                            <Typography variant="subtitle1" type="bold" className={styles.dataName}>
                                                {data.region_name}
                                            </Typography>
                                        </Grid>
                                        <Grid item sm={6}>
                                            <Typography variant="subtitle1" type="regular" className={styles.dataName}>
                                                Kota :
                                            </Typography>
                                            <Typography variant="subtitle1" type="bold" className={styles.dataName}>
                                                {data.city}
                                            </Typography>
                                        </Grid>
                                        <Grid item sm={6}>
                                            <Typography variant="subtitle1" type="regular" className={styles.dataName}>
                                                Kecamatan :
                                            </Typography>
                                            <Typography variant="subtitle1" type="bold" className={styles.dataName}>
                                                {data.district}
                                            </Typography>
                                        </Grid>
                                        <Grid item sm={6}>
                                            <Typography variant="subtitle1" type="regular" className={styles.dataName}>
                                                Kelurahan :
                                            </Typography>
                                            <Typography variant="subtitle1" type="bold" className={styles.dataName}>
                                                {data.sub_district}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="subtitle1" type="regular" className={styles.dataName}>
                                                Address :
                                            </Typography>
                                            <Typography variant="subtitle1" type="bold" className={styles.dataName}>
                                                {data.addressComplete}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Box display="flex" flexDirection="row" p={0} m={0} bgcolor="background.paper">
                                        <Button
                                            className={styles.buttonDirection}
                                            id="btnInputAddressForm"
                                            variant="contained"
                                            color="primary"
                                            onClick={() => {
                                                handleClickOpen()
                                                let list = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('addressList') || "[]") : ''
                                                localStorage.setItem('addressListDetail', JSON.stringify(list[index]));
                                                let coordsDestination = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('addressListDetail') || "{}") : ''
                                                setCoordsDestination(coordsDestination)
                                            }}
                                        >
                                            <Typography variant="subtitle1" type="bold">
                                                Direction
                                            </Typography>
                                        </Button>
                                        <Button
                                            className={styles.buttonRemove}
                                            id="btnInputAddressForm"
                                            variant="contained"
                                            color="secondary"
                                            onClick={() => {
                                                let list = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('addressList') || "[]") : ''
                                                const removed = list.splice(index, 1)
                                                localStorage.setItem('addressList', JSON.stringify(list));
                                                window.location.reload()
                                            }}
                                        >
                                            <Typography variant="subtitle1" type="bold">
                                                Hapus Alamat
                                            </Typography>
                                        </Button>
                                    </Box>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                    : 
                    <Grid item xs={12}>
                        <Typography variant="h6" align="center">
                            Belum ada data alamat
                        </Typography>
                    </Grid>
                }
            </Box>
            {!isGeolocationEnabled ? 
                <div>Geolocation is not enabled</div>
            : 
                <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                    <AppBar className={styles.appBar}>
                        <Toolbar>
                            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                                <CloseIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <DialogContent>
                        <iframe src={urlConstruct} className={styles.mapsDialog} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </DialogContent>
                </Dialog>
            }
        </>
    )
}

export default Home;
