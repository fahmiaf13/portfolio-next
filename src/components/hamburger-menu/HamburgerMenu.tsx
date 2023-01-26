import { navList } from "@/data/NavigationList";
import { Iconify } from "../icon";
import { useModal } from "@/hooks";
import { Modal } from "../modal";

export default function HamburgerMenu() {
  const { open, handleOpen, handleClose } = useModal();

  return (
    <>
      <div className="fixed top-5 left-5 z-[99]">
        <button onClick={handleOpen}>
          <Iconify icon="icon-park:hamburger-button" />
        </button>
      </div>
      <Modal open={open} onClose={handleClose}>
        <ul className="h-full flex flex-col items-center justify-center gap-4">
          {navList.map((nav) => (
            <li key={nav.name} className="text-center uppercase text-4xl font-extrabold flex flex-col ">
              {nav.name}
            </li>
          ))}
        </ul>
      </Modal>
    </>
  );
}
