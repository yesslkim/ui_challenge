import Header from 'base/Header';
import Wrapper from 'base/Wrapper';
import Routes from 'base/Router';
import 'icons.css';
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
