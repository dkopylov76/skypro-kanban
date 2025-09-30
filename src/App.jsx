import "./App.css";
import PopExit from "./components/PopUps/PopExit";
import PopNewCard from "./components/PopUps/PopNewCard";
import PopBrowse from "./components/PopUps/PopBrowse";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
   }, [loading]);

  return (
    <>
      <div class="wrapper">
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        <Header />
        {loading ? (<div class="main__loading">Данные загружаются...</div>) : (<Main loading={loading}/>)}
      </div>

    <script src="js/script.js"></script>
    </>
  )
}

export default App;