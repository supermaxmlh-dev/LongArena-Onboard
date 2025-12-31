import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ResonanceFlow from './components/ResonanceFlow';
import SecretBase from './components/SecretBase';

function App() {
  const { t, i18n } = useTranslation();
  const [viewState, setViewState] = useState('questions'); // Start with questions

  const handleFlowComplete = () => {
    setViewState('base');
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <>
      {/* Global Language Switcher */}
      <button
        onClick={toggleLanguage}
        className="absolute top-5 right-5 z-50 px-3 py-1 bg-black/20 backdrop-blur-md rounded-full text-white text-xs font-medium hover:bg-black/30 transition-colors border border-white/10"
      >
        {t('switch_language')}
      </button>

      {viewState === 'questions' && <ResonanceFlow onComplete={handleFlowComplete} />}
      {viewState === 'base' && <SecretBase />}
    </>
  );
}

export default App;
