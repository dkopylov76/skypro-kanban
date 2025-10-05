import {
  MainBase,
  MainContainer,
  MainBlock,
  MainContent,
} from './Main.styled';
import Column from "../Column/Column";
import cardsList from "/src/data.js";

const columnHeaders = ["Без статуса", "В работе", "Нужно сделать", "Тестирование", "Готово"]

const Main = () => {
    return (
        <>
            <MainBase>
                <MainContainer>
                    
                    <MainBlock>
                        <MainContent>
                            {columnHeaders.map((header, index) => (<Column key={`${header}_${index}`} header={header} cards={cardsList.filter((card) => card.status === header)}/>))}
                        </MainContent>
                    </MainBlock>
                </MainContainer>
            </MainBase>
        </>
    );
}

export default Main;