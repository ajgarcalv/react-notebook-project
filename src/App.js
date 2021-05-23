import './App.css';
import TitleInput from './components/TitleInput/titleInput';
import UtilityButtons from './components/UtilityButtons/utilityButtons';
import BodyInput from './components/BodyInput/bodyInput';
import FooterButtons from './components/FooterButtons/footerbuttons';

function App() {
  return (
    <div className="App">
      <TitleInput />
      <UtilityButtons />
      <BodyInput />
      <FooterButtons />
    </div>
  );
}

export default App;
