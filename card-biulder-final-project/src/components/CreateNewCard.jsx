import React from "react";
import { useFormik } from "formik";
import Input from "./Input";
import Joi from "joi";
import { joiValidation } from "../JoiValidate";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { createCard } from "../services/CardService";
const CreateNewCard = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      bizName: "",
      bizPhone: "",
      bizAddress: "",
      bizDescription: "",
      bizImage: "",
    },
    validate: joiValidation({
      bizName: Joi.string().min(3).max(50).required(),
      bizPhone: Joi.string().min(9).required(),
      bizAddress: Joi.string().required(),
      bizDescription: Joi.string(),
      bizImage: Joi.string().allow(""),
    }),
    async onSubmit(values) {
      const { bizImage, ...body } = values;
      if (bizImage) {
        body.bizImage = bizImage;
      }
      try {
        await createCard(body);
        toast("Your Card Has Been Created!😝");

        navigate("/my-cards");
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
            id="bizName"
            {...form.getFieldProps("bizName")}
            error={form.touched.bizName && form.errors.bizName}
            spanClass="input-group-text "
            inputClass={"form-control"}
          />
          <Input
            label="Phone Number"
            type="text"
            onChange={form.handleChange}
            id="bizPhone"
            {...form.getFieldProps("bizPhone")}
            error={form.touched.bizPhone && form.errors.bizPhone}
            spanClass="input-group-text "
            inputClass={"form-control"}
          />
          <Input
            label="Address"
            type="text"
            onChange={form.handleChange}
            id="bizAddress"
            {...form.getFieldProps("bizAddress")}
            error={form.touched.bizAddress && form.errors.bizAddress}
            spanClass="input-group-text "
            inputClass={"form-control"}
          />
          <Input
            label="Description"
            type="text"
            onChange={form.handleChange}
            id="bizDescription"
            {...form.getFieldProps("bizDescription")}
            error={form.touched.bizDescription && form.errors.bizDescription}
            spanClass="input-group-text "
            inputClass={"form-control"}
          />
          <Input
            label="Image"
            type="text"
            onChange={form.handleChange}
            id="bizImage"
            {...form.getFieldProps("bizImage")}
            error={form.touched.bizImage && form.errors.bizImage}
            spanClass="input-group-text "
            inputClass={"form-control"}
          />
          <button
            type="submit"
            className="btn btn-primary text-center m-auto w-25 "
          >
            Create Card!
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateNewCard;
