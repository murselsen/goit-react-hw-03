import React from 'react';
import { Formik, Form, Field } from 'formik';
import { nanoid } from 'nanoid'
import Css from './ContactForm.module.css';

const ContactForm = ({ addContact }) => {
    const nameId = nanoid();
    const numberId = nanoid();
    const handleSubmit = (e) => {
        e.id = nanoid();
        addContact(e);
    }
    return (
        <Formik initialValues={{ name: '', number: '' }} onSubmit={handleSubmit}>
            <Form className={Css.Form}>
                <div className={Css.FieldGroup}>
                    <label htmlFor={nameId}>Name</label>
                    <Field name="name" type="text" placeholder="Enter your name" id={nameId} className={Css.input} />
                </div>
                <div className={Css.FieldGroup}>
                    <label htmlFor={numberId}>Number</label>
                    <Field name="number" type="tel" placeholder="Enter your number" id={numberId} className={Css.input} />
                </div>
                <button type="submit" className={Css.button}>Add contact</button>
            </Form>
        </Formik>
    );
}

export default ContactForm;