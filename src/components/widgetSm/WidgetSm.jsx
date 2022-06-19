import './widgetSm.scss';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { Link } from 'react-router-dom';

const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <h3 className="title">New Join Members</h3>
      <ul className="list">
        <li className="listItem">
          <img
            src="https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
            alt=""
            className="img"
          />
          <div className="user">
            <span className="userName">Greg Wolf</span>
            <span className="userTitle">Software Engineer</span>
          </div>
          <Link to="/user/1" className="link">
            <button className="button">
              <VisibilityOutlinedIcon className="icon" />
              Display
            </button>
          </Link>
        </li>
        <li className="listItem">
          <img
            src="https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
            alt=""
            className="img"
          />
          <div className="user">
            <span className="userName">Greg Wolf</span>
            <span className="userTitle">Software Engineer</span>
          </div>
          <Link to="/user/2" className="link">
            <button className="button">
              <VisibilityOutlinedIcon className="icon" />
              Display
            </button>
          </Link>
        </li>
        <li className="listItem">
          <img
            src="https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
            alt=""
            className="img"
          />
          <div className="user">
            <span className="userName">Greg Wolf</span>
            <span className="userTitle">Software Engineer</span>
          </div>
          <Link to="/user/3" className="link">
            <button className="button">
              <VisibilityOutlinedIcon className="icon" />
              Display
            </button>
          </Link>
        </li>
        <li className="listItem">
          <img
            src="https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
            alt=""
            className="img"
          />
          <div className="user">
            <span className="userName">Greg Wolf</span>
            <span className="userTitle">Software Engineer</span>
          </div>
          <Link to="/user/4" className="link">
            <button className="button">
              <VisibilityOutlinedIcon className="icon" />
              Display
            </button>
          </Link>
        </li>
        <li className="listItem">
          <img
            src="https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
            alt=""
            className="img"
          />
          <div className="user">
            <span className="userName">Greg Wolf</span>
            <span className="userTitle">Software Engineer</span>
          </div>
          <Link to="/user/5" className="link">
            <button className="button">
              <VisibilityOutlinedIcon className="icon" />
              Display
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
