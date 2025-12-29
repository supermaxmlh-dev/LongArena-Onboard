import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';

// Icons
const IconCopy = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
);
const IconMap = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>
);
const IconEye = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
);
const IconEyeOff = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
);
const IconPhone = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);
const IconMessage = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
);
const IconCheck = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
);

function App() {
  const { t } = useTranslation();
  const [showWifiPass, setShowWifiPass] = useState(false);
  const [toast, setToast] = useState(null);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setToast(t('toast_copied'));
    });
  };

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 pb-10">
      <Navbar />
      
      <div className="pt-20 px-4 max-w-md mx-auto space-y-6">
        {/* Header */}
        <header className="text-center py-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {t('hello')}
          </h1>
          <p className="text-gray-600 text-lg">
            {t('welcome_sub')}
          </p>
        </header>

        {/* Transport Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <IconMap /> {t('card_transport')}
          </h2>
          <div>
            <div className="text-sm text-gray-500 mb-1">{t('address_label')}</div>
            <div className="text-gray-800 font-medium">{t('address_value')}</div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button 
              onClick={() => copyToClipboard(t('address_value'))}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-medium active:bg-blue-700 transition-colors shadow-md hover:shadow-lg hover:bg-blue-700"
            >
              <IconCopy /> {t('btn_copy_address')}
            </button>
            <a 
              href="https://maps.google.com/?q=Shanghai+Agile+International+Plaza" 
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-gray-100 text-gray-800 py-3 rounded-xl font-medium active:bg-gray-200 transition-colors hover:bg-gray-200"
            >
              <IconMap /> {t('btn_open_map')}
            </a>
          </div>
        </div>

        {/* Wi-Fi Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>
            {t('card_wifi')}
          </h2>
          
          <div className="bg-gray-50 p-4 rounded-xl space-y-3">
            <div className="flex justify-between items-center border-b border-gray-200 pb-2">
              <span className="text-gray-500">{t('wifi_ssid_label')}</span>
              <span className="font-bold text-gray-800">Atlas</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">{t('wifi_pass_label')}</span>
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-gray-800">
                  {showWifiPass ? '12345678' : '••••••••'}
                </span>
                <button 
                  onClick={() => setShowWifiPass(!showWifiPass)}
                  className="text-gray-400 hover:text-gray-600 p-1 focus:outline-none"
                >
                  {showWifiPass ? <IconEyeOff /> : <IconEye />}
                </button>
              </div>
            </div>
          </div>

          <button 
            onClick={() => copyToClipboard('12345678')}
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-3 rounded-xl font-medium active:bg-indigo-700 transition-colors shadow-md hover:shadow-lg hover:bg-indigo-700"
          >
            <IconCopy /> {t('btn_copy_pass')}
          </button>
        </div>

        {/* Contact Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
             <IconPhone /> {t('card_contact')}
          </h2>
          <div className="flex items-center gap-3 bg-green-50 p-3 rounded-xl">
             <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center text-green-700 font-bold">
               M
             </div>
             <div>
               <div className="font-bold text-gray-800">Max</div>
               <div className="text-xs text-green-700">Service Manager</div>
             </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <a 
              href="tel:+861234567890" 
              className="flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-xl font-medium active:bg-green-600 transition-colors shadow-md hover:shadow-lg hover:bg-green-600"
            >
              <IconPhone /> {t('btn_call')}
            </a>
            <button 
              onClick={() => copyToClipboard('Max')} 
              className="flex items-center justify-center gap-2 bg-gray-100 text-gray-800 py-3 rounded-xl font-medium active:bg-gray-200 transition-colors hover:bg-gray-200"
            >
              <IconMessage /> {t('btn_copy_wechat')}
            </button>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
          <div className="bg-gray-900 text-white px-5 py-2.5 rounded-full shadow-2xl flex items-center gap-2 text-sm font-medium opacity-95">
            <IconCheck />
            {toast}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
