import React from 'react';
import { toast } from 'react-toastify';

interface Alert {
  message: string;
  type: string;
}

interface AlertContextData {
  alert: Alert | null;
  setAlert: React.Dispatch<React.SetStateAction<Alert | null>>;
}

interface Props {
  children: React.ReactNode;
}

const AlertContext = React.createContext<AlertContextData>(
  {} as AlertContextData
);

export default function AlertProvider({ children }: Props) {
  const [alert, setAlert] = React.useState<Alert | null>(null);

  React.useEffect(() => {
    if (alert === null) {
      return;
    }

    setTimeout(() => {
      switch (alert.type) {
        case 'success':
          toast.success(alert.message);
          break;
        case 'error':
          toast.error(alert.message);
          break;
        case 'warning':
          toast.warn(alert.message);
          break;
        case 'info':
          toast.info(alert.message);
          break;
        default:
          break;
      }
    }, 1000);

    setAlert(null);
  }, [alert, setAlert]);

  return (
    <AlertContext.Provider value={{ alert, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
}

export function useAlert() {
  const context = React.useContext(AlertContext);

  if (!context) throw new Error('useAlert must be used within a AlertProvider');
  const { alert, setAlert } = context;

  return { alert, setAlert };
}
