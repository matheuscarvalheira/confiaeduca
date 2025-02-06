import { FC, useContext, useState } from "react";
import * as S from "./styles"
import CustomHeader from "@/components/CustomHeader";
import { Button } from "@/components/button";
import { theme } from "@/styles/theme";
import { Modal } from "@/components/modal";
import { Input as CustomInput } from "@/components/input";
import { AuthContext } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";
import { WrapperScroll } from "@/components/wrapperScroll";

export const SalaTamplate: FC = () => {

    const router = useRouter();
    const { userType } = useContext(AuthContext);

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [modalTitle, setModalTitle] = useState('')

    /* DADOS MOCKADOS */
    const [items, setItems] = useState([
        { key: 1, title: "Geometria", subTitle: "07/03/2025" },
        { key: 2, title: "Equação de segundo grau", subTitle: "05/03/2025" },
        { key: 3, title: "Álgebra", subTitle: "28/02/2025" }
    ]);

    const title = userType == 'professor' ? "Salas" : "Aulas";
    const subTitle = userType == 'professor' ? "5A - Fundamental 1" : "Matemática";
    /* DADOS MOCKADOS */
    
    return(
        <S.MainContainer>
            <CustomHeader title={title} subtitle={subTitle} showArrow={true} />
            <S.ContentContainer>
                <WrapperScroll>
                    {items.map(({key, title, subTitle}) => (
                        <S.ItemsContainer
                            key={key}
                            onClick={() => {router.push(`/sala-virtual?${key}`)}}
                        >
                            <S.ItemTitle>{title}</S.ItemTitle>
                            <S.ItemSubTitle>{subTitle}</S.ItemSubTitle>
                        </S.ItemsContainer>
                    ))}
                </WrapperScroll>
                { userType =='professor' &&
                    <S.ButtonContainer>
                        <Button 
                            text="Abrir nova sala virtual"
                            buttonType="action-button"
                            onClick={() => {
                                setModalTitle('')
                                setModalIsOpen(true)
                            }}
                            style={{
                                margin: 0,
                                color: theme.white
                            }}
                        />
                    </S.ButtonContainer>
                }
            </S.ContentContainer>
            <Modal isOpen={modalIsOpen} handleOpen={setModalIsOpen}>
                <S.ModalContainer>
                    <S.ModalTitle>Abrir nova sala virtual</S.ModalTitle>
                    <S.ModalInputContainer>
                        <label 
                          htmlFor="ClassName"
                          style={{fontSize: 13}}
                        >
                            Tema da aula:
                        </label>
                        <S.ModalInput
                            as={CustomInput}
                            id="ClassName"
                            type="ClassName"
                            placeholder="Digite aqui..."
                            value={modalTitle}
                            onChange={(e)=> setModalTitle(e.target.value)}
                        />
                    </S.ModalInputContainer>
                    <S.ModalButtonContainer>
                    <Button 
                        text="Abrir"
                        buttonType="action-button"
                        onClick={() => {
                            const ultimoId = items.reduce((maxId, item) => Math.max(maxId, item.key), 0);
                            const novoItem = {
                                key: ultimoId + 1,
                                title: modalTitle,
                                subTitle: new Date().toLocaleDateString('pt-BR')
                            }
                            setItems([...items, novoItem]);
                            setModalIsOpen(false)
                        }}
                        style={{
                            margin: 0,
                            color: theme.white
                        }}
                    />
                    </S.ModalButtonContainer>
                </S.ModalContainer>
            </Modal>
        </S.MainContainer>
    )
}
