import React from 'react';
import './App.css';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';



class App extends React.Component {
  render() {



    let url = window.location.pathname;
    let currentPage;
    
    switch (url) {
      case '/FirstPage':
         currentPage = <FirstPage />;
        break;
      default:
         currentPage = <div>
        <h1>Hello</h1>
          <a href="/FirstPage">FirstPage</a>
          <a href="/SecondPage">SecondPage</a>
          <a href="/ThirdPage">ThirdPage</a>
        </div>
    }



    return (
      <div className="App">
        {currentPage}
      </div>
    );



  }
}



export default App;

