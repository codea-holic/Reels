import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import MainText from './MainText';
export let ThemeContext = React.createContext("");

function App() {
  const [theme, setTheme] = React.useState("light");

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div className='text-lg font-bold'>Theme Changer</div>
      <button type="button" className="bg-red-600 rounded border hover:bg-red-700 text-white px-1 py-1 mx-1" onClick={changeTheme}>
        Theme Changer</button>
      <Navbar></Navbar>
      <MainText></MainText>
      <Footer></Footer>
    </ThemeContext.Provider>
  )
}

export default App;