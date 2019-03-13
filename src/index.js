import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { FormControl, TextField, Button} from '@material-ui/core';

export class Dashboard extends React.Component {
  static validate(){
    var api = "https://cronexpressiondescriptor.azurewebsites.net/api/descriptor/?expression=";
    api = api + document.getElementById("seconds").value + "+";
    api = api + document.getElementById("minutes").value + "+";
    api = api + document.getElementById("hours").value + "+";
    api = api + document.getElementById("dayMon").value + "+";
    api = api + document.getElementById("month").value + "+";
    api = api + document.getElementById("dayWeek").value + "+";
    api = api + document.getElementById("year").value;
    api = api + "&locale=en-US";
    axios.get(api, { crossdomain: true })
        .then(res => {
            console.log(res.data);
            ReactDOM.render(<div id="result-wrapper"><h1> Results: </h1><CROMResults> {res.data.description} </CROMResults> </div>, document.getElementById('form-result'));
        });
  };

  render(){
    return(
      <div id="header-wrapper">
        <h1> CRON Expression Generator </h1>
          <h3> A simple tool that helps you build and get familar with common CRON expressions. <br></br>
          There are better generators out there, but this is meant for beginners / reference. Eventaully, you'll build your own by memory! </h3>
      </div>
    );
  }
}


export class CRONForm extends React.Component {
  render(){
    return(
      <div id="form-wrapper">
        <form style={{display: 'flex', flexWrap: 'wrap'}} autoComplete="off">
          <CROMTextField id="seconds" label="Seconds" defaultValue="*" margin="normal" variant="filled"></CROMTextField>
          <CROMTextField id="minutes" label="Minutes" defaultValue="*" margin="normal" variant="filled"></CROMTextField>
          <CROMTextField id="hours" label="Hours" defaultValue="*" margin="normal" variant="filled"></CROMTextField>
          <CROMTextField id="dayMon" label="Day of Month" defaultValue="*" margin="normal" variant="filled"></CROMTextField>
          <CROMTextField id="month" label="Month" defaultValue="*" margin="normal" variant="filled"></CROMTextField>
          <CROMTextField id="dayWeek" label="Day of Week" defaultValue="?" margin="normal" variant="filled"></CROMTextField>
          <CROMTextField id="year" label="Year" defaultValue="*" margin="normal" variant="filled"></CROMTextField>
        </form>
        <CROMButton id="submit" onClick={Dashboard.validate}>Submit
        </CROMButton>
      </div>
    );
  }
}

export class CROMTextField extends React.Component {
  render(){
    const { id, label, defaultValue, margin, variant } = this.props;
    return(
      <TextField id={id} label={label} defaultValue={defaultValue} margin={margin} variant={variant}></TextField>
    )
  }
}

export class CROMButton extends React.Component {
  render(){
    const { children, id, onClick } = this.props;
    return(
      <Button id={id} onClick={onClick} variant="contained" color="primary">
      {children}
      </Button>
    )
  }
}

export class CROMResults extends React.Component {
  render(){
    const {children} = this.props;
    return (
      <h3> {children} </h3>
    )
  }
}

ReactDOM.render(<Dashboard/>, document.getElementById('main'));
ReactDOM.render(<CRONForm/>, document.getElementById('form-content'));
