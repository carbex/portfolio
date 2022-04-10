import React from "react";
import * as S from "./ProjectsTable.styles";
import { capitalize, convertDate } from "../../../../Functions/Functions";
import ProjectsFormUpdate from "../ProjectsForm/ProjectsFormUpdate";
import ProjectsFormDelete from "../ProjectsForm/ProjectsFormDelete";
import ProjectsCheckbox from "../ProjectsForm/ProjectsCheckbox";

import { connect } from "react-redux";

function ProjectsTable(props) {
  // Default props
  const {
    isSmallerThan350,
    loading = true,
    isTitleAscendant = false,
    isCreationDateAscendant = false,
    // isUpdateDateAscendant = false,
    projects = [],
    setModal,
    unSetModal,
    handleUpdateProjectSubmit,
    handleDeleteProjectSubmit,
    handleTitleDropdownClick,
    handleCreationDateDropdownClick,
    // handleUpdateDateDropdownClick,
    handleProjectDropdownClick,
    token,
    role = 2,
  } = props;

  const projectsList = projects.map((project, index) => {
    if (token !== project.userId.token && role === 2) {
      return null;
    } else {
      return (
        <tr key={project._id}>
          <th
            onClick={(event) => {
                if (event.target.type && event.target.type === 'checkbox') {
                    // The checkbox was clicked, stopping...
                    console.log(event.target.type)
                    return;
                }
                isSmallerThan350 && handleProjectDropdownClick(index)
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontSize: "14px", marginRight: "10px" }}>
                  {capitalize(project.title)}
                </div>
                {/* {role !== 1 || */}
                <div style={{ display: "flex", alignItems: "center" }}>
                  <S.LinkToModal
                    color={"green"}
                    onClick={(event) => {
                      event.stopPropagation();
                      setModal(
                        <ProjectsFormUpdate
                          project={project}
                          onSubmit={handleUpdateProjectSubmit}
                          unSetModal={unSetModal}
                        />
                      );
                    }}
                  >
                    Modifier
                  </S.LinkToModal>                  
                  {/* {(role === 2 || (role === 1 && token === user.token)) || */}
                  <>
                    &nbsp;<S.Text>|</S.Text>&nbsp;
                    <S.LinkToModal
                      color={"red"}
                      onClick={(event) => {
                        event.stopPropagation();
                        setModal(
                          <ProjectsFormDelete
                            project={project}
                            onSubmit={handleDeleteProjectSubmit}
                            unSetModal={unSetModal}
                          />
                        );
                      }}
                    >
                      Supprimer
                    </S.LinkToModal>
                  </>
                  {/* } */}
                </div>
                {/* } */}
              </div>
              <S.ButtonToggle onClick={() => {
                  handleProjectDropdownClick(index)
                  }}>
                <S.DropdownIcon visible={project.visible} />
              </S.ButtonToggle>
            </div>
            {/* TH FOOTER WHEN SCREEN < 650 */}
            <S.UserFooter visible={project.visible}>
              <div className="container my-2 p-0">
                <div className="row">
                  <S.Text className="col col-4">Créé le</S.Text>
                  <S.Text className="col col-8">
                    {project.creationDate && convertDate(project.creationDate)}
                  </S.Text>
                  {project.updateDate && (
                    <>
                      <S.Text className="col col-4">MAJ le</S.Text>
                      <S.Text className="col col-8">
                        {project.updateDate && convertDate(project.updateDate)}
                      </S.Text>
                    </>
                  )}
                  <S.Text className="col col-4">Rédacteur</S.Text>
                  <S.Text className="col col-8">
                    {project.userId.firstName
                      ? capitalize(project.userId.firstName)
                      : capitalize(project.userId.login)}
                  </S.Text>
                  <S.Text className="col col-4">Actif</S.Text>
                  <S.Text className="col col-8">
                    <ProjectsCheckbox
                      project={project}
                      onSubmit={handleUpdateProjectSubmit}
                    />
                  </S.Text>
                </div>
              </div>
            </S.UserFooter>
          </th>
          <S.ThDisplayToggle>
            <S.Text>
              {project.creationDate && convertDate(project.creationDate)}
            </S.Text>
          </S.ThDisplayToggle>
          <S.ThDisplayToggle>
            <S.Text>
              {project.updateDate && convertDate(project.updateDate)}
            </S.Text>
          </S.ThDisplayToggle>
          <S.ThDisplayToggle>
            <S.Text>
              {project.userId.firstName
                ? capitalize(project.userId.firstName)
                : capitalize(project.userId.login)}
            </S.Text>
          </S.ThDisplayToggle>
          <S.ThDisplayToggle>
            <ProjectsCheckbox
              project={project}
                onSubmit={handleUpdateProjectSubmit}
            />
          </S.ThDisplayToggle>
        </tr>
      );
    }
  });

  return (
    <>
      <div
        style={{
          borderRadius: 4,
          overflow: "hidden",
          backgroundColor: "white",
          marginBottom: 20,
        }}
      >
        <table
          className="table table-light table-hover"
          style={{ marginBottom: 0 }}
        >
          <thead style={{ fontSize: "14px" }}>
            <tr>
              <S.ThLogin>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => handleTitleDropdownClick()}
                >
                  <span>Nom</span>
                  <S.ButtonIdToggle>
                    <S.DropdownIcon visible={isTitleAscendant} />
                  </S.ButtonIdToggle>
                </div>
              </S.ThLogin>
              <S.ThDisplayToggle>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => handleCreationDateDropdownClick()}
                >
                  <span>Créé le</span>
                  <S.ButtonIdToggle>
                    <S.DropdownIcon visible={isCreationDateAscendant} />
                  </S.ButtonIdToggle>
                </div>
              </S.ThDisplayToggle>
              <S.ThDisplayToggle>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <span>Mis à jour le</span>
                </div>
              </S.ThDisplayToggle>
              <S.ThDisplayToggle>Rédacteur</S.ThDisplayToggle>
              <S.ThDisplayToggle>Actif</S.ThDisplayToggle>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td style={{ color: "lightgreen" }}>Chargement...</td>
              </tr>
            )}
            {projectsList}
          </tbody>
        </table>
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    token: state.user.token,
    role: state.user.role,
  };
}

export default connect(mapStateToProps, null)(ProjectsTable);
