type methodType = 'get' | 'post' | 'put' | 'delete'

function request<T>(
  url: string,
  method: methodType = 'get',
  query?: Record<string, unknown>,
  body?: Record<string, unknown>,
  timeout?: number
): Promise<T> {
  const init: RequestInit = {
    credentials: 'same-origin',
    method,
    headers: {
      'content-type': 'application/json'
    },
    body: body && JSON.stringify(body),
    mode: 'cors'
  }

  if (query) {
    const params: string[] = []
    Object.keys(query).forEach(k => {
      const value = query[k]
      if (value instanceof Array || value instanceof Set) {
        Array.from(value).forEach(o => {
          params.push(`k=${o}`)
        })
      } else {
        params.push(`k=${value}`)
      }
    })
    url += `?${params.join('&')}`
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

function get<T>(url: string, query?: Record<string, unknown>, timeout?: number): Promise<T> {
  return request<T>(url, 'get', query, undefined, timeout)
}

function post<T>(url: string, body: Record<string, unknown>, timeout?: number): Promise<T> {
  return request<T>(url, 'post', undefined, body, timeout)
}

export default {
  request,
  get,
  post
}
