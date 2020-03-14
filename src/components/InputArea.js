import React, { useContext, useEffect } from 'react';
import { FaCode } from 'react-icons/fa';
import AppContext from '../context/AppContext';
import placeholder from '../components/utilities/Placeholder';
import { IconContext } from 'react-icons';
import { MdFullscreen, MdFullscreenExit } from 'react-icons/md';

function InputArea() {
  const { appState, dispatch } = useContext(AppContext);
  const { markdown, maxInput } = appState;

  useEffect(() => {
    dispatch({ type: 'SET_MARKDOWN_INPUT', markdown: placeholder });
  }, [dispatch]);

  const handleMaxInput = e => {
    dispatch({ type: 'SET_MAX_INPUT', maxInput: !maxInput });
    document.getElementById('input-area').classList.toggle('max');
    document.getElementById('display-area').classList.toggle('min');
  };

  const handleMarkdownInput = e => {
    dispatch({ type: 'SET_MARKDOWN_INPUT', markdown: e.target.value });
  };

  return (
    <div id='input-area' className='column'>
      <header id='input-header' className='col-head'>
        <IconContext.Provider value={{ className: 'head-icon' }}>
          <h1>
            <FaCode />
            Editor
          </h1>
        </IconContext.Provider>
        <button
          id='input-btn'
          className='col-head-btn'
          onClick={handleMaxInput}
        >
          {maxInput ? <MdFullscreenExit /> : <MdFullscreen />}
        </button>
      </header>
      <div id='input-body' className='col-body'>
        <textarea
          id='editor'
          placeholder={placeholder}
          type='text'
          value={markdown}
          onChange={handleMarkdownInput}
        ></textarea>
      </div>
    </div>
  );
}

export default InputArea;
