import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface PhoneContextValue {
  phone: string;
  phoneDisplay: string;
  setPhone: (phone: string, display: string) => void;
}

const DEFAULT_PHONE = "800-741-6056";
const DEFAULT_DISPLAY = "800-741-6056";

const PhoneContext = createContext<PhoneContextValue>({
  phone: DEFAULT_PHONE,
  phoneDisplay: DEFAULT_DISPLAY,
  setPhone: () => {},
});

export function PhoneProvider({ children }: { children: ReactNode }) {
  const [phone, setPhoneState] = useState(DEFAULT_PHONE);
  const [phoneDisplay, setPhoneDisplay] = useState(DEFAULT_DISPLAY);

  const setPhone = (newPhone: string, display: string) => {
    setPhoneState(newPhone);
    setPhoneDisplay(display);
  };

  return (
    <PhoneContext.Provider value={{ phone, phoneDisplay, setPhone }}>
      {children}
    </PhoneContext.Provider>
  );
}

export function usePhone() {
  return useContext(PhoneContext);
}

/**
 * Drop this component at the top of any page to override the phone number
 * shown in the Layout membership banner and Text Us CTA.
 * Example: <SetPagePhone phone="618-368-4335" display="(618) 368-4335" />
 */
export function SetPagePhone({ phone, display }: { phone: string; display: string }) {
  const { setPhone } = usePhone();
  useEffect(() => {
    setPhone(phone, display);
    // Reset to default when the page unmounts
    return () => setPhone(DEFAULT_PHONE, DEFAULT_DISPLAY);
  }, [phone, display]);
  return null;
}
