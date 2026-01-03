import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LocationGuide = ({ onClose }) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('public'); // 'public', 'taxi', 'drive'

  const tabs = [
    { id: 'public', label: t('tab_public'), icon: '🚇' },
    { id: 'taxi', label: t('tab_taxi'), icon: '🚖' },
    { id: 'drive', label: t('tab_drive'), icon: '🅿️' },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-900 bg-opacity-95 flex items-end sm:items-center justify-center sm:p-4">
      <div className="bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl w-full max-w-md relative animate-in slide-in-from-bottom duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 p-2 z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">{t('btn_find_us')}</h2>
          
          {/* Tabs */}
          <div className="flex space-x-2 mb-6 bg-gray-100 p-1 rounded-xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-1 py-2 text-sm font-medium rounded-lg transition-all ${
                  activeTab === tab.id 
                    ? 'bg-white text-[#1E5FA8] shadow-sm' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="min-h-[150px] bg-gray-50 rounded-xl p-5 border border-gray-100">
             {activeTab === 'public' && (
               <div className="animate-in fade-in duration-300">
                  <div className="text-[#1E5FA8] font-bold mb-2">{t('tab_public')}</div>
                  <p className="text-gray-600 leading-relaxed mb-4">{t('public_guide')}</p>
                  
                  {/* Entrance Guide */}
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                    <p className="text-sm text-[#1E5FA8] font-medium mb-2">{t('entrance_tip')}</p>
                    <img 
                      src="/entrance.jpg" 
                      alt="Entrance Guide" 
                      className="w-full h-auto rounded-lg border border-gray-200 shadow-sm"
                    />
                  </div>
               </div>
             )}
             {activeTab === 'taxi' && (
               <div className="animate-in fade-in duration-300">
                  <div className="text-[#1E5FA8] font-bold mb-2">{t('tab_taxi')}</div>
                  <p className="text-gray-600 leading-relaxed">{t('taxi_guide')}</p>
               </div>
             )}
             {activeTab === 'drive' && (
               <div className="animate-in fade-in duration-300">
                  <div className="text-[#1E5FA8] font-bold mb-2">{t('tab_drive')}</div>
                  <p className="text-gray-600 leading-relaxed">{t('drive_guide')}</p>
               </div>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationGuide;
