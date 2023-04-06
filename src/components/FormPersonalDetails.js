import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './FormPersonalDetails.css';

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div className='form-contianer'>
        <MuiThemeProvider>
          <>
            <Dialog
              open
              fullWidth
              maxWidth='sm'
            >
              <AppBar title="Enter Personal Details" />

              <div className='address-details'>
                <input type='text' className='fname add-form-value' placeholder="Address Line 1"
                  label="Address 1"
                  onChange={handleChange('addOne')}
                  defaultValue={values.addOne} required />
                <input type='text' className='mname add-form-value' placeholder='Address Line 2' required label="Address 1"
                  onChange={handleChange('addTwo')}
                  defaultValue={values.addTwo} />
              </div>
              <div className='address-details'>
                <select name="city" placeholder='City' className="city" label="Address 1"
                  onChange={handleChange('city')}
                  defaultValue={values.city} >
                  <option value="" disabled selected>City</option>
                  <option value="x">X</option>
                  <option value="y">Y</option>
                  <option value="z">Z</option>
                  <option value="a">A</option>
                </select>
                <select name="state" placeholder='State' className="state" label="Address 1"
                  onChange={handleChange('state')}
                  defaultValue={values.state}>
                  <option value="" disabled selected>State</option>
                  <option value="up">UP</option>
                  <option value="uk">UK</option>
                </select>
              </div>
              <div className='address-details'>
                <select name="country" placeholder='Counrty' className="country" label="Country"
                  onChange={handleChange('country')}
                  defaultValue={values.country}>
                  <option value="" disabled selected>Counrty</option>
                  <option value="india">India</option>
                </select>
                <input type="number" placeholder="Pin Code" className="pcode add-form-value" required label="Address 1"
                  onChange={handleChange('pinCode')}
                  defaultValue={values.pinCode} />
              </div>

              <div className='button-section'>
                <Button
                  className='back-to-home'
                  color="secondary"
                  variant="contained"
                  onClick={this.back}
                >Back</Button>

                <Button
                  className='next-thank-you'
                  color="primary"
                  variant="contained"
                  onClick={this.continue}
                >NEXT</Button>
              </div>
            </Dialog>
          </>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default FormPersonalDetails;
