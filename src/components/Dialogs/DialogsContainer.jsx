import { connect } from "react-redux";
import { compose } from "redux";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { sendMessage, updateNewMessageBody } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

export default compose(
  WithAuthRedirect,
  connect(mapStateToProps, {
    updateNewMessageBody,
    sendMessage,
  })
)(Dialogs);
