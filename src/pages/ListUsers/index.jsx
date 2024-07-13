import Button from "../../components/Button"
import TopBackground from "../../components/TopBackground"
import { useEffect, useState } from "react"
import {Container, ContainerUsers, Title,CardUsers, TrashIcon, AvatarUser} from "./styles"
import api from "../Home/services/api"
import Trash from "../../assets/trash.svg"
import { useNavigate } from "react-router-dom"




function ListUsers() {

    const [users, setUsers] = useState ([])
    const navigate = useNavigate ()
    useEffect(() => {

        async function getUsers() {
            const { data } = await api.get("/usuarios")
            setUsers(data)
        }

        getUsers()
    }, [])

    async function deleteUsers (id) {

await api.delete (`/usuarios/${id}`)

const updateUsers = users.filter (user => user.id !== id)

setUsers (updateUsers)

    }
   

    return (

       <Container>
            <TopBackground />


            <Title> Lista de Usuários </Title>
<ContainerUsers>
            {users.map(user => (
               <CardUsers key={user.id}>
                <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`}/>
               <div>
                    <h3>{user.name}</h3>
                     <p>{user.Age}</p>
                    <p>{user.email}</p>
                    
                </div>
                <TrashIcon src= {Trash} alt="icone-lixo" onClick={ () => deleteUsers(user.id)}/>
                </CardUsers>

            ))}

</ContainerUsers>

            <Button type="button" onClick={() => navigate ("/")} > Voltar</Button>
            </Container>


    )

}

export default ListUsers