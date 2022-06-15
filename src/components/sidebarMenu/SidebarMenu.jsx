import './sidebarMenu.scss';

const Menu = (props) => {
  return (
    <>
      <div className="menu">
        <h3 className="title">{props.title}</h3>

        <ul className="list">
          <li className="item active">
            {props.item1Icon}
            {props.item1}
          </li>
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
