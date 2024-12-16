import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './App.scss'; // Import the Sass file for custom styles
import 'bootstrap/dist/css/bootstrap.min.css';

// pages
import Layout from './components/Layout';
import Home from './components/Home/home';
import About from './components/About/About';
import KanaCold from './components/KanaCold/KanaCold';
import TheImmanentWorld from './components/TheImmanentWorld/TheImmanentWorld';
import Contact from './components/Contact/Contact';
import PrivacyPolicy from './components/PrivacyPolicy/privacyPolicy';
import TermsOfUse from './components/TermsOfUse/termsOfUse';

// navs
import KanaColdNav from './components/Navigation/KanaColdNav';
import ImmanentWorldNav from './components/Navigation/ImmanentWorldNav';
import SpecialOffers from './components/Modals/SpecialOffers';

function BookOfferModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Special Offers!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SpecialOffers />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('');
  const [modalShow, setModalShow] = React.useState(false);

  const handleShowOffcanvas = (menu) => {
    setSelectedMenu(menu);
    setShowOffcanvas(true);
  };

  const handleCloseOffcanvas = () => setShowOffcanvas(false);

  const getOffcanvasTitle = () => {
    switch (selectedMenu) {
      case 'kanaCold':
        return 'The Kana Cold Series';
      case 'theImmanentWorld':
        return 'The Immanent World Series';
      default:
        return 'Menu';
    }
  };

  const getOffcanvasContent = () => {
    switch (selectedMenu) {
      case 'kanaCold':
        return <KanaColdNav />;
      case 'theImmanentWorld':
        return <ImmanentWorldNav />;
      default:
        return <h1>Contact Us</h1>;
    }
  };

  return (
    <Router>
      <Layout
        showOffcanvas={showOffcanvas}
        handleShowOffcanvas={handleShowOffcanvas}
        handleCloseOffcanvas={handleCloseOffcanvas}
        selectedMenu={selectedMenu}
        getOffcanvasTitle={getOffcanvasTitle}
        getOffcanvasContent={getOffcanvasContent}
      >

        {/* Main Content */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/kana-cold" element={<KanaCold />} />
          <Route path="/immanent-world" element={<TheImmanentWorld />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home setModalShow={setModalShow} />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
        </Routes>
      </Layout>

        {/* Book Offer Modal */}
        <BookOfferModal show={modalShow} onHide={() => setModalShow(false)} />
    </Router>
  );
}

export default App;
