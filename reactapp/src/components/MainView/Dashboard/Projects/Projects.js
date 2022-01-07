import React, { useState, useEffect } from 'react'
import { dynamicSort } from '../../../Functions/Functions'
import { useModal } from '../../../GlobalModal/GlobalModal'
import ProjectsTable from './ProjectsTable/ProjectsTable'
import ProjectsHeader from './ProjectsHeader/ProjectsHeader'

function Projects() {

    const { setModal, unSetModal } = useModal()

    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    const [message, setMessage] = useState('')
    const [isTitleAscendant, setIsTitleAscendant] = useState(false)
    const [isCreationDateAscendant, setIsCreationDateAscendant] = useState(false)
    // const [isUpdateDateAscendant, setIsUpdateDateAscendant] = useState(false)
    const [isSmallerThan350, setIsSmallerThan350] = useState(false)

    // LOAD PROJECTS
    useEffect(() => {
        loadProjects()
        setLoading(false)
    }, [])

    const loadProjects = async () => {
        let rawResponse = await fetch('/projects/get')
        let response = await rawResponse.json()
        response.result ? setProjects(response.projects.map(project => {
            return { ...project, visible: false }
        }).sort(dynamicSort('creationDate')).reverse()) : alert(`${response.error}`)
    }

    // TIMEOUT ON MESSAGE DISPLAYING
    const closeMessage = async () => {
        const timer = setTimeout(() => {
            setMessage('')
        }, 5000)
        return () => clearTimeout(timer)
    }

    // CLOSE FOOTER PROJECTS WHEN SCREEN > 650
    useEffect(() => {
        const updateWindowWidth = () => {
            const breakPoint = 650
            if (window.innerWidth > breakPoint) {
                setIsSmallerThan350(false)
                setProjects(projects.map(project => {
                    return { ...project, visible: false }
                }))
            } else {
                setIsSmallerThan350(true)
            }
        }
        window.addEventListener('resize', updateWindowWidth)
        return () => window.removeEventListener('resize', updateWindowWidth)
    }, [projects])

    // ADD PROJECT
    const handleAddProjectSubmit = async (token, image, title, description, resources, siteUrl, githubUrl) => {
        var date = new Date()
        date.setHours(0, 0, 0, 0)

        var data = new FormData();
        typeof image !== 'undefined' && data.append('image', image, image.name);
        data.append('token', token);
        data.append('title', title);
        data.append('description', description);
        data.append('resources', resources);
        data.append('siteUrl', siteUrl);
        data.append('githubUrl', githubUrl);
        data.append('creationDate', date);

        const rawResponse = await fetch('/projects/add', {
            method: 'POST',
            body: data
        })
        let response = await rawResponse.json();

        if (response.result) {
            loadProjects()
            unSetModal()
            setMessage(<span style={{ color: 'lightgreen' }}>{response.success}</span>)
            closeMessage()
        } else {
            unSetModal()
            setMessage(<span style={{ color: 'lightcoral' }}>{response.error}</span>)
            closeMessage()
        }
    }

    // UPDATE PROJECT
    const handleUpdateProjectSubmit = async (id, imageUrl, image, title, description, resources, siteUrl, githubUrl) => {
        var updateDate = new Date();
        updateDate.setHours(0, 0, 0, 0);
        let publicId = imageUrl.split('/').pop().split('.').shift();
        var data = new FormData();
        typeof image !== 'undefined' && data.append('image', image, image.name);
        data.append('updateDate', updateDate)
        data.append('id', id);
        data.append('publicId', publicId);
        data.append('title', title);
        data.append('description', description);
        data.append('resources', resources);
        data.append('siteUrl', siteUrl);
        data.append('githubUrl', githubUrl);

        const rawResponse = await fetch('/projects/update', {
            method: 'POST',
            body: data
        })
        let response = await rawResponse.json();

        if (response.result) {
            loadProjects()
            unSetModal()
            setMessage(<span style={{ color: 'lightgreen' }}>{response.success}</span>)
            closeMessage()
        } else {
            unSetModal()
            setMessage(<span style={{ color: 'lightcoral' }}>{response.error}</span>)
            closeMessage()
        }
    }

    // DELETE PROJECT
    const handleDeleteProjectSubmit = async (id, imageUrl) => {
        let publicId = imageUrl.split('/').pop().split('.').shift()
        const rawResponse = await fetch(`/projects/delete/${id}/${publicId}`, {
            method: 'DELETE'
        })
        let response = await rawResponse.json()
        if (response.result) {
            loadProjects()
            unSetModal()
            setMessage(<span style={{ color: 'lightgreen' }}>{response.success}</span>)
            closeMessage()
        } else {
            unSetModal()
            setMessage(<span style={{ color: 'lightcoral' }}>{response.error}</span>)
            closeMessage()
        }
    }

    // DISPLAY THE FOOTER OF EACH PROJECT ON CLICK WHEN SCREEN < 650
    const handleProjectDropdownClick = (index) => {
        setProjects(projects.map((project, i) => {
            if (i === index) {
                if (project.visible === false) {
                    return { ...project, visible: true }
                } else {
                    return { ...project, visible: false }
                }
            } else {
                return { ...project }
            }
        }))
    }

    // SORT PROJECTS BY TITLE
    const handleTitleDropdownClick = () => {
        if (isTitleAscendant) {
            setProjects([...projects.sort(dynamicSort("title"))])
        } else {
            setProjects([...projects.sort(dynamicSort("title")).reverse()])
        }
        setIsTitleAscendant(() => !isTitleAscendant)
    }

    // SORT PROJECTS BY CREATION DATE
    const handleCreationDateDropdownClick = () => {
        if (isCreationDateAscendant) {
            setProjects([...projects.sort(dynamicSort("creationDate"))])
        } else {
            setProjects([...projects.sort(dynamicSort("creationDate")).reverse()])
        }
        setIsCreationDateAscendant(() => !isCreationDateAscendant)
    }

    // SORT PROJECTS BY UPDATE DATE
    // const handleUpdateDateDropdownClick = () => {
    //     if (isUpdateDateAscendant) {
    //         setProjects([...projects.sort(dynamicSort("updateDate"))])
    //     } else {
    //         setProjects([...projects.sort(dynamicSort("updateDate")).reverse()])
    //     }
    //     setIsUpdateDateAscendant(() => !isUpdateDateAscendant)
    // }

    return (
        <>
            <ProjectsHeader
                projects={projects}
                message={message}
                setModal={setModal}
                unSetModal={unSetModal}
                handleAddProjectSubmit={handleAddProjectSubmit}
            />
            <ProjectsTable
                isSmallerThan350={isSmallerThan350}
                loading={loading}
                isTitleAscendant={isTitleAscendant}
                isCreationDateAscendant={isCreationDateAscendant}
                // isUpdateDateAscendant={isUpdateDateAscendant}
                projects={projects}
                setModal={setModal}
                unSetModal={unSetModal}
                handleUpdateProjectSubmit={handleUpdateProjectSubmit}
                handleDeleteProjectSubmit={handleDeleteProjectSubmit}
                handleTitleDropdownClick={handleTitleDropdownClick}
                handleCreationDateDropdownClick={handleCreationDateDropdownClick}
                // handleUpdateDateDropdownClick={handleUpdateDateDropdownClick}
                handleProjectDropdownClick={handleProjectDropdownClick}
            />
        </>
    )
}

export default Projects

