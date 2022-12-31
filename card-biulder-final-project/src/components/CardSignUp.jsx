import React from "react";
import { useFormik } from "formik";
import Input from "./Input";
import Joi from "joi";
import { joiValidation } from "../JoiValidate";
import { createUser } from "../services/httpService";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getUser } from "../services/httpService";

const CardSignUp = () => {
  const [isBiz, setIsBiz] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validate: joiValidation({
      name: Joi.string().min(3).max(50).required(),
      email: Joi.string()
        .required()
        .email({ tlds: { allow: false } }),
      password: Joi.string().min(5).max(50).required(),
    }),
    onSubmit: async (values) => {
      try {
        await createUser({ ...values, biz: isBiz });
        toast("Account Has Been Created!😝");
        navigate("sign-in");
      } catch ({ response }) {
        if (response && response.status === 400) setError(response.data);
      }
    },
  });

  return (
    <>
      <form onSubmit={form.handleSubmit} noValidate>
        <p className="bg-danger">{error}</p>
        <div className="row w-50 m-auto">
          <Input
            label="Name"
            type="text"
            onChange={form.handleChange}
            id="name"
            {...form.getFieldProps("name")}
            error={form.touched.name && form.errors.name}
            spanClass="input-group-text "
            inputClass={"form-control"}
          />
          <Input
            label="Email"
            type="email"
            onChange={form.handleChange}
            id="email"
            {...form.getFieldProps("email")}
            error={form.touched.email && form.errors.email}
            spanClass="input-group-text "
            inputClass={"form-control"}
          />
          <Input
            label="Password"
            type="password"
            onChange={form.handleChange}
            id="password"
            {...form.getFieldProps("password")}
            error={form.touched.password && form.errors.password}
            spanClass="input-group-text "
            inputClass={"form-control"}
          />
          <Input
            onChange={() => {
              setIsBiz(!isBiz);
            }}
            label="Im Business"
            type="checkbox"
            spanClass="input-group-text "
            inputClass="ms-3"
            checked={isBiz}
          />
          <button
            type="submit"
            className="btn btn-primary text-center m-auto w-25 "
          >
            Submit!
          </button>
        </div>
      </form>
    </>
  );
};

export default CardSignUp;
