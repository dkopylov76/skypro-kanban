import { useState } from "react";
import PopUser from "../PopUps/PopUser";

const Header = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleShowModal = () => {
        setShowModal(!showModal);
    };

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
                            <a href="#user-set-target" class="header__user _hover02" onClick={toggleShowModal}>Ivan Ivanov</a>
                            <PopUser show={showModal} onCloseButtonClick={toggleShowModal} />
                        </nav>					
                    </div>
			    </div>			
		    </header>
        </>
    );
}

export default Header;