import './App.css'
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const onChangeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <div className="App">
        <nav>
          <button onClick={() => onChangeLanguage('en-US')}>English</button>
          <button onClick={() => onChangeLanguage('vi-VN')}>Tiếng Việt</button>
          <button onClick={() => onChangeLanguage('jp-JP')}>日本語</button>
        </nav>
        <p>{t('LANDING_PAGE.TITLE')}</p>
    </div>
  )
}

export default App
