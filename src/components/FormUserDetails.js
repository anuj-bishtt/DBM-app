import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './FormUserDetails.css';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog open>
            <AppBar title="Enter User Details" />
            <div className='basic-details'>
              <input type='text' className='fname inp-form-value' placeholder="Enter Your First Name" label="First Name" onChange={handleChange('firstName')} defaultValue={values.firstName} />
              <input type='text' className='mname inp-form-value' placeholder="Enter Your Middle Name"
                label="Middle Name"
                onChange={handleChange('middleName')}
                defaultValue={values.middleName} />
            </div>
            <div className='basic-details'>
              <input type='text' className='lname inp-form-value' placeholder="Enter Your Last Name"
                label="Last Name"
                onChange={handleChange('lastName')}
                defaultValue={values.lastName} />
              <input type='number' className='phone inp-form-value' maxlength="10" placeholder="Mobile No"
                label="Mobile No"
                onChange={handleChange('mobileNo')}
                defaultValue={values.mobileNo} />
            </div>
            <div className='basic-details'>
              <input type='email' className='email inp-form-value' placeholder="Enter Your Email"
                label="Email"
                onChange={handleChange('email')}
                defaultValue={values.email} />
              <input type='date' className='inp-form-value' label="Date Of Birth"
                onChange={handleChange('dob')}
                defaultValue={values.dob} />
            </div>
            <div className='basic-details'>
              <input type='Age' className='age inp-form-value' placeholder='Age' label="Age"
                onChange={handleChange('age')}
                defaultValue={values.age} />
              <select name="blood" placeholder='Blood Group' className="bgroup inp-form-value" label="Blood Group" onChange={handleChange('bloodGroup')} defaultValue={values.bloodGroup}>
                <option value="" disabled selected>Blood Group</option>
                <option value="A+">A+</option>
                <option value="B+">B+</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>
            <div className='basic-details'>
              <input type='number' className='height inp-form-value' placeholder='Height' onChange={handleChange('height')} defaultValue={values.height} />
              <input type='number' className='weight inp-form-value' placeholder='Weight' onChange={handleChange('weight')} defaultValue={values.weight} />
            </div>
            <div className='basic-details gender-marital-section'>
              <div className='gender-section'>
                <p>Gender</p>
                <input value="Male" name="gender" type="radio" onChange={handleChange('gender')} defaultValue={values.gender} />
                <label className="gender-label" >Male</label>
                <input value="Female" name="gender" type="radio" onChange={handleChange('gender')} defaultValue={values.gender} />
                <label className="gender-label" >Female</label>
              </div>
              <div className='marital-status'>
                <p>Martial Status</p>
                <input value="Single" name="status" type="radio" onChange={handleChange('maritalStatus')} defaultValue={values.maritalStatus} />
                <label className="gender-label">Single</label>
                <input value="Married" name="status" type="radio" onChange={handleChange('maritalStatus')} defaultValue={values.maritalStatus} />
                <label className="gender-label">Married</label>
                <input value="Divorced" name="status" type="radio" onChange={handleChange('maritalStatus')} defaultValue={values.maritalStatus} />
                <label className="gender-label">Divorced</label>
                <input value="Widowed" name="status" type="radio" onChange={handleChange('maritalStatus')} defaultValue={values.maritalStatus} />
                <label className="gender-label">Widowed</label>
              </div>
            </div>
            <br />
            <div className='button-section'>
              <button type='button' className="button back" disabled>Back</button>
              <Button
                className='next button'
                type='submit'
                color="primary"
                variant="contained"
                onClick={this.continue}
              >NEXT</Button>
            </div>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
