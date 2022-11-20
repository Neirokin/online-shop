import { Models } from '@/@types/enums/Models'
import type { IProduct } from '@/@types/interfaces'
import { axiosBase } from '@/helpers/axiosConfig'

class ProductsAPIModel {
  async getProducts(): Promise<IProduct[]> {
    return axiosBase
      .get(`/${Models.Products}`)
      .then((resp) => {
        return resp.data
      })
      .catch((error) => {
        throw error
      })
  }

  getProduct() {}
}

export const ProductsAPI = new ProductsAPIModel()
