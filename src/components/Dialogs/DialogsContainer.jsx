import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import {
  sendMessage,
  updateNewMessageBody,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const AuthRedirectComponent = WithAuthRedirect(Dialogs);


const DialogsContainer = connect(mapStateToProps, {
  updateNewMessageBody,
  sendMessage,
})(AuthRedirectComponent);

export default DialogsContainer;
