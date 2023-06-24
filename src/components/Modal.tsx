import { ModalProps } from "../model/types";


const CustomModal = ({ children }: ModalProps) => {
  return (
    <div className="fixed  flex justify-center w-full h-full items-center bg-black/20 top-0 left-0 right-0 z-50  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
      {children}
    </div>
  );
};

export default CustomModal;
