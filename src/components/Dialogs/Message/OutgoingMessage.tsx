import React from "react";
import s from './../Dialogs.module.css';
import {MessageType} from "../../../redux/state";

const OutMessage: React.FC<MessageType> = (props) => {
    return <div className={s.outmessage}>{props.outmessage}</div>
}

export default OutMessage;