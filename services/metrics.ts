import { PostData } from '../types/posts'
import { getMedian } from '../utils/math'
import { Metrics, MetricsParams, TemporalLengthValues } from '../types/metrics'
import axios from 'axios'

export const parsePostsToMetrics = (posts: Array<PostData>): Metrics => {
  const metrics: Metrics = {}
  const temporalValues: TemporalLengthValues = {}

  posts.forEach((post) => {
    // Create object for the user if it doesn't exist
    if (!metrics[post.from_id]) {
      metrics[post.from_id] = {
        userId: post.from_id,
        userName: post.from_name,
        totalPosts: 0,
        totalByMonth: {},
        longestPost: post.message.length,
        median: 0,
      }
    }

    // Count total of posts made by each person
    metrics[post.from_id].totalPosts++

    // Calculate median number of characters of their posts
    if (!temporalValues[post.from_id]) {
      temporalValues[post.from_id] = {
        values: [post.message.length],
      }
    } else {
      temporalValues[post.from_id].values.push(post.message.length)
      metrics[post.from_id].median = getMedian(
        temporalValues[post.from_id].values
      )
    }

    // Calculate number of posts by month and user
    const month = new Date(post.created_time).getMonth() + 1

    if (!metrics[post.from_id].totalByMonth[month]) {
      metrics[post.from_id].totalByMonth[month] = 1
    } else {
      metrics[post.from_id].totalByMonth[month]++
    }

    // Calculate longest post
    if (post.message.length > metrics[post.from_id].longestPost) {
      metrics[post.from_id].longestPost = post.message.length
    }
  })

  return metrics
}

export const getMetrics = async (data: MetricsParams): Promise<Metrics> => {
  return axios
    .get('/api/metrics', { params: data })
    .then((response) => response.data)
}
