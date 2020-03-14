import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { FaEye } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { MdFullscreen, MdFullscreenExit } from 'react-icons/md';
import marked from 'marked';
import { renderer } from './utilities/Placeholder';

function DisplayArea() {
  const { appState, dispatch } = useContext(AppContext);
  const { maxDisplay, markdown } = appState;

  const handleMaxDisplay = () => {
    dispatch({ type: 'SET_MAX_DISPLAY', maxDisplay: !maxDisplay });
    document.getElementById('input-area').classList.toggle('min');
    document.getElementById('display-area').classList.toggle('max');
  };

  return (
    <div id='display-area' className='column'>
      <header id='display-header' className='col-head'>
        <IconContext.Provider value={{ className: 'head-icon' }}>
          <h1>
            <FaEye />
            Previewer
          </h1>
        </IconContext.Provider>
        <button
          id='display-btn'
          className='col-head-btn'
          onClick={handleMaxDisplay}
        >
          {maxDisplay ? <MdFullscreenExit /> : <MdFullscreen />}
        </button>
      </header>
      <div id='display-body' className='col-body'>
        <div
          id='preview'
          dangerouslySetInnerHTML={{
            __html: marked(markdown, { renderer: renderer })
          }}
        ></div>
      </div>
    </div>
  );
}

export default DisplayArea;
