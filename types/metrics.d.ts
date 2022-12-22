export interface TotalByMonth {
  [key: number]: number
}

export interface MetricElement {
  userId: string
  userName: string
  totalPosts: number
  totalByMonth: TotalByMonth
  longestPost: number
  median: number
}

export interface Metrics {
  [key: string]: MetricElement
}

export interface TemporalLengthValues {
  [key: string]: {
    values: Array<number>
  }
}

export interface MetricsParams {
  sl_token: string
}
