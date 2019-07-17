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
      case '/SecondPage':
        currentPage = <SecondPage />;
        break;
      case '/ThirdPage':
        currentPage = <ThirdPage />;
        break;
      default:
         currentPage = <div className="Menu">
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

