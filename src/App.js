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
       
        
//       </Router>
//     </div>
 
//   );
// }

// export default App;



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
//         <NavBar />
//         <Routes>
//           <Route path="/" element={<Banner />} />
//           <Route path="/skills" element={<Skills />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//         <Footer />
//       </Router>
//     </div>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
