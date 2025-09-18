import { useState } from "react";
import { useEffect } from "react";
import PopUser from "../PopUps/PopUser";

const Header = () => {
    function App() {
        const [loading, setLoading] = useState(true);
            useEffect(() => {
                setTimeout(() => {
                setLoading(false);
            }, 3000);
        }, []);
    return (
        <>
            <header class="header">
			    <div class="container">
                    <div class="header__block">
                        <div class="header__logo _show _light">
                            <a href="" target="_self"><img src="images/logo.png" alt="logo" /></a>
                        </div>
                        <div class="header__logo _dark">
                            <a href="" target="_self"><img src="images/logo_dark.png" alt="logo" /></a>
                        </div>
                        <nav class="header__nav">
                            <button class="header__btn-main-new _hover01" id="btnMainNew"><a href="#popNewCard">Создать новую задачу</a></button>
                            <a href="#user-set-target" class="header__user _hover02">Ivan Ivanov</a>
                            <PopUser loading={loading}/>
                        </nav>					
                    </div>
			    </div>			
		    </header>
        </>
    );
}
}

export default Header;