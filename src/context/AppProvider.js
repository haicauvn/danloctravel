import { createContext, useMemo } from 'react';
import useFirestore from '../hooks/useFirestore';

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const conditionProduct1 = useMemo(
    () => ({
      fieldName: 'typeProduct',
      operator: '==',
      compareValue: 'rent-car',
    }),
    []
  );
  const conditionProduct2 = useMemo(
    () => ({
      fieldName: 'typeProduct',
      operator: '==',
      compareValue: 'tour-travel',
    }),
    []
  );

  const carData = useFirestore('products', conditionProduct1);
  const toursData = useFirestore('products', conditionProduct2);

  return (
    <AppContext.Provider value={{ toursData, carData }}>
      {children}
    </AppContext.Provider>
  );
}
