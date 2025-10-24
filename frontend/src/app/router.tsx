import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '@/pages/layouts/MainLayout';
import { LoadingSpinner } from '@/core/components/LoadingSpinner';

const HomePage = lazy(() => import('@/pages/Home'));
const CatalogPage = lazy(() => import('@/pages/Catalog'));
const ProductDetailPage = lazy(() => import('@/pages/ProductDetail'));
const GalleryPage = lazy(() => import('@/pages/Gallery'));
const ContactPage = lazy(() => import('@/pages/Contact'));
const NotFoundPage = lazy(() => import('@/pages/NotFound'));

/**
 * @component AppRouter
 * @summary Main application routing configuration with lazy loading
 * and hierarchical layouts.
 * @type router-configuration
 * @category navigation
 *
 * @features
 * - Lazy loading of pages for optimization
 * - Hierarchical layouts for consistent structure
 * - Loading states for better UX
 */
export const AppRouter = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="catalogo" element={<CatalogPage />} />
          <Route path="catalogo/:id" element={<ProductDetailPage />} />
          <Route path="galeria" element={<GalleryPage />} />
          <Route path="contato" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
