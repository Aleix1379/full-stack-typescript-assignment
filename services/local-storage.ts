const LocalStorageKeys = {
  AUTH_TOKEN: 'AUTH_TOKEN',
}
export const getAuthToken = (): string | null => {
  return localStorage.getItem(LocalStorageKeys.AUTH_TOKEN)
}

export const setAuthToken = (token: string) => {
  localStorage.setItem(LocalStorageKeys.AUTH_TOKEN, token)
}

export const removeAuthToken = () => {
  localStorage.removeItem(LocalStorageKeys.AUTH_TOKEN)
}
