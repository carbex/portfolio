import React, { useState, useEffect, useCallback } from "react";
import Card from "./Card/Card";
import * as S from "./Portfolio.styles";
import { dynamicSort } from "../../Functions/Functions";

export function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadProjects = useCallback(async () => {
    let rawResponse = await fetch("/projects/get");
    let response = await rawResponse.json();
    let filteredProjects = response.projects.filter(
      (project) => project.active === true
    );
    response.result
      ? setProjects(
          filteredProjects
            .map((project) => {
              return { ...project, visible: false };
            })
            .sort(dynamicSort("creationDate"))
            .reverse()
        )
      : alert(`${response.error}`);
  }, []);

  useEffect(() => {
    loadProjects();
    setLoading(false);
  }, [loadProjects]);

  const handleProjectClick = (index) => {
    setProjects(
      projects.map((project, i) => {
        if (i === index) {
          if (project.visible === false) {
            return { ...project, visible: true };
          } else {
            return { ...project, visible: false };
          }
        } else {
          return { ...project, visible: false };
        }
      })
    );
  };

  const listProjects = projects.map((project, index) => {
    return (
      <Card
        key={project._id}
        index={index}
        visible={project.visible}
        imageUrl={project.imageUrl}
        title={project.title}
        description={project.description}
        resources={project.resources}
        githubUrl={project.githubUrl}
        siteUrl={project.siteUrl}
        creationDate={project.creationDate}
        onProjectClick={handleProjectClick}
      />
    );
  });

  return (
    <S.Container>
      <S.PageTitle>PORTFOLIO</S.PageTitle>
      {loading && <S.SubTitle>Chargement...</S.SubTitle>}
      <S.Portfolio>{listProjects}</S.Portfolio>
    </S.Container>
  );
}
