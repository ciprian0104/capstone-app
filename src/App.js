import './css/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { RoutesSwitcher } from './components/RoutesSwitcher';
import { Home } from './components/pages/Home';
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
