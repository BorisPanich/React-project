import React from "react";
import {NavLink} from "react-router-dom";
import s from './../Dialogs.module.css';
import {DialogType} from "../../../redux/state";

const DialogsItem: React.FC<DialogType> = (props) => {
    let path = '/dialogs/' + props.id

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>
                <span className={s.item}>
                    <img src='https://avatarfiles.alphacoders.com/163/thumb-1920-163398.jpg'/>
                    {props.name}
                </span>
            </NavLink>
        </div>
    )
}

export default DialogsItem;