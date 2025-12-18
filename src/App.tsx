import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '@/pages/LandingPage';
import ThankYouPage from '@/pages/ThankYouPage';
import { Toaster } from 'sonner';

function App() {
  return (
    <Router>
      <main className="bg-white text-gray-800">
        <Toaster position="bottom-right" />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
