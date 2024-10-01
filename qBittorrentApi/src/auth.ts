import Request, {ApiResult} from "./utils/Request";

/**
 * Login
 * @param {string} username
 * @param {string} password
 * @return {ApiResult<void>}
 */
const Login = (username: string, password: string):ApiResult<void> => {
  return Request.request<void>({
    method: "POST",
    url: '/auth/login',
    params: {
      username,
      password
    }
  })
}
/**
 * Logout
 * @return {ApiResult<void>}
 */
const Logout = ():ApiResult<void> => {
  return Request.request<void>({
    method: "POST",
    url: '/auth/logout'
  })
}

export default {
  Login,
  Logout
}
