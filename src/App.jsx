import Loader from './components/Loader';
import { useEffect, useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const loadingTime = 1500;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, loadingTime + 1500);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader loadingTime={loadingTime} />
      ) : (
        <main className='bg-swirl-100 h-screen'>
          <span>Loaded</span>
        </main>
      )}
    </>
  );
}

export default App;
