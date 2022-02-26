import { Routes, Route } from 'react-router-dom';
import Component from 'components/Component';
import Home from './Home';
import Components from './Components';
import ComponentNotFound from './ComponentNotFound';

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />}>
          <Route path="/components/1" element={<Component />} />
          <Route path="/components/*" element={<ComponentNotFound />} />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
};
export default Router;
