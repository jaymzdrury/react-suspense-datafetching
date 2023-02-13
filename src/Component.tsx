import {fetchData} from './Api'
const fetchedData = fetchData()

function Component() {
  const readData = fetchedData.read()
  return <div>{readData ? readData.name : 'EMPTY'}</div>
}

export default Component