"use client"
import styles from './photoForm.module.css'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type FormValues = {
  firstName: string;
  lastName: string;
};

const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
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
      {/* Form fields */}
      <input type="text" {...register('firstName')} className='flex'/>
      {errors.firstName && <span>{errors.firstName.message}</span>}
      <input type="text" {...register('lastName')} className='flex'/>
      {errors.lastName && <span>{errors.lastName.message}</span>}
      <button type="submit" className='flex'>Submit</button>
    </form>

  );
};