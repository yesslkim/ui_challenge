import { useState } from 'react';

type useEditorProps = {
  reactCode: JSX.Element;
  cssCode: JSX.Element;
};

const useEditor = ({ reactCode, cssCode }: useEditorProps) => {
  const [isReactCodeActive, setisReactCodeActive] = useState(true);

  return (
    <div className="code-editor">
      <div className="editor-header">
        <div className="editor-btns">
          <div className="red"></div>
          <div className="yellow"></div>
          <div className="green"></div>
        </div>
        {/* <div className="editor-copy">
          <svg
            className="copy"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            ></path>
          </svg>
        </div> */}
      </div>
      <div className="editor-menu">
        <button
          type="button"
          className={isReactCodeActive ? 'active' : ''}
          onClick={() => {
            setisReactCodeActive(true);
          }}
        >
          React
        </button>
        <button
          type="button"
          className={!isReactCodeActive ? 'active' : ''}
          onClick={() => {
            setisReactCodeActive(false);
          }}
        >
          CSS
        </button>
      </div>
      <div className="editor-code">
        <div className="content react">
          <pre className={isReactCodeActive ? 'active' : ''}>
            <code className="react-code">{reactCode}</code>
          </pre>
        </div>
        <div className="content css">
          <pre className={!isReactCodeActive ? 'active' : ''}>
            <code className="css-code">{cssCode}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default useEditor;
