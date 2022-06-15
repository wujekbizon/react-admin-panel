import './sidebar.scss';
import SidebarMenu from '../sidebarMenu/SidebarMenu';
import LineStyleOutlinedIcon from '@mui/icons-material/LineStyleOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ReportIcon from '@mui/icons-material/Report';
import BarChartIcon from '@mui/icons-material/BarChart';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="wrapper">
        <SidebarMenu
          title="Dashboard"
          item1={'Home'}
          item1Icon={<LineStyleOutlinedIcon className="sidebarIcon" />}
          item2={'Analytics'}
          item2Icon={<TimelineOutlinedIcon className="sidebarIcon" />}
          item3={'Sales'}
          item3Icon={<TrendingUpOutlinedIcon className="sidebarIcon" />}
        />
        <SidebarMenu
          title="Quick Menu"
          item1={'Users'}
          item1Icon={<PersonOutlineOutlinedIcon className="sidebarIcon" />}
          item2={'Products'}
          item2Icon={<CategoryOutlinedIcon className="sidebarIcon" />}
          item3={'Transactions'}
          item3Icon={<AttachMoneyOutlinedIcon className="sidebarIcon" />}
          item4={'Reports'}
          item4Icon={<BarChartIcon className="sidebarIcon" />}
        />
        <SidebarMenu
          title="Notifications"
          item1={'Mail'}
          item1Icon={<MailOutlinedIcon className="sidebarIcon" />}
          item2={'Feedback'}
          item2Icon={<DynamicFeedOutlinedIcon className="sidebarIcon" />}
          item3={'Messages'}
          item3Icon={<ChatBubbleOutlinedIcon className="sidebarIcon" />}
        />
        <SidebarMenu
          title="Staff"
          item1={'Manage'}
          item1Icon={<WorkOutlineOutlinedIcon className="sidebarIcon" />}
          item2={'Analytics'}
          item2Icon={<TimelineOutlinedIcon className="sidebarIcon" />}
          item3={'Reports'}
          item3Icon={<ReportIcon className="sidebarIcon" />}
        />
      </div>
    </div>
  );
};

export default Sidebar;
