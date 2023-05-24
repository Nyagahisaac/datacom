import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaUser } from "react-icons/fa";
import "./navbar.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../App/features/customerAuthSlice";
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const dispatch = useDispatch()
  const { isLogedIn } = useSelector(state => state.customerAuth)
  const { totalProduct } = useSelector(state => state.cart)


  const handleLogout = () => {
    dispatch(logout())
    setShowNav(!showNav)
  };

  return (
    <nav className="navBar shadow sticky-top">
     
         
      <div className=" d-md-flex justify-content-between  p-md-2">
          <Link className="h2 text-dark p-2" style={{alignContent:'flex-start'}} to={'/'}> DATACOM <img src="https://img.freepik.com/free-vector/letter-c-computer_1308-83159.jpg?size=626&ext=jpg" width="50" style={{borderRadius:'20px'}} alt=""/> </Link>
        <div className="d-flex justify-content-between align-items-center " style={{marginLeft:'50px'}}>
          <button
            className="d-md-none rounded btn btn-outline bg-white"
            onClick={() => setShowNav(!showNav)}
          >
            <FaBars />
          </button>
        </div>
        <div
          className={`navLinkContainer d-md-flex align-items-center decoration-none text-center mt-2 mt-md-0 py-3 py-md-0 ${
            showNav ? "showNav" : null
          }`}
        >
          <NavLink className="navLink" to={"/"} onClick={() => setShowNav(!showNav)} end>
            Home
          </NavLink>
          <NavLink className="navLink" to={"/products"} onClick={() => setShowNav(!showNav)}>
            Products
          </NavLink>
          <NavLink className="navLink cart-link" to={"/cart"} onClick={() => setShowNav(!showNav)}>
            <span><ShoppingCartRoundedIcon/></span>
            <span></span>
            <span className="total-product text-danger">{`${totalProduct}`}</span>
          </NavLink>
          <div className="ms-0 ms-md-3 mt-3 mt-md-0 ">
            { isLogedIn ? (
              <div className="dropdown">
                  <button className="btn btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  <FaUser />
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li>
                          <Link className="dropdown-item" to={'/profile'} onClick={() => setShowNav(!showNav)}>Profile</Link>
                      </li>
                      <li>
                          <Link className="dropdown-item" to={'/order'} onClick={() => setShowNav(!showNav)}>Order</Link>
                      </li>
                      <li>
                          <button className="dropdown-item" onClick={handleLogout} >Log out</button>
                      </li>
                  </ul>
              </div>

            ) : (
              <Link
               className="ms-0 ms-md-3 mt-3 mt-md-0 btn btn-sm btn-default"
               to={'/login'}
               onClick={() => setShowNav(!showNav)}
              >
                <PersonIcon fontSize="medium"/>
                <ArrowDropDownIcon />
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
