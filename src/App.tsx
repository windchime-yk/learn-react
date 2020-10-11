import React, { useState } from 'react';
import Greets from './components/Greets';
import TextInput from './components/TextInput';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  const n = Math.floor(Math.random() * 10);
  const THRESHOLD = 5;
  const actorList = ['Ryan Reynolds', 'Robert Downey, Jr.', 'Jon Favreau'];
  const elems = (
    <>
      {/* これはReact.Fragmentの省略記法 */}
      <p>foo</p>
      <p>bar</p>
      <p>baz</p>
    </>
  );

  // State
  const [state, setState] = useState({
    check: true,
    actor: actorList[0],
  });
  const onCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, check: e.target.checked });
  };
  const onSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setState({ ...state, actor: e.target.value });
  };

  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="app-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="app-empty">
        {/* この要素の子要素は表示されない */}
        <div />
        <div>{undefined}</div>
        <div>{null}</div>
        <div>{true}</div>
        <div>{false}</div>
      </div>
      <div>
        {n > THRESHOLD && (
          <p>
            `n` is larger than
            {THRESHOLD}
          </p>
        )}
        {/* ifの代用 */}
        <p>
          `n` is
          {n % 2 === 0 ? 'even' : 'odd'}
        </p>
        {/* if-elseの代用 */}
      </div>
      <ul>
        {actorList.map((name, i) => (
          <li key={i}>
            Hello,
            {name}!
          </li>
        ))}
      </ul>
      <div>
        {
          3 > 1 && 'foo' // インラインコメント
        }
        {/*
            複数行に渡る
            コメント
           */}
      </div>
      <input type="checkbox" checked={state.check} onChange={onCheck} />
      <select value={state.actor} onChange={onSelect}>
        {actorList.map((name, i) => (
          <option value={name} key={i}>
            {name}
          </option>
        ))}
      </select>
      {elems}
      <Greets name="Patty" times={4}>
        <span role="img" aria-label="rabbit">
          🐰
        </span>
      </Greets>
      <TextInput />
    </div>
  );
};

export default App;
