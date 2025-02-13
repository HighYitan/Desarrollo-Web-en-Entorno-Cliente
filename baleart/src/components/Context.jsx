import {createContext} from 'react';
//export const NavbarFixedContext = createContext();

/*import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import spacesImagesJSON from '../assets/data/spaces.json';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const apiKey = "p7J4H1G2kLzT9fDxXy3mK8Qc6nA0Wr5vBLpYv7R";
  let spacesImagesString = localStorage.getItem('spacesImages');
  const [spacesImages, setSpacesImages] = useState(spacesImagesString !== null ? JSON.parse(spacesImagesString) : false);
  let spacesString = localStorage.getItem('spaces');
  const [spaces, setSpaces] = useState(spacesString !== null ? JSON.parse(spacesString) : false);

  useEffect(() => {
    if (!spacesImages) {
      localStorage.setItem('spacesImages', JSON.stringify(spacesImagesJSON));
      setSpacesImages(spacesImagesJSON);
    }
  }, [spacesImages]);

  useEffect(() => {
    if (!spaces) {
      axios.get("http://baleart.test/api/space", {
        headers: {
          "x-api-key": apiKey,
          "Accept": "application/json"
        }
      })
        .then(response => {
          localStorage.setItem('spaces', JSON.stringify(response.data.data));
          setSpaces(response.data.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [spaces, apiKey]);

  return (
    <AppContext.Provider value={{ spaces, spacesImages }}>
      {children}
    </AppContext.Provider>
  );
};*/

/*<AppProvider>
    El router en app.jsx
</AppProvider>*/