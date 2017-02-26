import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { createPost } from '../../actions/CREATE_POST'

class NewPost extends React.Component {
  render () {
    const { fields: { title, categories, content }, handleSubmit } = this.props
    return (
      <form name='NewPostForm' onSubmit={handleSubmit(createPost)}>
        <div className='form-group'>
          <label>Title of Post</label>
          <Field
            {...title}
            name='title'
            type='text'
            label='Title of Post'
            component='input'
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <label>Categories</label>
          <Field
            {...categories}
            name='categories'
            type='text'
            label='Categories'
            component='input'
            className='form-control'
          />
        </div>
        <div className='form-group'>
          <label>Content</label>
          <Field
            {...content}
            name='content'
            component='textarea'
            label='Content'
            className='form-control'
          />
        </div>

        <div className='form-group'>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </div>
      </form>
    )
  }
}

NewPost.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
  createPost: React.PropTypes.func,
  fields: React.PropTypes.array,
  onSubmit: React.PropTypes.func
}

function validate (values) {
  const errors = {}
  if (!values.title) {
    errors.title = 'Enter a username'
  }
  return errors
}

export default reduxForm({
  form: 'NewPostForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(NewPost)
