/* eslint-disable eqeqeq */
import React, { Component } from 'react';
import qs from "query-string";
import axios from 'axios';

class Patient extends Component {

  constructor(props) {
    super(props);
    this.state = {
      patientFhirId: null,
      token: null,
      patientData: null,
    }
  }

  componentDidMount() {
    let _self = this;
    let patientFhirId = qs.parse(this.props.location.search).patientFhirId;
    let token = qs.parse(this.props.location.search).token;
    _self.setState({
      patientFhirId,
      token
    });

    let data = {
      patientFhirId
    }

    let headers = {
      Authorization: "Bearer " + token
    }

    let options = {
      headers
    }

    axios.post(`https://localhost:5000/auth/patient`, data, options)
    .then(response => {
      this.setState({patientData: response});
    }).catch(error => {
      alert(error.message);
    });
  }

  render() {
    if(this.state.patientData) {
      return (
        <div className="Welcome">
          <h4>Patients Data</h4>
          <div>
            <p> FHIR Id: {this.state.patientData.data.fhirId} </p>
            <p> Name: {this.state.patientData.data.name} </p>
            <p> Date Of Birth: {this.state.patientData.data.dateOfBirth} </p>
            <p> Gender: {this.state.patientData.data.gender} </p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="Welcome">
          <h4>No Data Available</h4>
        </div>
      );
    }
  }

}
export default Patient;