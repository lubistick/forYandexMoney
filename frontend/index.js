'use strict';

import './main.less';
import MyForm from './lib/myform.js';

// как я понял, метод setData нужен для автозаполнения формы
MyForm.setData({
	'fio': 'Курза Алексей Сергеевич',
	'email': 'forwebmasterak@yandex.ru',
	'phone': '+7(965)011-10-00',
});

document.querySelector('#submitButton').onclick = (event) => {
	event.preventDefault();
	MyForm.submit();
};
