import React from 'react';
import ReactDOM from 'react-dom';
import { Select, FormControl, FormHelperText, MenuItem, InputLabel, Input } from '@material-ui/core';

export class Dashboard extends Compenent {

  state = {
    age: '',
    name: 'hai',
    labelWidth: 0,
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render(){
    const styles = {
      root: {
        display: 'flex',
        flexwrap: 'wrap',
      },
    };

    return(
      <Form style={styles.root} autoComplete="off">
        <FormControl>
          <InputLabel htmlFor="age-simple">Day</InputLabel>
          <Select value={this.state.age} onChange={this.handleChange} inputProps={{
            name: 'age',
            id: 'age-simple'
          }}>
          <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        </Form>
    );


  }
}
