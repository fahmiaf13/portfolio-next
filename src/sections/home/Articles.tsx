import { mont } from "@/assets/fonts";

export default function Articles() {
  return (
    <div className="bg-milk h-screen text-darker">
      <div className="h-full w-full box-border flex flex-col justify-center items-center text-center">
        <h1 className={`${mont.className} box-border font-extrabold`}>ARTICLES</h1>
        <h1 className={`${mont.className} font-extrabold`}>COMING SOON!</h1>
      </div>
    </div>
  );
}
