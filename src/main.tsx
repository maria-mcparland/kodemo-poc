import React from 'react'
import ReactDOM from 'react-dom/client'
import { KodemoPlayer } from '@kodemo/player';
import json from './document.json';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <KodemoPlayer json={json}></KodemoPlayer>
  </React.StrictMode>,
)
