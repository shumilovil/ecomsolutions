import { connect } from "react-redux";
import { logIn, logOut } from "../../redux/loginPage-reducer";
import { LoginSection } from "./LoginSection";
import { AppStateType } from "../../redux/store";


const mapStateToProps = (state: AppStateType) => {
    return ({
        isAuthorized: state.loginPage.isAuthorized
    })
}

export const LoginSectionContainer = connect(mapStateToProps, {logIn, logOut})(LoginSection);

