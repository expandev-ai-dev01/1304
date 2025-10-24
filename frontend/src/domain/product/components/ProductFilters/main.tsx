import { Button } from '@/core/components/Button';
import type { ProductFiltersProps } from './types';

/**
 * @component ProductFilters
 * @summary Filter controls for product catalog
 * @domain product
 * @type ui-component
 * @category form
 */
export const ProductFilters = ({
  search,
  semGluten,
  semLactose,
  semFrutosSecos,
  onSearchChange,
  onSemGlutenChange,
  onSemLactoseChange,
  onSemFrutosSecosChange,
  onClearFilters,
}: ProductFiltersProps) => {
  const hasActiveFilters = search || semGluten || semLactose || semFrutosSecos;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="space-y-4">
        <div>
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
            Buscar produtos
          </label>
          <input
            id="search"
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Digite o nome ou descrição..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <div>
          <p className="text-sm font-medium text-gray-700 mb-3">
            Filtrar por restrições alimentares
          </p>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={semGluten}
                onChange={(e) => onSemGlutenChange(e.target.checked)}
                className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
              />
              <span className="ml-2 text-sm text-gray-700">Sem Glúten</span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                checked={semLactose}
                onChange={(e) => onSemLactoseChange(e.target.checked)}
                className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
              />
              <span className="ml-2 text-sm text-gray-700">Sem Lactose</span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                checked={semFrutosSecos}
                onChange={(e) => onSemFrutosSecosChange(e.target.checked)}
                className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
              />
              <span className="ml-2 text-sm text-gray-700">Sem Frutos Secos</span>
            </label>
          </div>
        </div>

        {hasActiveFilters && (
          <div className="pt-2">
            <Button variant="outline" size="sm" onClick={onClearFilters} fullWidth>
              Limpar Filtros
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
