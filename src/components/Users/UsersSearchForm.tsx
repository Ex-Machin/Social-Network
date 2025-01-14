import { Field, Form, Formik } from 'formik';
import React from 'react';
import { FilterType } from '../../redux/usersReducer';

const usersSearchFormValidate = (values: any) => {
    const errors = {}
    return errors
};

type PropsType = {
    onFilterChanged: (filter: FilterType) => void
    filter: FilterType
}

const UsersSearchForm: React.FC<PropsType> = React.memo(({onFilterChanged, filter}) => {

    const submit = (values: FilterType, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        onFilterChanged(values)
        setSubmitting(false)
    }

    const term = !!filter?.term ? filter.term : ''

    return <div>
        <Formik
            enableReinitialize
            initialValues={{ term: term, friend: filter.friend}}
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
