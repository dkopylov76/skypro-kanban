import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

import { postTask } from "../../services/api";
import { useContext } from "react";
import { LoginContext } from "../../components/Context/LoginContext";

const PopNewCard = () => {

	const navigate = useNavigate();
	const { user } = useContext(LoginContext);

	// Состояние формы
	const [formData, setFormData] = useState({
		title: "",
		description: "",
		date: "", // формат: "2025-11-25" или "25.11.2025" — зависит от API
		category: "Web Design", // по умолчанию
	});

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	// Обновление полей
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	// Выбор категории
	const handleCategoryClick = (category) => {
		setFormData((prev) => ({ ...prev, category }));
	};

	// Выбор даты из календаря (предположим, что дата устанавливается в input #datepick_value)
	// Можно использовать реф или передавать колбэк в CalendarContent
	// Упрощённый вариант: обновляем при изменении скрытого инпута (см. ниже)

	// Отправка формы
	const handleSubmit = async (e) => {
		e.preventDefault();

	if (!formData.title.trim()) {
    	setError("Введите название задачи");
    	return;
    }

	if (!formData.date) {
    	setError("Выберите дату выполнения");
    	return;
    }

	setLoading(true);
	setError("");

	try {
    	// Подготавливаем данные для отправки
    	const taskData = {
    		text: formData.title,
    		description: formData.description,
    		date: formData.date,
    		category: formData.category,
    		done: false,
    	};

    	// Отправка на сервер
    	await postTask({
    		token: user?.token,
    		task: taskData,
    	});

    	// Успешно — закрываем и переходим
    	navigate("/tasks"); // или куда нужно
		} catch (err) {
			setError(err.message || "Не удалось создать задачу");
		} finally {
    		setLoading(false);
		}
	};


    return (
        <>
            <PopNewCardMain>
				<PopNewCardContainer>
					<PopNewCardBlock>
						<PopNewCardContent>
							<PopNewCardTtl>Создание задачи</PopNewCardTtl>
							<PopNewCardClose to="/">&#10006;</PopNewCardClose>
							<PopNewCardWrap>
								<PopNewCardForm onSubmit={handleSubmit}>
								{/* <form className="pop-new-card__form form-new" id="formNewCard" action="#"> */}
									<FormNewBlock>
										<FormSubttl htmlFor="formTitle">Название задачи</FormSubttl>
										<FormNewInput
											type="text"
											name="name"
											id="formTitle"
											placeholder="Введите название задачи..."
											value={formData.title}
											onChange={handleChange}
										/>
										{/* <input className="form-new__input" type="text" name="name" id="formTitle" placeholder="Введите название задачи..." /> */}
									</FormNewBlock>
									<FormNewBlock>
										<FormSubttl htmlFor="textArea">Описание задачи</FormSubttl>
										{/* <label htmlFor="textArea" className="subttl">Описание задачи</label> */}
										<FormNewArea
											// type="text"
											name="description"
											id="textArea"
											placeholder="Введите описание задачи..."
											value={formData.description}
											onChange={handleChange}
										/>
										{/* <textarea className="form-new__area" name="text" id="textArea"  placeholder="Введите описание задачи..."></textarea> */}
									</FormNewBlock>
								</PopNewCardForm>
								<PopNewCardCalendar>
									<CalendarTtl>Даты</CalendarTtl>
									<CalendarBlock>
										<CalendarNav />
										<CalendarContent
											onDateSelect={(date) => {
												setFormData((prev) => ({...prev, date}));
												document.getElementById("datepick_value").value = date;
											}}
										/>
										<input
											type="hidden"
											id="datepick_value"
											value={formData.date || ""}
										/>
										
										<CalendarPeriod>
											<CalendarP>Выберите срок исполнения.</CalendarP>
										</CalendarPeriod>
									</CalendarBlock>
								</PopNewCardCalendar>
							</PopNewCardWrap>
							<Categories>
								<CategoriesP>Категория</CategoriesP>
								<CategoriesThemes>
									<CategoriesThemeOrange
										onClick={() => handleCategoryClick("Web Design")}
										$active={formData.category === "Web Design"}
									>
										<CategoriesThemeP>Web Design</CategoriesThemeP>
									</CategoriesThemeOrange>
									<CategoriesThemeGreen
										onClick={() => handleCategoryClick("Research")}
                    					$active={formData.category === "Research"}
									>
										<CategoriesThemeP>Research</CategoriesThemeP>
									</CategoriesThemeGreen>
									<CategoriesThemePurple
										onClick={() => handleCategoryClick("Copywriting")}
                    					$active={formData.category === "Copywriting"}
									>
										<CategoriesThemeP>Copywriting</CategoriesThemeP>
									</CategoriesThemePurple>
								</CategoriesThemes>
							</Categories>

							{error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}

							<FormNewCreate type="submit" disabled={loading}>
								{loading ? "Создаём..." : "Создать задачу"}
							</FormNewCreate>
						</PopNewCardContent>
					</PopNewCardBlock>
				</PopNewCardContainer>
			</PopNewCardMain>
        </>
    );
}

export default PopNewCard;