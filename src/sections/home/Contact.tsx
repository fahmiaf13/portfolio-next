import { mont } from "@/assets/fonts";
import { ContactForms } from "@/components";
export default function Contact() {
  return (
    <section className="bg-milk text-darker h-screen">
      <div className="flex flex-col h-full container">
        <div className="h-1/4">
          <div className={`${mont.className} text-center font-extrabold flex items-center justify-center h-full`}>
            <h2>CONTACT</h2>
          </div>
        </div>
        <div className="h-3/4">
          <div className="flex lg:flex-row flex-col h-full">
            <div className="w-1/2 font-extrabold text-neon-blue">
              <h2>Want to get in touch?</h2>
            </div>
            <div className="w-full lg:w-1/2">
              <ContactForms />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
