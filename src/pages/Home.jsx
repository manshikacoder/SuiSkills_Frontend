import React from 'react';
import BannerCarousel from '../components/BannerCarousel';
import TrustedPartners from '../components/TrustedPartners';
import BrowsJobCategory from '../components/BrowsJobCategory';
import SuiWorkCard from '../components/SuiWorkCard';
import TrendingJobSection from '../components/TrendingJobSection';
import TopWorkerSection from '../components/TopWorkerSection';
import SuiAssistant from '../components/SuiAssistant';
import BlogSection from '../components/BlogSection';
import FaqSection from '../components/FaqSection';

const Home = () => {
  return (
    <>
      {/* Full-width carousel (no container) */}
      <BannerCarousel />
      {/* Trusted Partners  */}
      <TrustedPartners />
      {/* Brows Job */}
      <BrowsJobCategory />
      {/* How Sui Works */}
      <SuiWorkCard />
      {/* Trending Jobs */}
      <TrendingJobSection />
      {/* Top Workerss */}
      <TopWorkerSection />
      {/* SuiAssistant */}
      <SuiAssistant />
      {/* {BlogSection } */}
      <BlogSection />
      {/* {FaqSection } */}
      <FaqSection />

    </>
  );
};

export default Home;
