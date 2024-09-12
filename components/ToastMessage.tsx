import { FaRegCircleCheck } from "react-icons/fa6";

interface ToastMessageProps {
  title: string;
  description: string;
}

export const ToastMessage = ({ title, description }: ToastMessageProps) => {
  return (
    <>
      <div className="toastMessage text-white rounded-[8px] flex flex-row items-center bg-toasterMessageGradient py-[12px] pr-[20px] pl-[16px] gap-[8px]">
        <FaRegCircleCheck width={24} height={24} className="text-[#74C898]" />
        <div>
          <h2 className="font-semibold">{title}</h2>
          <p className="toastDescription font-inter text-[14px] leading-[16px] text-white">{description}</p>
        </div>
      </div>
    </>
  );
};
