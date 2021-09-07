import Header from './components/Header'
import { Container, Grid, Typography } from '@material-ui/core';
import { Formik, Form } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import InputText from './components/FormUI/TextField';
import SelectInput from './components/FormUI/Select';
import DateTimePicker from './components/FormUI/DateTimePicker';
import CheckBoxInput from './components/FormUI/Checkbox';
import Button from './components/FormUI/Button';
import countries from './data/countries.json';
import { registerValidation } from './helpers/Validation';
import { registerInitialData } from './helpers/InitialFormFields';

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(8),
  },
}));

const INITIAL_FORM_STATE = registerInitialData;

const FORM_VALIDATION = registerValidation();

function App() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div className={classes.formWrapper}>
            <Formik
              initialValues={{ ...INITIAL_FORM_STATE }}
              validationSchema={FORM_VALIDATION}
              onSubmit={values => {
                console.log(values);
              }}
            >
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography>
                      Your Details
                    </Typography>
                  </Grid>

                  <Grid item xs={6}> <InputText size="small" name="firstName" label="First Name" type="text" /> </Grid>

                  <Grid item xs={6}> <InputText size="small" name="lastName" label="Last Name" /> </Grid>

                  <Grid item xs={12}> <InputText size="small" name="email" label="Email" /> </Grid>

                  <Grid item xs={12}> <InputText size="small" name="phone" label="Phone" /> </Grid>

                  <Grid item xs={12}>
                    <Typography>
                      Address
                    </Typography>
                  </Grid>

                  <Grid item xs={12}> <InputText size="small" name="addressLine1" label="Address Line1" /> </Grid>

                  <Grid item xs={12}> <InputText size="small" name="addressLine2" label="Address Line2" /> </Grid>

                  <Grid item xs={12}> <SelectInput size="small" name="country" label="Country" options={countries} /> </Grid>

                  <Grid item xs={6}> <InputText size="small" name="state" label="State" /> </Grid>

                  <Grid item xs={6}> <InputText size="small" name="city" label="City" /> </Grid>

                  <Grid item xs={12}>
                    <Typography> Booking Information </Typography>
                  </Grid>

                  <Grid item xs={6}> <DateTimePicker size="small" name="arrivalDate" label="Arrival Date" /> </Grid>

                  <Grid item xs={6}> <DateTimePicker size="small" name="departureDate" label="Departure Date" /> </Grid>

                  <Grid item xs={12}> <InputText size="small" name="message" label="Message" multiline={true} rows={4} /> </Grid>

                  <Grid item xs={12}> <CheckBoxInput name="termsOfService" legend="Terms Of Service" label="I agree" /> </Grid>
                  
                  <Grid item xs={12}>
                    <Button>Submit</Button>
                  </Grid>

                </Grid>
              </Form>
            </Formik>
          </div>
        </Container>
      </Grid>
     </Grid>
  )
}

export default App;
