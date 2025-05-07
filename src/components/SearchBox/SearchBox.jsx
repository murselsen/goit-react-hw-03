import React from 'react';
import { nanoid } from 'nanoid';
import * as Yup from "yup";

import { Formik, Form, Field } from 'formik';
import Css from './SearchBox.module.css';
const SearchBox = ({ searchContact }) => {
    const searchId = nanoid();
    const SearchFeedBackSchema = Yup.object().shape({
        search: Yup.string(),
    });
    const handleChange = (e) => {
        const { value } = e.target;
        searchContact(value)
    };
    return (
        <Formik validationSchema={SearchFeedBackSchema}>
            <Form className={Css.Form} >
                <div className={Css.FieldGroup}>
                    <label htmlFor={searchId}>Search</label>
                    <Field
                        type="text"
                        name="search"
                        id={searchId}
                        className={Css.input}
                        placeholder="By Name Search..."
                        onChange={handleChange}
                    />
                </div>
            </Form>
        </Formik>
    );
}

export default SearchBox;