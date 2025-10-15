// hooks/useLazyLoading.ts
'use client';

import { useEffect, useRef } from 'react';

export function useLazyLoading() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if ('IntersectionObserver' in window) {
      observerRef.current = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
              img.classList.add('lazy-loaded');
            }
            observerRef.current?.unobserve(img);
          }
        });
      }, {
        rootMargin: '50px 0px',
        threshold: 0.1
      });

      document.querySelectorAll('img[data-src]').forEach(img => {
        observerRef.current?.observe(img);
      });
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);
}