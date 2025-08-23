import "./App.css";
import PopExit from "./components/PopUps/PopExit";
import PopNewCard from "./components/PopUps/PopNewCard";
import PopBrowse from "./components/PopUps/PopBrowse";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {

  return (
    <>
      <div class="wrapper">
		<PopExit />
		<PopNewCard />
		<PopBrowse />
		<Header />
		<Main />
    </div>

    <script src="js/script.js"></script>
    </>
  )
}

export default App