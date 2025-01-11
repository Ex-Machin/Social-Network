import { useEffect, useState } from "react";

type PropsType = {
  status: string
  updateStatus: (status: string) => void
}

const ProfileStatusWithHooks: React.FC<PropsType> = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status])
  

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }
  return (
    <div>
      {editMode ? (
        <div>
          <input
            autoFocus
            onChange={(e) => setStatus(e.currentTarget.value)}
            value={status}
            onBlur={deactivateEditMode}
          ></input>
        </div>
      ) : (
        <div>
          <span onDoubleClick={() => setEditMode(true)}>
            {status || "--"}
          </span>
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
