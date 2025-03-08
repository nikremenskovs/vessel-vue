export type ProductState = 'Disabled' | 'Live'

export interface Vessel {
  id: number
  vesselName: string
  mailProductState: ProductState
  cyberProductState: ProductState
  assetCount: number
}

export interface Computer {
  id: number
  computerName: string
  vesselId: number
}
