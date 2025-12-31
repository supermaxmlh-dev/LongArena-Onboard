import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LocationGuide from './LocationGuide';

const SecretBase = () => {
  const { t } = useTranslation();
  const [showLocation, setShowLocation] = useState(false);

  const videos = [
    { id: 1, title: t('video_title_1'), color: 'from-blue-500 to-indigo-600' },
    { id: 2, title: t('video_title_2'), color: 'from-orange-400 to-red-500' },
    { id: 3, title: t('video_title_3'), color: 'from-purple-500 to-pink-600' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#1E5FA8] pt-24 pb-12 px-6 text-center rounded-b-[2.5rem] shadow-xl relative overflow-hidden">
         <div className="relative z-10">
            <h1 className="text-2xl font-bold text-white mb-6 leading-relaxed">
              {t('secret_base_welcome')}
            </h1>
            
            <button 
              onClick={() => setShowLocation(true)}
              className="inline-flex items-center gap-2 bg-[#FF9900] text-white px-6 py-3 rounded-full font-bold shadow-lg transform transition-transform active:scale-95 hover:bg-[#e68a00]"
            >
              <span className="text-xl">📍</span>
              {t('btn_find_us')}
            </button>
         </div>
         
         {/* Decor */}
         <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
             <div className="absolute top-[-50px] right-[-50px] w-40 h-40 bg-white rounded-full blur-3xl"></div>
             <div className="absolute bottom-[-20px] left-[-20px] w-32 h-32 bg-blue-300 rounded-full blur-2xl"></div>
         </div>
      </div>

      {/* Video Gallery */}
      <div className="px-6 py-8 space-y-6 pb-20">
        <h2 className="text-lg font-bold text-gray-800 border-l-4 border-[#1E5FA8] pl-3">
          {t('nav_products') || "Gallery"}
        </h2>
        
        <div className="space-y-6">
          {/* Featured Video: SalesNail */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-blue-100 bg-white">
            <video
              controls
              playsInline
              className="w-full aspect-video bg-black"
              src="/videos/salesnail_intro.mp4"
            >
              Your browser does not support the video tag.
            </video>
            <div className="p-4">
               <h3 className="font-bold text-gray-800 text-lg">{t('video_salesnail_title')}</h3>
            </div>
          </div>

          {/* Other Placeholders */}
          {videos.slice(1).map((video) => (
            <div key={video.id} className="group relative rounded-2xl overflow-hidden shadow-lg aspect-video cursor-pointer">
              {/* Thumbnail Placeholder */}
              <div className={`absolute inset-0 bg-gradient-to-br ${video.color} opacity-90 transition-opacity group-hover:opacity-100`}></div>
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
              </div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-white font-bold text-lg">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Location Modal */}
      {showLocation && <LocationGuide onClose={() => setShowLocation(false)} />}
    </div>
  );
};

export default SecretBase;
