type methodType = 'get' | 'post' | 'put' | 'delete'

const request = <T>(
  url: string,
  method: methodType = 'get',
  query?: Record<string, unknown>,
  body?: Record<string, unknown>,
  timeout?: number
): Promise<T> => {
  const init: RequestInit = {
    credentials: 'same-origin',
    method,
    headers: {
      'content-type': 'application/json'
    },
    mode: 'cors'
  }
  if (timeout !== undefined) {
    let abort: (() => void) | null = null
    const abortPromise = new Promise((resolve, reject) => {
      abort = () => reject(new Error('请求超时'))
    })
    const result = Promise.race([
      fetch(url, init).then(response => response.json() as Promise<T>),
      abortPromise
    ])
    const timer = setTimeout(() => {
      abort && abort()
    }, timeout)

    return result.then(res => {
      clearTimeout(timer)
      return res as Promise<T>
    })
  }
  return fetch(url, init).then(response => response.json() as Promise<T>)
}
const get = (url: string, query: Record<string, unknown>, timeout?: number) =>
  request(url, 'get', query, undefined, timeout)

export default request
