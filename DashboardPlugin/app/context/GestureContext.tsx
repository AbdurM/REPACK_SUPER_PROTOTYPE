import { createContext } from 'react';
import { ManualGesture, Gesture } from 'react-native-gesture-handler';
import { useInactivityTimeout } from '../services/InactiveService';

interface GestureContextProps {
  gesture: ManualGesture,
}

// Create a default gesture for the context
const defaultGesture = Gesture.Manual();

export const GestureContext = createContext<GestureContextProps>({gesture: defaultGesture});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const gesture = useInactivityTimeout();

  return (
    <GestureContext.Provider value={{ gesture }}>
      {children}
    </GestureContext.Provider>
  );
};

export default AppProvider;
