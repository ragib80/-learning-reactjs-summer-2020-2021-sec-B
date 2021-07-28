import { useParams } from "react-router";
import { useState } from "react";


const CreateUser = ({ status, onAdd }) => {
    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const [dept, setDept] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!name) {
            alert('Please add an User')
            return
        }

        onAdd({ name, id, dept })

        setName('')
        setId('')
        setDept('')

    }

    const { id: eid } = useParams();


    return (
        <>
            <br />
            <h2> This is {status} user page  </h2>
            <form onSubmit={onSubmit}>

                Name: <input
                    type='text'
                    name='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)} /> <br />
                ID: <input
                    type='text'
                    name='id'
                    value={id}
                    onChange={(e) => setId(e.target.value)} /><br />
                Dept: <input
                    type='text'
                    name='dpet'
                    value={dept}
                    onChange={(e) => setDept(e.target.value)} /><br />

                <input type='submit' value={status === 'add' ? 'Create' : 'Update'} />
            </form>
        </>
    );
}

export default CreateUser;