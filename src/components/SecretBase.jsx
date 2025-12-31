import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LocationGuide from './LocationGuide';

const SecretBase = () => {
  const { t } = useTranslation();
  const [showLocation, setShowLocation] = useState(false);

  const videos = [
    {
      id: 'v1',
      src: '/videos/salesnail_intro.mp4',
      title: 'SalesNail: 战训一体'
    },
    {
      id: 'v2',
      src: '/videos/casestudy1.mp4',
      title: 'SalesNail: 客户案例'
    },
    {
      id: 'v3',
      src: '/videos/trainerstool.mp4',
      title: 'SalesNail: 创作者历程'
    }
  ];

  const [activeVideo, setActiveVideo] = useState(videos[0]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#1E5FA8] pt-24 pb-12 px-6 text-center rounded-b-[2.5rem] shadow-xl relative overflow-hidden">
         <div className="relative z-10">
            {/* Logo */}
            <img 
              src="/Logo.jpg" 
              alt="Company Logo" 
              className="w-48 h-auto mx-auto mb-4 object-contain" 
            />

            <h1 className="text-2xl font-bold text-white mb-6 leading-relaxed">
              {t('secret_base_welcome')}
            </h1>
            
            <button 
              onClick={() => setShowLocation(true)}
              className="inline-flex items-center gap-2 bg-[#FF9900] text-white px-6 py-3 rounded-full font-bold shadow-lg transform transition-transform active:scale-95 hover:bg-[#e68a00]"
            >
              <span className="text-lg">{t('btn_find_us')}</span>
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
          {/* Active Video Player */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-blue-100 bg-white">
            <video
              key={activeVideo.src} // Re-render when source changes
              controls
              playsInline
              className="w-full aspect-video bg-black"
              src={activeVideo.src}
            >
              Your browser does not support the video tag.
            </video>
            <div className="p-4">
               <h3 className="font-bold text-gray-800 text-lg">{activeVideo.title}</h3>
            </div>
          </div>

          {/* Video List */}
          <div className="grid grid-cols-3 gap-3">
            {videos.map((video) => (
              <div 
                key={video.id} 
                onClick={() => setActiveVideo(video)}
                className={`group relative rounded-lg overflow-hidden shadow-sm aspect-video cursor-pointer transition-all ${activeVideo.id === video.id ? 'ring-2 ring-[#FF9900] ring-offset-2' : 'opacity-70 hover:opacity-100'}`}
              >
                {/* Thumbnail Placeholder (Gradient) */}
                <div className={`absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600`}></div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-8 h-8 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform ${activeVideo.id === video.id ? 'bg-[#FF9900] border-transparent' : ''}`}>
                    <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-1.5 bg-black/50 backdrop-blur-[2px]">
                  <h3 className="text-white font-medium text-[10px] truncate text-center leading-tight">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Location Modal */}
      {showLocation && <LocationGuide onClose={() => setShowLocation(false)} />}
    </div>
  );
};

export default SecretBase;
