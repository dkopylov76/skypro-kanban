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
			    <Container>
                    <HeaderBlock>
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
                        <HeaderNav>
                            {/* <MainButton>Создать новую задачу</MainButton> */}
                            {/* <HeaderButton> */}
                            <button class="header__btn-main-new _hover01" id="btnMainNew"><a href="#popNewCard">Создать новую задачу</a></button>
                            {/* </HeaderButton> */}
                            {/* <UserLink>Ivan Ivanov</UserLink> */}
                            <a href="#user-set-target" class="header__user _hover02" onClick={toggleShowModal}>Ivan Ivanov</a>
                            <PopUser show={showModal} onCloseButtonClick={toggleShowModal} />
                        </HeaderNav>
                    </HeaderBlock>
			    </Container>
		    </StyledHeader>
        </>
    );
}

export default Header;