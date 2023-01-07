import * as S from "./styles";
import { HiUserCircle } from "react-icons/hi";
import playstation from "../../assets/images/playstation.svg";
import xbox from "../../assets/images/xbox.svg";
import steam from "../../assets/images/steam.svg";
import epic from "../../assets/images/epic.svg";
import { useState } from "react";
import Modal from "react-modal";
import bighead from "../../assets/images/bighead.svg";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

Modal.setAppElement("#root");

export function Header() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const onClick = () => setIsActive(!isActive);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <S.Container>
        <S.ContainerInput>
          <div>
            <button>logo</button>
            <input type="text"></input> 
          </div>
          <p>
            <Menu w='100%'>
              <MenuButton as={S.MenuButton}>
              <HiUserCircle />
              </MenuButton>
              <MenuList color='black' backgroundColor='#181818 ' borderRadius="10" w='130px'>
                <MenuItem backgroundColor='transparent'><S.Link href="#">Perfil</S.Link></MenuItem>
                <MenuItem backgroundColor='transparent'><S.Link href="#">Configurações</S.Link></MenuItem>
                <MenuItem backgroundColor='transparent' ><S.Link href="#">Sair</S.Link></MenuItem>
              </MenuList>
            </Menu>
          </p>
        </S.ContainerInput>
        <S.Plataforms>
          <p>
            <button onClick={openModal}>
              <img src={xbox} alt="" />
            </button>
          </p>
          <p>
            <button onClick={openModal}>
              <img src={playstation} alt="" />
            </button>
          </p>
          <p>
            <button onClick={openModal}>
              <img src={epic} alt="" />
            </button>
          </p>
          <p>
            <button onClick={openModal}>
              <img src={steam} alt="" />
            </button>
          </p>
        </S.Plataforms>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          overlayClassName="modal-overlay"
          className="modal-content"
        >
          <S.Modal>
            <S.CtnClose>
              <S.ButtonCloseModal onClick={closeModal}> X </S.ButtonCloseModal>
            </S.CtnClose>

            <S.PainelUser>
              <img src={bighead} alt="" />
              <label>
                <h3>Username: xxxxxx</h3>
                <p>ver perfil</p>
              </label>
            </S.PainelUser>
          </S.Modal>
        </Modal>
      </S.Container>
    </>
  );
}
