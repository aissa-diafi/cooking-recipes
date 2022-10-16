import { useTheme } from "../hooks/useTheme";
import modeIcon from "../assets/mode-icon.svg";

// styles
import "./ThemeSelector.css";

const themeColors = ["#b70233", "#249c6b", "#58249c"];

export function ThemeSelector() {
  const { changeColor, changeMode, mode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img
          onClick={toggleMode}
          src={modeIcon}
          alt="dark/light toggle icon"
          style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)" }}
        />
      </div>
      <div className="theme-buttons">
        {themeColors.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{
              backgroundColor: color,
            }}
          />
        ))}
      </div>
    </div>
  );
}
