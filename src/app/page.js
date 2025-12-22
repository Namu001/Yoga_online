"use client";

import { useState } from 'react';
/* Sidebar removed */
import MobileNav from '@/components/MobileNav';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MostSensationalSection from '@/components/MostSensationalSection';
import YouMightLikeSection from '@/components/YouMightLikeSection';
import DirtyDiscovery from '@/components/DirtyDiscovery';
import CoupleBondSection from '@/components/CoupleBondSection';
import CapturedMomentsSection from '@/components/CapturedMomentsSection';
import DesirableEpisodeSection from '@/components/DesirableEpisodeSection';
import SpicyEpisodesSection from '@/components/SpicyEpisodesSection';
import Top9Section from '@/components/Top9Section';
import LatestSeriesSection from '@/components/LatestSeriesSection';
import VideoModal from '@/components/VideoModal';
import Footer from '@/components/Footer';
import videosData from '@/data/videos.json';

export default function Home() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  return (
    <div className="flex min-h-screen bg-[#0f0f13] text-white overflow-hidden">
      {/* Sidebar (Desktop) Removed */}


      {/* Mobile Navigation (Bottom) */}
      <MobileNav />

      {/* Main Content */}
      <main className="flex-1 mx-auto my-0 md:my-6 flex flex-col gap-8 relative z-10 w-full max-w-[1600px]">
        <Header />

        <div className="flex flex-col gap-10 overflow-y-auto h-[calc(100vh-140px)] md:h-[calc(100vh-140px)] pb-32 md:pb-20 scrollbar-hide px-4 md:px-12">
          <HeroSection videos={videosData.heroVideos} />

          <div className="flex flex-col gap-12">
            <MostSensationalSection
              title="Most Sensational Hot Yoga Watch Now!"
              description="The Most Watched Sensational Yoga Episodes"
              items={videosData.continueWatching}
              onMovieClick={handleVideoSelect}
            />

            <YouMightLikeSection
              items={videosData.youMightLike}
              onMovieClick={handleVideoSelect}
            />

            <DirtyDiscovery data={videosData.dirtyDiscovery} />

            <CoupleBondSection
              items={videosData.trendingTV}
              onMovieClick={handleVideoSelect}
            />

            <CapturedMomentsSection
              data={videosData.capturedMoments}
              onMovieClick={handleVideoSelect}
            />

            <DesirableEpisodeSection
              items={videosData.newReleases}
              onMovieClick={handleVideoSelect}
            />

            <SpicyEpisodesSection
              items={videosData.spicyEpisodes}
              onMovieClick={handleVideoSelect}
            />

            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-[400px]">
                <Top9Section items={videosData.top9ThisWeek} />
              </div>
              <div className="flex-1">
                <LatestSeriesSection
                  data={videosData.latestSeries}
                  onMovieClick={handleVideoSelect}
                />
              </div>
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </main>

      {/* Video Modal */}
      {isModalOpen && (
        <VideoModal
          video={selectedVideo}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      {/* Background Ambient Glows */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />
    </div>
  );
}
