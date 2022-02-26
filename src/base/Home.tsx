import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <main className="main">
      <div className="notice">
        <h2>Notice</h2>
        <ul>
          <li>UI Components를 만들고 아카이브합니다.😁</li>
          <li>
            대부분의 UI 컴포넌트는 다른 디자인 UI 웹사이트, 서비스 중인
            웹사이트를 참고하여 만듭니다. 😘
          </li>
          <li>만약에 참고한 웹사이트가 있는 경우 출처를 밝힙니다. 😃</li>
          <li>
            모든 컴포넌트는 React-typescript, css를 기반으로 만들어집니다. ✨
          </li>
        </ul>
      </div>
      <div className="goal">
        <h2>Goal</h2>
        <p>
          리액트-타입스크립트에 익숙해지고 다양한 컴포넌트를 만들어 퍼블리싱
          실력을 향상하는게 목표입니다💗
        </p>
      </div>
      <div className="components-list">
        <h2>Components</h2>
        <ul>
          <li>
            <NavLink to="/components/1">컴포넌트1</NavLink>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Home;
