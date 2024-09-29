import request from "@/utils/Request";


const Login = (username: string, password: string) => {
  const params = new URLSearchParams()
  params.append("username", username)
  params.append("password", password)
  return request.post('/auth/login', params)
}

const Logout = () => {
  return request.post('/auth/logout')
}

export default {
  Login,
  Logout
}
