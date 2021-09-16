export interface LoginSaltKey {
  hash: string //	密码校验盐值	有效时间为20s
  key: string //	RSA公钥	公钥为固定值
}
