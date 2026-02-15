// import React from "react";
// import { HashRouter as Router, Routes, Route } from "react-router-dom";
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { NavBar } from "./components/NavBar";
// import { Banner } from "./components/Banner";
// import { Skills } from "./components/Skills";
// import { Projects } from "./components/Projects";
// import { Contact } from "./components/Contact";
// import { Footer } from "./components/Footer";

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route path="/" element={<NavBar />} />
//           {/* <Route path="/legal" element={<Legal />} />
//           <Route path="/appointment" element={<Appointment />} />
//           <Route path="/registration" element={<DoctorRegistrationForm />} />
//           <Route path="/login" element={<DoctorLoginForm />} />
//           <Route path="*" element={<NotFound />} /> */}
//         </Routes>
//       </Router>
//     </div>
//     <div className="App">
//       <Route path="/" element={<Home />} />
//       <Route path="/" element={<Home />} />
//       <NavBar />
//       <Banner />
//       <Skills />
//       <Projects />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
