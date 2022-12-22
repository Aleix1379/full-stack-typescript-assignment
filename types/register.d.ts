export interface RegisterParams {
  // client_id: string
  email: string
  name: string
}

export interface RegisterResponse {
  sl_token: string
  client_id: string
  email: string
}
