import React from 'react';
import './App.css';
import Sketchpad from './components/Sketchpad';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';



class App extends React.Component {
  render() {



    let url = window.location.pathname;
    let currentPage;

    switch (url) {
      case '/Sketchpad':
        currentPage = <Sketchpad />;
        break;
      case '/SecondPage':
        currentPage = <SecondPage />;
        break;
      case '/ThirdPage':
        currentPage = <ThirdPage />;
        break;
      default:
         currentPage = (
         <div className="Page">

          <div className="Menu">
            <a href="/Sketchpad">Sketchpad</a>
            <a href="/SecondPage">SecondPage</a>
            <a href="/ThirdPage">ThirdPage</a>
          </div>

          <Sketchpad />


        </div>
        )
    }



    return (
      <div className="App">
        {currentPage}
      </div>
    );



  }
}



export default App;

