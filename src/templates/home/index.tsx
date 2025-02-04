import CustomHeader from "@/components/CustomHeader";
import FavoriteButton from "@/components/FavoriteButton";
import LikeButton from "@/components/LikeButton/indext";
import SaveButton from "@/components/SaveButton";
import { Accordion } from "@/components/accordion";
import { Modal } from "@/components/modal";
import { theme } from "@/styles/theme";
import { FC, useState } from "react";

export const HomeTemplate: FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        textAlign: 'center'
      }}
    >
      <h1 style={{ padding: '20px' }}>Vamos Inserir Nossos Componentes para Teste Aqui</h1>

      <button 
        onClick={() => setModalIsOpen(true)} 
        style={{ 
          backgroundColor: theme.indigoLavander, 
          color: theme.white, 
          padding: '5px 15px', 
          borderRadius: '10px' 
        }}
      >
        Abre Modal
      </button>

      {/* <CustomHeader title="Bem vindo, professor" subtitle="Selecione a turma desejada" showArrow={true} />
      <Modal isOpen={modalIsOpen} handleOpen={setModalIsOpen}>
        <p>Teste Modal Ok!</p>
      </Modal>
      <LikeButton />
      <SaveButton />
      <FavoriteButton/> */}
    </div>
  );
};