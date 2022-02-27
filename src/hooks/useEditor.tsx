import { useState } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';

SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('css', css);

type useEditorProps = {
  reactCode: string;
  cssCode: string;
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
          <div className={isReactCodeActive ? 'active' : ''}>
            <SyntaxHighlighter
              language="javascript"
              style={prism}
              showLineNumbers={true}
              customStyle={{
                background: '#f8f8f8',
                textShadow: 'none',
                margin: '0',
                padding: '0',
              }}
              codeTagProps={{
                style: {
                  textShadow: 'none',
                },
              }}
            >
              {reactCode}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="content css">
          <div className={!isReactCodeActive ? 'active' : ''}>
            <SyntaxHighlighter
              language="css"
              style={prism}
              showLineNumbers={true}
              customStyle={{
                background: '#f8f8f8',
                textShadow: 'none',
                margin: '0',
                padding: '0',
              }}
              codeTagProps={{
                style: {
                  textShadow: 'none',
                },
              }}
            >
              {cssCode}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
};

export default useEditor;
