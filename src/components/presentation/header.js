import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../static/images/logo.png";
import { connect } from "react-redux";
import { isLoaded, isEmpty } from "react-redux-firebase";
import * as authActions from "../../redux/actions/authActions"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
function LoggesOut(props) {
  return (
    <ul className="dataNavin">
      <li className=" ">
        <NavLink className=" fs-2 btnv-1"  to="/register">
          Register
        </NavLink>
      </li>
      <li className="">
        <NavLink className=" fs-2 text-blue btnv-3" to="/login">
          Sign In
        </NavLink>
      </li>
    </ul>
  )
}

const Header = (props) => {
  const auth = props.auth;
  const handleLogOut = () => {
    props.signOut();
  }

  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbarRes">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img className='logo' src={logo}></img>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 optionRes">

            <div className="dataNav">
              {isLoaded(auth) && !isEmpty(auth) ? <>

                <li className="nav-item">
                  <NavLink className="fs-2" to="/">
                    Logged in as {auth.email}
                  </NavLink>
                </li>
                <li className="">
                  <button className="text-blue btnv-3 fs-2" onClick={handleLogOut}>
                    Signout
                  </button>
                </li>

              </> : <LoggesOut></LoggesOut>}
            </div>

            <div className="dataNav">
              <li className="">
                <NavLink className="fs-2" to="/resume-templates">
                  Resume Templates
                </NavLink>
              </li>
              <li className="">
                <NavLink className=" fs-2 btn-nvt-gm" to="/about-us">
                  About Us
                </NavLink>
              </li>
            </div>

          </ul>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(authActions.signout())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
