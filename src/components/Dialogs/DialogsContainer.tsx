import { connect } from "react-redux";
import { compose } from "redux";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { initialStateType, actions } from "../../redux/dialogsReducer";
import { AppStateType } from "../../redux/redux-store";
import Dialogs from "./Dialogs";

type MapStatePropsType = {
  dialogsPage: initialStateType
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

export default compose<React.ComponentType>(
  WithAuthRedirect,
  connect(mapStateToProps, {...actions})
)(Dialogs);
