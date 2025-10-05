import Column from "../Column/Column";
import cardsList from "/src/data.js";
import {
  MainBlock,
  Container,
  HeaderBlock,
  LogoWrapper,
  Logo,
  HeaderNav,
  MainButton,
  UserLink
} from './Main.styled';

const columnHeaders = ["Без статуса", "В работе", "Нужно сделать", "Тестирование", "Готово"]

const Main = () => {
    return (
        <>
            <MainBlock>
            {/* <main class="main"> */}
                <Container>
                {/* <div class="container"> */}
                    
                    <div class="main__block">
                        <div class="main__content">
                            {columnHeaders.map((header, index) => (<Column key={`${header}_${index}`} header={header} cards={cardsList.filter((card) => card.status === header)}/>))}
                        </div>
                    
                    </div>
                </Container>
                {/* </div> */}
            </MainBlock>
            {/* </main> */}
        </>
    );
}

export default Main;