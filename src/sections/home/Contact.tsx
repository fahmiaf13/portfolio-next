import { mont } from "@/assets/fonts";
import { ContactForms } from "@/components";
export default function Contact() {
  return (
    <section className="bg-milk text-darker h-screen">
      <div className="container flex flex-col h-full justify-center gap-5">
        <div className={`${mont.className} text-center font-extrabold`}>
          <h2>CONTACT</h2>
        </div>
        <div className="flex lg:flex-row gap-5 flex-col">
          <div className="lg:w-1/2 w-full lg:text-start text-center font-extrabold text-neon-blue">
            <h2>Want to get in touch?</h2>
          </div>
          <div className="w-full lg:w-1/2">
            <ContactForms />
          </div>
        </div>
      </div>
    </section>
  );
}
