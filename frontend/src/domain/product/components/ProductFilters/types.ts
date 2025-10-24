export interface ProductFiltersProps {
  search: string;
  semGluten: boolean;
  semLactose: boolean;
  semFrutosSecos: boolean;
  onSearchChange: (value: string) => void;
  onSemGlutenChange: (value: boolean) => void;
  onSemLactoseChange: (value: boolean) => void;
  onSemFrutosSecosChange: (value: boolean) => void;
  onClearFilters: () => void;
}
