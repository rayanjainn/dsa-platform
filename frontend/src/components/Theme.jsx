import { useState } from "react";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

export default function ThemeCustomizer() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // In a real application, you would apply the theme change here
  };

  return (
    <div className="fixed bottom-4 right-4">
      <button
        onClick={toggleTheme}
        className="bg-gray-800 p-2 rounded-full shadow-lg"
      >
        {isDarkMode ? (
          <SunIcon className="w-6 h-6 text-yellow-400" />
        ) : (
          <MoonIcon className="w-6 h-6 text-blue-300" />
        )}
      </button>
    </div>
  );
}
