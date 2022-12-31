import React from "react";
import { useFormik } from "formik";
import Input from "./Input";
import Joi from "joi";
import { joiValidation } from "../JoiValidate";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";
const CardSignIn = () => {
  const { logIn: signIn, user } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
    },
    validate: joiValidation({
      email: Joi.string()
        .required()
        .email({ tlds: { allow: false } }),
      password: Joi.string().min(5).max(50).required(),
    }),
    onSubmit: async (values) => {
      try {
        await signIn({ ...values });
      } catch ({ response }) {
        if (response && response.status === 400) setError(response.data);
      }
    },
  });
  useEffect(() => {
    if (!user) return;
    toast("Welcome!");
    if (user.biz) {
      navigate("/my-cards");
    } else navigate("/");
  }, [user]);
  return (
    <>
      <form onSubmit={form.handleSubmit} noValidate>
        <p className="bg-danger">{error}</p>
        <div className="row w-50 m-auto">
          <Input
            spanClass="input-group-text "
            inputClass={"form-control"}
            label="Email"
            type="email"
            onChange={form.handleChange}
            id="email"
            {...form.getFieldProps("email")}
            error={form.touched.email && form.errors.email}
          />
          <Input
            spanClass="input-group-text "
            inputClass={"form-control"}
            label="Password"
            type="password"
            onChange={form.handleChange}
            id="password"
            {...form.getFieldProps("password")}
            error={form.touched.password && form.errors.password}
          />

          <button
            type="submit"
            className="btn btn-primary text-center m-auto w-25 "
          >
            Log In!
          </button>
        </div>
      </form>
    </>
  );
};

export default CardSignIn;
