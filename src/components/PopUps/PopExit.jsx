import {
  PopExitMain,
  PopExitContainer,
  PopExitBlock,
  PopExitTtl,
  PopExitForm,
} from './PopExit.styled';

const PopExit = () => {
    return (
        <>
            <PopExitMain>
			{/* <div className="pop-exit" id="popExit"> */}
				<PopExitContainer>
				{/* <div className="pop-exit__container"> */}
					<PopExitBlock>
					{/* <div className="pop-exit__block"> */}
						<PopExitTtl>
						{/* <div className="pop-exit__ttl"> */}
							<h2>Выйти из аккаунта?</h2>
						</PopExitTtl>
						{/* </div> */}
						<PopExitForm>
						{/* <form className="pop-exit__form" id="formExit" action="#"> */}
							{/* <div className="pop-exit__form-group"> */}
								<button className="pop-exit__exit-yes _hover01" id="exitYes"><a href="modal/signin.html">Да, выйти</a> </button>
								<button className="pop-exit__exit-no _hover03" id="exitNo"><a href="main.html">Нет, остаться</a> </button>
							{/* </div> */}
						</PopExitForm>
						{/* </form> */}
					</PopExitBlock>
					{/* </div> */}
				</PopExitContainer>
				{/* </div> */}
			</PopExitMain>
			{/* </div> */}
        </>
    );
}

export default PopExit;