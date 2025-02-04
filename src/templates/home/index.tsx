"use client";
import CustomHeader from "@/components/CustomHeader";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 60px;
`;

const ButtonCard = styled.div`
  background-color: #f9f5f2;
  padding: 20px;
  border-radius: 8px;
  width: 200px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const ButtonTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 5px;
`;

export const HomeTemplate = () => {
  const [isTeacher, _] = useState(false);
  const router = useRouter();

  const classesTeacher = [
    { id: "e8fc0e3a-16e0-45c6-a1e8-e4a7ee048dd0", title: "5°A Matematica" },
    { id: "47d45616-cdad-4e5b-9a2b-f4588f543982", title: "5°A Matematica" },
    { id: "d896e167-3437-4795-9360-2f4590cf4615", title: "5°A Matematica" },
    { id: "5a91fce0-a9c1-4297-8951-b6cb4af1e4b4", title: "5°A Matematica" },
    { id: "d1f0a06d-6b98-48e0-b1cb-8c2e74a74dff", title: "5°A Matematica" },
    { id: "602686c2-9e0b-48b2-901f-ef4ad59d22a8", title: "5°A Matematica" },
    { id: "9ea53993-01e6-4388-add7-cb7457e07d74", title: "5°A Matematica" },
  ];

  const classesStudent = [
    { id: "e0b49310-a6cd-4d2a-8a62-275732627a33", title: "Matematica" },
    { id: "67c7724b-146c-48f1-b86c-d3c74d9746a3", title: "História" },
    { id: "e3e5b0af-2cd2-4ad0-8787-d266e8deae3c", title: "Português" },
    { id: "c61c7deb-99d2-4778-bdf7-d76bf790c26e", title: "Inglês" },
    { id: "38271fcd-f2b2-4016-a2c2-091aab069f4d", title: "Geografia" },
    { id: "a53824d9-c60e-4321-a0a9-54aa975cc2a3", title: "Ciências" },
  ];

  const classList = isTeacher ? classesTeacher : classesStudent;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        height: "calc(100vh - 84.5px)",
        paddingBottom: "84.5px",
      }}
    >
      <CustomHeader
        title={`Bem vindo, ${isTeacher ? "Professor" : "Aluno"}!`}
        subtitle="Selecione a turma desejada"
      />
      <ButtonsContainer>
        {classList.map((classItem, index) => (
          <ButtonCard
            key={`class-${index}`}
            onClick={() => router.push(classItem.id)}
          >
            <ButtonTitle>{classItem.title}</ButtonTitle>
          </ButtonCard>
        ))}
      </ButtonsContainer>
    </div>
  );
};
