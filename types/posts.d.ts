export interface PostsParams {
  sl_token: string
  page?: number
}

interface PostData {
  created_time: string
  from_id: string
  from_name: string
  id: string
  message: string
  type: string
}

export interface PostsResponse {
  page: number
  posts: Array<PostData>
}
