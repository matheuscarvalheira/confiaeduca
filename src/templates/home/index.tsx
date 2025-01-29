import CustomHeader from "@/components/CustomHeader";
import { FC } from "react";

export const HomeTemplate: FC = () => {
  return (
    <div>
      <CustomHeader title="Bem vindo, professor" subtitle="Selecione a turma desejada" showArrow={true} />
    </div>
  )
}