const MyForm = {

	validate() {
		let isValid = true;
		let errorFields = [];

		// TODO валидация

		return {
			isValid: isValid,
			errorFields: errorFields,
		};
	},

	getData() {
		let form = document.querySelector('#myForm');
		let fio   = form.querySelector('#fio').value;
		let email = form.querySelector('#email').value;
		let phone = form.querySelector('#phone').value;
		return {
			fio,
			email,
			phone,
		};
	},

	setData() {

	},

	submit() {

	},
};

export default MyForm;
