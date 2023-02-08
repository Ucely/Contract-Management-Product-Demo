import { createContext, useState, useEffect } from 'react';

export const NodeContext = createContext({
  firstClass: 0,
  secondClass: 0,
  setFirstClass: () => null,
  setSecondClass: () => null,
});

export const NodeProvider = ({ children }) => {
  const [firstClass, setFirstClass] = useState(0);
  const [secondClass, setSecondClass] = useState(0);

  return (
    <NodeContext.Provider
      value={{
        firstClass,
        setFirstClass,
        secondClass,
        setSecondClass,
      }}
    >
      {children}
    </NodeContext.Provider>
  );
};
