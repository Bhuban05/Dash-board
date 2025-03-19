import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPieChart,
  faCartShopping,
  faBuildingFlag,
  faPhone,
  faFile,
  faSuitcase,
  faMessage,
  faMailBulk,
  faBookmark,
  faBarChart,
  faNetworkWired,
  faPhotoFilm,
  faFileAlt,
  faCompass,
  faQuestionCircle,
  faGlobe,
  faTag,
  faBell,
  faPeopleLine,
  faClock,
  faExclamationTriangle,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export const Sidebar = () => {
  const [opened, setOpened] = useState(null);

  const toggle = (index) => {
    setOpened(opened === index ? null : index);
  };

  const menuItems = [
    {
      title: "Home",
      icon: faPieChart,
      drop: [
        { title: "Ecommerce", path: "/ecommerce" },
        { title: "CRM", path: "/crm" },
        { title: "Project Management", path: "/project_management" },
        { title: "Social", path: "/social" },
        { title: "Travel Agency", path: "/travel_agency" },
      ],
    },
    { title: "Ecommerce", icon: faCartShopping, path: "/ecommerce" },
    { title: "College", icon: faBuildingFlag, path: "/college" },
    { title: "CRM", icon: faPhone, path: "/crm" },
    { title: "Project Management", icon: faFile, path: "/project_management" },
    { title: "Travel Agency", icon: faSuitcase, path: "/travel_agency" },
    { title: "Chat", icon: faMessage, path: "/chat" },
    { title: "Email", icon: faMailBulk, path: "/email" },
    { title: "Events", icon: faBookmark, path: "/events" },
    { title: "Kanban", icon: faBarChart, path: "/kanban" },
    { title: "Social", icon: faNetworkWired, path: "/social" },
    { title: "Gallery", icon: faPhotoFilm, path: "/gallery" },
    { title: "File Manager", icon: faFileAlt, path: "/file_manager" },
  ];

  return (
    <div id="side">
      <div id="Sidebar">
        <ul>
          {menuItems.map((item, index) => (
            <div key={index} className="sideItem">
              <div
                className="sidebar-item"
                onClick={item.drop ? () => toggle(index) : undefined}
              >
                <div>
                  <FontAwesomeIcon icon={item.icon} className="icon" />
                  {item.title}
                </div>
                {item.drop && (
                  <FontAwesomeIcon
                    icon={faSortDown}
                    className={opened === index ? "arrowDown" : "arrow"}
                  />
                )}
              </div>
              {item.drop && (
                <div
                  className="drop"
                  style={{
                    maxHeight: opened === index ? "500px" : "0px",
                    overflow: "hidden",
                    opacity: opened === index ? 1 : 0,
                    transition: "max-height 0.4s ease-in-out, opacity 0.5s ease-in-out",
                  }}
                >
                  {item.drop.map((dropItem, dropIndex) => (
                    <Link to={dropItem.path} key={dropIndex}>
                      <li>{dropItem.title}</li>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
