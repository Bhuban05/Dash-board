import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarChart,
  faBell,
  faBook,
  faBookmark,
  faCartShopping,
  faCompass,
  faFile,
  faFileAlt,
  faGlobe,
  faTag,
  faMailBulk,
  faMailReply,
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
  faGreaterThan,
  faSortDown,
  faLessThan,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const [opened, setOpened] = useState(null);

  const toggle = (index) => {
    if (opened == index) {
      return setOpened(null);
    }
    setOpened(index);
  };

  const sideItem1 = [
    {
      title: "Home",
      icon: <FontAwesomeIcon icon={faPieChart} />,
      drop: [
        { title: "Ecommerce", path: "/ecommerce" },
        { title: "CRM", path: "/crm" },
        { title: "Project Management", path: "/project_management" },
        { title: "Social", path: "/social" },
        { title: "Travel Agency", path: "/travel_agency" },
      ],
    },
    {
      title: "Ecommerce",
      icon: <FontAwesomeIcon icon={faCartShopping} />,
      drop: [
        { title: "Ecommerce", path: "/ecommerce" },
        { title: "CRM", path: "/crm" },
        { title: "Project Management", path: "/project_management" },
        { title: "Social", path: "/social" },
        { title: "Travel Agency", path: "/travel_agency" },
      ],
    },
    {
      title: "CRM",
      path: "/crm",
      icon: <FontAwesomeIcon icon={faPhone} />,
      drop: [
        { title: "Ecommerce", path: "/ecommerce" },
        { title: "CRM", path: "/crm" },
        { title: "Project Management", path: "/project_management" },
        { title: "Social", path: "/social" },
        { title: "Travel Agency", path: "/travel_agency" },
      ],
    },
    {
      title: "Project Management",
      path: "/project_management",
      icon: <FontAwesomeIcon icon={faFile} />,
      drop: [
        { title: "Ecommerce", path: "/ecommerce" },
        { title: "CRM", path: "/crm" },
        { title: "Project Management", path: "/project_management" },
        { title: "Social", path: "/social" },
        { title: "Travel Agency", path: "/travel_agency" },
      ],
    },
    {
      title: "Travel Agency",
      path: "/travel_agency",
      icon: <FontAwesomeIcon icon={faSuitcase} />,
      drop: [
        { title: "Ecommerce", path: "/ecommerce" },
        { title: "CRM", path: "/crm" },
        { title: "Project Management", path: "/project_management" },
        { title: "Social", path: "/social" },
        { title: "Travel Agency", path: "/travel_agency" },
      ],
    },
    {
      title: "Chat",
      path: "/chat",
      icon: <FontAwesomeIcon icon={faMessage} />,
      drop: [
        { title: "Ecommerce", path: "/ecommerce" },
        { title: "CRM", path: "/crm" },
        { title: "Project Management", path: "/project_management" },
        { title: "Social", path: "/social" },
        { title: "Travel Agency", path: "/travel_agency" },
      ],
    },
    {
      title: "Email",
      path: "/email",
      icon: <FontAwesomeIcon icon={faMailBulk} />,
    },
    {
      title: "Events",
      path: "/events",
      icon: <FontAwesomeIcon icon={faBookmark} />,
    },
    {
      title: "Kanban",
      path: "/kanban",
      icon: <FontAwesomeIcon icon={faBarChart} />,
    },
    {
      title: "Social",
      path: "/social",
      icon: <FontAwesomeIcon icon={faNetworkWired} />,
    },
    {
      title: "Gallary",
      path: "/gallary",
      icon: <FontAwesomeIcon icon={faPhotoFilm} />,
    },
    {
      title: "File Manager",
      path: "/file_manager",
      icon: <FontAwesomeIcon icon={faFileAlt} />,
    },
  ];

  const sideItem2 = [
    {
      title: "Starter",
      path: "/starter",
      icon: <FontAwesomeIcon icon={faCompass} />,
    },
    {
      title: "Faq",
      path: "/faq",
      icon: <FontAwesomeIcon icon={faQuestionCircle} />,
    },
    {
      title: "Landing",
      path: "/landing",
      icon: <FontAwesomeIcon icon={faGlobe} />,
    },
    {
      title: "Pricing",
      path: "/pricing",
      icon: <FontAwesomeIcon icon={faTag} />,
    },
    {
      title: "Notification",
      path: "/notification",
      icon: <FontAwesomeIcon icon={faBell} />,
    },
    {
      title: "Members",
      path: "/members",
      icon: <FontAwesomeIcon icon={faPeopleLine} />,
    },
    {
      title: "Timeline",
      path: "/timeline",
      icon: <FontAwesomeIcon icon={faClock} />,
    },
    {
      title: "Errors",
      path: "/errors",
      icon: <FontAwesomeIcon icon={faExclamationTriangle} />,
    },
    {
      title: "Authentication",
      icon: <FontAwesomeIcon icon={faPieChart} />,
      drop: [
        { title: "Login", path: "/login"   },
    
        { title: "Signup", path: "/sign-up" },
      ],
    },
    {
      title: "Layouts",
      path: "/layouts",
      icon: <FontAwesomeIcon icon={faPieChart} />,
    },
  ];

  const sideItem3 = [
    {
      title: "Forms",
      path: "/forms",
      icon: <FontAwesomeIcon icon={faPieChart} />,
    },
    {
      title: "Icons",
      path: "/icons",
      icon: <FontAwesomeIcon icon={faPieChart} />,
    },
    {
      title: "Tables",
      path: "/tables",
      icon: <FontAwesomeIcon icon={faPieChart} />,
    },
    {
      title: "Echarts",
      path: "/echarts",
      icon: <FontAwesomeIcon icon={faPieChart} />,
    },
    {
      title: "Components",
      path: "/components",
      icon: <FontAwesomeIcon icon={faPieChart} />,
    },
    {
      title: "Utilities",
      path: "/utilities",
      icon: <FontAwesomeIcon icon={faPieChart} />,
    },
    {
      title: "Widgets",
      path: "/widgets",
      icon: <FontAwesomeIcon icon={faPieChart} />,
    },
    {
      title: "Multi Level",
      path: "/multi-level",
      icon: <FontAwesomeIcon icon={faPieChart} />,
    },
  ];

  return (
    <div id="side">
      <div id="Sidebar">
        <ul>
          {sideItem1.map((item, index) => (
            <div id="drop" key={index} className="sideItem">
              <div
                className="sidebar-item"
                onClick={() => item.drop && toggle(index)}
                >
                <div>
                  <span className="icon">{item.icon}</span> {item.title}
                </div>
                <div className="dropIcon">
                  {opened === index ? (
                    <FontAwesomeIcon id="arrowDown" icon={faSortDown} />
                  ) : (
                    <FontAwesomeIcon id="arrow" icon={faSortDown} />
                  )}
                </div>
              </div>
              <div className="drop" style={{
                  maxHeight: opened === index ? "200px" : "0px",
                  overflow: "hidden",
                  opacity: opened === index ? 1 : 0,
                  transition: "max-height 400ms ease-in-out, opacity 0.5s ease-in-out"
}}>
                {item.drop && opened === index && (
                  <div className="dropdown">
                    {item.drop.map((dropItem, dropIndex) => (
                      <li key={dropIndex}>{dropItem.title}</li>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </ul>

        <ul>
          <span id="spanSidebar">Pages</span>
          {sideItem2.map((item, index) => (
            <div key={index} className="sideItem">
              <div
                className="sidebar-item"
                onClick={() => item.drop && toggle(index)}
              >
                <div>
                  <span className="icon">{item.icon}</span> {item.title}
                </div>
                <div className="dropIcon">
                {opened === index ? (
                    <FontAwesomeIcon id="arrowDown" icon={faSortDown} />
                  ) : (
                    <FontAwesomeIcon id="arrow" icon={faSortDown} />
                  )}
                </div>
              </div>
              {item.drop && opened === index && (
                <div className="dropdown">
                  {item.drop.map((dropItem, dropIndex) => (
                    <li key={dropIndex}>{dropItem.title}</li>
                  ))}
                </div>
              )}
            </div>
          ))}
        </ul>

        <ul>
          <span id="spanSidebar">Module</span>
          {sideItem3.map((item, index) => (
            <div key={index} className="sideItem">
              <div
                className="sidebar-item"
                onClick={() => item.drop && toggle(index)}
              >
                <div>
                  <span className="icon">{item.icon}</span> {item.title}
                </div>
                <div className="dropIcon">
                {opened === index ? (
                    <FontAwesomeIcon id="arrowDown" icon={faSortDown} />
                  ) : (
                    <FontAwesomeIcon id="arrow" icon={faSortDown} />
                  )}
                </div>
              </div>
              {item.drop && opened === index && (
                <div className="dropdown">
                  {item.drop.map((dropItem, dropIndex) => (
                    <li key={dropIndex}>{dropItem.title}</li>
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
