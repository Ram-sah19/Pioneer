import React from 'react';
import { NavigationProvider, useNavigation } from './navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import ApplyModal from './components/ApplyModal';
import NoticeModal from './components/NoticeModal';
import QuickActionFloating from './components/QuickActionFloating';

// 8 Dedicated Pages + Home
import Homepage from './landingpage/home/Homepage';
import Aboutpage from './landingpage/about/Aboutpage';
import Academypage from './landingpage/academic/Academypage';
import Admisssionpage from './landingpage/admission/Admisssionpage';
import Campuspage from './landingpage/campus/Campuspage';
import Facilitypage from './landingpage/facilities/Facilitypage';
import Hallpage from './landingpage/hallofframe/Hallpage';
import Newspage from './landingpage/newsevent/Newspage';
import Contactpage from './landingpage/contact/Contactpage';

function AppContent() {
  const { currentPage } = useNavigation();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Homepage />;
      case 'about':
        return <Aboutpage />;
      case 'academic':
        return <Academypage />;
      case 'admission':
        return <Admisssionpage />;
      case 'campus':
        return <Campuspage />;
      case 'facilities':
        return <Facilitypage />;
      case 'halloffame':
        return <Hallpage />;
      case 'newsevent':
        return <Newspage />;
      case 'contact':
        return <Contactpage />;
      default:
        return <Homepage />;
    }
  };

  return (
    <div className="app-layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>{renderPage()}</main>
      <Footer />
      <ApplyModal />
      <NoticeModal />
      <QuickActionFloating />
    </div>
  );
}

function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}

export default App;
