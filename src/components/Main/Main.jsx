import ColumnNoStatus from "../Column/ColumnNoStatus";
import ColumnMustDo from "../Column/ColumnMustDo";
import ColumnInWork from "../Column/ColumnInWork";
import ColumnTesting from "../Column/ColumnTesting";
import ColumnReady from "../Column/ColumnReady";

const Main = () => {
    return (
        <>
            <main class="main">
                <div class="container">
                    
                    <div class="main__block">
                        <div class="main__content">
                            <ColumnNoStatus />
                            <ColumnMustDo />
                            <ColumnInWork />
                            <ColumnTesting />
                            <ColumnReady />
                        </div>
                    
                    </div>
                </div>
            </main>
        </>
    );
}

export default Main;