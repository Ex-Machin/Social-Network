import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = () => {
  return (
  <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>
          Lisa
        </div>
        <div className={s.dialog}>
          Vika
        </div>
        <div className={s.dialog}>
          Lilia
        </div>
        <div className={s.dialog}>
          Lisa
        </div>
        <div className={s.dialog}>
          Lisa
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>What da fuck!</div>
        <div className={s.message}>Esketit</div>
      </div>
  </div>
  );
};

export default Dialogs;
