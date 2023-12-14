import './Menu.css';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li className="active">
          <Link className="anchor" to="/ticked-dates">Datas marcadas</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
