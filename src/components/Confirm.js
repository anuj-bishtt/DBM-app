import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import './Confirm.css';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, middleName, lastName, email, mobileNo, age, bloodGroup, dob, height, weight, gender, maritalStatus, addOne, addTwo, city, state, country, pinCode }
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <h1 className='saved-data'>Data saved successfully</h1>
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem>
                <ListItemText primary="First Name" secondary={firstName} />
              </ListItem>
              <hr />
              <ListItem>
                <ListItemText primary="Middle Name" secondary={middleName} />
              </ListItem>
              <hr />
              <ListItem>
                <ListItemText primary="Last Name" secondary={lastName} />
              </ListItem>
              <hr />
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
              <hr />
              <ListItem>
                <ListItemText primary="Mobile No" secondary={mobileNo} />
              </ListItem>
              <hr />
              <ListItem>
                <ListItemText primary="Date Of Birth" secondary={dob} />
              </ListItem>
              <hr />
              <ListItem>
                <ListItemText primary="Age" secondary={age} />
              </ListItem>
              <hr />
              <ListItem>
                <ListItemText primary="Blood Group" secondary={bloodGroup} />
              </ListItem>
              <hr />
              <ListItem>
                <ListItemText primary="Height" secondary={height} />
              </ListItem>
              <hr />
              <ListItem>
                <ListItemText primary="Weight" secondary={weight} />
              </ListItem>
              <hr />
              <ListItem>
                <ListItemText primary="Gender" secondary={gender} />
              </ListItem>
              <hr />
              <ListItem>
                <ListItemText primary="Marital Status" secondary={maritalStatus} />
              </ListItem>
              <hr />
              <ListItem>
                <ListItemText primary="Address Line 1" secondary={addOne} />
              </ListItem>
              <hr />
              <ListItem>
                <ListItemText primary="Address Line 2" secondary={addTwo} />
              </ListItem>
              <hr />
              <ListItem>
                <ListItemText primary="City" secondary={city} />
              </ListItem>
              <hr />
              <ListItem>
                <ListItemText primary="State" secondary={state} />
              </ListItem>
              <hr />
              <ListItem>
                <ListItemText primary="Country" secondary={country} />
              </ListItem>
              <hr />
              <ListItem>
                <ListItemText primary="Bio" secondary={pinCode} />
              </ListItem>
              <hr />
            </List>
            <br />
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
    );
  }
}

export default Confirm;
