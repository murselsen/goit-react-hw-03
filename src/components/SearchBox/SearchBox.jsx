import React, { useId } from 'react';
import { Formik, Form, Field } from 'formik';
import Css from './SearchBox.module.css';
const SearchBox = () => {
    const searchId = useId();
    const handleChange = () => { };
    return (
        <Formik initialValues={{}} onSubmit={() => { }}>
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