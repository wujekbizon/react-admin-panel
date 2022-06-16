import './user.scss';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import LocationSearchingOutlinedIcon from '@mui/icons-material/LocationSearchingOutlined';

const User = () => {
  return (
    <div className="user">
      <div className="titleContainer">
        <h1 className="title">Edit User</h1>
        <button className="addButton">Create</button>
      </div>
      <div className="userContainer">
        <div className="show">
          <div className="showTop">
            <img
              className="userImg"
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <div className="topTitle">
              <span className="name">Anna Becker</span>
              <span className="title">Software Engineer</span>
            </div>
          </div>
          <div className="showBottom">
            <span className="showTitle">Account Details</span>
            <div className="showInfo">
              <PermIdentityIcon className="showIcon" />
              <span className="infoTitle">annabeck99</span>
            </div>
            <div className="showInfo">
              <CalendarTodayIcon className="showIcon" />
              <span className="infoTitle">12.03 1993</span>
            </div>
            <span className="showTitle">Contact Details</span>
            <div className="showInfo">
              <PhoneAndroidIcon className="showIcon" />
              <span className="infoTitle">+1 123 456 67</span>
            </div>
            <div className="showInfo">
              <MailOutlinedIcon className="showIcon" />
              <span className="infoTitle">annabeck99@gmail.com</span>
            </div>
            <div className="showInfo">
              <LocationSearchingOutlinedIcon className="showIcon" />
              <span className="infoTitle">Linden New Jersey | USA</span>
            </div>
          </div>
        </div>
        <div className="update"></div>
      </div>
    </div>
  );
};

export default User;
