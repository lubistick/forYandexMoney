const MyForm = {

	validate() {
		let isValid = true;
		let errorFields = [];
		let {fio, email, phone} = this.getData();
		fio   = fio.trim();
		email = email.trim();
		phone = phone.trim();

		// дефисы для двойной фамилии
		let fioRegexp = /^[a-zа-яё\-]+\s+[a-zа-яё\-]+\s+[a-zа-яё\-]+$/i;
		if (fioRegexp.test(fio) === false) {
			errorFields.push('fio');
		}

		// надеюсь суть ТЗ не в том, чтобы написать идеальную проверку email и регулярку на 1000 строк кода
		let emailRegexp = /^[a-z0-9]+[a-z0-9._\-]*[a-z0-9]*@ya\.ru|yandex\.ru|yandex\.ua|yandex\.by|yandex\.kz|yandex\.com$/i;
		if (emailRegexp.test(email) === false) {
			errorFields.push('email');
		}

		let phoneRegexp = /^\+(7)\((\d{3})\)(\d{3})-(\d{2})-(\d{2})$/;
		let arMatchPhone = phone.match(phoneRegexp);
		if (arMatchPhone === null) {
			errorFields.push('phone');
		} else {
			let phoneStr = '';
			for (let i = 1; i <= 5; i++) {
				phoneStr += arMatchPhone[i];
			}
			let sumPhoneNum = 0;
			for (let i = 0; i < phoneStr.length; i++) {
				sumPhoneNum += Number(phoneStr[i]);
			}
			if (sumPhoneNum > 30) {
				errorFields.push('phone');
			}
		}

		if (errorFields.length) {
			isValid = false;
		}

		return {
			isValid: isValid,
			errorFields: errorFields,
		};
	},

	getData() {
		let form  = document.querySelector('#myForm');
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
		let valid = this.validate();
		let formData = this.getData();
		for (let key in formData) {
			if (valid.errorFields.indexOf(key) !== -1) {
				document.querySelector(`#${ key }`).classList.add('error');
			} else {
				document.querySelector(`#${ key }`).classList.remove('error');
			}
		}
		if (!valid.errorFields.length) {
			document.querySelector('#submitButton').disabled = true;

			let xhr = new XMLHttpRequest();
			xhr.open(
				'POST',
				document.querySelector('#myForm').action,
				true
			);
			xhr.setRequestHeader(
				'Content-type',
				'application/x-www-form-urlencoded'
			);
			xhr.send(
				'&fio='   + formData.fio   +
				'&email=' + formData.email +
				'&phone=' + formData.phone
			);
			xhr.onreadystatechange = () => {
				if (xhr.readyState === 4) {
					let res = JSON.parse(xhr.response);
					switch (res.status) {
						case 'success':
							console.log('success');
							break;

						case 'error':
							console.log('error');
							break;

						case 'progress':
							console.log('progress');
					}
				}
			}
		}
	},
};

export default MyForm;
