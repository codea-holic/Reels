import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ParentCounter from './useMemo/ParentCounter';
// import UseReducerExamples from './UseState/useReducerExamples';
// import App from './App';
// import Contexts from './contextPOCs/Contexts';
// import ThemeChanger from './contextPOCs/ThemeChanger';
// import ContextExample2 from './contextPOCs/ContextExample2';
// import UseStateExample from './UseState/UseStateExample';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <App />
    // <Contexts></Contexts>
    // <ThemeChanger></ThemeChanger>
    // <ContextExample2></ContextExample2>
    // <UseStateExample></UseStateExample>
    // <UseReducerExamples></UseReducerExamples>
    <ParentCounter></ParentCounter>
);

