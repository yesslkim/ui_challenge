import Header from 'base/Header';
import Wrapper from 'base/Wrapper';
import Home from 'base/Home';
import Routes from 'base/Router';
import 'App.css';
import Footer from 'base/Footer';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <>
          <Header />
          <Routes />
          <Footer />
        </>
      </Wrapper>
    </div>
  );
}

export default App;
