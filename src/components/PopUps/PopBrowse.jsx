import CalendarContent from "../Calendar/CalendarContent";
import CalendarNav from "../Calendar/CalendarNav";
import {
	PopBrowseMain,
	PopBrowseContainer,
	PopBrowseBlock,
	PopBrowseContent,
	PopBrowseTopBlock,
	PopBrowseTtl,
	PopBrowseStatus,
	PopBrowseSubttl,
	PopBrowseWrap,
	FormSubttl,
	CalendarTtl,
	CalendarPeriod,
	CalendarP,
	ThemeDown,
	PopBrowseBtn,
	PopBrowseBtnGroup,
	BtnBrowse,
	BtnBrowseClose,
} from './PopBrowse.styled';

const PopBrowse = () => {
    return (
        <>
            <PopBrowseMain>
			{/* <div className="pop-browse" id="popBrowse"> */}
				<PopBrowseContainer>
				{/* <div className="pop-browse__container"> */}
					<PopBrowseBlock>
					{/* <div className="pop-browse__block"> */}
						<PopBrowseContent>
						{/* <div className="pop-browse__content"> */}
							<PopBrowseTopBlock>
							{/* <div className="pop-browse__top-block"> */}
								<PopBrowseTtl>Название задачи</PopBrowseTtl>
								{/* <h3 className="pop-browse__ttl">Название задачи</h3> */}
								<div className="categories__theme theme-top _orange _active-category">
									<p className="_orange">Web Design</p>
								</div>
							</PopBrowseTopBlock>
							{/* </div> */}
							<PopBrowseStatus>
							{/* <div className="pop-browse__status status"> */}
								<PopBrowseSubttl>Статус</PopBrowseSubttl>
								{/* <p className="status__p subttl">Статус</p> */}
								<div className="status__themes">
									<div className="status__theme _hide">
										<p>Без статуса</p>
									</div>
									<div className="status__theme _gray">
										<p className="_gray">Нужно сделать</p>
									</div>
									<div className="status__theme _hide">
										<p>В работе</p>
									</div>
									<div className="status__theme _hide">
										<p>Тестирование</p>
									</div>
									<div className="status__theme _hide">
										<p>Готово</p>
									</div>
								</div>
							</PopBrowseStatus>
							{/* </div> */}
							<PopBrowseWrap>
							{/* <div className="pop-browse__wrap"> */}
								<form className="pop-browse__form form-browse" id="formBrowseCard" action="#">									
									<div className="form-browse__block">
										<FormSubttl htmlFor="textArea01">Описание задачи</FormSubttl>
										{/* <label htmlFor="textArea01" className="subttl">Описание задачи</label> */}
										<textarea className="form-browse__area" name="text" id="textArea01"  readOnly placeholder="Введите описание задачи..."></textarea>
									</div>
								</form>
								<div className="pop-new-card__calendar calendar">
									<CalendarTtl>Даты</CalendarTtl>
									{/* <p className="calendar__ttl subttl">Даты</p> */}
									<div className="calendar__block">
										<CalendarNav />
										<CalendarContent />
										<input type="hidden" id="datepick_value" value="08.09.2023" />
										<CalendarPeriod>
											{/* <div className="calendar__period"> */}
												<CalendarP>Срок исполнения: <span className="date-control">09.09.23</span></CalendarP>
												{/* <p className="calendar__p date-end">Срок исполнения: <span className="date-control">09.09.23</span></p> */}
											</CalendarPeriod>
										{/* </div> */}
									</div>
								</div>
							</PopBrowseWrap>
							{/* </div> */}
							<ThemeDown>
							{/* <div className="theme-down__categories theme-down"> */}
								<PopBrowseSubttl>Категория</PopBrowseSubttl>
								{/* <p className="categories__p subttl">Категория</p> */}
								<div className="categories__theme _orange _active-category">
									<p className="_orange">Web Design</p>
								</div>
							</ThemeDown>
							{/* </div> */}
							<PopBrowseBtn>
							{/* <div className="pop-browse__btn-browse"> */}
								<PopBrowseBtnGroup>
								{/* <div className="btn-group"> */}
									<BtnBrowse href="#">Редактировать задачу</BtnBrowse>
									{/* <button className="btn-browse__edit _btn-bor _hover03"><a href="#">Редактировать задачу</a></button> */}
									<BtnBrowse href="#">Удалить задачу</BtnBrowse>
									{/* <button className="btn-browse__delete _btn-bor _hover03"><a href="#">Удалить задачу</a></button> */}
								</PopBrowseBtnGroup>
								{/* </div> */}
								<BtnBrowseClose to="/">Закрыть</BtnBrowseClose>
								{/* <button className="btn-browse__close _btn-bg _hover01"><a href="#">Закрыть</a></button> */}
							</PopBrowseBtn>
							{/* </div> */}
							<div className="pop-browse__btn-edit _hide">
								<div className="btn-group">
									<button className="btn-edit__edit _btn-bg _hover01"><a href="#">Сохранить</a></button>
									<button className="btn-edit__edit _btn-bor _hover03"><a href="#">Отменить</a></button>
									<button className="btn-edit__delete _btn-bor _hover03" id="btnDelete"><a href="#">Удалить задачу</a></button>
								</div>
								<button className="btn-edit__close _btn-bg _hover01"><a href="#">Закрыть</a></button>
							</div>
						</PopBrowseContent>							
						{/* </div> */}
					</PopBrowseBlock>
					{/* </div> */}
				</PopBrowseContainer>
				{/* </div> */}
			</PopBrowseMain>
			{/* </div> */}
        </>
    );
}

export default PopBrowse;