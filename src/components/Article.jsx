import React from 'react'

function Article({article}) {
  return (
    <div>
        <h3>{article.title}</h3>
        {article.date ? (
            <small>{article.date}</small>
        ) : (
            <small>January 1, 1970</small>
        )}
        <p>{article.preview}</p>
    </div>
  )
}

export default Article