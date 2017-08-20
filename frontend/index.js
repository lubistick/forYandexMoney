'use strict';

import './main.less';
import MyForm from './lib/myform.js';

document.querySelector('#submitButton').onclick = (event) => {
	event.preventDefault();
	MyForm.submit();
};
