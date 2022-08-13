
import './styles.css';
import logo_prefeitura from '../../../public/assets/img/logo-smtr-rio.png';

export default function Header() {
	return (
        <div className='container p-2'>
            <img src={logo_prefeitura} alt="Logo da prefeitura do Rio de Janeiro departamento de trânsito" />
        </div>
    );
}