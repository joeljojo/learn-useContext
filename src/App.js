import { useState } from "react";
import Button from "./Components/Button/Button";
import { ThemeContext } from "./Components/Context/Context";
import Form from "./Components/Form/Form";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <Form />
      {/* Overidding the context, therefore this button shall not change when the dark mode in on*/}
      <ThemeContext.Provider value="light">
        <Button
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          Toggle Theme
        </Button>
      </ThemeContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
