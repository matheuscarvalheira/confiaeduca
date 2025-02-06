import { FC, useContext, useState } from "react";
import { Button } from "@/components/button";
import CustomHeader from "@/components/CustomHeader";
import { Input as CustomInput } from "@/components/input";
import { Modal } from "@/components/modal";
import * as S from "./styles";
import { AuthContext } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";
import { ToastError } from "@/utils/toast-messages";

export const LoginTemplate: FC = () => {
  
  const router = useRouter()

  const { signIn } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const signInOk = signIn(email, password);
    if (signInOk) {
      router.push('/')
    } else {
      ToastError('Login Inválido')
    }
  }

  return (
    <S.Container>
      <S.StyledCustomHeader
        as={CustomHeader}
        title="ConfiaEduca"
        subtitle="Faça login para acessar o sistema"
        showArrow={false}
      />
      <S.Form onSubmit={handleSubmit}>

        <label htmlFor="email">Login</label>
        <S.Input 
          as={CustomInput}
          id="email"
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => {setEmail(e.target.value)}}
        />

        <label htmlFor="password">Senha</label>
        <S.Input
          as={CustomInput}
          id="password"
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => {setPassword(e.target.value)}}
        />

        <S.ForgotPassword onClick={() => setModalIsOpen(true)}>
          Esqueci a senha
        </S.ForgotPassword>
        <Button
          text="Entrar"
          buttonType="action-button"
          style={{ width: "362px", height: "37px" }}
        />

      </S.Form>
      <Modal isOpen={modalIsOpen} handleOpen={setModalIsOpen}>
        <S.ModalContent>
          <S.Title>Esqueceu a senha?</S.Title>
          <S.Subtitle>Entre em contato com a secretaria da escola.</S.Subtitle>
          <S.ContactInfo>
            <S.PhoneIcon src="./svg/phone-icon.svg" alt="Phone Icon" />
            <S.PhoneNumber>(11) 99999-9999</S.PhoneNumber>
          </S.ContactInfo>
        </S.ModalContent>
      </Modal>
    </S.Container>
  );
};
