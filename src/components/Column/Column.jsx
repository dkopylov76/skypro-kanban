import {
  MainColumn,
  ColumnTitle,
  Cards,
} from './Column.styled';
import CardsItem from "../Card/CardsItem";

const Column = ({header, cards=[]}) => {
    console.log(cards);

    return (
        <>
            <MainColumn>
                <ColumnTitle>
                    <p>{header}</p>
                </ColumnTitle>
                <Cards>
                    {cards.map((card) => (<CardsItem key={card.id} id={card.id} theme={card.theme} title={card.title} date={card.date} />))}
                </Cards>
            </MainColumn>
        </>
    );
}

export default Column;