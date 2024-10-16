import React from 'react'
import ArticleList from "./ArticleList";
import Aside from "./Aside";

const Main = ({articles}) => {
  return (
    <main className="main-container">
        <ArticleList articles={articles}/>
        <Aside/>
    </main>
  )
}

export default Main