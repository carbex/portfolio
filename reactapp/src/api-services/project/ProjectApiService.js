export class ProjectApiService {
  loadProjects = () => fetch("/projects/get");

  addProject = (data) =>
    fetch("/projects/add", {
      method: "POST",
      body: data,
    });

  updateProject = (data) =>
    fetch("/projects/update", {
      method: "POST",
      body: data,
    });

  deleteProject = ({ id, publicId }) =>
    fetch(`/projects/delete/${id}/${publicId}`, {
      method: "DELETE",
    });
}
