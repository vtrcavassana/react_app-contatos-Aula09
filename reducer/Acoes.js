const CONTATO = {
	ADD_CONTATO: 'ADD_CONTATO',
	DEL_CONTATO: 'DEL_CONTATO',
	SAV_CONTATO: 'SAV_CONTATO'
};

const ID = {
	NXT_ID: 'NXT_ID',
};

const addContato = (contato) => {
	return {type: CONTATO.ADD_CONTATO, contato};
}

const delContato = (id) => {
	return {type: CONTATO.DEL_CONTATO, id};
}

const savContato = (contato) => {
	return {type: CONTATO.SAV_CONTATO, contato};
}

const nextId = () => {
	return {type: ID.NXT_ID};
}

export {
	CONTATO,
	ID,	
	addContato,
	delContato,
	savContato,
	nextId
};