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
  faBuilding,
  faBuildingFlag,
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
        { title: "DashBoard", path: "/" },
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
      title: "College Management",
      icon: <FontAwesomeIcon icon={faBarChart} />,

      drop:[

        {title: "College manage", path: "/college-manage"  },
       

      ]
     
    },
   
{
      title: "Education",
      icon: <FontAwesomeIcon icon={faPieChart} />,
      drop: [
        { title: "Board", path: "/Board"   },

        { title: "Course", path: "/Course" },

        {title: "CollegeList", path: "/course-list"  },
      ],
    },

    {
      title: "Authentication",
      icon: <FontAwesomeIcon icon={faPieChart} />,
      drop: [
        { title: "Login", path: "/login"   },
    
        { title: "SignUp", path: "/sign-up" },
        { title: "forget", path: "/forget" },
      ],
    },
  

    {
      title: "CRM",
      icon: <FontAwesomeIcon icon={faPhone} />,
      drop: [
        { title: "College", path: "/ecommerce" },
        { title: "CRM", path: "/crm" },
        { title: "Project Management", path: "/project_management" },
        { title: "Social", path: "/social" },
        { title: "Travel Agency", path: "/travel_agency" },
      ],
    },
   
    {
      title: "Project Management",
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
      icon: <FontAwesomeIcon icon={faMailBulk} />,
    },
    {
      title: "Events",
      icon: <FontAwesomeIcon icon={faBookmark} />,
    },
    {
      title: "Kanban",
      icon: <FontAwesomeIcon icon={faBarChart} />,
    },
    {
      title: "Social",
      icon: <FontAwesomeIcon icon={faNetworkWired} />,
    },
    {
      title: "Gallary",
      icon: <FontAwesomeIcon icon={faPhotoFilm} />,
    },
    {
      title: "File Manager",
      icon: <FontAwesomeIcon icon={faFileAlt} />,
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
                  <Link to={item.path}><span className="icon">{item.icon}</span> {item.title}</Link>
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
                  transition: opened === index ? "all 500ms ease-in, opacity 0.5 ease-in" : "all 500ms ease-out, opacity 0.5 ease-out"
}}>
                {item.drop && opened === index && (
                  <div className="dropdown">
                    {item.drop.map((dropItem, dropIndex) => (
                      <Link key={dropIndex} to={dropItem.path} ><li key={dropIndex}>{dropItem.title}</li></Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </ul>

      </div>
    </div>
  );
};
export default Sidebar;