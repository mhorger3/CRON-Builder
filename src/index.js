import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Select, FormControl, FormHelperText, TextField, MenuItem, InputLabel, Input } from '@material-ui/core';

export class Dashboard extends React.Component {

  constructor(){
    super();
    this.state = {
      age: '',
      name: 'hai',
      labelWidth: 0,
    };
  }

  handleChange(){
    this.setState({ [event.target.name]: event.target.value });
  };

  render(){
    return(
      <div id="wrapper">
        <h1> CRON Expression Generator </h1>
          <h3> A simple tool that helps you build and get familar with common CRON expressions. <br></br>
          There are better generators out there, but this is meant for beginners / reference. Eventaully, you'll build your own! </h3>
      </div>
    );
  }
}


export class CRONForm extends React.Component {

  constructor(){
    super();
    this.state = {
      seconds: '',
      minutes: '',
      hours: '',
      dayMon: '',
      month: '',
      dayWeek: '',
      year: '',
    };
  }

  handleChange(){
    this.setState();
  };

  render(){
    return(
      <form style={{display: 'flex', flexWrap: 'wrap'}} autoComplete="off">
        <TextField id="seconds" label="Seconds" defaultValue="" margin="normal" variant="filled"/>
        <TextField id="minutes" label="Minutes" defaultValue="" margin="normal" variant="filled"/>
        <TextField id="hours" label="Hours" defaultValue="" margin="normal" variant="filled"/>
        <TextField id="dayMon" label="Day of Month" defaultValue="" margin="normal" variant="filled"/>
        <TextField id="month" label="Month" defaultValue="" margin="normal" variant="filled"/>
        <TextField id="dayWeek" label="Day of Week" defaultValue="" margin="normal" variant="filled"/>
        <TextField id="year" label="Year" defaultValue="" margin="normal" variant="filled"/>
      </form>
    );
  }
}

ReactDOM.render(<Dashboard/>, document.getElementById('main'));
ReactDOM.render(<CRONForm/>, document.getElementById('content'));
