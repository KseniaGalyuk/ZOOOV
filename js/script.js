"use strict"
//*<Общие Общие переменные>==========================================================================================
const body = document.querySelector('body');
let unlock = true;
//*</Общие переменные>==========================================================================================
//Подключить файл стилей, если зашли с айфона
var is_iphone = navigator.userAgent.match(/iPhone/i) ? true : false;
if (is_iphone) {
	document.write('<link rel="stylesheet" href="css/safari.css">');
}
// слайдер
new Swiper('.barf__slider', {
	//Навигация
	pagination: {
		el: '.swiper-pagination',
		// Буллеты
		//тип по умолчанию
		type: 'bullets',
		//можно ли на него нажимать
		clickable: true,
	},


	//Переключение с помощью клавиатуры
	keyboard: {
		//включить/выключить
		enabled: true,
		//Только когда слайдер в пределах вьюпорта вкдючить/выключить
		onlyInViewport: true,
		// Управление клавишами pageUp/pageDown включить/выключить
		pageUpDown: true,
	},


	// Переключение колесом мыши
	mousewheel: {
		// Чувствительность колеса мыши 0-не работает, можно больше 1
		sensitivity: 1,
		//Класс объекта на котором сработает прокрутка мышью
		// Если слайдеров много, они сработают все, в таком случае лучше оставлять по умолчанию
		eventsTarget: '.barf__slider',
	},


	// Количество слайдов для показа, можно указывать не целые числа, можно 'auto'-колво слайдеров выводится автоматически, в зависимости от контента или заданной ширины
	//slidesPerView: 1,


	// Если слайдов меньше чем нужно, слайдер полностью перестанет работать, пока будет нужного количества
	watchOverflow: true,


	// Отступ между слайдами
	spaceBerween: 20,


	// Активный слайдер по центру
	// centeredSlides: true,


	// Бесконечный слайдер
	//loop: true,


	// Свободный режим, можно листать в любое положение
	//freeMode:true,

	// Брейк поинты, работают по принципу мобайл ферст, срабатывают н аширине больще указанной
	// Этим способом нельзя координально измеить логику слайдера, например поменять горизонтальный скролл на вертикальный
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		1150: {
			slidesPerView: 2,
			keyboard: {
				enabled: false,
			},
			mousewheel: {
				enabled: false,
			},
		}
	}
});
new Swiper('.ration__slider', {
	//Навигация
	pagination: {
		el: '.swiper-pagination',
		// Буллеты
		//тип по умолчанию
		type: 'bullets',
		//можно ли на него нажимать
		clickable: true,
	},


	//Переключение с помощью клавиатуры
	keyboard: {
		//включить/выключить
		enabled: true,
		//Только когда слайдер в пределах вьюпорта вкдючить/выключить
		onlyInViewport: true,
		// Управление клавишами pageUp/pageDown включить/выключить
		pageUpDown: true,
	},


	// Переключение колесом мыши
	mousewheel: {
		// Чувствительность колеса мыши 0-не работает, можно больше 1
		sensitivity: 1,
		//Класс объекта на котором сработает прокрутка мышью
		// Если слайдеров много, они сработают все, в таком случае лучше оставлять по умолчанию
		eventsTarget: '.ration__slider',
	},


	// Количество слайдов для показа, можно указывать не целые числа, можно 'auto'-колво слайдеров выводится автоматически, в зависимости от контента или заданной ширины
	slidesPerView: 'auto',


	// Если слайдов меньше чем нужно, слайдер полностью перестанет работать, пока будет нужного количества
	watchOverflow: true,


	// Отступ между слайдами
	//spaceBetween: 26,


	// Активный слайдер по центру
	// centeredSlides: true,


	// Бесконечный слайдер
	//loop: true,


	// Свободный режим, можно листать в любое положение
	freeMode: true,

	// Брейк поинты, работают по принципу мобайл ферст, срабатывают н аширине больще указанной
	// Этим способом нельзя координально измеить логику слайдера, например поменять горизонтальный скролл на вертикальный
	// breakpoints: {
	// 	320: {
	// 		slidesPerView: 1,
	// 	},
	// 	1150: {
	// 		slidesPerView: 2,
	// 		keyboard: {
	// 			enabled: false,
	// 		},
	// 		mousewheel: {
	// 			enabled: false,
	// 		},
	// 	}
	// }
});
//перемещение лейбла у тегов форм
const formText = document.querySelector('.form-contacts__text');
const formEmail = document.querySelector('.form-contacts__email');
const formTextarea = document.querySelector('.form-contacts__textarea');
const formTel = document.querySelector('.form-popup__tel');
const formName = document.querySelector('.form-popup__name');
const formAge = document.querySelector('.form-popup__age');
const formWeight = document.querySelector('.form-popup__weight');
const formAddress = document.querySelector('.form-popup__address');
const formTelOrder = document.querySelector('.form-popup__tel-order');
const formNameOrder = document.querySelector('.form-popup__name-order');
if (formAddress != null) {
	addAnEvent(formAddress);
}
if (formTelOrder != null) {
	addAnEvent(formTelOrder);
}
if (formNameOrder != null) {
	addAnEvent(formNameOrder);
}
if (formTel != null) {
	addAnEvent(formTel);
}
if (formName != null) {
	addAnEvent(formName);
}
if (formAge != null) {
	addAnEvent(formAge);
}
if (formWeight != null) {
	addAnEvent(formWeight);
}
if (formText != null) {
	addAnEvent(formText);
}
if (formEmail != null) {
	addAnEvent(formEmail);
}
if (formTextarea != null) {
	addAnEvent(formTextarea);
}
//Стоимость попап заказа
const arrowMore = document.querySelector('.form-popup__amount-more');
const arrowLess = document.querySelector('.form-popup__amount-less');
const arrowInput = document.querySelector('.form-popup__amount-input');
const gramSelect = document.querySelector('.form-popup__gram-select');
let finPrice = document.querySelector('.form-popup__price span');
let price; //В этой переменной будет стоимость заказа
if (gramSelect != null) {
	priceFunc();
	gramSelect.addEventListener('change', function () { //Событие при выборе опшинов
		priceFunc();
	})
}
if (arrowMore != null && arrowLess != null && arrowInput != null) {
	// Делаем кнопки кликабельными, устанавливаем макс и мин кол-во порций
	arrowMore.addEventListener('click', function () {
		++(arrowInput.value);
		if (arrowInput.value > 100) {
			arrowInput.value = 100;
		}
		priceFunc();
	})
	arrowLess.addEventListener('click', function () {
		--(arrowInput.value);
		if (arrowInput.value < 0) {
			arrowInput.value = 0;
		}
		priceFunc();
	})
	arrowInput.addEventListener('keyup', function () {
		if (arrowInput.value < 0) {
			arrowInput.value = 0;
		} else if (arrowInput.value > 100) {
			arrowInput.value = 100;
		}
		priceFunc();
	})
}
//Меню бургер
const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');
if (iconMenu != null) {
	document.addEventListener('click', function (e) {
		if (e.target.closest('.icon-menu')) {
			iconMenu.classList.toggle('_active');
			menuBody.classList.toggle('_active');
			bodyLock();
			if (!menuBody.classList.contains('_active')) {
				bodyUnLock();
			}
		}
		if (!e.target.closest('.icon-menu') && !e.target.closest('._popup-link') && !e.target.closest('.popup__content')) {
			iconMenu.classList.remove('_active');
			menuBody.classList.remove('_active');
			bodyUnLock();
		}
	});
};
//
//спойлеры
const iconQuestions = document.querySelectorAll('.question');
//const iconsQuestions = document.querySelectorAll('.question__icon');
if (iconQuestions.length > 0) {
	spollers(iconQuestions);
};
function spollers(iconQuestions) {
	iconQuestions.forEach(iconQuestion => {
		iconQuestionBody(iconQuestion);
		iconQuestion.addEventListener('click', setSpollersAction)
	});
}
function iconQuestionBody(iconQuestion) {
	if (!iconQuestion.classList.contains('_active')) {
		iconQuestion.lastElementChild.hidden = true;
	}
}
function setSpollersAction(e) {
	const el = e.target;
	const spollerBlock = el.closest('.question');
	if (!spollerBlock.querySelectorAll('._slide').length) {
		if (el.classList.contains('question__icon')) {
			el.classList.toggle('_active');
			el.parentNode.classList.toggle('_active');
			spollerBlock.firstElementChild.classList.remove('_active');
			_slideToggle(spollerBlock.lastElementChild, 500);
		} if (el.classList.contains('question__title')) {
			spollerBlock.firstElementChild.classList.toggle('_active');
			el.parentNode.classList.toggle('_active');
			_slideToggle(spollerBlock.lastElementChild, 500);
		} if (el.classList.contains('question__text')) {
			el.parentNode.classList.remove('_active');
			el.previousElementSibling.classList.remove('_active');
			spollerBlock.firstElementChild.classList.remove('_active');
			_slideToggle(spollerBlock.lastElementChild, 500);
		} else {
			el.classList.toggle('_active');
			spollerBlock.firstElementChild.nextElementSibling.classList.toggle('_active');
			if (el.firstElementChild != null) {
				el.firstElementChild.classList.toggle('_active');
			}
			_slideToggle(spollerBlock.lastElementChild, 500);
		}
	}
	// e.preventDefault();
}
// function hideSpollerBody(spollerBlock) {
// 	const spollerActiveTitle = spollerBlock.querySelector('.question__title._active');
// 	if (spollerActiveTitle) {
// 		spollerActiveTitle.classList.remove('_active');
// 		_slideUp(spollerActiveTitle.nextElementSibling, 500);
// 	}
// }
let _slideUp = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		target.style.transitionProperty = 'height,margin,padding';
		target.style.transitionDuration = duration + "ms";
		target.style.height = target.offsetHeight + 'px';
		target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		window.setTimeout(() => {
			target.hidden = true;
			target.style.removeProperty('height');
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
}
let _slideDown = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (target.hidden) {
			target.hidden = false;
		}
		let height = target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		target.offsetHeight;
		target.style.transitionProperty = 'height,margin,padding';
		target.style.transitionDuration = duration + "ms";
		target.style.height = height + 'px';
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		window.setTimeout(() => {
			target.style.removeProperty('height');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
		}, duration);
	}
}
let _slideToggle = (target, duration = 500) => {
	if (target.hidden) {
		return _slideDown(target, duration);
	} else {
		return _slideUp(target, duration);
	}
}
//прокрутка пунктов меню
const barf = document.querySelector('.barf');
const barfX = document.querySelector('.barf_scroll');
const rations = document.querySelector('.rations');
const rationsX = document.querySelectorAll('.rations_scroll');
const causes = document.querySelector('.causes');
const causesX = document.querySelector('.causes_scroll');
const aboutUs = document.querySelector('.about-us');
const aboutUsX = document.querySelector('.about-us_scroll');
const receiving = document.querySelector('.receiving');
const receivingX = document.querySelector('.receiving_scroll');
const questions = document.querySelector('.questions');
const questionsX = document.querySelector('.questions_scroll');
const contacts = document.querySelector('.contacts');
const contactsX = document.querySelector('.contacts_scroll');
if (aboutUsX != null) {
	aboutUsX.addEventListener('click', () => scrollToBlock(aboutUs));
};
if (receivingX != null) {
	receivingX.addEventListener('click', () => scrollToBlock(receiving));
};
if (questionsX != null) {
	questionsX.addEventListener("click", () => scrollToBlock(questions));
};
if (contactsX != null) {
	contactsX.addEventListener('click', () => scrollToBlock(contacts));
};
if (barfX != null) {
	barfX.addEventListener('click', () => scrollToBlock(barf));
};
if (rationsX.length > 0) {
	for (let index = 0; index < rationsX.length; index++) {
		rationsX[index].addEventListener('click', () => scrollToBlock(rations));
	}
};
if (causesX != null) {
	causesX.addEventListener('click', () => scrollToBlock(causes));
};
//Фиксированная шапка после прокрутки первого блока
const menu = document.querySelector('.menu');
const header = document.querySelector('.header');
const first = document.querySelector('.header-page');
if (iconMenu != null || menu != null || header != null || first != null) {
	window.addEventListener('scroll', () => {
		const firstHeight = first.offsetHeight;
		let scrollDistans = window.scrollY;
		if ((scrollDistans + 2) > firstHeight) {
			header.classList.add('_fix');
			menu.classList.add('_fix');
			iconMenu.classList.add('_fix');
		} else {
			header.classList.remove('_fix');
			menu.classList.remove('_fix');
			iconMenu.classList.remove('_fix');
		}
	});
}
//анимация при скролле
const animItems = document.querySelectorAll('._anim-items');//этот класс добавляется к анимируемым объектам
if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight; //высота объекта
			const animItemoffset = offset(animItem).top; //позиция объекта относительно верха
			const animStart = 4; //регулирует момент старта анимации, в данном случае при скролле 1/4 от высоты объекта

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((scrollY > animItemoffset - animItemPoint) && scrollY < (animItemoffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) { //этот класс для того, чтобы не запускать анимацию повторно и не убирать класс _active
					animItem.classList.remove('_active');
				}
			}
		}
	}
	setTimeout(() => { //Если есть анимации на верхнем блоке, она покакжется без скролла через 0.3 сек
		animOnScroll();
	}, 300);
}
//Popups
//у попапа должен быть id с его названием, а у кнопки, по которой он открывается href='#{название поп-апа}'
let popupLink = document.querySelectorAll('._popup-link');//этот класс добавляется ко всем кнопкам, на которых открывается поп-ап
const lockPadding = document.querySelectorAll('.lock-padding'); //Этот класс добавляется к фиксированным объектам, например к шапке
if (popupLink.length > 0) {
	for (let index = 0; index < popupLink.length; index++) {
		const el = popupLink[index];
		el.addEventListener('click', function (e) {
			let popupName = el.getAttribute('href').replace('#', '');
			let curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		})
	}
}
let popupCloseIcon = document.querySelectorAll('.popup__close');//этот класс добавляется для крестика, по которому поп-ап закрывается
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			e.stopPropagation();
			if (menuBody.classList.contains('_active')) {
				popupClose(el.closest('.popup'), false);
			} else {
				popupClose(el.closest('.popup'));
			}
			e.preventDefault();
		})
	}
}
document.addEventListener('keydown', function (e) {
	if (e.code === 'Escape') {
		const popupActive = document.querySelector('.popup._active');
		if (menuBody.classList.contains('_active')) {
			popupClose(popupActive, false);
		} else {
			popupClose(popupActive);
		}
	}
});
//мини попапы
let popupLinkMini = document.querySelectorAll('._popup-link-mini');
if (popupLinkMini.length > 0) {
	for (let index = 0; index < popupLinkMini.length; index++) {
		const el = popupLinkMini[index];
		el.addEventListener('click', function (e) {
			let popupName = el.getAttribute('href').replace('#', '');
			let curentPopup = document.getElementById(popupName);
			popupOpenMini(curentPopup);
			e.preventDefault();
		})
	}
}
function popupOpenMini(curentPopup) { //В скобках попап, который надо открыть (найти его можно по айди)
	if (curentPopup && unlock) {
		let activePopup = document.querySelector('.popup-mini._active');
		if (activePopup) {
			popupCloseMini(activePopup, false);
		}
		curentPopup.classList.add('_active');
		curentPopup.addEventListener("click", function (e) {
			if (e.target.closest('.popup-mini__close')) {
				e.stopPropagation();
				e.preventDefault();
				popupCloseMini(e.target.closest('.popup-mini'));
			} else if (e.target.closest('.popup-mini')) {
				e.stopPropagation();
			}
		});
		setTimeout(popupCloseMini, 7000, curentPopup);
	}
}
function popupCloseMini(item) { //в скобках поп-ап, который надо закрыть и надо ли разблокировать прокрутку
	if (unlock) {
		item.classList.remove('_active');
	}
}
//*< Функции>==========================================================================================
//Закрывает меню бургер
function menu_close() {
	iconMenu.classList.remove("_active");
	menuBody.classList.remove("_active");
	bodyUnLock();
}
//Функция считает и выводит стоимость заказа
function priceFunc() {
	//коллекция всех опшинов
	const gramOptions = gramSelect.children;
	for (let index = 0; index < gramOptions.length; index++) {
		// перебираем опшины и находим выбранный
		if (gramOptions[index].value == gramSelect.value) {
			// у выбранного опшина берем значение data атрибута (в нем стоимость) и умножаем на кол-во
			price = +(gramOptions[index].dataset.price) * +(arrowInput.value);
			finPrice.innerHTML = price;
		}
	}
}
// Функции для перемещения лейблов у тегов форм
function addAnEvent(elem) {
	elem.firstElementChild.addEventListener('focus', function () {
		formAddClass(elem)
	});
	elem.firstElementChild.addEventListener('blur', function () {
		formRemoveClass(elem)
	});
}
function formAddClass(elem) {
	elem.classList.add('_active');
}
function formRemoveClass(elem) {
	const elemChildValue = elem.firstElementChild.value;
	if (elemChildValue == '') {
		elem.classList.remove('_active');
	}
}
//Прокрутка до блока при нажатии на кнопку
//Пример применения
// const questionsX = document.querySelector('.questions_scroll');
// const questions = document.querySelector('.questions');
// if (questionsX != null) {
// 	questionsX.addEventListener('click', () => scrollToBlock(questions));
// };
function scrollToBlock(block) { //в скобки передаем блок, до которого надо докрутить
	let getTop = block.getBoundingClientRect().top;
	let getTopDocument = getTop + window.scrollY;
	window.scrollTo({
		top: getTopDocument,
		left: 0,
		behavior: "smooth",
	});
};
//эта функция точно узнает местоположение объекта.Можно получить значение сверху и слева
function offset(el) { //в скобках объект, чье местоположение нужно
	const rect = el.getBoundingClientRect(),
		scrollLeft = window.scrollX || document.documentElement.scrollLeft,
		scrollTop = window.scrollY || document.documentElement.scrollTop;
	return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
//Открывает поп-ап
function popupOpen(curentPopup) { //В скобках попап, который надо открыть (найти его можно по айди)
	if (curentPopup && unlock) {
		let activePopup = document.querySelector('.popup._active');
		if (activePopup) {
			popupClose(activePopup, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('_active');
		curentPopup.addEventListener("click", function (e) {
			if (!e.target.closest('.popup__content')) {
				e.stopPropagation();
				if (menuBody.classList.contains('_active')) {
					popupClose(e.target.closest('.popup'), false);
				} else {
					popupClose(e.target.closest('.popup'));
				}
			}
		});
	}
}
//Закрывает поп-ап
function popupClose(item, doUnlock = true) { //в скобках поп-ап, который надо закрыть и надо ли разблокировать прокрутку
	if (unlock) {
		item.classList.remove('_active');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}
//Блокирует прокрутку
function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('_lock')

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, 500); //Время, в течении которого нельзя повторно открыть поп-ап, обычно равен времени анимации
}
//Разблокировывает прокрутку
function bodyUnLock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('_lock')
	}, 200);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, 500); //Время, в течении которого нельзя повторно открыть поп-ап, обычно равен времени анимации
}
//Ставит картинку как фон
function ibg() {
	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}
ibg();
//*</ Функции>==========================================================================================
