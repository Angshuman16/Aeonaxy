

import CardsContainer from './CardsContainer';
import Footer from './Footer';
import Header from './Header';
import Middle from './Middle';
import Popular from './Popular';
import Subscription from './Subscription';

function App() {
  return (
    <div className="App">
      <Header />
      <Middle />
      <Popular />
      <CardsContainer />
      <Subscription />

      <Footer />
    </div>
  );
}

export default App;
