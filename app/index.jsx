import SplashScreen from "@/utils/splash-screen";
import WelcomeScreen from "@/views/index";
import { useEffect, useState } from "react";

export default function Page() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <SplashScreen
        title="React Native UI Kit"
        subtitle="Preparing components..."
      />
    );
  }

  return <WelcomeScreen />;
}
