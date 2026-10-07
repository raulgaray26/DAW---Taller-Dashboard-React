import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import ContactsPage from './pages/ContactsPage';
import ContactDetailPage from './pages/ContactDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contactos" element={<ContactsPage />} />
          <Route path="/contactos/:id" element={<ContactDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />      {/* siempre al final */}
        </Routes>
      </main>
    </>
  );
}

export default App;