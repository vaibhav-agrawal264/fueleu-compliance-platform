export interface Comparison {
  routeId: string
  ghgIntensity: number
  baselineIntensity: number
  percentDiff: number
  compliant: boolean
}

export interface ComparisonResponse {
  baseline: {
    routeId: string
    ghgIntensity: number
  }
  comparisons: Comparison[]
}