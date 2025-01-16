const firstName = 'Gabriel';
const lastName = 'Yorramn';
const suffix = 'Gabriel Yorramn';

const BaseData = {
	firstName,
	lastName,
	suffix,
	get fullName() {
		return `${firstName} ${lastName}`;
	}
};

export default BaseData;
