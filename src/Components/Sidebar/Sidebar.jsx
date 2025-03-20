import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarChart,
  faBell,
  faCartShopping,
  faCompass,
  faFile,
  faGlobe,
  faTag,
  faMailBulk,
  faMessage,
  faNetworkWired,
  faPhone,
  faPhotoFilm,
  faPieChart,
  faQuestionCircle,
  faSuitcase,
  faPeopleLine,
  faClock,
  faExclamationTriangle,
  faSortDown,
  faBuildingFlag,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export const Sidebar = () => {
  const [opened, setOpened] = useState(null);

  const toggle = (index) => {
    setOpened(opened === index ? null : index);
  };

  const sideItem1 = [
    { title: "Home", icon: faPieChart, path: "/home" },
    { title: "Ecommerce", icon: faCartShopping, path: "/ecommerce" },
    { title: "Colleges", icon: faBuildingFlag, path: "/colleges" },
    { title: "CRM", icon: faPhone, path: "/crm" },
    { title: "Project Management", icon: faFile, path: "/project_management" },
    { title: "Travel Agency", icon: faSuitcase, path: "/travel_agency" },
    { title: "Chat", icon: faMessage, path: "/chat" },
    { title: "Email", icon: faMailBulk, path: "/email" },
    { title: "Events", icon: faBell, path: "/events" },
    { title: "Kanban", icon: faBarChart, path: "/kanban" },
    { title: "Social", icon: faNetworkWired, path: "/social" },
    { title: "Gallery", icon: faPhotoFilm, path: "/gallery" },
  ];

  const sideItem2 = [
    { title: "Starter", icon: faCompass, path: "/starter" },
    { title: "FAQ", icon: faQuestionCircle, path: "/faq" },
    { title: "Landing", icon: faGlobe, path: "/landing" },
    { title: "Pricing", icon: faTag, path: "/pricing" },
    { title: "Members", icon: faPeopleLine, path: "/members" },
    { title: "Timeline", icon: faClock, path: "/timeline" },
    { title: "Errors", icon: faExclamationTriangle, path: "/errors" },
  ];

  return (
    <div id="side">
      <div id="Sidebar">
        <ul>
          {sideItem1.map((item, index) => (
            <li key={index} className="sideItem">
              <Link to={item.path} className="sidebar-item">
                <FontAwesomeIcon icon={item.icon} className="icon" />
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <ul>
          <span id="spanSidebar">Pages</span>
          {sideItem2.map((item, index) => (
            <li key={index} className="sideItem">
              <Link to={item.path} className="sidebar-item">
                <FontAwesomeIcon icon={item.icon} className="icon" />
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
