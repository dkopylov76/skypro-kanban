import "./App.css";
import PopExit from "./components/PopExit/PopExit";
import PopNewCard from "./components/PopNewCard/PopNewCard";
import PopBrowse from "./components/PopBrowse/PopBrowse";
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