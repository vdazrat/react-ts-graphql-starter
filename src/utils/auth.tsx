import Cookies from 'js-cookie'

export const isAuthenticated = () => {
  return Cookies.get('_loggedin') === 'true'
}

export const getToken = ():string => {
  const token = Cookies.get('_at')
  return token || ''
}

export const logIn = (token: string) => {
  Cookies.set('_loggedin','true', { expires: 2 })
  Cookies.set('_at',token, { expires: 2 })
  refresh()
}

export const logOut = () => {
  Cookies.remove('_loggedin')
  Cookies.remove('_at')
  refresh()
}

const refresh = () => {
  window.location.reload(false)
}
