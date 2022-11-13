import {Suspense} from 'react'
import {fetchData} from './Api'
const fetchedData = fetchData()

function App() {
  const readData = fetchedData.read()
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <div>{readData ? readData.name : 'EMPTY'}</div>
    </Suspense>
  );
}

export default App;
