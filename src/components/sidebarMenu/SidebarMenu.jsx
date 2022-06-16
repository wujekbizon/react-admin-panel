import './sidebarMenu.scss';
import { Link } from 'react-router-dom';

const Menu = (props) => {
  return (
    <>
      <div className="menu">
        <h3 className="title">{props.title}</h3>

        <ul className="list">
          {props.item1 === 'Users' ? (
            <Link to="/users" style={{ textDecoration: 'none' }}>
              <li className={props.isActive ? 'item active' : 'item'}>
                {props.item1Icon}
                {props.item1}
              </li>
            </Link>
          ) : (
            <li className={props.isActive ? 'item active' : 'item'}>
              {props.item1Icon}
              {props.item1}
            </li>
          )}
          <li className="item">
            {props.item2Icon}
            {props.item2}
          </li>
          <li className="item">
            {props.item3Icon}
            {props.item3}
          </li>

          {props.item4 ? (
            <li className="item">
              {props.item4Icon}
              {props.item4}
            </li>
          ) : (
            ''
          )}
        </ul>
      </div>
    </>
  );
};

export default Menu;
