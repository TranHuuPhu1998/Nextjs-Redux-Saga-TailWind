import React from 'react';
import { render } from 'react-dom';
import { withFormik } from 'formik';
import { EditorState , convertFromRaw  } from 'draft-js';
import { RichEditorExample } from './RichEditor';
import { MoreResources,DisplayFormikState } from './formik-helper';
import styles from './richeditor.module.css';
import * as Yup from 'yup';

const emptyContentState = convertFromRaw({
    entityMap: {},
    blocks: [
      {
        text: "",
        key: "foo",
        type: "unstyled",
        entityRanges: [],
      },
    ],
});

const formikEnhancer = withFormik({
    mapPropsToValues: props => ({
        editorState: EditorState.createWithContent(emptyContentState),
        email: '',
    }),
    validationSchema: Yup.object().shape({
        email: Yup.string()
        .email("That's not an email")
        .required('Required!'),
    }),
    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
        }, 1000);
    },
    displayName: 'MyForm',
});

const MyForm = ({
  values,
  touched,
  dirty,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  handleReset,
  setFieldValue,
  isSubmitting,
}) => (
  <form onSubmit={handleSubmit}>
    <label htmlFor="email" style={{ display: 'block' }}>
      Email
    </label>
    <input
      className="pl-3 border-2 border-gray-300 bg-white h-10 pr-5 rounded-lg text-sm focus:outline-none w-full"
      id="email"
      placeholder="Enter your email"
      type="email"
      value={values.email}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    {errors.email &&
    touched.email && (
      <div style={{ color: 'red', marginTop: '.5rem' }}>
        {errors.email}
      </div>
    )}
    <label
      htmlFor="email"
      style={{ display: 'block', marginTop: '.5rem' }}
    >
      Story
    </label>
    <RichEditorExample
      editorState={values.editorState}
      onChange={setFieldValue}
      onBlur={handleBlur}
    />
    <button
      type="button"
      className="outline p-2 mt-2 bg-blue-400 while"
      onClick={handleReset}
      disabled={!dirty || isSubmitting}
    >
      Reset
    </button>
    <button className="outline p-2 mt-2 bg-pink-800	while" type="submit" disabled={isSubmitting}>
      Submit
    </button>
  </form>
);

const MyEnhancedForm = formikEnhancer(MyForm);

// Helper styles for demo

const DraftJs = () => (
  <div className="app">
    <div className="ml-5 mr-5 flex items-center justify-between p-2 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple" >
        Using Formik with Draft.js
    </div>
    <div className="ml-5 mr-5">
        <MyEnhancedForm user={{ email: 'hello@reason.nyc' }} />
        <MoreResources />
    </div>
  </div>
);

export default DraftJs;