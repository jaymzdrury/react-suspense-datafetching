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
    const suspender = promise.then(
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
  
  const fetchAPI = () => {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.json())
    .catch(err => console.log(err))
  }