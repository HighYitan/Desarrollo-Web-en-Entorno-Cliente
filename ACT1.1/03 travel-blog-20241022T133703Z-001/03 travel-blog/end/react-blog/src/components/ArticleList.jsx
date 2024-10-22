import React from 'react'
import Article from './Article';
import NotFound from './NotFound';

// const articles = [
//     {
//         "id":1,
//         "img":"./assets/img/imagen_1.jpg",
//         "title":"Viajar a Londres",
//         "desc":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, cum magnam vel ut harum obcaecati ad eveniet reprehenderit sed dolorum debitis quos earum numquam rerum, corrupti pariatur nam, temporibus perferendis laboriosam in nemo impedit! Vero reiciendis voluptas aut sit corporis, dignissimos atque placeat, hic error, autem rem fugiat ducimus molestias."
//     },
//     {
//         "id":2,
//         "img":"./assets/img/imagen_2.jpg",
//         "title":"Viajar a Londres intenerario 3",
//         "desc":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, cum magnam vel ut harum obcaecati ad eveniet reprehenderit sed dolorum debitis quos earum numquam rerum, corrupti pariatur nam, temporibus perferendis laboriosam in nemo impedit! Vero reiciendis voluptas aut sit corporis, dignissimos atque placeat, hic error, autem rem fugiat ducimus molestias."
//     },
//     {
//         "id":3,
//         "img":"./assets/img/imagen_3.jpg",
//         "title":"Viajar a Londres undeground",
//         "desc":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, cum magnam vel ut harum obcaecati ad eveniet reprehenderit sed dolorum debitis quos earum numquam rerum, corrupti pariatur nam, temporibus perferendis laboriosam in nemo impedit! Vero reiciendis voluptas aut sit corporis, dignissimos atque placeat, hic error, autem rem fugiat ducimus molestias."
//     }
// ];

const ArticleList = ({articles}) => {
    if (articles.length<=0) return <NotFound/>
    else
        return (
            <section className="articulos">
            {
                articles.map(e=>
                    <Article key={e.id} title={e.title} img={e.img} desc={e.desc} />
                    )
            }
            </section>
        )
 }

export default ArticleList;