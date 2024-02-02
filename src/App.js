import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/page";
import { Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/navbarJamaica";
// import Home from "./components/Home";
// import Navbar from "./components/navbar";
// import "../styles/css/bootstrap.min.css";
// import "swiper/css";
// import "swiper/css/pagination";
// import "../styles/css/daterangepicker.min.css";
// import "../styles/css/bootstrap-datetimepicker.min.css";

// import "styles/icon.css";
// // import "../styles/css/shortcodes.css";
// // import "@/styles/style.css";
// import "../styles/css/style.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* <Home /> */}
      {/* <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/blogs" element={<Blog />}></Route>
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route exact path="expertise" element={<Services />}></Route>
          <Route exact path="expertise/data-ai" element={<DataAi />}></Route>
          <Route exact path="/expertise/devxops" element={<DevxOps />}></Route>
          <Route
            exact
            path="expertise/test-automation"
            element={<TestAutomation />}
          ></Route>
          <Route
            exact
            path="/expertise/cybersecurity"
            element={<Cybersecurity />}
          ></Route>
          <Route
            exact
            path="expertise/business-automations"
            element={<BusinessAutomation />}
          ></Route>
          <Route
            exact
            path="expertise/managed-it-services"
            element={<ManagedItServices />}
          ></Route>
          <Route
            exact
            path="expertise/generative-ai"
            element={<GenerativeAi />}
          ></Route>
          <Route
            exact
            path="expertise/integrations-applications"
            element={<IntegrationApplications />}
          ></Route>
          <Route exact path="*" element={<Error />}></Route>
        </Routes>
        <Footer />
      </Router> */}
    </div>
  );
}

export default App;
