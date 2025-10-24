import { v4 as uuidv4 } from 'uuid';
import {
  ProductEntity,
  ProductListParams,
  ProductListResult,
  ProductCreateParams,
} from './productTypes';

/**
 * @summary
 * In-memory storage for products (no database persistence)
 *
 * @module services/product/productLogic
 */

const products: ProductEntity[] = [
  {
    id: uuidv4(),
    nome: 'Bolo de Chocolate',
    descricao: 'Delicioso bolo de chocolate com cobertura cremosa',
    ingredientes: 'Chocolate, farinha, ovos, açúcar, manteiga, leite',
    preco: 45.0,
    categoria: 'Bolo Caseiro',
    tamanho: '20 cm',
    imagens: ['https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800'],
    contemGluten: true,
    contemLactose: true,
    contemFrutosSecos: false,
    destaque: true,
    dataCadastro: new Date('2024-01-15'),
    status: 'ativo',
  },
  {
    id: uuidv4(),
    nome: 'Bolo de Cenoura',
    descricao: 'Bolo de cenoura tradicional com cobertura de chocolate',
    ingredientes: 'Cenoura, farinha, ovos, açúcar, óleo, chocolate',
    preco: 40.0,
    categoria: 'Bolo Caseiro',
    tamanho: '20 cm',
    imagens: ['https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=800'],
    contemGluten: true,
    contemLactose: true,
    contemFrutosSecos: false,
    destaque: true,
    dataCadastro: new Date('2024-01-16'),
    status: 'ativo',
  },
  {
    id: uuidv4(),
    nome: 'Bolo Red Velvet',
    descricao: 'Bolo red velvet com cream cheese',
    ingredientes: 'Farinha, cacau, corante, ovos, açúcar, cream cheese',
    preco: 55.0,
    categoria: 'Bolo Caseiro',
    tamanho: '20 cm',
    imagens: ['https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=800'],
    contemGluten: true,
    contemLactose: true,
    contemFrutosSecos: false,
    destaque: true,
    dataCadastro: new Date('2024-01-17'),
    status: 'ativo',
  },
  {
    id: uuidv4(),
    nome: 'Bolo de Limão',
    descricao: 'Bolo de limão siciliano com cobertura de limão',
    ingredientes: 'Limão siciliano, farinha, ovos, açúcar, manteiga',
    preco: 42.0,
    categoria: 'Bolo Caseiro',
    tamanho: '20 cm',
    imagens: ['https://images.unsplash.com/photo-1519915212116-7cfef71f1d3e?w=800'],
    contemGluten: true,
    contemLactose: true,
    contemFrutosSecos: false,
    destaque: false,
    dataCadastro: new Date('2024-01-18'),
    status: 'ativo',
  },
  {
    id: uuidv4(),
    nome: 'Bolo de Morango',
    descricao: 'Bolo de morango com chantilly e morangos frescos',
    ingredientes: 'Morango, farinha, ovos, açúcar, chantilly',
    preco: 50.0,
    categoria: 'Bolo Caseiro',
    tamanho: '20 cm',
    imagens: ['https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800'],
    contemGluten: true,
    contemLactose: true,
    contemFrutosSecos: false,
    destaque: false,
    dataCadastro: new Date('2024-01-19'),
    status: 'ativo',
  },
  {
    id: uuidv4(),
    nome: 'Bolo de Nozes',
    descricao: 'Bolo de nozes com cobertura de caramelo',
    ingredientes: 'Nozes, farinha, ovos, açúcar, manteiga, caramelo',
    preco: 48.0,
    categoria: 'Bolo Caseiro',
    tamanho: '20 cm',
    imagens: ['https://images.unsplash.com/photo-1557925923-cd4648e211a0?w=800'],
    contemGluten: true,
    contemLactose: true,
    contemFrutosSecos: true,
    destaque: false,
    dataCadastro: new Date('2024-01-20'),
    status: 'ativo',
  },
];

/**
 * @summary
 * Lists products with filters and pagination
 *
 * @function productList
 * @module services/product/productLogic
 *
 * @param {ProductListParams} params - List parameters
 *
 * @returns {Promise<ProductListResult>} Filtered and paginated products
 */
export async function productList(params: ProductListParams): Promise<ProductListResult> {
  let filtered = products.filter((p) => p.status === 'ativo');

  // Apply search filter
  if (params.search) {
    const searchLower = params.search.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.nome.toLowerCase().includes(searchLower) ||
        p.descricao.toLowerCase().includes(searchLower)
    );
  }

  // Apply allergen filters
  if (params.semGluten === true) {
    filtered = filtered.filter((p) => !p.contemGluten);
  }

  if (params.semLactose === true) {
    filtered = filtered.filter((p) => !p.contemLactose);
  }

  if (params.semFrutosSecos === true) {
    filtered = filtered.filter((p) => !p.contemFrutosSecos);
  }

  // Sort: featured first, then by date
  filtered.sort((a, b) => {
    if (a.destaque && !b.destaque) return -1;
    if (!a.destaque && b.destaque) return 1;
    return b.dataCadastro.getTime() - a.dataCadastro.getTime();
  });

  // Pagination
  const page = params.page || 1;
  const pageSize = params.pageSize || 12;
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const paginatedData = filtered.slice(startIndex, endIndex);

  return {
    data: paginatedData,
    total: filtered.length,
  };
}

/**
 * @summary
 * Gets a single product by ID
 *
 * @function productGet
 * @module services/product/productLogic
 *
 * @param {string} id - Product UUID
 *
 * @returns {Promise<ProductEntity | null>} Product or null if not found
 */
export async function productGet(id: string): Promise<ProductEntity | null> {
  const product = products.find((p) => p.id === id && p.status === 'ativo');
  return product || null;
}

/**
 * @summary
 * Creates a new product (admin only - not implemented in this feature)
 *
 * @function productCreate
 * @module services/product/productLogic
 *
 * @param {ProductCreateParams} params - Product creation parameters
 *
 * @returns {Promise<ProductEntity>} Created product
 */
export async function productCreate(params: ProductCreateParams): Promise<ProductEntity> {
  const newProduct: ProductEntity = {
    id: uuidv4(),
    nome: params.nome,
    descricao: params.descricao,
    ingredientes: params.ingredientes,
    preco: params.preco,
    categoria: params.categoria || 'Bolo Caseiro',
    tamanho: params.tamanho || '20 cm',
    imagens: params.imagens,
    contemGluten: params.contemGluten ?? true,
    contemLactose: params.contemLactose ?? true,
    contemFrutosSecos: params.contemFrutosSecos ?? false,
    destaque: params.destaque ?? false,
    dataCadastro: new Date(),
    status: 'ativo',
  };

  products.push(newProduct);
  return newProduct;
}
