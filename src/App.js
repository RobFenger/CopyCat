import React from 'react';
import {CopyCat} from './CopyCat';




class App extends React.Component {
    constructor(props) {
    super(props);

    this.state = { 
      copying: true,
      input: ''
    };

    this.toggleTape = this.toggleTape.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  //function to toggle the value for copying between true and false
  toggleTape() {
    this.setState({copying: !this.state.copying})
  }

  //function to setState to the input typed in the input-field
  handleChange(e) {
    this.setState({input: e.target.value})
  }
  
  render() {
    const copying = this.state.copying;
    const toggleTape = this.toggleTape;
    const input = this.state.input;
    const handleChange = this.handleChange;
    
    return (
     <CopyCat  copying={copying} toggleTape={toggleTape} input={input} handleChange={handleChange}/>
    );
  };
}




export default App;
