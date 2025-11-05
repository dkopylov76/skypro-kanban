import { useState } from "react";
import { Link } from "react-router-dom";

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
            <div className="header__pop-user-set pop-user-set" id="user-set-target">
                
                <p className="pop-user-set__name">Ivan Ivanov</p>
                <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                <div className="pop-user-set__theme">
                    <p>Темная тема</p>
                    <input type="checkbox" className="checkbox" name="checkbox" />
                </div>
                <button onClick={onCloseButtonClick}>Закрыть</button>
                <Link to="/exit">Выйти</Link>
                <PopUser show={showPopUserModal} onCloseButtonClick={toggleShowPopUserModal} onExitButtonClick={toggleShowPopUserModal} />
            </div>
        </>
    );
};

export default PopUser;