import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useTaskList } from "../context/appContext";
const ThemeToggle = () => {
  const { setTheme, theme } = useTaskList();
  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  console.log(theme);
  return (
    <div onClick={handleThemeToggle}>
      <div className="flex h-auto items-center gap-1 cursor-pointer">
        {theme === "light" ? (
          <>
            <MdDarkMode size={24} />
            <p>dark</p>
          </>
        ) : (
          <>
            <MdOutlineLightMode size={24} />
            <p>light</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ThemeToggle;
