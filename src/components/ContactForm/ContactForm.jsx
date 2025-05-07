import React, { useId } from 'react';
import { Formik, Form, Field } from 'formik';
import Css from './ContactForm.module.css';

const ContactForm = () => {
    const nameId = useId();
    const numberId = useId();
    return (
        <Formik initialValues={{}} onSubmit={() => { }}>
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