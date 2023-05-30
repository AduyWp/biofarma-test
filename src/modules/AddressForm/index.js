/* eslint-disable consistent-return */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import useStyles from './style';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import MapsAutocomplete from '../commons/GoogleMapsAutocomplete';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AddressFormView = () => {
    const styles = useStyles();

    const countAddressComplete = (str) => str.length;

    const [addressCompleteLength, setAddressCompleteLength] = React.useState(0);

    const [latitude, setLatitude] = useState(() => {
        if (typeof window !== 'undefined') {
            const saveLat = localStorage.getItem('lat');
            const initLat = JSON.parse(saveLat);
            return parseFloat(initLat) || -6.1754517;
        }
    });
    const [longitude, setLongitude] = useState(() => {
        if (typeof window !== 'undefined') {
            const saveLng = localStorage.getItem('lng');
            const initLng = JSON.parse(saveLng);
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

    const configValidation = {
        region_name: Yup.string().required('Nama provinsi wajib diisi'),
        city: Yup.string().required('Kota wajib diisi'),
        district: Yup.string().required('Kecamatan wajib diisi'),
        postcode: Yup.string().required('Kode pos wajib diisi'),
        sub_district: Yup.string().required('Kelurahan wajib diisi'),
    };

    const CustomerKycSchema = Yup.object().shape(configValidation);

    const formik = useFormik({
        initialValues: {
            region_name: '',
            city: '',
            district: '',
            postcode: '',
            sub_district: '',
            addressComplete: '',
        },
        validationSchema: CustomerKycSchema,
        onSubmit: () => {
            // Do nothing
        },
    });

    const [regionNameState, setRegionName] = React.useState(() => {
        if (typeof window !== 'undefined') {
            const saveRegionName = localStorage.getItem('region_name');
            const initRegionName = JSON.parse(saveRegionName);
            formik.setFieldValue('region_name', initRegionName);
            return initRegionName || '';
        }
    });

    const [postcodeState, setPostcode] = React.useState(() => {
        if (typeof window !== 'undefined') {
            const savePostcode = localStorage.getItem('postcode');
            const initPostcode = JSON.parse(savePostcode);
            formik.setFieldValue('postcode', initPostcode);
            return initPostcode || '';
        }
    });

    const [cityState, setCity] = React.useState(() => {
        if (typeof window !== 'undefined') {
            const saveCity = localStorage.getItem('city');
            const initCity = JSON.parse(saveCity);
            formik.setFieldValue('city', initCity);
            return initCity || '';
        }
    });

    const [districtState, setDistrict] = React.useState(() => {
        if (typeof window !== 'undefined') {
            const saveDistrict = localStorage.getItem('district');
            const initDistrict = JSON.parse(saveDistrict);
            formik.setFieldValue('district', initDistrict);
            return initDistrict || '';
        }
    });

    const [subDistrictState, setSubDistrict] = React.useState(() => {
        if (typeof window !== 'undefined') {
            const saveSubDistrict = localStorage.getItem('sub_district');
            const initSubDistrict = JSON.parse(saveSubDistrict);
            formik.setFieldValue('sub_district', initSubDistrict);
            return initSubDistrict || '';
        }
    });

    const [addressComplete, setAddressComplete] = React.useState(() => {
        if (typeof window !== 'undefined') {
            const saveAddressComplete = localStorage.getItem('addressComplete');
            const initAddressComplete = JSON.parse(saveAddressComplete);
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

    const confirmSaveAddress = () => {
        localStorage.setItem('region_name', JSON.stringify(formik.values.region_name));
        localStorage.setItem('postcode', JSON.stringify(formik.values.postcode));
        localStorage.setItem('city', JSON.stringify(formik.values.city));
        localStorage.setItem('district', JSON.stringify(formik.values.district));
        localStorage.setItem('sub_district', JSON.stringify(formik.values.sub_district));
        localStorage.setItem('addressComplete', JSON.stringify(formik.values.addressComplete));
    };

    const [open, setOpen] = React.useState(false);

    return (
        <>
            <Box className={styles.resultWrapper}>
                <MapsAutocomplete
                    gmapKey="AIzaSyCsWgNT9vLJSzSBmJlqFdembBz4zBCLRgQ"
                    formik={formik}
                    mapPosition={mapPosition}
                    dragMarkerDone={handleDragPosition}
                />
            </Box>
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
                            placeholder="Ketik Alamat Lengkap..."
                            value={regionNameState}
                            onChange={(e) => {
                                formik.values.region_name = e.target.value;
                                setRegionName(e.target.value);
                            }}
                            className={styles.inputField}
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
                            onChange={(e) => {
                                formik.values.district = e.target.value;
                                setDistrict(e.target.value);
                            }}
                            className={styles.inputField}
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
                            onChange={(e) => {
                                formik.values.city = e.target.value;
                                setCity(e.target.value);
                            }}
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
                            onChange={(e) => {
                                formik.values.sub_district = e.target.value;
                                setSubDistrict(e.target.value);
                            }}
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
                            onChange={(e) => {
                                formik.values.postcode = e.target.value;
                                setPostcode(e.target.value);
                            }}
                            className={styles.inputField}
                        />
                    </Grid>
                    <Grid item xs={12} className={styles.numberIdWrapper}>
                        <Typography variant="p" type="bold" className={styles.dataName}>
                            Lengkapi Alamat*
                        </Typography>
                        <Typography variant="p" type="regular" className={styles.dataCounter}>
                            {addressCompleteLength} / 100
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name="addressComplete"
                            placeholder="Ketik Alamat Lengkap..."
                            variant="outlined"
                            value={addressComplete}
                            onChange={(e) => {
                                formik.values.addressComplete = e.target.value;
                                setAddressComplete(e.target.value);
                            }}
                            inputProps={{ maxLength: 100 }}
                            className={styles.inputField}
                        />
                        <Typography variant="subtitle1" type="regular" className={styles.dataName}>
                            Contoh: Jl. Leuser No. 2B RT. 01 RW. 01
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            fullWidth
                            className={styles.btnSignup}
                            variant="contained" color="primary"
                            id="btnInputAddressForm"
                            onClick={() => {
                                confirmSaveAddress();
                            }}
                        >
                            <Typography variant="span" type="bold">
                                Konfirmasi Alamat
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default AddressFormView;
