import React, { Component } from "react";

class App extends Component {
  state = { solc: null, code: '' };

  componentDidMount = async () => {
    try {
      
    }
  };

  update = async () => {
    
  };

  compile = async (code) => {
    const { solc, code } = this.state;  
  };

  render() {
    // if (!this.state.web3) {
    //   return <div>Loading Web3, accounts, and contract...</div>;
    // }
    return (
      <a href='#' class='btn btn-small'>Compile</a>
    );
  }
}

export default App;
