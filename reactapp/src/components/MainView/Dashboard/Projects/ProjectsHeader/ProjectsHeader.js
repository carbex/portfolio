import React from "react";
import { ProjectFormAdd } from "../ProjectsForm";
import * as S from "./ProjectsHeader.styles";

export function ProjectsHeader(props) {
  // Default props
  const {
    projects = [],
    message = "",
    setModal,
    unSetModal,
    handleAddProjectSubmit,
  } = props;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <S.Title>Projet{projects.length > 0 && "s"}</S.Title>
      <div
        style={{ height: "20px", display: "flex", justifyContent: "center" }}
      >
        {message}
      </div>
      <S.LinkToModal
        color={"lightgreen"}
        onClick={() => {
          setModal(
            <ProjectFormAdd
              onSubmit={handleAddProjectSubmit}
              unSetModal={unSetModal}
            />
          );
        }}
      >
        Ajouter
      </S.LinkToModal>
    </div>
  );
}
