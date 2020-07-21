import { connect } from "react-redux";
import { logOut, authorize, resetPassword, passwordResetFinish } from "../../redux/loginPageReducer";
import { LoginSection } from "./LoginSection";
import { AppStateType } from "../../redux/store";


const mapStateToProps = (state: AppStateType) => {
    return {
        isAuthorized: state.loginPage.isAuthorized,
        isPreloaderShown: state.loginPage.isPreloaderShown,
        isPasswordResetConfirmed: state.loginPage.isPasswordResetConfirmed
    }
}

export const LoginSectionContainer = connect(mapStateToProps, { logOut, authorize, resetPassword, passwordResetFinish })(LoginSection);

