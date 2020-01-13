import React from 'react';
import Logo from './components/LogoForApp.js'
import './App.css';
import MainCard from './containers/MainCard';

class App extends React.Component{
  render() {
    return (
    <div className="App">
       <Logo/>
       <MainCard/>
    </div>
    );
  }


}

export default App;
