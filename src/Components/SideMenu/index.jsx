import * as S from "./styles";
import {AiFillHome, AiFillPlaySquare, AiFillVideoCamera} from "react-icons/ai"
import {FiSettings} from "react-icons/fi"
import {FaUserFriends, FaBars} from "react-icons/fa"
import {BiLogOutCircle} from "react-icons/bi"
import {NavLink} from 'react-router-dom'



export function SideMenu({children}) {

  

  const menuItem = [{
    path:"/callofduty",
    name:"Home",
    icon:<AiFillHome/>
  },
  {
    path:"/posts",
    name:"Publicar",
    icon:<AiFillPlaySquare/>
  },
  {
    path:"/videos",
    name:"Videos",
    icon:<AiFillVideoCamera/>
  },
  {
    path:"/amigos",
    name:"Amigos",
    icon:<FaUserFriends/>
  },

  {
    path:"/config",
    name:"Configurações",
    icon:<FiSettings/>
  },
  {
    path:"/login",
    name:"Sair",
    icon:<BiLogOutCircle/>
  },
]
  return (
    <>
      <S.Container>
        <div className="sidebar">
          <div className="top_section">
             <h1 className="logo">Insta<span>shooters</span></h1>
             </div>
             {menuItem.map((item,index) => (
              <NavLink to={item.path} key={index} className="link" activeclassName="active">
                <div className="icon">{item.icon}</div>
                <div className="link_text">{item.name}</div>
              </NavLink>
             ))}
      
          <main>{children}</main>
        </div>
      </S.Container>
    </>
  );
}
