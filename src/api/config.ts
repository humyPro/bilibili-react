type methodType = 'get' | 'post' | 'put' | 'delete'

const api = <T>(url: string, method: methodType, timeout?: number): Promise<T> => {
  const init: RequestInit = {
    credentials: 'same-origin',
    method
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

export default api
