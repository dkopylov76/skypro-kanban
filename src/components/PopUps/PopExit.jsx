// import { useState } from "react";
// import PopUser from "./PopUser";
import {
  PopExitMain,
  PopExitContainer,
  PopExitBlock,
  PopExitTtl,
  PopExitForm,
  PopExitYes,
  PopExitNo,
} from './PopExit.styled';


const PopExit = ( {show} ) => {
	// const [showPopExitModal, setShowPopExitModal] = useState(false);
	
	// 	const toggleShowPopExitModal = () => {
	// 		setShowPopExitModal(!showPopExitModal);
	// 	};

	if (!show) {
		return null;
	}

    return (
        <>
            <PopExitMain show={show}>
				<PopExitContainer>
					<PopExitBlock>
						<PopExitTtl>Выйти из аккаунта?</PopExitTtl>
						<PopExitForm>
						{/* <form className="pop-exit__form" id="formExit" action="#"> */}
							{/* <div className="pop-exit__form-group"> */}
								<PopExitYes><a href="modal/signin.html">Да, выйти</a></PopExitYes>
								{/* <button className="pop-exit__exit-yes _hover01" id="exitYes"><a href="modal/signin.html">Да, выйти</a> </button> */}
								<PopExitNo><a href="main.html">Нет, остаться</a></PopExitNo>
								{/* <button className="pop-exit__exit-no _hover03" id="exitNo"><a href="main.html">Нет, остаться</a> </button> */}
							{/* </div> */}
						</PopExitForm>
					</PopExitBlock>
				</PopExitContainer>
			</PopExitMain>
			{/* <PopExit show={showModal} onExitButtonClick={toggleShowModal} /> */}
        </>
    );
}

export default PopExit;