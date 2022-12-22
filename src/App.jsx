import reactLogo from './assets/react.svg'
import './App.css'
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const onChangeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <nav>
          <button onClick={() => onChangeLanguage('en-US')}>English</button>
          <button onClick={() => onChangeLanguage('vi-VN')}>Tiếng Việt</button>
          <button onClick={() => onChangeLanguage('jp-JP')}>日本語</button>
        </nav>
        <p>{t('LANDING_PAGE.TITLE')}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
