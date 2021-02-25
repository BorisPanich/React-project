import React from "react";
import s from './../Dialogs.module.css';
import {MessageType} from "../../../redux/redux-store";

const Message: React.FC<MessageType> = (props) => {
    return <div>
        <div className={s.message}>
            {props.message}
        </div>
    </div>
}

export default Message;