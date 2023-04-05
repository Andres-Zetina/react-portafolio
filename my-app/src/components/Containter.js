import React, {useState} from "react";
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import AboutMe from './pages/AboutMe';
import NavBar from './Navigation';
import Footer from './Footer';

export default function Container() {
    const [currentPage, setCurrentPage] = useState('AboutMe');
  
    const renderPage = () => {
      if (currentPage === 'AboutMe') {
        return <AboutMe />;
      }
      if (currentPage === 'Projects') {
        return <Projects />;
      }
      if (currentPage === 'Resume') {
        return <Resume />;
      }
      return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavBar currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
            <Footer />
        </div>
    )
}