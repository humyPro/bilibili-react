import { LoginSaltKey } from '../interface/login'
import { get, Response } from './fetch'
import { HOST_BILI } from './constant'

/**
 * 获取加密公钥及密码盐值1（web端）
 */
export function getSaltKey(): Promise<LoginSaltKey> {
  return fetch(`${HOST_BILI}/login?act=getkey`).then(res => res.json() as Promise<LoginSaltKey>)
}

export default {}
