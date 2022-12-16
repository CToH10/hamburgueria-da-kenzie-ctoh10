import { StyledModal } from "./style";

interface iModalProps {
  children: JSX.Element;
  isOpen: string;
  setIsOpen: React.Dispatch<React.SetStateAction<string>>;
}

export const ModalBackground = ({
  children,
  isOpen,
  setIsOpen,
}: iModalProps) => {
  // const ref = useRef<HTMLDivElement>(null);
  // const closeModal = (event: MouseEvent) => {
  //   if (!ref.current) {
  //     return null;
  //   }

  //   const target = event.target as HTMLDivElement;

  //   if (!ref.current.contains(target)) {
  //     return setIsOpen("none");
  //   }

  //   return null;
  // };

  // window.addEventListener("mouseDown", closeModal());
  return (
    <StyledModal className="modal" style={{ display: `${isOpen}` }}>
      {children}
    </StyledModal>
  );
};

// const modalRef = useRef(null);
// useEffect(() => {
//    function modalOutClick(event) {
//      const target = event.target;
//      const element = modalRef.current;
//      if(!element.contains(target)){
//          setCurrentPokemon(null);
//      }
//    }
//    window.addEventListener("mousedown", modalOutClick);

//    return () => {
//       window.removeEventListener("mousedown", modalOutClick);
//    };
// }, []);
