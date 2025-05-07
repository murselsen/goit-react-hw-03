import React from 'react';
import Css from './Contact.module.css';
const Contact = () => {
    const handleDelete = (e) => {
        console.log('Delete contact');
    }
    return (
        <div className={Css.Contact}>
            <div className={Css.Info}>
                <div className={Css.InfoItem}>
                    <img src='
                    icon/user.png' width="16" height="16" title='user' /> <p>Rosie Simpson</p>
                </div>
                <div className={Css.InfoItem}>
                    <img src='
                    icon/phone-call.png' width="16" height="16" title='phone' /> <p>459-12-56</p>
                </div>
            </div>
            <div className={Css.Buttons}>
                <button type='button' onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default Contact;