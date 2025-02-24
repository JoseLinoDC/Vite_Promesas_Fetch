import { useForm } from "./hooks/useForm"

export const Formularios = () => {

    const { formulario, email, password, onChange } = useForm({
        email: 'Pruebas@test.com',
        password: "InAllPassword",    
    });

    return (
        <>
            <h3>
                Formulario
            </h3>
            <input
                type="text"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={({ target }) => onChange(target.value, 'email')}
            ></input>

            <input
                type="text"
                className="form-control mt-2 mb-2"
                placeholder="Password"
                value={password}
                onChange={({ target }) => onChange(target.value, 'password')}
            ></input>

            <code>
                <pre>
                    {JSON.stringify(formulario, null, 2)}
                </pre>
            </code>
        </>
    )
}