import { useForm } from "react-hook-form";
import { useEffect } from "react";

const Form = ({ formSubmit, formError, sending, sent }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  const onSubmit = (data) => formSubmit && formSubmit(data);

  useEffect(() => {
    if (!isSubmitting) formError && formError(errors);
  }, [errors, isSubmitting, formError]);

  useEffect(() => {
    if (sent) reset();
  }, [sent, reset]);

  return (
    <>
      {sending && <p>Form sending...</p>}

      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <input
          className="form--input"
          placeholder="first name"
          {...register("First name", { required: true })}
        />
        <input
          className="form--input"
          placeholder="email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          className="form--input"
          placeholder="Subject"
          {...register("Subject", { required: true })}
        />
        <textarea
          className="form--text"
          placeholder="message"
          {...register("Message", { required: true, maxLength: 2000 })}
        />
        <input className="form--input__submit" type="submit" />
      </form>
    </>
  );
};

export default Form;
