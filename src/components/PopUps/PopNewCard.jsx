import CalendarContent from "../Calendar/CalendarContent";
import CalendarNav from "../Calendar/CalendarNav";
import {
  PopNewCardMain,
  PopNewCardContainer,
  PopNewCardBlock,
  PopNewCardContent,
  PopNewCardTtl,
  PopNewCardClose,
  PopNewCardWrap,
  PopNewCardForm,
  FormNewBlock,
  FormSubttl,
  FormNewInput,
  FormNewArea,
  PopNewCardCalendar,
  CalendarTtl,
  CalendarBlock,
  CalendarPeriod,
  CalendarP,
  Categories,
  CategoriesP,
  CategoriesThemes,
  CategoriesThemeP,
  CategoriesThemeOrange,
  CategoriesThemeGreen,
  CategoriesThemePurple,
  FormNewCreate,
} from './PopNewCard.styled';

const PopNewCard = () => {
    return (
        <>
            <PopNewCardMain>
				<PopNewCardContainer>
					<PopNewCardBlock>
						<PopNewCardContent>
							<PopNewCardTtl>Создание задачи</PopNewCardTtl>
							<PopNewCardClose to="/">&#10006;</PopNewCardClose>
							<PopNewCardWrap>
								<PopNewCardForm id="formNewCard" action="#">
								{/* <form className="pop-new-card__form form-new" id="formNewCard" action="#"> */}
									<FormNewBlock>
										<FormSubttl htmlFor="formTitle">Название задачи</FormSubttl>
										<FormNewInput type="text" name="name" id="formTitle" placeholder="Введите название задачи..." />
										{/* <input className="form-new__input" type="text" name="name" id="formTitle" placeholder="Введите название задачи..." /> */}
									</FormNewBlock>
									<FormNewBlock>
										<FormSubttl htmlFor="textArea">Описание задачи</FormSubttl>
										{/* <label htmlFor="textArea" className="subttl">Описание задачи</label> */}
										<FormNewArea type="text" name="text" id="textArea" placeholder="Введите описание задачи..." />
										{/* <textarea className="form-new__area" name="text" id="textArea"  placeholder="Введите описание задачи..."></textarea> */}
									</FormNewBlock>
								</PopNewCardForm>
								<PopNewCardCalendar>
									<CalendarTtl>Даты</CalendarTtl>
									<CalendarBlock>
										<CalendarNav />
										<CalendarContent />
										<input type="hidden" id="datepick_value" value="08.09.2023" />
										<CalendarPeriod>
											<CalendarP>Выберите срок исполнения.</CalendarP>
										</CalendarPeriod>
									</CalendarBlock>
								</PopNewCardCalendar>
							</PopNewCardWrap>
							<Categories>
								<CategoriesP>Категория</CategoriesP>
								<CategoriesThemes>
									<CategoriesThemeOrange>
										<CategoriesThemeP>Web Design</CategoriesThemeP>
									</CategoriesThemeOrange>
									<CategoriesThemeGreen>
										<CategoriesThemeP>Research</CategoriesThemeP>
									</CategoriesThemeGreen>
									<CategoriesThemePurple>
										<CategoriesThemeP>Copywriting</CategoriesThemeP>
									</CategoriesThemePurple>
								</CategoriesThemes>
							</Categories>
							<FormNewCreate id="btnCreate">Создать задачу</FormNewCreate>
						</PopNewCardContent>
					</PopNewCardBlock>
				</PopNewCardContainer>
			</PopNewCardMain>
        </>
    );
}

export default PopNewCard;