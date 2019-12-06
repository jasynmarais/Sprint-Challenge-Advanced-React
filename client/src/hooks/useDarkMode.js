import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = initialValue => {
  const [darkMode, setDarkmode] = useLocalStorage('dark-mode', initialValue);

  useEffect(() => {
    const bodyA = document.querySelector('body');

    if (darkMode) {
      bodyA.classList.add('dark-mode');
    } else {
      bodyA.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return [darkMode, setDarkmode];
};

export default useDarkMode;