import { autorun } from 'mobx'
import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App'
import './index.css'
import { Test } from './stores/Test'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

const t = new Test()
setInterval(() => {
  t.tick()
}, 1000)

autorun(() => {
  console.log(t.kek)

})
