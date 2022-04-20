import "./assets/css/style.css";
import "./assets/css/plugins.min.css";
import "./assets/css/responsive-style.css";
import "./assets/css/colors/color-1.css";
import "./assets/css/custom.css";

import Header from "./Components/inc/Header/Header";
import Footer from "./Components/inc/Footer/Footer";
import Banner from "./Components/pages/Banner";
import Section from "./Components/pages/Section";
import Groups from "./Components/pages/Groups";
import Community from "./Components/pages/Community";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Section />
      <Groups />
      <Community />
      <Footer />
    </div>
  );
}

export default App;
