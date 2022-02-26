import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1 className="title">
        <Link to="/">Archiving Components 📦</Link>
      </h1>
    </header>
  );
};

export default Header;
