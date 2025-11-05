import {
  PopExitMain,
  PopExitContainer,
  PopExitBlock,
  PopExitTtl,
  PopExitForm,
  PopExitYes,
  PopExitNo,
} from './PopExit.styled';


const PopExit = () => {
    return (
        <>
            <PopExitMain>
				<PopExitContainer>
					<PopExitBlock>
						<PopExitTtl>Выйти из аккаунта?</PopExitTtl>
						<PopExitForm>
							<PopExitYes to="/login">Да, выйти</PopExitYes>
							<PopExitNo to="/">Нет, остаться</PopExitNo>
						</PopExitForm>
					</PopExitBlock>
				</PopExitContainer>
			</PopExitMain>
        </>
    );
}

export default PopExit;