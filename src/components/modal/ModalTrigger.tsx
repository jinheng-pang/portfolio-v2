"use client";

import { SVGProps, useState } from "react";
import Modal from "./Modal";

interface ModalTriggerProps {
  Icon: React.FC<SVGProps<SVGSVGElement>>;
  label: string;
  children: React.ReactNode;
  className: string;
}

const ModalTrigger = ({ Icon, children, className, ...props }: ModalTriggerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className={className}
        onClick={() => setIsOpen(true)}
      >
        <Icon />
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {children}
      </Modal>
    </>
  );
};

export default ModalTrigger;
