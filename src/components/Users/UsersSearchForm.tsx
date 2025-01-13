import { Field, Form, Formik, FormikHelpers } from 'formik';
import { FilterType } from '../../redux/usersReducer';
import React from 'react';

const usersSearchFormValidate = (values: any) => {
    const errors = {}
    return errors
};

type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}

const UsersSearchForm: React.FC<PropsType> = React.memo((props) => {
    
    const { onFilterChanged } = props;

    const submit = (values: FilterType, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        onFilterChanged(values)
        setSubmitting(false)
    }

    return <div>
        <Formik
            initialValues={{ term: '', friend: null}}
            validate={usersSearchFormValidate}
            onSubmit={submit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Field type="text" name="term" />
                    <Field name="friend" as="select">
                        <option value="null">All</option>
                        <option value="true">Only followed</option>
                        <option value="false">Only unfollowed</option>
                    </Field>
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    </div>
})

export default UsersSearchForm;
