import { useState, useRef, useEffect } from 'react';
import { Usuario, ReqResListado } from '../interfaces/reqRes';
import { reqResApi } from '../api/reqRes';


export const useUsuarios = () => {
    const [usuarios, setusuarios] = useState<Usuario[]>([]);

    const paginaRef = useRef(1)

    useEffect(() => {
      
        cargarUsuarios();
        

    }, [])

    const cargarUsuarios = async() => {

           //Llamado al Api

           const resp= await reqResApi.get<ReqResListado>('/users',{
               params:{
                   page: paginaRef.current
               }
           })

           if(resp.data.data.length>0){
               setusuarios(resp.data.data);
               
           } else{
            paginaRef.current--;
               alert('No hay mas registros');
           }

           setusuarios(resp.data.data);
           

    }

    const paginaSiguiente= ()=>{
        paginaRef.current++;
        cargarUsuarios();

    }

    const paginaAnterior = ()=>{

        if(paginaRef.current>1){
            paginaRef.current--;
            cargarUsuarios();
        }

    }

    return{
        usuarios,
        paginaSiguiente,
        paginaAnterior,
        
    }
}
