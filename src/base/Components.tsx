import { Link, Outlet } from 'react-router-dom';

const Components = () => {
  return (
    <div className="components">
      <Link to="/"> 홈으로 🏠 </Link>
      <Outlet />
    </div>
  );
};

export default Components;
