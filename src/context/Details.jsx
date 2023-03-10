import { useState, createContext } from 'react';
import { getURLParams } from '../utils/parseUrl';

export const DetailContext = createContext({
  currentFirst: 0,
  setCurrentFirst: () => {},
  currentSec: 0,
  setCurrentSec: () => {},
  currentStep: 0,
  setCurrentStep: () => {},
  currentFp: 0,
  setCurrentFp: () => {},
});

export const DetailProvider = ({ children }) => {
  const { firstClass, secondClass } = getURLParams(document.URL);
  const [currentFirst, setCurrentFirst] = useState(parseInt(firstClass));
  const [currentSec, setCurrentSec] = useState(parseInt(secondClass));
  const [currentStep, setCurrentStep] = useState(0);
  const [currentFp, setCurrentFp] = useState(0);

  return (
    <DetailContext.Provider
      value={{
        currentFirst,
        setCurrentFirst,
        currentSec,
        setCurrentSec,
        currentStep,
        setCurrentStep,
        currentFp,
        setCurrentFp,
      }}
    >
      {children}
    </DetailContext.Provider>
  );
};
