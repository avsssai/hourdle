import { useEffect } from "react";
import { createContext } from "react";
import useStickyState from "./useStickyState";

export const ThemeContext = createContext();

const themes = {
	light: {
		foreground: "black",
		background: "white",
		buttonColor: "black",
		buttonActiveColor: "white",
		correct: "#60d394",
		present: "#f9c74f",
		absent: "#495057",
		color: "black",
		theme: "light",
		borderColor: "#D3D6DA",
		activeBorderColor: "#1A1A1B",
		completedBorderColor: "#212529",
		keyBackground: "#D3D6DA",
	},
	dark: {
		foreground: "white",
		background: "#343a40",
		buttonColor: "white",
		buttonActiveColor: "white",
		correct: "#60d394",
		present: "#f9c74f",
		absent: "#495057",
		color: "white",
		theme: "dark",
		borderColor: "#495057",
		activeBorderColor: "#adb5bd",
		completedBorderColor: "#212529",
		keyBackground: "#818384",
	},
};

function ThemeContextProvider({ children }) {
	const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
	const [isDarkTheme, setIsDarkTheme] = useStickyState(getCurrentTheme(), "darkMode");
	const mqListener = (e) => {
		setIsDarkTheme(e.matches);
	};

	useEffect(() => {
		const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
		darkThemeMq.addListener(mqListener);
		return () => darkThemeMq.removeListener(mqListener);
		// eslint-disable-line -- not required
	}, []);

	const currentTheme = isDarkTheme ? themes.dark : themes.light;
	return <ThemeContext.Provider value={{ currentTheme, setIsDarkTheme }}>{children}</ThemeContext.Provider>;
}

export default ThemeContextProvider;
