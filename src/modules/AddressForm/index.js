/* eslint-disable consistent-return */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-vars */
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import useStyles from './style';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const AddressFormView = () => {
    const styles = useStyles();

    return (
        <>
            <Box className={styles.detailWrapper}>
                <Typography variant="h1" type="bold" className={styles.titleHeader}>
                    Detail Alamat
                </Typography>
                <Grid container spacing={2} className={styles.dataWrapper}>
                    <Grid item xs={6}>
                        <Typography variant="h1" type="regular" className={styles.dataName}>
                            Provinsi
                        </Typography>
                        <Typography variant="h1" type="bold" className={styles.dataValue}>
                            {/*{regionNameState}*/}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h1" type="regular" className={styles.dataName}>
                            Kecamatan
                        </Typography>
                        <Typography variant="h1" type="bold" className={styles.dataValue}>
                            {/*{districtState}*/}
                        </Typography>
                        {/*<Typography variant="h1" type="regular" className={styles.dataChanger} onClick={() => setOpen(true)}>
                            Ubah Kecamatan
                        </Typography>*/}
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h1" type="regular" className={styles.dataName}>
                            Kota/Kabupaten
                        </Typography>
                        <Typography variant="h1" type="bold" className={styles.dataValue}>
                            {/*{cityState}*/}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h1" type="regular" className={styles.dataName}>
                            Desa/Kelurahan
                        </Typography>
                        <Typography variant="h1" type="bold" className={styles.dataValue}>
                            {/*{subDistrictState}*/}
                        </Typography>
                        {/*<Typography variant="h1" type="regular" className={styles.dataChanger} onClick={() => setOpen(true)}>
                            Ubah Desa/Kelurahan
                        </Typography>*/}
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h1" type="regular" className={styles.dataName}>
                            Kode Pos
                        </Typography>
                        <Typography variant="h1" type="bold" className={styles.dataValue}>
                            {/*{postcodeState}*/}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} className={styles.numberIdWrapper}>
                        <Typography variant="p" type="bold" className={styles.dataName}>
                            Lengkapi Alamat*
                        </Typography>
                        <Typography variant="p" type="regular" className={styles.dataCounter}>
                            {/*{addressCompleteLength} / 100*/}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name="addressComplete"
                            placeholder="Ketik Alamat Lengkap..."
                            // value={addressComplete}
                            // onChange={(e) => {
                            //     formik.values.addressComplete = e.target.value;
                            //     setAddressComplete(e.target.value);
                            // }}
                            inputProps={{ maxLength: 100 }}
                            className={styles.inputField}
                        />
                        <Typography variant="p" type="regular" className={styles.dataName}>
                            Contoh: Jl. Leuser No. 2B RT. 01 RW. 01
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            fullWidth
                            className={styles.btnSignup}
                            id="btnInputAddressForm"
                            // onClick={() => {
                            //     confirmSaveAddress();
                            //     setTimeout(() => {
                            //         router.push('/customer/account/warung-verification/data');
                            //     }, 700);
                            // }}
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
