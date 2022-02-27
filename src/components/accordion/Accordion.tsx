import Pagination from 'base/Pagination';
import RotateArrow from 'components/atoms/RotateArrow';
import useEditor from 'hooks/useEditor';
import { useState } from 'react';
import './Accordion.css';

const Accordion = () => {
  const [isActive, setIsActive] = useState(false);
  const code = useEditor({
    reactCode: `import { useState } from 'react';
const Accordion = () => {
  const [isActive, setIsActive] = useState(false);

  return(
    <div className={isActive ? 'accordion active' : 'accordion'}>
    <button
      type="button"
      onClick={() => {
        setIsActive(prevState => !prevState);
      }}
    >
      <strong className="question">안쓰면 정말 환불해 주나요?</strong>
      <RotateArrow isActive={isActive} />
    </button>
    <p>
      물론입니다. 결제 후 콘텐츠 다운로드 및 열람을 하지 않으셨다면 전액
      환불해 드리고 있어요. <br />
      [밀리 &gt; 관리 &gt;구독관리 &gt; 결제 내역 확인] 에서 직접 환불이
      가능하며, <br />
      해결이 어려운 경우 고객센터로 문의해 주세요.
    </p>
  </div>
  )
}`,
    cssCode: `.accordion {
  transition: max-height 500ms ease-in-out;
  max-height: 58px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 10px 10px 40px rgb(0 0 0 / 10%);
  overflow: hidden;
}

.accordion.active {
  max-height: 500px;
}

.accordion > button {
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-height: 58px;
  padding: 22px 24px 24px;
  text-align: left;
}

.accordion .question {
  margin-right: 33px;
  font-size: 20px;
}

.accordion i {
  font-size: 20px;
}

.accordion p {
  position: relative;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.6px;
  color: #555;
  padding: 16px 24px 24px;
}

.accordion p::before {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 48px);
  height: 1px;
  background-color: #555;
  content: '';
}
    `,
  });

  return (
    <>
      <section className="component-info">
        <dl>
          <div>
            <dt>
              <span aria-hidden="true" className="ico">
                📅
              </span>
              Date
            </dt>
            <dd>22.02.27</dd>
          </div>
          <div>
            <dt>
              <span aria-hidden="true" className="ico">
                📦
              </span>
              제목
            </dt>
            <dd>아코디언 컴포넌트</dd>
          </div>
          <div>
            <dt>
              <span aria-hidden="true" className="ico">
                📍
              </span>
              참고
            </dt>
            <dd>밀리의 서재, 자주묻는질문을 참고하였습니다😘</dd>
          </div>
        </dl>
      </section>
      <section className="component">
        <div className={isActive ? 'accordion active' : 'accordion'}>
          <button
            type="button"
            onClick={() => {
              setIsActive(prevState => !prevState);
            }}
          >
            <strong className="question">안쓰면 정말 환불해 주나요?</strong>
            <RotateArrow isActive={isActive} />
          </button>
          <p>
            물론입니다. 결제 후 콘텐츠 다운로드 및 열람을 하지 않으셨다면 전액
            환불해 드리고 있어요. <br />
            [밀리 &gt; 관리 &gt;구독관리 &gt; 결제 내역 확인] 에서 직접 환불이
            가능하며, <br />
            해결이 어려운 경우 고객센터로 문의해 주세요.
          </p>
        </div>
      </section>
      <section>{code}</section>
      <Pagination />
    </>
  );
};

export default Accordion;
