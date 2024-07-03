import Loader from './components/Loader';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const loadingTime = 1500;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, loadingTime + 1500);
  }, []);

  return (
    <div className='overflow-x-hidden'>
      {isLoading ? (
        <Loader loadingTime={loadingTime} />
      ) : (
        <main className='bg-swirl-100 h-screen'>
          <Navbar />
        </main>
      )}
    </div>
  );
}

export default App;
