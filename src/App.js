import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css';
import Header from './componets/Header';
import AboutMe from './componets/AboutMe';
import Services from './componets/Services';
import MyExpertise from './componets/MyExpertise';
import Footer from './componets/Footer';
import HomesFile from "./componets/HomesFile";
import AboutMyDetails from "./componets/AboutMyDetails";
import ContactMe from "./componets/ContactMe";

function App() {
  return (
    <>
    {/* <Header/>
    <Home/>
    <AboutMe/>
    <Services/>
    <MyExpertise/>
    <Footer/> */}
    {/* Started on 31th March 2024 */}
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomesFile />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/read-more" element={<AboutMyDetails />}  />
        <Route path="/services" element={<Services />} />
        <Route path="/myexpertise" element={<MyExpertise />} />
        <Route path="/contact" exact element={<ContactMe />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
