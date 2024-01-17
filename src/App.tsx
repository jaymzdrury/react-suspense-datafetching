import {Suspense} from 'react'
import Component from './Component'

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Component />
    </Suspense>
  )
}

export default App
