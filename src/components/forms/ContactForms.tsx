import { Button } from "../button";
import { TextField } from "../input";

export default function ContactForms() {
  return (
    <div className="bg-milk text-darker w-full border-darker/10 border-2 rounded-xl p-5">
      <h3 className="font-extrabold text-center text-darker">
        Feel Free To <span className="text-neon-blue ">Contact Me!</span>{" "}
      </h3>
      <form className=" flex flex-col items-center gap-3 mt-10">
        <TextField placeholder="Name" />
        <TextField placeholder="Email" type="email" />
        <TextField placeholder="Password" type="password" />
        <Button>SUBMIT</Button>
      </form>
    </div>
  );
}
