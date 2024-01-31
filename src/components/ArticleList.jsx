import React from 'react'
import Article from './Article'

function ArticleList({articles}) {
  return (
    <main>
        <div>
            {articles.map((article, index) => (
                <Article key={article.id} article={article}/>
            ))}
        </div>
    </main>
  )
}

export default ArticleList