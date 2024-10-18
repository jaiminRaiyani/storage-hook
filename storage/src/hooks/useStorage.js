import { useState } from "react";

const useStorage = (key, storageType = "local") => {
  const storage = storageType === "session" ? sessionStorage : localStorage;

  const getValue = () => {
    try {
      const storedValue = storage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : null;
    } catch (error) {
      console.error("Error reading from storage", error);
      return null;
    }
  };

  const [storedValue, setStoredValue] = useState(getValue);

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      storage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error("Error setting storage", error);
    }
  };

  const removeValue = () => {
    try {
      storage.removeItem(key);
      setStoredValue(null);
    } catch (error) {
      console.error("Error removing from storage", error);
    }
  };

  return [storedValue, setValue, removeValue];
};

export default useStorage;
