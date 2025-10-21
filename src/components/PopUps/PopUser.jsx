import { useState } from "react";
// import PopExit from "./PopExit";

const PopUser = ({ show, onCloseButtonClick, onExitButtonClick }) => {

    const [showPopUserModal, setShowPopUserModal] = useState(false);
    // const [showPopExitModal, setShowPopExitModal] = useState(false);
    
        const toggleShowPopUserModal = () => {
            setShowPopUserModal(!showPopUserModal);
        };

        // const toggleShowPopExitModal = () => {
        //     setShowPopExitModal(!showPopExitModal);
        // };

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
                <button type="button" className="_hover03" onClick={onExitButtonClick}>Выйти</button>
                {/* <PopUser show={showModal} onCloseButtonClick={toggleShowModal} /> */}
                <PopUser show={showPopUserModal} onCloseButtonClick={toggleShowPopUserModal} onExitButtonClick={toggleShowPopUserModal} />
                {/* <PopExit show={showPopExitModal} onExitButtonClick={toggleShowPopExitModal} /> */}
                    {/* <a href="#popExit">Выйти</a></button> */}
            </div>
        </>
    );
};

export default PopUser;


// onCloseButtonClick,
// type="button" className="_hover03" 
// onExitButtonClick={toggleShowPopUserModal}