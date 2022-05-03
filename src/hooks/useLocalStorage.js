import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export function useLocalStorage({ key, defaultValue }) {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

useLocalStorage.propTypes = {
  key: PropTypes.number.isRequired,
  defaultValue: PropTypes.string.isRequired,
};
