import React, { useState, useEffect } from "react";

const ProjectsCheckbox = (props) => {

    const {
        project = {},
        onSubmit
    } = props

  // States
  const [id, setId] = useState("")
  const [image] = useState()
  const [imageUrl, setImageUrl] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [resources, setResources] = useState("")
  const [siteUrl, setSiteUrl] = useState("")
  const [githubUrl, setGithubUrl] = useState("")
  const [active, setActive] = useState(project.active)

 const handleChange = (event) => {
     onSubmit(id, imageUrl, image, title, description, resources, siteUrl, githubUrl, !active, event);
 }

  useEffect(() => {
      setId(project._id)
      setImageUrl(project.imageUrl)
      setTitle(project.title)
      setDescription(project.description)
      setResources(project.resources.join('|'))
      setSiteUrl(project.siteUrl)
      setGithubUrl(project.githubUrl)
      setActive(project.active)
  },
  [
      project._id,
      project.imageUrl,
      project.title,
      project.description,
      project.resources,
      project.siteUrl,
      project.githubUrl,
      project.active
  ])

  return <input type="checkbox" checked={active} onChange={(event) => handleChange(event)} />;
};

export default ProjectsCheckbox;
