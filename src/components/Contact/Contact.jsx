import React from 'react';
import Css from './Contact.module.css';
import userIcon from './icon/user.png';
import phoneIcon from './icon/phone-call.png';
const Contact = ({ id, name, number, handleContactDelete }) => {

    return (
        <div className={Css.Contact}>
            <div className={Css.Info}>
                <div className={Css.InfoItem}>
                    <img src={userIcon} width="16" height="16" title='user' /> <p>{name}</p>
                </div>
                <div className={Css.InfoItem}>
                    <img src={phoneIcon} width="16" height="16" title='phone' /> <p>{number}</p>
                </div>
            </div>
            <div className={Css.Buttons}>
                <button type='button' onClick={() => {
                    handleContactDelete({ id, name, number });
                }}>Delete</button>
            </div>
        </div>
    )
}

export default Contact;