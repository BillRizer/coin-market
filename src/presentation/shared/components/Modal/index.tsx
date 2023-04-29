import React from "react";

import {
  Background,
  Modal,
  Screen,
  Close,
} from "./styles";

import { IPayloadProps } from "../../types/modal-payload";
import { FiX } from "react-icons/fi";
import { IconComponent } from "../Icon";
import { useModal } from "../../../../application/hook/modal";

interface IProps {
  isActive: Boolean | undefined;
  payload: IPayloadProps | undefined;
}
const ModalComponent: React.FC<IProps> = ({ isActive, payload }) => {
  const { hideModal } = useModal();

  return isActive ? (
    <Screen>
      <Modal>
        <Close
          onClick={() => {
            hideModal();
          }}
        >
          <IconComponent Icon={FiX} size="medium" />
        </Close>
        <div>{payload?.body}</div>
      </Modal>
      <Background
        onClick={() => {
          hideModal();
        }}
      ></Background>
    </Screen>
  ) : (
    <></>
  );
};
export default ModalComponent;
