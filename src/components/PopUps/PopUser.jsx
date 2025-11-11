import { useState } from "react";
import {
    HeaderPopUserSet,
    PopUserSetName,
    PopUserSetMail,
    PopUserSetTheme,
    PopUserSetThemeInput,
    PopUserSetButton,
} from './PopUser.styled';

const PopUser = ({ show, onCloseButtonClick }) => {

    const [showPopUserModal, setShowPopUserModal] = useState(false);
    
        const toggleShowPopUserModal = () => {
            setShowPopUserModal(!showPopUserModal);
        };

    if (!show) {
        return null;
    }

    return (
        <>
            <HeaderPopUserSet>
                <PopUserSetName>Ivan Ivanov</PopUserSetName>
                <PopUserSetMail>ivan.ivanov@gmail.com</PopUserSetMail>
                <PopUserSetTheme>
                    Темная тема
                    <PopUserSetThemeInput type="checkbox" name="checkbox" />
                </PopUserSetTheme>
                <PopUserSetButton onClick={onCloseButtonClick}>Закрыть</PopUserSetButton>
                <PopUserSetButton to="/exit">Выйти</PopUserSetButton>
                <PopUser show={showPopUserModal} onCloseButtonClick={toggleShowPopUserModal} onExitButtonClick={toggleShowPopUserModal} />
            </HeaderPopUserSet>
        </>
    );
};

export default PopUser;