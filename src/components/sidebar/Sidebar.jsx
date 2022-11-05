import "./Sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import InsertChartOutlinedSharpIcon from '@mui/icons-material/InsertChartOutlinedSharp';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import FormatIndentIncreaseOutlinedIcon from '@mui/icons-material/FormatIndentIncreaseOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <span className="logo">
          Lester M
        </span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <PersonOutlineOutlinedIcon className="icon"  />
            <span>Users</span>
          </li>
          <li>
            <StoreOutlinedIcon className="icon"  />
            <span>Products</span>
          </li>
          <li>
            <CreditCardIcon className="icon"  />
            <span>Orders</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <InsertChartOutlinedSharpIcon className="icon"  />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveOutlinedIcon className="icon"  />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <MonitorHeartOutlinedIcon className="icon"  />
            <span>System Health</span>
          </li>
          <li>
            <FormatIndentIncreaseOutlinedIcon className="icon"  />
            <span>Logs</span>
          </li>
          <li>
            <SettingsOutlinedIcon className="icon"  />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon"  />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppOutlinedIcon className="icon"  />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}
