import CardsItemOrange from "../Card/CardsItemOrange";
import CardsItemGreen from "../Card/CardsItemGreen";
import CardsItemPurple from "../Card/CardsItemPurple";

const ColumnMustDo = () => {
    return (
        <>
            <div class="main__column">
                <div class="column__title">
                    <p>Нужно сделать</p>
                </div>
                <div class="cards">
                    <CardsItemGreen />
                    <CardsItemOrange />
                </div>
            </div>
        </>
    );
}

export default ColumnMustDo;