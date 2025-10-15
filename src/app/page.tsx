'use client';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroCarousel from './components/HeroCarousel';
import CategoryRuler from './components/CategoryRuler';
import BestOpportunities from './components/BestOpportunities';
import ProductClassification from './components/ProductClassification';
import BestOffers from './components/BestOffers';
import BestSellers from './components/BestSellers';
import ProductSearch from './components/ProductSearch';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroCarousel />
        <CategoryRuler />
        <BestOpportunities />
        <ProductClassification />
        <BestOffers />
        <BestSellers />
        <ProductSearch />
      </main>
      <Footer />
    </>
  );
}