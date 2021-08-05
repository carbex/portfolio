import React, { useState, useEffect } from 'react'
import { useModal } from '../../../GlobalModal/GlobalModal'
import { dynamicSort } from '../../../Functions/Functions'
import UsersTable from './UsersTable/UsersTable'
import UsersHeader from './UsersHeader/UsersHeader'

function Users() {

    const { setModal, unSetModal } = useModal()

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [message, setMessage] = useState('')
    const [isIdAscendant, setIsIdAscendant] = useState(false)
    const [isEmailAscendant, setIsEmailAscendant] = useState(false)

    // LOAD USERS
    useEffect(() => {
        loadUsers()
        setLoading(false)
    }, [])

    const loadUsers = async () => {
        let rawResponse = await fetch('/users/get')
        let response = await rawResponse.json()
        response.result ? setUsers(
            response.users
            .map(user => {
                return { ...user, visible: false }
            })
            .sort(dynamicSort("login"))
        ) : alert(`${response.error}`)
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
                setUsers(users.map(user => {
                    return { ...user, visible: false }
                }))
            }
        }
        window.addEventListener('resize', updateWindowWidth)
        return () => window.removeEventListener('resize', updateWindowWidth)
    }, [users])

    // ADD ONE USER
    const handleAddUserSubmit = async (login, password, confirmPassword) => {
        const rawResponse = await fetch('/users/sign-up', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `login=${login}&password=${password}&confirmPassword=${confirmPassword}`
        })
        let response = await rawResponse.json();
        if (response.result) {
            loadUsers()
            unSetModal()
            setMessage(<span style={{ color: 'lightgreen' }}>{response.success}</span>)
            closeMessage()
        } else {
            unSetModal()
            setMessage(<span style={{ color: 'lightcoral' }}>{response.error}</span>)
            closeMessage()
        }
    }

    // UPDATE ONE USER
    const handleUpdateUserSubmit = async (token, login, password, newPassword, confirmNewPassword, firstName, lastName, email, role) => {
        const rawResponse = await fetch(`/users/update`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `token=${token}&login=${login}&password=${password}&newPassword=${newPassword}&confirmNewPassword=${confirmNewPassword}&firstName=${firstName}&lastName=${lastName}&email=${email}&role=${role}`
        })
        let response = await rawResponse.json()
        if (response.result) {
            loadUsers()
            unSetModal()
            setMessage(<span style={{ color: 'lightgreen' }}>{response.success}</span>)
            closeMessage()
        } else {
            unSetModal()
            setMessage(<span style={{ color: 'lightcoral' }}>{response.error}</span>)
            closeMessage()
        }
    }

    // DELETE ONE USER
    const handleDeleteUserSubmit = async (id) => {
        const rawResponse = await fetch(`/users/delete/${id}`, {
            method: 'DELETE'
        })
        let response = await rawResponse.json()
        if (response.result) {
            loadUsers()
            unSetModal()
            setMessage(<span style={{ color: 'lightgreen' }}>{response.success}</span>)
            closeMessage()
        } else {
            unSetModal()
            setMessage(<span style={{ color: 'lightcoral' }}>{response.error}</span>)
            closeMessage()
        }
    }

    // DISPLAY THE FOOTER OF EACH USER WHEN SCREEN < 650
    const handleUserDropdownClick = (index) => {
        setUsers(users.map((user, i) => {
            if (i === index) {
                if (user.visible === false) {
                    return { ...user, visible: true }
                } else {
                    return { ...user, visible: false }
                }
            } else {
                return { ...user }
            }
        }))
    }

    // SORT USERS BY LOGIN
    const handleIdDropdownClick = () => {
        if(isIdAscendant) {
            setUsers([...users.sort(dynamicSort("login"))])
        } else {
        setUsers([...users.sort(dynamicSort("login")).reverse()])
        }
        setIsIdAscendant(() => !isIdAscendant)
    }

    // SORT USERS BY EMAIL
    const handleEmailDropdownClick = () => {
    if(isEmailAscendant) {
        setUsers([...users.sort(dynamicSort("email"))])
    } else {
    setUsers([...users.sort(dynamicSort("email")).reverse()])
    }
    setIsEmailAscendant(() => !isEmailAscendant)
    }

    return (
        <>
            <UsersHeader 
                users={users}
                message={message}
                setModal={setModal}
                unSetModal={unSetModal}
                handleAddUserSubmit={handleAddUserSubmit}
            />          
            <UsersTable
                loading={loading}
                isIdAscendant={isIdAscendant}
                isEmailAscendant={isEmailAscendant}
                users={users}
                setModal={setModal} 
                unSetModal={unSetModal}
                handleUserDropdownClick={handleUserDropdownClick}
                handleIdDropdownClick={handleIdDropdownClick} 
                handleEmailDropdownClick={handleEmailDropdownClick} 
                handleUpdateUserSubmit={handleUpdateUserSubmit}
                handleDeleteUserSubmit={handleDeleteUserSubmit}
            />   
        </>
    )
}

export default Users