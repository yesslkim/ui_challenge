import { Link, Outlet } from 'react-router-dom';

const Components = () => {
  return (
    <main className="components">
      <Link to="/"> 홈으로 🏠 </Link>
      <Outlet />
    </main>
  );
};

export default Components;
