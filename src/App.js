import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'

 class App extends React.Component {
   constructor(){
     super();
   }
   render(){
    return (
      <div>
      <HomePage />
    
      </div>
    );
  }
}

export default App;
