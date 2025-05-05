import React from 'react';
import Button from '../components/Button';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import { FiArrowRight } from "react-icons/fi";
import BannerCarousel from '../components/BannerCarousel';
import TrustedPartners from '../components/TrustedPartners';
import BrowsJobCategory from '../components/BrowsJobCategory';
import SuiWorkCard from '../components/SuiWorkCard';
import TrendingJobSection from '../components/TrendingJobSection';
import TopWorkerSection from '../components/TopWorkerSection';

const Home = () => {
  return (
    <>
      {/* Full-width carousel (no container) */}
      <BannerCarousel />
      {/* Trusted Partners  */}
      <TrustedPartners/>
      {/* Brows Job */}
      <BrowsJobCategory/>
      {/* How Sui Works */}
      <SuiWorkCard />
      {/* Trending Jobs */}
      <TrendingJobSection />
      {/* Top Workerss */}
      <TopWorkerSection/>
      
    </>
  );
};

export default Home;
