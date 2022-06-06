import { Fragment } from "react";

import {Outlet} from "react-router-dom";

import { Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"; 

import { useContext } from "react";

import { UserContext } from "../../contexts/user.context";

import "./navigation.styles.scss";

import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  return (
     <Fragment>
       <div className="navigation">
       <Link className="logo-container" to="/">
         <CrwnLogo className="Logo"/>
       </Link>
         <div className="nav-links-container">
           <Link className="nav-link" to='/shop'>
             <div>SHOP</div>
           </Link>

           {currentUser ? (
               <span className="nav-link" onClick={signOutUser}>
                 {""}
                 SIGN OUT{""}
               </span>
             )  :  (
             <Link className="nav-link" to="/auth">
             <div>SIGN IN</div>
           </Link>
             )}
         </div>
       </div>
       <Outlet/>
     </Fragment>
   );
};

export default Navigation;
