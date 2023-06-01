/* eslint-disable consistent-return */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import useStyles from './style';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import MapsAutocomplete from '../../commons/GoogleMapsAutocomplete';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const AddressFormView = () => {
    const router = useRouter();
    const styles = useStyles();

    const countAddressComplete = (str) => str.length;

    const [addressCompleteLength, setAddressCompleteLength] = React.useState(0);

    const [latitude, setLatitude] = useState(() => {
        if (typeof window !== 'undefined') {
            const list = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('addressList') || "[]") : ''
            const saveLat = list[router.query.id];
            const initLat = JSON.parse(saveLat.lat);
            return parseFloat(initLat) || -6.1754517;
        }
    });
    const [longitude, setLongitude] = useState(() => {
        if (typeof window !== 'undefined') {
            const list = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('addressList') || "[]") : ''
            const saveLng = list[router.query.id];
            const initLng = JSON.parse(saveLng.lng);
            return parseFloat(initLng) || 106.8272544;
        }
    });

    const [mapPosition, setMapPosition] = useState({
        lat: parseFloat(latitude),
        lng: parseFloat(longitude),
    });

    const handleDragPosition = (value) => {
        setMapPosition(value);
        localStorage.setItem('lat', JSON.stringify(value.lat));
        localStorage.setItem('lng', JSON.stringify(value.lng));
        setLatitude(value.lat);
        setLongitude(value.lng);
    };

    const [addressListArray, setAddressListArray] = useState([])

    const formik = useFormik({
        initialValues: {
            region_name: '',
            city: '', 
            district: '',
            postcode: '',
            sub_district: '',
            addressComplete: '',
        },
        validationSchema: Yup.object().shape({
            region_name: Yup.string().required('Nama provinsi wajib diisi'),
            city: Yup.string().required('Kota wajib diisi'),
            district: Yup.string().required('Kecamatan wajib diisi'),
            postcode: Yup.string().required('Kode pos wajib diisi'),
            sub_district: Yup.string().required('Kelurahan wajib diisi'),
            addressComplete: Yup.string().required('Alamat Lengkap wajib diisi'),
        }),
        onSubmit: (values) => {
            const {
                ...restValues
            } = values;
            const list = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('addressList') || "[]") : ''
            const addressListPayload = {
                region_name: formik.values.region_name,
                postcode: formik.values.postcode,
                city: formik.values.city,
                district: formik.values.sub_district,
                sub_district: formik.values.sub_district,
                addressComplete: formik.values.addressComplete,
                lat: localStorage.getItem('lat') ? localStorage.getItem('lat') : list[router.query.id].lat,
                lng: localStorage.getItem('lat') ? localStorage.getItem('lng') : list[router.query.id].lng
            }
            list[parseInt(router.query.id)] = addressListPayload
            localStorage.setItem('addressList', JSON.stringify(list));
            localStorage.removeItem('lat');
            localStorage.removeItem('lng');
            setOpen(true);
            setTimeout(() => {
                router.push('/');
            }, 1000);
        },
    });

    const [regionNameState, setRegionName] = React.useState(() => {
        if (typeof window !== 'undefined') {
            const list = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('addressList') || "[]") : ''
            const saveRegionName = list[router.query.id];
            const initRegionName = saveRegionName.region_name;
            formik.setFieldValue('region_name', initRegionName);
            return initRegionName || '';
        }
    });
    
    const [postcodeState, setPostcode] = React.useState(() => {
        if (typeof window !== 'undefined') {
            const list = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('addressList') || "[]") : ''
            const savePostcode = list[router.query.id];
            const initPostcode = savePostcode.postcode;
            formik.setFieldValue('postcode', initPostcode);
            return initPostcode || '';
        }
    });

    const [cityState, setCity] = React.useState(() => {
        if (typeof window !== 'undefined') {
            const list = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('addressList') || "[]") : ''
            const saveCity = list[router.query.id];
            const initCity = saveCity.city;
            formik.setFieldValue('city', initCity);
            return initCity || '';
        }
    });

    const [districtState, setDistrict] = React.useState(() => {
        if (typeof window !== 'undefined') {
            const list = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('addressList') || "[]") : ''
            const saveDistrict = list[router.query.id];
            const initDistrict = saveDistrict.district;
            formik.setFieldValue('district', initDistrict);
            return initDistrict || '';
        }
    });

    const [subDistrictState, setSubDistrict] = React.useState(() => {
        if (typeof window !== 'undefined') {
            const list = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('addressList') || "[]") : ''
            const saveSubDistrict = list[router.query.id];
            const initSubDistrict = saveSubDistrict.sub_district;
            formik.setFieldValue('sub_district', initSubDistrict);
            return initSubDistrict || '';
        }
    });

    const [addressComplete, setAddressComplete] = React.useState(() => {
        if (typeof window !== 'undefined') {
            const list = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('addressList') || "[]") : ''
            const saveAddressComplete = list[router.query.id];
            const initAddressComplete = saveAddressComplete.addressComplete;
            formik.setFieldValue('addressComplete', initAddressComplete);
            return initAddressComplete || '';
        }
    });

    React.useEffect(() => {
        if (addressComplete) {
            setAddressCompleteLength(countAddressComplete(addressComplete));
        } else {
            setAddressCompleteLength(0);
        }
    }, [addressComplete]);

    React.useEffect(() => {
        setRegionName(formik.values.region_name);
        setPostcode(formik.values.postcode);
        setCity(formik.values.city);
        setDistrict(formik.values.district);
        setSubDistrict(formik.values.sub_district);
    }, [formik.values]);

    React.useEffect(() => {
        if(localStorage.getItem('addressList')){
            localStorage.getItem('addressList')
        } else {
            localStorage.setItem('addressList', JSON.stringify([]))
        }
    }, [addressListArray]);

    const [open, setOpen] = React.useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <>
            <IconButton onClick={() => router.push('/')}>
                <ArrowBackIcon />
            </IconButton>
            <Box className={styles.resultWrapper}>
                <MapsAutocomplete
                    gmapKey="AIzaSyD4eYFRKbKxol1mnZ6GGLBFAx6VyogMej0"
                    formik={formik}
                    mapPosition={mapPosition}
                    dragMarkerDone={handleDragPosition}
                />
            </Box>
            <form onSubmit={formik.handleSubmit}>
                <Box className={styles.detailWrapper}>
                    <Typography variant="h1" type="bold" className={styles.titleHeader}>
                        Detail Alamat
                    </Typography>
                    <Grid container spacing={2} className={styles.dataWrapper}>
                        <Grid item xs={6}>
                            <Typography variant="h1" type="regular" className={styles.dataName}>
                                Provinsi
                            </Typography>
                            <TextField
                                name="regionName"
                                placeholder="Ketik Provinsi"
                                value={regionNameState}
                                autoComplete='off'
                                onChange={(e) => {
                                    formik.values.region_name = e.target.value;
                                    setRegionName(e.target.value);
                                }}
                                className={styles.inputField}
                                error={!!(formik.touched.region_name && formik.errors.region_name)}
                                helperText={(formik.touched.region_name && formik.errors.region_name) || ''}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h1" type="regular" className={styles.dataName}>
                                Kecamatan
                            </Typography>
                            <TextField
                                name="district"
                                placeholder="Ketik Kecamatan"
                                value={districtState}
                                autoComplete='off'
                                onChange={(e) => {
                                    formik.values.district = e.target.value;
                                    setDistrict(e.target.value);
                                }}
                                className={styles.inputField}
                                error={!!(formik.touched.district && formik.errors.district)}
                                helperText={(formik.touched.district && formik.errors.district) || ''}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h1" type="regular" className={styles.dataName}>
                                Kota/Kabupaten
                            </Typography>
                            <TextField
                                name="district"
                                placeholder="Ketik Kota"
                                value={cityState}
                                autoComplete='off'
                                onChange={(e) => {
                                    formik.values.city = e.target.value;
                                    setCity(e.target.value);
                                }}
                                error={!!(formik.touched.city && formik.errors.city)}
                                helperText={(formik.touched.city && formik.errors.city) || ''}
                                className={styles.inputField}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h1" type="regular" className={styles.dataName}>
                                Desa/Kelurahan
                            </Typography>
                            <TextField
                                name="district"
                                placeholder="Ketik Desa"
                                value={subDistrictState}
                                autoComplete='off'
                                onChange={(e) => {
                                    formik.values.sub_district = e.target.value;
                                    setSubDistrict(e.target.value);
                                }}
                                error={!!(formik.touched.sub_district && formik.errors.sub_district)}
                                helperText={(formik.touched.sub_district && formik.errors.sub_district) || ''}
                                className={styles.inputField}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h1" type="regular" className={styles.dataName}>
                                Kode Pos
                            </Typography>
                            <TextField
                                name="postCode"
                                placeholder="Ketik Kode Pos"
                                value={postcodeState}
                                type="number"
                                autoComplete='off'
                                onChange={(e) => {
                                    formik.values.postcode = e.target.value;
                                    setPostcode(e.target.value);
                                }}
                                error={!!(formik.touched.postcode && formik.errors.postcode)}
                                helperText={(formik.touched.postcode && formik.errors.postcode) || ''}
                                className={styles.inputField}
                            />
                        </Grid>
                        <Grid item xs={12} className={styles.numberIdWrapper}>
                            <Typography variant="subtitle1" type="bold" className={styles.dataName}>
                                Lengkapi Alamat*
                            </Typography>
                            <Typography variant="subtitle1" type="regular" className={styles.dataCounter}>
                                {addressCompleteLength} / 100
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="addressComplete"
                                placeholder="Ketik Alamat Lengkap..."
                                variant="outlined"
                                value={addressComplete}
                                autoComplete='off'
                                onChange={(e) => {
                                    formik.values.addressComplete = e.target.value;
                                    setAddressComplete(e.target.value);
                                }}
                                error={!!(formik.touched.addressComplete && formik.errors.addressComplete)}
                                helperText={(formik.touched.addressComplete && formik.errors.addressComplete) || ''}
                                inputProps={{ maxLength: 100 }}
                                className={styles.inputField}
                            />
                            <Typography variant="subtitle1" type="regular" className={styles.dataName}>
                                Contoh: Jl. Diponogoro No. 27 RT. 01 RW. 01
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                fullWidth
                                className={styles.button}
                                variant="contained" color="primary"
                                id="btnInputAddressForm"
                                type="submit"
                            >
                                <Typography variant="subtitle1" type="bold">
                                    Konfirmasi Alamat
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </form>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Sukses Mengubah Alamat
                </Alert>
            </Snackbar>
        </>
    );
};

export default AddressFormView;
