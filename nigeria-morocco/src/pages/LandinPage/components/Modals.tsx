import React, { useState, useEffect } from "react";
import { Modal, Button, message, Checkbox } from "antd";
import { useTranslation } from "react-i18next";
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

const Modals: React.FC<Props> = ({
  isModalOpen,
  setIsModalOpen,
  bookingModalOpen,
  setBookingModalOpen,
  phone,
  setPhone,
  value,
  setValue,
  navigate,
}) => {
  const { t, i18n } = useTranslation();
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  // Helper function to get translation with language-specific defaults
  const getTranslation = (
    key: string,
    enDefault: string,
    frDefault?: string
  ) => {
    const defaultValue =
      i18n.language === "fr" && frDefault ? frDefault : enDefault;
    return t(key, { defaultValue });
  };

  // Reset checkbox when modal closes
  useEffect(() => {
    if (!isModalOpen) {
      setTermsAccepted(false);
      setShowTermsModal(false);
    }
  }, [isModalOpen]);

  const handleCancel = () => {
    setIsModalOpen(false);
    setTermsAccepted(false);
  };

  return (
    <>
      <Modal
        footer={false}
        centered
        title=""
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={handleCancel}
      >
        <div className="flex flex-col min-h-[400px] bg-white justify-center items-center py-6">
          <img src="phone.png" alt="Phone" />
          <h1 className="font-bold mt-5 mb-4">
            {getTranslation(
              "EnterYourPhoneNumber",
              "Enter Your Phone Number",
              "Entrez votre numéro de téléphone"
            )}
          </h1>
          <PhoneInput
            phone={phone}
            value={value}
            setPhone={setPhone}
            setValue={setValue}
          />
          <div className="w-[70%] my-4 flex items-start">
            <Checkbox
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className="mt-1"
            >
              <span className="text-sm">
                {getTranslation("IAccept", "I accept the", "J'accepte les")}{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowTermsModal(true);
                  }}
                  className="text-primary hover:underline"
                >
                  {getTranslation(
                    "TermsAndConditions",
                    "Terms and Conditions",
                    "Termes et conditions"
                  )}
                </a>
              </span>
            </Checkbox>
          </div>
          <div className="mt-6 flex gap-4">
            <Button onClick={handleCancel} className="h-[40px]">
              {getTranslation("Cancel", "Cancel", "Annuler")}
            </Button>
            <Button
              onClick={() => {
                if (!phone || !value) {
                  message.warning(
                    getTranslation(
                      "PhoneNumberRequired",
                      "Phone number is required",
                      "Le numéro de téléphone est requis"
                    )
                  );
                  return;
                }
                if (!termsAccepted) {
                  message.warning(
                    getTranslation(
                      "AcceptTermsRequired",
                      "Please accept the terms and conditions",
                      "Veuillez accepter les termes et conditions"
                    )
                  );
                  return;
                }
                setIsModalOpen(false);
                setTermsAccepted(false);
                navigate("/Register", {
                  state: { phoneNumber: value + phone },
                });
              }}
              disabled={!termsAccepted || !phone || !value}
              className="bg-primary h-[40px]"
              type="primary"
            >
              {getTranslation("Confirm", "Confirm", "Confirmer")}
            </Button>
          </div>
        </div>
      </Modal>

      <Modal
        footer={false}
        centered
        title=""
        open={bookingModalOpen}
        onOk={() => setBookingModalOpen(false)}
        onCancel={() => setBookingModalOpen(false)}
      >
        <div className="flex flex-col min-h-[400px] bg-white justify-center items-center">
          <img src="phone.png" className="mt-[auto]" />
          <h1 className="font-bold mt-5">Enter Your Phone Number</h1>
          <PhoneInput
            phone={phone}
            value={value}
            setPhone={setPhone}
            setValue={setValue}
          />
          <div className="mt-[auto] ml-[auto] flex gap-4">
            <Button
              onClick={() => setBookingModalOpen(false)}
              className="h-[40px]"
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                if (phone && value) {
                  setBookingModalOpen(false);
                  navigate("/Booking", {
                    state: { phoneNumber: value + phone },
                  });
                } else {
                  message.warning("Phone number is required");
                }
              }}
              className="bg-primary h-[40px]"
              type="primary"
            >
              Confirm
            </Button>
          </div>
        </div>
      </Modal>

      {/* Terms and Conditions Modal */}
      <Modal
        title={getTranslation(
          "TermsAndConditions",
          "Terms and Conditions",
          "Termes et conditions"
        )}
        open={showTermsModal}
        onCancel={() => setShowTermsModal(false)}
        onOk={() => setShowTermsModal(false)}
        width={800}
        footer={[
          <Button key="close" onClick={() => setShowTermsModal(false)}>
            {getTranslation("Close", "Close", "Fermer")}
          </Button>,
        ]}
      >
        <div className="w-full" style={{ height: "600px" }}>
          <iframe
            src="https://docs.google.com/document/d/e/2PACX-1vSl7jkan2ZsllZ1RatqrngrtxyqElzVPX29r7-I7Dt-lmIoxmmdC7re9nGFat2mMh3dt-TKN3bM1CV1/pub?embedded=true"
            width="100%"
            height="100%"
            style={{ border: "none" }}
            title="Terms and Conditions"
          />
        </div>
      </Modal>
    </>
  );
};

export default Modals;
