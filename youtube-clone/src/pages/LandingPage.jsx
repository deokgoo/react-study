import React from 'react';
import apiService from '../services/youtubeApi';

import Header from '../components/Header';
import Footer from '../components/Footer';
import VideoList from '../components/VideoList';

const LandingPage = () => {
  return (
    <div className="landingPage">
      <Header />
      <VideoList />
      <Footer />
    </div>
  )
};

export default LandingPage;
