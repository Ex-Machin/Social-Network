import React from "react";
import { Field, reduxForm } from "redux-form";
import { required, maxLengthCreator } from "../../utils/validators/validators";
import { TextArea } from "../FormsControl/FormsControl";
import DialogItem from "./DialogItem/Dialog";
import s from "./Dialogs.module.css";
import Message from "./Messages/Messages";

const Dialogs = ({ dialogsPage, sendMessage }) => {

  const addNewMessage = (values) => {
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

const maxLength50 = maxLengthCreator(50); 

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={TextArea}
          validate={[required, maxLength50]}
          name="newMessageBody"
          placeholder="Enter your message"
        />
      </div>
      <div>
        <button>Add Post</button>
      </div>
    </form>
  );
};

const AddReduxMessageForm = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
);

export default Dialogs;
