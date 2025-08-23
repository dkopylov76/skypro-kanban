import CardsItemOrange from "../Card/CardsItemOrange";
import CardsItemGreen from "../Card/CardsItemGreen";
import CardsItemPurple from "../Card/CardsItemPurple";

const ColumnReady = () => {
    return (
        <>
            <div class="main__column">
                <div class="column__title">
                    <p>Готово</p>
                </div>
                <div class="cards">
                    <CardsItemGreen />
                </div>
            </div>
        </>
    );
}

export default ColumnReady;