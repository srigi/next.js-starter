import { useState } from 'react';

const useLocalStorage = <T>(
  key: string,
): [T | undefined, (value: ((prevValue: T) => T | undefined) | T | undefined) => void] => {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window !== 'undefined') {
      const item = window.localStorage.getItem(key);

      return item != null ? JSON.parse(item) : undefined;
    }

    return undefined;
  });

  const setValue = (value: ((prevValue: T) => T | undefined) | T | undefined) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;

    setStoredValue(valueToStore);
    if (valueToStore === undefined) {
      window.localStorage.removeItem(key);
    } else {
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
