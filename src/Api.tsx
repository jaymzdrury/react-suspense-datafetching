import axios from "axios";

interface Data {
  name: string
}

export const fetchData = () => {
  const promise = fetchAPI()
  return wrapPromise(promise)
}

const wrapPromise = (promise: Promise<Data>) => {
  let status = 'pending'
  let result: Data
  let suspender = promise.then(
    res => {
      status = 'success'
      result = res
    },
    err => {
      status = 'error'
      result = err
    }
  )
  return {
    read(){
      if(status === 'pending'){
        throw suspender
      } else if (status === 'error'){
        throw result
      } else if (status === 'success'){
        return result
      }
    }
  }
}

export const fetchAPI = () => {
  return axios
  .get('https://jsonplaceholder.typicode.com/users/1')
  .then(res => res.data)
  .catch(err => console.log(err))
}