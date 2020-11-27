import React, { Component } from 'react';

class ZipForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      zipcode:""
    };
    this.inputChanged = this.inputChanged.bind(this);
    this.submitZipCode = this.submitZipCode.bind(this);
  }

  render() {
    return (
      <div className="zip-form">
        <form id="zipForm" onSubmit={this.submitZipCode}>
          <div className="flex-parent">
            <label htmlFor="zipcode">Zip</label>
            <input className="form-control"
              type="input" id="zipcode" name="zipcode"
              value={this.state.zipcode} required
              onChange={this.inputChanged}
            />
            <button type="submit" className="btn btn-success"> Get the forecast!</button>
          </div>
        </form>
      </div>
    );
  }

  inputChanged(event) {
    const {value} = event.target;
    this.setState({zipcode: value});
  }

 submitZipCode(event) {
   event.preventDefault(); //don't submit the form
   const { zipcode } = this.state; //get the zip
   const { onSubmit } = this.props //this comes from App.js because parent-child
   onSubmit(zipcode); //the form calls a method on the App and passes the zipcode
   this.setState({zipcode: ""}); //clear the zipcode here in Zipform (and clear the webpage)
 }
}

export default ZipForm;
