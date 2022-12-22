import { RegisterParams, RegisterResponse } from '../types/register'
import axios from 'axios'

export const register = async (
  data: RegisterParams
): Promise<RegisterResponse> => {
  return axios.post('/api/tokens', data).then((response) => response.data)
}
