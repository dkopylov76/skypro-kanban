import CardsItemOrange from "../Card/CardsItemOrange";
import CardsItemGreen from "../Card/CardsItemGreen";
import CardsItemPurple from "../Card/CardsItemPurple";

const Main = () => {
    return (
        <>
            <main class="main">
                <div class="container">
                    
                    <div class="main__block">
                        <div class="main__content">
                            <div class="main__column column">
                                <div class="column__title">
                                    <p>Без статуса</p>
                                </div>
                                <div class="cards">
                                    <CardsItemOrange />
                                    <CardsItemGreen />
                                    <CardsItemOrange />
                                    <CardsItemPurple />
                                    <CardsItemOrange />
                                </div>
                            </div>						
                            <div class="main__column">
                                <div class="column__title">
                                    <p>Нужно сделать</p>
                                </div>
                                <div class="cards">
                                    <CardsItemGreen />
                                </div>
                            </div>
                            <div class="main__column">
                                <div class="column__title">
                                    <p>В работе</p>
                                </div>
                                <div class="cards">
                                    <CardsItemGreen />
                                    <CardsItemPurple />
                                    <CardsItemOrange />
                                </div>
                            </div>
                            <div class="main__column">
                                <div class="column__title">
                                    <p>Тестирование</p>
                                </div>
                                <div class="cards">
                                    <CardsItemGreen />
                                </div>
                            </div>
                            <div class="main__column">
                                <div class="column__title">
                                    <p>Готово</p>
                                </div>
                                <div class="cards">
                                    <CardsItemGreen />
                                </div>
                            </div>
                    
                            
                        </div>
                    
                    </div>
                </div>
            </main>
        </>
    );
}

export default Main;