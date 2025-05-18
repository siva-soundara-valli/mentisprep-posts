import { useForm } from 'react-hook-form';
import { createPost } from './api';

export default function PostForm({ onCreated }) {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async data => {
    const newPost = await createPost({ ...data, userId: 1 });
    onCreated(newPost);       // optimistic UI add
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card">
      <h2>Create Post</h2>

      <label>Title</label>
      <input
        {...register('title', { required: 'Title is required' })}
        placeholder="Post title"
      />
      {errors.title && <small>{errors.title.message}</small>}

      <label>Body</label>
      <textarea
        {...register('body', { required: 'Body is required' })}
        placeholder="Say something…"
        rows={4}
      />
      {errors.body && <small>{errors.body.message}</small>}

      <button disabled={isSubmitting}>Create</button>
    </form>
  );
}
