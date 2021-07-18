import Container from "./components/layout/container/Container";
import Header from "./components/layout/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Routes from "./routes/Routes";
import './App.css'
import LinksMenu from "./utils/LinksMenu";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Container>
      <Header>
        <Navbar />
      </Header>
      <div className="content-normal">
        <Routes />
        <Footer/>
      </div>
      <div className="contentMobile">
        <div className="contentMobile-1">
          <div className="contentMobile-2">
          <Routes />
          
          </div>
          <div className="foother-menu">
            <ul className="fm-links item-center d-flex">
              <LinksMenu />
            </ul>
          </div>
        </div>

      </div>

    </Container>
  );
}

export default App;
