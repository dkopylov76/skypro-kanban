import CardsItem from "../Card/CardsItem";

const Column = ({header, cards}) => {
    
    return (
        <>
            <div class="main__column column">
                <div class="column__title">
                    <p>{header}</p>
                </div>
                <div class="cards">
                    {cards.map((card) => (<CardsItem key={card.id} id={card.id} theme={card.theme} title={card.title} date={card.date} />))}
                </div>
            </div>
        </>
    );
}

export default Column;