import React from 'react';
import './App.css';
import HomePage from './components/homepage.component'

 class App extends React.Component {
   constructor(){
     super();
   }
   render(){
    return (
      <div>
      <HomePage />
      test
      </div>
    );
  }
}

export default App;
