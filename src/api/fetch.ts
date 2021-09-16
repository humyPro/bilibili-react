type methodType = 'get' | 'post' | 'put' | 'delete'

export type Response<T> = {
  code: number
  msg: string
  success: boolean
  data: T
}

class ApiError extends Error {
  code: number

  message: string

  url: string

  constructor(code: number, msg: string, url: string) {
    super()
    this.code = code
    this.message = msg
    this.url = url
  }
}

export function request<T>(
  url: string,
  method: methodType = 'get',
  query?: Record<string, unknown>,
  body?: Record<string, unknown>,
  abort?: AbortController
): Promise<Response<T>> {
  const init: RequestInit = {
    credentials: 'same-origin',
    method,
    headers: {
      'content-Type': 'application/json;charset=utf-8'
    },
    body: body && JSON.stringify(body),
    signal: abort && abort.signal,
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

  return fetch(url, init)
    .then(fetchResponse => {
      const resPromise = fetchResponse.json() as Promise<Response<T>>
      if (fetchResponse.ok) {
        return resPromise
      }
      return resPromise.then(res => {
        throw new Error(res.msg)
      })
    })
    .catch(error => {
      // todo
      console.log(error)
      // alert error msg here
      throw new Error('请求失败')
    })
}

export function get<T>(
  url: string,
  query?: Record<string, unknown>,
  abort?: AbortController
): Promise<Response<T>> {
  return request<T>(url, 'get', query, undefined, abort)
}

export function post<T>(
  url: string,
  body: Record<string, unknown>,
  abort?: AbortController
): Promise<Response<T>> {
  return request<T>(url, 'post', undefined, body, abort)
}
