import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Select, FormControl, FormHelperText, MenuItem, InputLabel, Input } from '@material-ui/core';

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
      <h1> CRON Expression Generator </h1>
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
    this.setState({ [event.target.name]: event.target.value });
  };

  render(){
    return(
      <form autoComplete="off">
      <FormControl>
          Every <InputLabel htmlFor="seconds">Seconds</InputLabel>
          <Select value={this.state.seconds} onChange={this.handleChange} inputProps={{name: 'Seconds',id: 'seconds'}}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        </form>
    );
  }
}

ReactDOM.render(<Dashboard/>, document.getElementById('main'));
ReactDOM.render(<CRONForm/>, document.getElementById('content'));
