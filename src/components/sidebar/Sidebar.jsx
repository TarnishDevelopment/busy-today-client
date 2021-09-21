import "./sidebar.css"
import {DateRangeRounded, PeopleOutlineRounded} from "@material-ui/icons"
import { Link } from "react-router-dom";

export default function Sidebar()
{
    return (
        <div className = "sidebar"> 
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Menu</h3>
                    <ul className="sidebarList">
                        <Link to = "/timetable">
                        <li className="sidebarListItem">
                            <DateRangeRounded className = "sidebarIcon"/>
                            Timetable
                        </li>
                        </Link>
                    </ul>
                    <ul className="sidebarList">
                    <Link to="/users" className="link">
                        <li className="sidebarListItem">
                            <PeopleOutlineRounded className = "sidebarIcon"/>
                            Users
                        </li>
                    </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}