import { useState } from "react";
import PopUser from "../PopUps/PopUser";
import {
  StyledHeader,
  Container,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  HeaderButton,
  HeaderUser,
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
                        <HeaderLogo src="../images/logo.png" alt="logo" />
                        <HeaderNav>
                            <HeaderButton to="/card">Создать новую задачу</HeaderButton>
                            <HeaderUser href="#user-set-target" onClick={toggleShowPopUserModal}>Ivan Ivanov</HeaderUser>
                            <PopUser show={showPopUserModal} onCloseButtonClick={toggleShowPopUserModal} />
                        </HeaderNav>
                    </HeaderBlock>
			    </Container>
		    </StyledHeader>
        </>
    );
}

export default Header;