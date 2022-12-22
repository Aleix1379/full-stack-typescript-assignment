import { PostsParams, PostsResponse } from '../types/posts'
import axios from 'axios'

export const getPosts = async (data: PostsParams): Promise<PostsResponse> => {
  return axios
    .get('/api/posts', { params: data })
    .then((response) => response.data)
}
