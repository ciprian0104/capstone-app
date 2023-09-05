import './css/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { RoutesSwitcher } from './components/RoutesSwitcher';

function App() {
  return (
    <>
      <Header />
      <main className='content'>
        <RoutesSwitcher />
      </main>

      <Footer />
    </>
  );
}

export default App;
