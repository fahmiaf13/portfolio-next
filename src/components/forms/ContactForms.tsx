"use client";

import { Button } from "../button";
import { TextField } from "../input";
import TextArea from "../input/TextArea";
import axios from "axios";
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

  const handleLogin = async (data: FormValue) => {
    try {
      const res = await axios.post("/api/contact", data);
      console.log("response received", res);
      if (res.status === 200) {
        console.log("response success");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" text-milk w-full">
      <h3 className="font-extrabold text-center text-2xl">
        Feel Free To <span className="text-neon-blue ">Contact Me!</span>
      </h3>
      <form className=" flex flex-col items-center gap-3 mt-10" onSubmit={handleSubmit(handleLogin)}>
        <TextField control={control} name="name" placeholder="Name" />
        <TextField control={control} name="email" placeholder="Email" type="email" />
        <TextArea control={control} name="message" placeholder="Your Message Here" />
        <Button type="submit" color="white">
          SUBMIT
        </Button>
      </form>
    </div>
  );
}
