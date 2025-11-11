import { useParams } from 'react-router-dom';
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
	const { id } = useParams();

    return (
        <>
            <PopBrowseMain data-id={id}>
				<PopBrowseContainer>
					<PopBrowseBlock>
						<PopBrowseContent>
							<PopBrowseTopBlock>
								<PopBrowseTtl>Название задачи</PopBrowseTtl>
								<span className="task-id" style={{ fontSize: '12px', color: '#888' }}>
                                	ID задачи: {id}
                            	</span>
								<div className="categories__theme theme-top _orange _active-category">
									<p className="_orange">Web Design</p>
								</div>
							</PopBrowseTopBlock>
							<PopBrowseStatus>
								<PopBrowseSubttl>Статус</PopBrowseSubttl>
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
							<PopBrowseWrap>
								<form className="pop-browse__form form-browse" id="formBrowseCard" action="#">									
									<div className="form-browse__block">
										<FormSubttl htmlFor="textArea01">Описание задачи</FormSubttl>
										<textarea className="form-browse__area" name="text" id="textArea01"  readOnly placeholder="Введите описание задачи..."></textarea>
									</div>
								</form>
								<div className="pop-new-card__calendar calendar">
									<CalendarTtl>Даты</CalendarTtl>
									<div className="calendar__block">
										<CalendarNav />
										<CalendarContent />
										<input type="hidden" id="datepick_value" value="08.09.2023" />
										<CalendarPeriod>
												<CalendarP>Срок исполнения: <span className="date-control">09.09.23</span></CalendarP>
											</CalendarPeriod>
									</div>
								</div>
							</PopBrowseWrap>
							<ThemeDown>
								<PopBrowseSubttl>Категория</PopBrowseSubttl>
								<div className="categories__theme _orange _active-category">
									<p className="_orange">Web Design</p>
								</div>
							</ThemeDown>
							<PopBrowseBtn>
								<PopBrowseBtnGroup>
									<BtnBrowse href="#">Редактировать задачу</BtnBrowse>
									<BtnBrowse href="#">Удалить задачу</BtnBrowse>
								</PopBrowseBtnGroup>
								<BtnBrowseClose to="/">Закрыть</BtnBrowseClose>
							</PopBrowseBtn>
							<div className="pop-browse__btn-edit _hide">
								<div className="btn-group">
									<button className="btn-edit__edit _btn-bg _hover01"><a href="#">Сохранить</a></button>
									<button className="btn-edit__edit _btn-bor _hover03"><a href="#">Отменить</a></button>
									<button className="btn-edit__delete _btn-bor _hover03" id="btnDelete"><a href="#">Удалить задачу</a></button>
								</div>
								<button className="btn-edit__close _btn-bg _hover01"><a href="#">Закрыть</a></button>
							</div>
						</PopBrowseContent>							
					</PopBrowseBlock>
				</PopBrowseContainer>
			</PopBrowseMain>
        </>
    );
}

export default PopBrowse;