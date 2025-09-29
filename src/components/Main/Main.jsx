import Column from "../Column/Column";
import cardsList from "/src/data.js";

const columnHeaders = ["Без статуса", "В работе", "Нужно сделать", "Тестирование", "Готово"]

const Main = () => {
    return (
        <>
            <main class="main">
                <div class="container">
                    
                    <div class="main__block">
                        <div class="main__content">
                            {columnHeaders.map((header, index) => (<Column key={`${header}_${index}`} header={header} cards={cardsList.filter((card) => card.status === header)}/>))}
                        </div>
                    
                    </div>
                </div>
            </main>
        </>
    );
}

export default Main;