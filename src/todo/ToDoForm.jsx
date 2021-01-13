import React from 'react';
import { Formik, useFormik, useFormikContext, useField } from 'formik';
import * as Yup from 'yup';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

const TodoForm = ({ formik }) => {
    const { setFieldValue } = useFormikContext();
    const [startDateField] = useField({ name: 'startDate' });
    const [endDateField] = useField({ name: 'endDate' });

    window.formik = formik;
    return <>
        <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" id="title" placeholder="Title"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
            />
            {formik.touched.title && formik.errors.title ? (
                <div>{formik.errors.title}</div>
            ) : null}

        </div>
        <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea className="form-control" id="description" rows="3"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
            ></textarea>
            {formik.touched.description && formik.errors.description ? (
                <div>{formik.errors.description}</div>
            ) : null}
        </div>
        <div className="form-group">
            <label className="mb-3 row">
                Start Date:
                <DatePicker id="startDate"
                    selected={(startDateField.value && new Date(startDateField.value)) || null}
                    onChange={date => setFieldValue(startDateField.name, date)}
                    value={formik.values.startDate}
                    className="form-control"
                />
            </label>

            {formik.touched.startDate && formik.errors.startDate ? (
                <div>{formik.errors.startDate}</div>
            ) : null}

            <label className="mb-2 row">
                End Date:
                <DatePicker id="endDate"
                    selected={(endDateField.value && new Date(endDateField.value)) || null}
                    onChange={date => setFieldValue(endDateField.name, date)}
                    value={formik.values.endDate}
                    className="form-control"
                />
            </label>
            {formik.touched.endDate && formik.errors.endDate ? (
                <div>{formik.errors.endDate}</div>
            ) : null}
        </div>
        <div className="form-group">
            <label htmlFor="status">Status:</label>
            <select className="form-control" id="status"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.status}
            >
                <option>Active</option>
                <option>Inactive</option>
            </select>
            {formik.touched.status && formik.errors.status ? (
                <div>{formik.errors.status}</div>
            ) : null}
        </div>
        <button type="button" className="btn btn-light">Submit</button>

    </>
}


function ToDoFormContainer() {
    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            startDate: new Date(),
            endDate: new Date(),
            status: '',
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .min(5, '*Must be more 5 characters or more')
                .max(50, '*Must be 50 characters or less')
                .required('*Required'),
            description: Yup.string()
                .max(200, '*Must be 200 characters or less')
                .required('*Required'),
            startDate: Yup.date().default(function () {
                return new Date();
            }).required('*Required'),
            endDate: Yup.date().default(function () {
                return new Date();
            })
                .required('*Required'),
            status: Yup.string()
                .required('*Required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });


    return <Formik {...formik}>
        <TodoForm formik={formik} />
    </Formik>
}

export default ToDoFormContainer;