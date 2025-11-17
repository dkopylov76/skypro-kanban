import {
  MainBase,
  MainContainer,
  MainBlock,
  MainContent,
} from './Main.styled';
import Column from "../Column/Column";
import cardsList from "/src/data.js";
import { useState } from 'react';

const columnHeaders = ["Без статуса", "В работе", "Нужно сделать", "Тестирование", "Готово"]

const Main = () => {
    const [cards] = useState(cardsList)

    return (
        <>
            <MainBase>
                <MainContainer>
                    <MainBlock>
                        <MainContent>
                            {columnHeaders.map((header, index) => (<Column key={`${header}_${index}`} header={header} cards={cards.filter((card) => card.status === header)} />))}
                        </MainContent>
                    </MainBlock>
                </MainContainer>
            </MainBase>
        </>
    );
}

export default Main;