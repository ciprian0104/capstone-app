import Nav from './Nav';

const Header = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <header className='fw'>
      <Nav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
    </header>
  );
};

export default Header;
