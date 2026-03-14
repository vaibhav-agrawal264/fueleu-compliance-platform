export interface PoolMember {
  shipId: string
  cb: number
}

export interface PoolResponse {
  poolId: number
  members: PoolMember[]
}