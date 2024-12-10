import { useState, useEffect } from 'react';
import FilterSection from '../components/FilterSection';
import Figures from '../components/Figures';
import Load from '../components/Load';

export default function LandingPage() {
    //var favoritos = localStorage.getItem('favoritos') // Obtiene el estado de registro del usuario de sessionStorage
    const [figures, setFigures] = useState([]);
    //const [favorites, setFavorites] = useState(favoritos !== null ? JSON.parse(favoritos) : []);
    const [pagination, setPagination] = useState(8);
    /*const [alert, setAlert] = useImmer({
        show: false,
        type: 'success',
        message: ''
    });*/
    const [filter, setFilter] = useState({
        minPrice: 0,
        maxPrice: 0
    });

    /*useEffect(() => {
        favoritos = localStorage.getItem('favoritos') && 
            JSON.parse(localStorage.getItem("react-notes-app-data"))
    }, []);*/
  
    useEffect(() => {
      fetch('/data/star-wars-figures.json')
        .then(response => {
          if(!response.ok){
              throw new Error("Error en la petición por favor recarga la página");
          }
          return response.json();
        })
        .then(data => {
          console.log(data);
          //proyectosRef.current = data; // Save data into ref
          setFigures(data);
          /*setProyectos(draft => { //immer - le añades al array existente (draft) las nuevas entradas
            draft.push(...data);
          });*/
        })
        .catch(error => {
          console.error(error)
          //handleAlert({type: "danger", text: "Error en la petición por favor recarga la página"});
        });
    }, []);
    /*function handleAlert({type, text}){
        setAlert({show:true, type, text});
        setTimeout(() => {
          setAlert({show:false});
        }, 5000)
    }*/
  
    /*function handleFavorite(id){
        const newFavorites = figures.filter(figure => {
            if(figure.id ===favorites.id){
                figure.favorite = !figure.favorite;
            }
            return figure.favorite;
            setFilter(e.target.value);
            setProyectos(proyectosRef.current.filter(proyecto => {
              proyecto.title.toLowerCase().includes(filter.toLowerCase()
            )}));
        });

        setFavorites(newFavorites);
        localStorage.setItem('favoritos', JSON.stringify(newFavorites));
    }*/
    function handleLoad(){
      setPagination(pagination + 4);
    }
    function handleFilter(filtrado){
        const minPrice = filtrado.minPrice;
        const maxPrice = filtrado.maxPrice;
        setFilter({minPrice, maxPrice});
        const newFigures = figures.filter(figure => {
            return ((figure.price >= filter.minPrice) && (figure.price <= filter.maxPrice))
        });

        setFigures(newFigures);
    }
    return (
        <>
            <FilterSection handleFilter={handleFilter} />
            <Figures figures={figures} pagination={pagination} />
            <Load handleLoad={handleLoad}/>
        </>
    )
}