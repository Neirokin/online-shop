export interface IProduct {
  id: number
  title: string
  price: number
  category: string // TODO: Возможно enum
  description: string
  image: string
  rating: {
    count: number
    rate: number
  }
}
