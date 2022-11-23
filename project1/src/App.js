import Header from './component/header/Header'
import Topbar from "./component/topbar/Topbar";
import Profile from './component/profile/Profile';
import News from './component/news/News';
import ArchiveNews from './component/archiveNews/ArchiveNews';
import SiteLink from './component/siteLink/SiteLink';
import Feed from './component/feed/Feed';
import PageLink from './component/pageLinke/PageLink';
import PageLinks from './component/pageLinks/PageLinks';
import MainNews from './component/mainNews/MainNews';


function App() {
  return (
    <div className="app">
      <Topbar />
      <Header />
      <Feed />
    </div>
  );
}

export default App;
