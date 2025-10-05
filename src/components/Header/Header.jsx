import { useState } from "react";
import PopUser from "../PopUps/PopUser";
import {
  StyledHeader,
  Container,
  HeaderBlock,
  LogoWrapper,
  Logo,
  HeaderNav,
  MainButton,
  UserLink
} from './Header.styled';

const Header = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleShowModal = () => {
        setShowModal(!showModal);
    };

    return (
        <>
            <StyledHeader>
            {/* <header class="header"> */}
			    <Container>
                {/* <div class="container"> */}
                    {/* <HeaderBlock> */}
                    <div class="header__block">
                        {/* <LogoWrapper> */}
                        <div class="header__logo _show _light">
                        
                            <a href="" target="_self"><img src="images/logo.png" alt="logo" /></a>
                        {/* </LogoWrapper> */}
                        </div>
                        {/* <Logo> */}
                        <div class="header__logo _dark">
                            <a href="" target="_self"><img src="images/logo_dark.png" alt="logo" /></a>
                        {/* </Logo> */}
                        </div>
                        {/* <HeaderNav> */}
                        <nav class="header__nav">
                            {/* <MainButton>Создать новую задачу</MainButton> */}
                            <button class="header__btn-main-new _hover01" id="btnMainNew"><a href="#popNewCard">Создать новую задачу</a></button>
                            {/* <UserLink>Ivan Ivanov</UserLink> */}
                            <a href="#user-set-target" class="header__user _hover02" onClick={toggleShowModal}>Ivan Ivanov</a>
                            <PopUser show={showModal} onCloseButtonClick={toggleShowModal} />
                        {/* </HeaderNav> */}
                        </nav>					
                    {/* </HeaderBlock> */}
                    </div>
			    </Container>
                {/* </div>			 */}
		    </StyledHeader>
            {/* </header> */}
        </>
    );
}

export default Header;