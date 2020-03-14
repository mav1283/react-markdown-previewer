import React, { useReducer } from 'react';
import DisplayArea from './components/DisplayArea';
import InputArea from './components/InputArea';
import AppContext from './context/AppContext';
import marked from 'marked';
import './stylesheets/styles.scss';

function App() {
  const initialState = {
    markdown: '',
    maxDisplay: false,
    maxInput: false
  };

  const stateReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_MAX_DISPLAY':
        return {
          ...state,
          maxDisplay: action.maxDisplay
        };
      case 'SET_MAX_INPUT':
        return {
          ...state,
          maxInput: action.maxInput
        };
      case 'SET_MARKDOWN_INPUT':
        return {
          ...state,
          markdown: action.markdown
        };
      default:
        return state;
    }
  };

  const [appState, dispatch] = useReducer(stateReducer, initialState);

  return (
    <AppContext.Provider value={{ appState, dispatch }}>
      <div className='App'>
        <DisplayArea />
        <InputArea />
      </div>
    </AppContext.Provider>
  );
}

// ALLOWS LINE BREAKS WITH RETURN BUTTON
marked.setOptions({
  breaks: true
});

export default App;
