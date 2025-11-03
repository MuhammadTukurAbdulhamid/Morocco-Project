import React from "react";
import { Modal, Button, message } from "antd";
import PhoneInput from "./PhoneInput";

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: (v: boolean) => void;
  bookingModalOpen: boolean;
  setBookingModalOpen: (v: boolean) => void;
  phone: string;
  setPhone: (v: string) => void;
  value: string;
  setValue: (v: string) => void;
  navigate: (to: string, opts?: any) => void;
}

const Modals: React.FC<Props> = ({ isModalOpen, setIsModalOpen, bookingModalOpen, setBookingModalOpen, phone, setPhone, value, setValue, navigate }) => {
  const handleCancel = () => setIsModalOpen(false);

  return (
    <>
      <Modal footer={false} centered title="" open={isModalOpen} onOk={() => setIsModalOpen(false)} onCancel={handleCancel}>
        <div className="flex flex-col min-h-[400px] bg-white justify-center items-center">
          <img src="phone.png" className="mt-[auto]" />
          <h1 className="font-bold mt-5">Enter Your Phone Number</h1>
          <PhoneInput phone={phone} value={value} setPhone={setPhone} setValue={setValue} />
          <div className="mt-[auto] ml-[auto] flex gap-4">
            <Button onClick={handleCancel} className="h-[40px]">Cancel</Button>
            <Button onClick={() => {
              if (phone && value) {
                navigate("Register", { state: { phoneNumber: value + phone } });
              } else {
                message.warning("Phone number is required");
              }
            }} className="bg-primary h-[40px]" type="primary">Confirm</Button>
          </div>
        </div>
      </Modal>

      <Modal footer={false} centered title="" open={bookingModalOpen} onOk={() => setBookingModalOpen(false)} onCancel={() => setBookingModalOpen(false)}>
        <div className="flex flex-col min-h-[400px] bg-white justify-center items-center">
          <img src="phone.png" className="mt-[auto]" />
          <h1 className="font-bold mt-5">Enter Your Phone Number</h1>
          <PhoneInput phone={phone} value={value} setPhone={setPhone} setValue={setValue} />
          <div className="mt-[auto] ml-[auto] flex gap-4">
            <Button onClick={() => setBookingModalOpen(false)} className="h-[40px]">Cancel</Button>
            <Button onClick={() => {
              if (phone && value) {
                navigate("Booking", { state: { phoneNumber: value + phone } });
              } else {
                message.warning("Phone number is required");
              }
            }} className="bg-primary h-[40px]" type="primary">Confirm</Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Modals;
