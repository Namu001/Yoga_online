"use client";

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MostSensationalSection from '@/components/MostSensationalSection';
import TopEroticSection from '@/components/TopEroticSection';
import DirtyDiscovery from '@/components/DirtyDiscovery';
import CoupleBondSection from '@/components/CoupleBondSection';
import CapturedMomentsSection from '@/components/CapturedMomentsSection';
import DesirableEpisodeSection from '@/components/DesirableEpisodeSection';
import SpicyEpisodesSection from '@/components/SpicyEpisodesSection';
import Top9Section from '@/components/Top9Section';
import LatestSeriesSection from '@/components/LatestSeriesSection';
import MovieCard from '@/components/MovieCard';
import VideoModal from '@/components/VideoModal';
import LoginModal from '@/components/LoginModal';
import videosData from '@/data/videos.json';

export default function Home() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoginModalOpen(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleVideoSelect = (video) => {
    setIsLoginModalOpen(true);
  };

  const getAllVideos = () => {
    const all = [];
    if (videosData.mostSensationalSection) all.push(...videosData.mostSensationalSection);
    if (videosData.topEroticSection) all.push(...videosData.topEroticSection);
    if (videosData.coupleBondSection) all.push(...videosData.coupleBondSection);
    if (videosData.desirableEpisodeSection) all.push(...videosData.desirableEpisodeSection);
    if (videosData.spicyEpisodesSection) all.push(...videosData.spicyEpisodesSection);
    if (videosData.capturedMomentsSection?.seasons) {
      videosData.capturedMomentsSection.seasons.forEach(s => all.push(...s.episodes));
    }
    if (videosData.latestSeriesSection?.featured) all.push(videosData.latestSeriesSection.featured);
    if (videosData.latestSeriesSection?.list) all.push(...videosData.latestSeriesSection.list);
    return all;
  };

  const filteredVideos = searchQuery
    ? getAllVideos().filter(v => v.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  return (
    <>
      <div className="relative min-h-screen bg-[#0f0f13] text-white">
        
        <Header onSearch={setSearchQuery} />

        <div className="flex flex-col gap-10 pb-10 md:pb-20">

          {searchQuery ? (
            <div className="py-10 px-4 md:px-12">
              <h2 className="text-3xl font-bold mb-8">Search Results for "{searchQuery}"</h2>
              {filteredVideos.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {filteredVideos.map((video, i) => (
                    <MovieCard
                      key={i}
                      {...video}
                      onClick={() => handleVideoSelect(video)}
                      fluid={true}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-gray-500 text-xl font-medium">No results found for your search.</p>
                </div>
              )}
            </div>
          ) : (
            <>
              <div id="home">
                <HeroSection videos={videosData.heroSection} onMovieClick={handleVideoSelect} />
              </div>

              <div className="flex flex-col gap-12 px-4 md:px-12">
                <div id="sensational">
                  <MostSensationalSection
                    title="Most Sensational Hot Yoga Watch Now!"
                    description="The Most Watched Sensational Yoga Episodes"
                    items={videosData.mostSensationalSection}
                    onMovieClick={handleVideoSelect}
                  />
                </div>

                <div id="models">
                  <TopEroticSection
                    items={videosData.topEroticSection}
                    onMovieClick={handleVideoSelect}
                  />
                </div>

                <div id="discovery">
                  <DirtyDiscovery data={videosData.dirtyDiscoverySection} onMovieClick={handleVideoSelect} />
                </div>

                <div id="couples">
                  <CoupleBondSection
                    items={videosData.coupleBondSection}
                    onMovieClick={handleVideoSelect}
                  />
                </div>

                <div id="moments">
                  <CapturedMomentsSection
                    data={videosData.capturedMomentsSection}
                    onMovieClick={handleVideoSelect}
                  />
                </div>

                <div id="desirable">
                  <DesirableEpisodeSection
                    items={videosData.desirableEpisodeSection}
                    onMovieClick={handleVideoSelect}
                  />
                </div>

                <div id="spicy">
                  <SpicyEpisodesSection
                    items={videosData.spicyEpisodesSection}
                    onMovieClick={handleVideoSelect}
                  />
                </div>

                <div className="flex flex-col gap-12" id="series">
                  <div className="w-full">
                    <Top9Section items={videosData.top9Section} onMovieClick={handleVideoSelect} />
                  </div>
                  <div className="w-full">
                    <LatestSeriesSection
                      data={videosData.latestSeriesSection}
                      onMovieClick={handleVideoSelect}
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {isModalOpen && (
          <VideoModal
            video={selectedVideo}
            onClose={() => setIsModalOpen(false)}
          />
        )}

        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
        />

        <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      </div>
    </>
  );
}