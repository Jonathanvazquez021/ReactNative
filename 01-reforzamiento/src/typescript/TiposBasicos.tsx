

export const TiposBasicos = () => {


    const nombre: string ='Jonathan';
    const edad: number = 35;
    const estaActivo: boolean = true;

    const poderes: string[] = ['velocidad','volar','aquatico'];



    return (
        <>
            <h3>Tipos Básicos</h3>
            {nombre},{edad},{(estaActivo)?'activo':'no activo'}
            <br/>
            {poderes.join(', ')}
        </>
    )
}
