import axios from 'axios';
import React, {Component} from 'react';
 
export class XlsToJson extends Component {
  state = {
    // Initially, no file is selected
    selectedFile: null
  };
  // On file select (from the pop up)
  onFileChange = event => {
  
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  };
  
  // On file upload (click the upload button)
  onFileUpload = () => {
  
    // Create an object of formData
    const formData = new FormData();
  
    // Update the formData object
    formData.append(
      "xlsFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
  
    // Details of the uploaded file
    console.log(this.state.selectedFile);

    // Request made to the backend api
    // Send formData object
    // const response = fetch("uploadfile", formData);
      async function postData(url = 'xlsupload/uploadfile', data = formData) {
      // Default options are marked with *
      const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        //headers: {
        //  //'Content-Type': 'application/json'
        //  'Content-Type': 'application/x-www-form-urlencoded',
        //},
        body: data // body data type must match "Content-Type" header
      });
      return response.json(); // parses JSON response into native JavaScript objects
    }
    postData().then(function(response){
      debugger;
      console.log(response);
    });
  };
  
  // File content to be displayed after
  // file upload is complete
  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {this.state.selectedFile.name}</p>
          <p>File Type: {this.state.selectedFile.type}</p>
          <p>
            Last Modified:{" "}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>

        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };
  
  render() {
    return (
      <div>
          <h1>
            Upload Xlsx File 
          </h1>
          <h3>
            File Upload using React!
          </h3>
          <div>
              <input type="file" onChange={this.onFileChange} />
              <button onClick={this.onFileUpload}>
                Upload!
              </button>
          </div>
        {this.fileData()}
      </div>
    );
  }
}