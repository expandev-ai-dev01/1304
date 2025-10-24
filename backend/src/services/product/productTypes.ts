/**
 * @interface ProductEntity
 * @description Represents a product entity in the system
 *
 * @property {string} id - Unique product identifier (UUID)
 * @property {string} nome - Product name
 * @property {string} descricao - Product description
 * @property {string} ingredientes - List of ingredients
 * @property {number} preco - Product price
 * @property {string} categoria - Product category
 * @property {string} tamanho - Product size
 * @property {string[]} imagens - Array of image URLs
 * @property {boolean} contemGluten - Contains gluten flag
 * @property {boolean} contemLactose - Contains lactose flag
 * @property {boolean} contemFrutosSecos - Contains nuts flag
 * @property {boolean} destaque - Featured product flag
 * @property {Date} dataCadastro - Registration date
 * @property {string} status - Product status ('ativo' | 'inativo')
 */
export interface ProductEntity {
  id: string;
  nome: string;
  descricao: string;
  ingredientes: string;
  preco: number;
  categoria: string;
  tamanho: string;
  imagens: string[];
  contemGluten: boolean;
  contemLactose: boolean;
  contemFrutosSecos: boolean;
  destaque: boolean;
  dataCadastro: Date;
  status: 'ativo' | 'inativo';
}

/**
 * @interface ProductListParams
 * @description Parameters for listing products
 *
 * @property {string} [search] - Search term for name or description
 * @property {boolean} [semGluten] - Filter products without gluten
 * @property {boolean} [semLactose] - Filter products without lactose
 * @property {boolean} [semFrutosSecos] - Filter products without nuts
 * @property {number} [page] - Page number
 * @property {number} [pageSize] - Items per page
 */
export interface ProductListParams {
  search?: string;
  semGluten?: boolean;
  semLactose?: boolean;
  semFrutosSecos?: boolean;
  page?: number;
  pageSize?: number;
}

/**
 * @interface ProductListResult
 * @description Result of product list operation
 *
 * @property {ProductEntity[]} data - Array of products
 * @property {number} total - Total number of products
 */
export interface ProductListResult {
  data: ProductEntity[];
  total: number;
}

/**
 * @interface ProductCreateParams
 * @description Parameters for creating a product
 *
 * @property {string} nome - Product name
 * @property {string} descricao - Product description
 * @property {string} ingredientes - List of ingredients
 * @property {number} preco - Product price
 * @property {string} [categoria] - Product category
 * @property {string} [tamanho] - Product size
 * @property {string[]} imagens - Array of image URLs
 * @property {boolean} [contemGluten] - Contains gluten flag
 * @property {boolean} [contemLactose] - Contains lactose flag
 * @property {boolean} [contemFrutosSecos] - Contains nuts flag
 * @property {boolean} [destaque] - Featured product flag
 */
export interface ProductCreateParams {
  nome: string;
  descricao: string;
  ingredientes: string;
  preco: number;
  categoria?: string;
  tamanho?: string;
  imagens: string[];
  contemGluten?: boolean;
  contemLactose?: boolean;
  contemFrutosSecos?: boolean;
  destaque?: boolean;
}
