import { createContext, useState } from "react"

export const ThemeContext = createContext();

function ThemeProvider({children}) {
    const [theme, setTheme] = useState(true);
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider