import React, { useEffect, useState } from "react";
import update from 'immutability-helper';
// import { connect } from "react-redux";
// import {bindActionCreators} from 'redux';
// import * as authActions from '../../actions/authActions';
// import { isLoaded } from 'react-redux-firebase'
import { useHistory } from "react-router";
import { signin } from "../../redux/actions/authActions";
import { connect } from "react-redux";

function Login(props) {
  let history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    if (props.auth?.uid) {
      history.push('/')
    }
  }, [props])

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }
  const onSubmit = async () => {
    let obj = { email: email, password: password }
    await props.signIn(obj)
    if (props.authMine.error === "") {
      history.push("/");
    }
  }


  return (
    <>
      {/* If we visit the login being signed in we will be unable to see the form */}
      <>
        {props.authMine.loading ? <h4 className="msgRes" style={{ marginTop:"30%",textAlign:"center" }}>Patiently Wait...we are logging you in</h4> :
          <div className="container med contact">
            <div className="section funnel-section">
              <div className="form-card">
                <h2 className="form-heading center">Enter Login details</h2>
                <div className="form-section">
                  <div className="input-group full"><label>Email</label>
                    <div className="effect"><input type="text" name="email" value={email || ''} onChange={handleEmail} /><span></span>
                    </div>
                  </div>

                  <div className="input-group full"><label>Password</label>
                    <div className="effect"><input type="password" name="password" value={password || ''} onChange={handlePassword} /><span></span>
                    </div>
                  </div>
                  {props.authMine.error ? <div className="input-group full">
                    <span className="error-message" >{props.authMine.error}</span>
                  </div> : <></>}
                  <div className="form-buttons">
                    <button onClick={onSubmit} className="btn hvr-float-shadow" type='button'>Login</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        }
      </>

    </>
  );
}

const mapStateToProps = (state) => {
  return {
    authMine: state.auth,
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (userData) => dispatch(signin(userData))
  }
}





export default connect(mapStateToProps, mapDispatchToProps)(Login)