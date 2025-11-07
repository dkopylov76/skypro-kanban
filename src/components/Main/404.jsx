import {
    NotFoundBase,
    NotFoundContainer,
    NotFoundBlock,
    NotFoundContent,
    NotFoundError,
    NotFoundText,
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
                        </NotFoundContent>
                    </NotFoundBlock>
                </NotFoundContainer>
                
            </NotFoundBase>
        </>
    );
}

export default NotFound;

