import { FieldValues, useController } from "react-hook-form";

interface Props {
  name: string;
  placeholder: string;
  control: any;
  size?: "small" | "medium" | "large";
}

export default function TextArea(props: Props) {
  const {
    field,
    fieldState: { error },
  } = useController<FieldValues, string>(props);

  return (
    <div className="w-full">
      <div className="relative w-full h-auto flex items-center">
        <textarea
          {...field}
          placeholder=" "
          className={`${
            error
              ? "text-tomato focus:border-tomato border-b-tomato border-x-tomato disabled:bg-tomato placeholder-shown:border-tomato placeholder-shown:border-t-tomato "
              : "text-milk focus:border-milk disabled:bg-milk/50 placeholder-shown:border-milk/30 placeholder-shown:border-t-milk/30 "
          } resize-none peer w-full h-full bg-transparent font-sans font-normal outline outline-0 focus:outline-0 disabled:border-0 transition-all placeholder-shown:border border border-t-transparent border-milk focus:border-2 focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] `}
          autoComplete="true"
        />
        <label
          className={`${
            error
              ? "text-tomato peer-focus:text-tomato before:border-tomato peer-focus:before:border-tomato after:border-tomato peer-focus:after:border-tomato peer-placeholder-shown:text-tomato peer-disabled:peer-placeholder-shown:text-tomato"
              : "text-milk peer-focus:text-milk before:border-milk  peer-focus:before:border-milk after:border-milk peer-focus:after:border-milk peer-placeholder-shown:text-milk/30 peer-disabled:peer-placeholder-shown:text-milk"
          } capitalize flex w-full h-full select-none pointer-events-none absolute left-0 font-normal leading-tight peer-focus:leading-tight peer-disabled:text-transparent transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] `}
        >
          {props.placeholder}
        </label>
      </div>
      <label className="text-sm text-tomato">{error?.message}</label>
    </div>
  );
}
