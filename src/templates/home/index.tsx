import CustomHeader from "@/components/CustomHeader";
import FavoriteButton from "@/components/FavoriteButton";
import LikeButton from "@/components/LikeButton/indext";
import SaveButton from "@/components/SaveButton";
import { FC } from "react";

export const HomeTemplate: FC = () => {
  return (
    <div>
      <CustomHeader title="Bem vindo, professor" subtitle="Selecione a turma desejada" showArrow={true} />
      <LikeButton />
      <SaveButton />
      <FavoriteButton/>
    </div>
  )
}