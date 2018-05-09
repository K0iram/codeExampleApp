import { YouTubeAPI } from '../api'
import { merge } from 'ramda'

export const searchVideos = async params => {
  const DEFAULTS = {
    part: "snippet",
    type: "video"
  }
  const mergedParams = { params: merge(DEFAULTS, params) }
  return YouTubeAPI.get(`search`, mergedParams)
}