function UserGreeting(props) {
    const loginStatus = props.isLoggedIn ? true : false;
    const welcomeMessage = <h2 className="welcome-promt">
                                Welcome {props.userName ? props.userName : "Guest"}
                            </h2>;
    const errorMessage =  <h2 className="login-error">
                                Please Login to continue
                          </h2>;
    return(
        <div>
            {loginStatus ? 
                welcomeMessage : errorMessage 
            }
        </div>
    ) 
}

export default UserGreeting;