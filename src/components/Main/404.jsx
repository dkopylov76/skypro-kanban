import {
    NotFoundBase,
    NotFoundContainer,
    NotFoundBlock,
    NotFoundContent,
    NotFoundError,
    NotFoundText,
    NotFoundButton,
} from './404.styled';


const NotFound = () => {
    
    return (
        <>
            <NotFoundBase>
                <NotFoundContainer>
                    <NotFoundBlock>
                        <NotFoundContent>
                            <NotFoundError>404</NotFoundError>
                            <NotFoundText>Страница не найдена</NotFoundText>
                            <NotFoundButton to="/">На главную</NotFoundButton>
                        </NotFoundContent>
                    </NotFoundBlock>
                </NotFoundContainer>
                
            </NotFoundBase>
        </>
    );
}

export default NotFound;

