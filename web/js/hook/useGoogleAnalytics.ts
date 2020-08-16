import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useGoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    const gtag = (window as any).gtag;

    if (gtag && window.location.origin === 'https://luissaybe.com') {
      gtag("config", 'UA-155108209-2', {
        page_path: location.pathname,
      });
    }
  }, [location.pathname]);
}