import { connect } from 'react-redux';
import TelaPrincipal from './TelaPrincipal';
import { delContato } from '../reducer/Acoes';

const mapStateToProps = state => {
	return {
		contatos: state.contatos,
	};
}

const mapDispatchToProps = dispatch => {
	return {
		removerContato: id => dispatch(delContato(id)),
	};
}

const TelaPrincipalVisivel = connect(mapStateToProps, mapDispatchToProps)(TelaPrincipal);

export default TelaPrincipalVisivel;