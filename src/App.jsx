import "./App.css";
import PopExit from "./components/PopUps/PopExit";
import PopNewCard from "./components/PopUps/PopNewCard";
import PopBrowse from "./components/PopUps/PopBrowse";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { MainLoading } from './components/Main/Main.styled';
import { useState, useEffect } from 'react';
// import AppRoutes from "./components/AppRoutes";

function App() {
  const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
   }, [loading]);

  return (
    // return <AppRoutes />;
    <>
      <div class="wrapper">
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        <Header />
        {loading ? (<MainLoading>Данные загружаются...</MainLoading>) : (<Main loading={loading}/>)}
      </div>

    <script src="js/script.js"></script>
    </>
  )
}

export default App;