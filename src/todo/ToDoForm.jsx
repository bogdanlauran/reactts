import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

function ToDoForm(){
    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            startDate: '',
            endDate: '',
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
            startDate: Yup.string()
                // .min(new Date().getDate(), 'The start date must')
                .required('*Required'),
            endDate: Yup.string()
                // .min(Yup.ref(), 'Must be after the start date')
                .required('*Required'),
            status: Yup.string()
                .required('*Required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return(
        <form>
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
                <label>
                    Start Date:
                    <br></br>
                    <DatePicker id="startDate" 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        selected={formik.values.startDate}
                    />
                </label>
                <br></br>
                
                
                {formik.touched.startDate && formik.errors.startDate ? (
                    <div>{formik.errors.startDate}</div>
                ) : null}
                <label>
                    End Date:
                    <br></br>
                    <DatePicker
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.endDate}
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

        </form>
    )
}

export default ToDoForm;