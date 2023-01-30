"use client";

import { Button } from "../button";
import { TextField } from "../input";
import TextArea from "../input/TextArea";
// hooks-form
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

interface FormValue {
  email: string;
  message: string;
  name: string;
}

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is a required field"),
  message: yup.string().required("Message is required"),
});

export default function ContactForms() {
  const { handleSubmit, control } = useForm<FormValue>({
    defaultValues: {
      email: "",
      name: "",
      message: "",
    },
    resolver: yupResolver(schema),
  });

  const handleLogin = (data: FormValue) => {
    console.log("submitted", data);
  };

  return (
    <div className="bg-milk text-darker w-full border-darker/30 shadow-lg border-[1px] rounded-xl p-5">
      <h3 className="font-extrabold text-center text-darker">
        Feel Free To <span className="text-neon-blue ">Contact Me!</span>
      </h3>
      <form className=" flex flex-col items-center gap-3 mt-10" onSubmit={handleSubmit(handleLogin)}>
        <TextField control={control} name="name" placeholder="Name" />
        <TextField control={control} name="email" placeholder="Email" type="email" />
        <TextArea control={control} name="message" placeholder="Your Message Here" />
        <Button type="submit" color="blue">
          SUBMIT
        </Button>
      </form>
    </div>
  );
}
