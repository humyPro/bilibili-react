const get = () => {}
type methodType = 'get' | 'post' | 'put' | 'delete'
const init: RequestInit = {
  credentials: 'same-origin'
}

const request = (url: string, method: methodType) => fetch(url, init)

export default get
