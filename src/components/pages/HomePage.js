import Hero from '../Hero';
import Highlights from '../Highlights';
import './../../css/Home.css';

export const HomePage = () => {
  return (
    <div className='fh'>
      <Hero />
      <Highlights />
    </div>
  );
};
