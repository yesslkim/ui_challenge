import { Link, Outlet } from 'react-router-dom';

const Components = () => {
  return (
    <main className="components">
      <Link to="/"> νμΌλ‘ π  </Link>
      <Outlet />
    </main>
  );
};

export default Components;
