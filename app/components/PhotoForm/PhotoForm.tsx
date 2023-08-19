"use client"
import styles from './photoForm.module.css'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type FormValues = {
  title: string;
  category: string;
  description: string;
  image: string;
};

const schema = yup.object().shape({
  title: yup.string().required('Title is required'),
  category: yup.string().required('Category is required'),
  description: yup.string().required('Description is required'),
  image: yup.string().required('Image is required'),
});

export default function PhotoForm(){
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    
  };

  return (

    <form onSubmit={handleSubmit(onSubmit)} className={styles.column}>
      {/* Form fields to add new photo */}
      <h2>Add new photo</h2>
      <label htmlFor="title">Title</label>
      <input type="text" {...register('title')} className='flex'/>
      {errors.title && <span>{errors.title.message}</span>}
      <label htmlFor="category">Category</label>
      <input type="text" {...register('category')} className='flex'/>
      {errors.category && <span>{errors.category.message}</span>}
      <label htmlFor="description">Description</label>
      <input type="text" {...register('description')} className='flex'/>
      {errors.description && <span>{errors.description.message}</span>}
      <label htmlFor="image">Image</label>
      <input type='file' {...register('image')} className='flex'/>
      {errors.image && <span>{errors.image.message}</span>}

      {/* Submit button */}
      <button type="submit" className='flex'>Submit</button>
    </form>

  );
}