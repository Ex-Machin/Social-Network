import { connect } from "react-redux";
import { compose } from "redux";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { initialStateType, actions } from "../../redux/dialogsReducer";
import { AppStateType } from "../../redux/redux-store";
import Dialogs from "./Dialogs";

type MapStatePropsType = {
  dialogsPage: initialStateType
}

type MapDispatchPropsType = {
  sendMessage: (newMessageBody: string) => void
}

type OwnPropsType = {

}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let MapDispatchProps = (dispatch: any) => {
  return {
    sendMessage: (newMessageBody: any) => {
      dispatch(actions.sendMessageCreator(newMessageBody))
    }
  }
}

export default compose(
  WithAuthRedirect,
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, MapDispatchProps)
)(Dialogs);
