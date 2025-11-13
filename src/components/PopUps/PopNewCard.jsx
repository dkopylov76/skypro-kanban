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
			{/* <div className="pop-new-card" id="popNewCard"> */}
				<PopNewCardContainer>
				{/* <div className="pop-new-card__container"> */}
					<PopNewCardBlock>
					{/* <div className="pop-new-card__block"> */}
						<PopNewCardContent>
						{/* <div className="pop-new-card__content"> */}
							<PopNewCardTtl>Создание задачи</PopNewCardTtl>
							<PopNewCardClose to="/">&#10006;</PopNewCardClose>
							{/* <a href="#" className="pop-new-card__close">&#10006;</a> */}
							<PopNewCardWrap>
							{/* <div className="pop-new-card__wrap"> */}
								<PopNewCardForm id="formNewCard" action="#">
								{/* <form className="pop-new-card__form form-new" id="formNewCard" action="#"> */}
									<FormNewBlock>
									{/* <div className="form-new__block"> */}
										<FormSubttl htmlFor="formTitle">Название задачи</FormSubttl>
										{/* <label htmlFor="formTitle" className="subttl">Название задачи</label> */}
										<FormNewInput type="text" name="name" id="formTitle" placeholder="Введите название задачи..." />
										{/* <input className="form-new__input" type="text" name="name" id="formTitle" placeholder="Введите название задачи..." /> */}
									</FormNewBlock>
									{/* </div> */}
									<FormNewBlock>
									{/* <div className="form-new__block"> */}
										<FormSubttl htmlFor="textArea">Описание задачи</FormSubttl>
										{/* <label htmlFor="textArea" className="subttl">Описание задачи</label> */}
										<FormNewArea type="text" name="text" id="textArea" placeholder="Введите описание задачи..." />
										{/* <textarea className="form-new__area" name="text" id="textArea"  placeholder="Введите описание задачи..."></textarea> */}
									</FormNewBlock>
									{/* </div> */}
								</PopNewCardForm>
								{/* </form> */}
								<PopNewCardCalendar>
								{/* <div className="pop-new-card__calendar calendar"> */}
									<CalendarTtl>Даты</CalendarTtl>
									{/* <p className="calendar__ttl subttl">Даты</p>*/}
									<CalendarBlock>
									{/* <div className="calendar__block"> */}
										<CalendarNav />
										<CalendarContent />
										<input type="hidden" id="datepick_value" value="08.09.2023" />
										<CalendarPeriod>
										{/* <div className="calendar__period"> */}
											<CalendarP>Выберите срок исполнения.</CalendarP>
											{/* <p className="calendar__p date-end">Выберите срок исполнения <span className="date-control"></span>.</p> */}
										</CalendarPeriod>
										{/* </div> */}
									</CalendarBlock>
									{/* </div> */}
								</PopNewCardCalendar>
								{/* </div> */}
							</PopNewCardWrap>
							{/* </div> */}
							<Categories>
							{/* <div className="pop-new-card__categories categories"> */}
								<CategoriesP>Категория</CategoriesP>
								{/* <p className="categories__p subttl">Категория</p> */}
								<CategoriesThemes>
								{/* <div className="categories__themes"> */}
									<CategoriesThemeOrange>
									{/* <div className="categories__theme _orange _active-category"> */}
										<CategoriesThemeP>Web Design</CategoriesThemeP>
										{/* <p className="_orange">Web Design</p> */}
									</CategoriesThemeOrange>
									{/* </div> */}
									<CategoriesThemeGreen>
									{/* <div className="categories__theme _green"> */}
										<CategoriesThemeP>Research</CategoriesThemeP>
										{/* <p className="_green">Research</p> */}
									</CategoriesThemeGreen>
									{/* </div> */}
									<CategoriesThemePurple>
									{/* <div className="categories__theme _purple"> */}
										<CategoriesThemeP>Copywriting</CategoriesThemeP>
										{/* <p className="_purple">Copywriting</p> */}
									</CategoriesThemePurple>
									{/* </div> */}
								</CategoriesThemes>
								{/* </div> */}
							</Categories>
							{/* </div> */}
							<FormNewCreate id="btnCreate">Создать задачу</FormNewCreate>
							{/* <button className="form-new__create _hover01" id="btnCreate">Создать задачу</button> */}
						</PopNewCardContent>
						{/* </div> */}
					</PopNewCardBlock>
					{/* </div> */}
				</PopNewCardContainer>
				{/* </div> */}
			</PopNewCardMain>
			{/* </div> */}
        </>
    );
}

export default PopNewCard;