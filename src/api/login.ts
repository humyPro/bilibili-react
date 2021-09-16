import { LoginSaltKey } from '../interface/login'
import Api from './api'
import Constant from './constant'

/**
 * 获取加密公钥及密码盐值1（web端）
 */
function getSaltKey(): Promise<LoginSaltKey> {
  return Api.get(`${Constant.HOST_BILI}/login?act=getkey`)
}

export default {
  getSaltKey
}
