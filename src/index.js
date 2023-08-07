import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';

const containerElem = document.getElementById("root");
const root = createRoot(containerElem)
root.render(<App />);

reportWebVitals(sendToVercelAnalytics);
