/**
 * @types ProductTypes
 * @summary Type definitions for product domain
 * @domain product
 * @category types
 */

export interface Product {
  id_produto: string;
  nome: string;
  descricao: string;
  ingredientes: string;
  preco: number;
  categoria: string;
  tamanho: string;
  imagens: string[];
  contem_gluten: boolean;
  contem_lactose: boolean;
  contem_frutos_secos: boolean;
  destaque: boolean;
  data_cadastro: string;
  status: 'ativo' | 'inativo';
}

export interface ProductListParams {
  search?: string;
  semGluten?: boolean;
  semLactose?: boolean;
  semFrutosSecos?: boolean;
  page?: number;
  pageSize?: number;
}

export interface ProductListResponse {
  data: Product[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
