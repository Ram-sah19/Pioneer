import { useState, useEffect, createContext, useContext } from 'react';

export const NavigationContext = createContext({
  currentPage: 'home',
  navigateTo: () => {},
  isApplyModalOpen: false,
  openApplyModal: () => {},
  closeApplyModal: () => {},
  selectedNotice: null,
  openNoticeModal: () => {},
  closeNoticeModal: () => {}
});

export const getPageFromHash = () => {
  const hash = window.location.hash.replace('#/', '').replace('#', '').trim();
  const validPages = [
    'home',
    'about',
    'academic',
    'admission',
    'campus',
    'facilities',
    'halloffame',
    'clubs',
    'contact'
  ];
  return validPages.includes(hash) ? hash : 'home';
};

export const NavigationProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(getPageFromHash);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState(null);

  useEffect(() => {
    const handleHashChange = () => {
      const page = getPageFromHash();
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page) => {
    window.location.hash = `#/${page}`;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openApplyModal = () => setIsApplyModalOpen(true);
  const closeApplyModal = () => setIsApplyModalOpen(false);

  const openNoticeModal = (notice) => setSelectedNotice(notice);
  const closeNoticeModal = () => setSelectedNotice(null);

  return (
    <NavigationContext.Provider
      value={{
        currentPage,
        navigateTo,
        isApplyModalOpen,
        openApplyModal,
        closeApplyModal,
        selectedNotice,
        openNoticeModal,
        closeNoticeModal
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);
