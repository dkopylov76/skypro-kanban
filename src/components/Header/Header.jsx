import { useState } from "react";
import PopUser from "../PopUps/PopUser";
import {
  StyledHeader,
  Container,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  HeaderButton,
} from './Header.styled';

const Header = () => {
    const [showPopUserModal, setShowPopUserModal] = useState(false);

    const toggleShowPopUserModal = () => {
        setShowPopUserModal(!showPopUserModal);
    };

    return (
        <>
            <StyledHeader>
			    <Container>
                    <HeaderBlock>
                        <HeaderLogo>
                        {/* <div class="header__logo _show _light"> */}
                            <a href="" target="_self"><img src="images/logo.png" alt="logo" /></a>
                        </HeaderLogo>
                        {/* </div> */}
                        <HeaderLogo>
                        {/* <div class="header__logo _dark"> */}
                            <a href="" target="_self"><img src="images/logo_dark.png" alt="logo" /></a>
                        </HeaderLogo>
                        {/* </div> */}
                        <HeaderNav>
                            <HeaderButton><a href="#popNewCard">Создать новую задачу</a></HeaderButton>
                            {/* <button class="header__btn-main-new _hover01" id="btnMainNew"><a href="#popNewCard">Создать новую задачу</a></button> */}
                            <a href="#user-set-target" class="header__user _hover02" onClick={toggleShowPopUserModal}>Ivan Ivanov</a>
                            <PopUser show={showPopUserModal} onCloseButtonClick={toggleShowPopUserModal} />
                            {/* <PopExit show={showModal} onExitButtonClick={toggleShowModal} /> */}
                            {/* <PopUser show={showModal} onExitButtonClick={toggleShowModal} /> */}
                            {/* <PopExit show={showModal} onExitButtonClick={toggleShowModal} /> */}
                        </HeaderNav>
                    </HeaderBlock>
			    </Container>
		    </StyledHeader>
        </>
    );
}

export default Header;