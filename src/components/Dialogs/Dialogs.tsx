import React from "react";
import { InjectedFormProps, reduxForm } from "redux-form";
import { initialStateType } from "../../redux/dialogsReducer";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { createField, GetStringKeys, TextArea } from "../FormsControl/FormsControl";
import DialogItem from "./DialogItem/Dialog";
import s from "./Dialogs.module.css";
import Message from "./Messages/Messages";

type OwnPropsType = {
  dialogsPage: initialStateType
  sendMessage: (messageText: string) => void
}

const Dialogs: React.FC<OwnPropsType> = ({ dialogsPage, sendMessage }) => {

  const addNewMessage = (values: { newMessageBody: string }) => {
    sendMessage(values.newMessageBody);
  }
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsPage.dialogs.map((item) => {
          return <DialogItem key={item.id} name={item.name} path={item.id} />;
        })}
      </div>
      <div className={s.messages}>
        {dialogsPage.messages.map((item) => {
          return <Message messageContent={item.message} key={item.id} />;
        })}
      </div>
      
      <AddReduxMessageForm onSubmit={addNewMessage} />
    </div>
  );
};

type NewMessageFormFormValuesType = {
  newMessageBody: string
}
type PropsType = {}
type NewMessageFormValuesKeysType = GetStringKeys<NewMessageFormFormValuesType>

const maxLength50 = maxLengthCreator(50);

const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormFormValuesType, PropsType> & PropsType> = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        {createField<NewMessageFormValuesKeysType>("Enter your message", "newMessageBody", [required, maxLength50], TextArea)}
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const AddReduxMessageForm = reduxForm<NewMessageFormFormValuesType>({ form: "dialogAddMessageForm" })(AddMessageForm);

export default Dialogs;
