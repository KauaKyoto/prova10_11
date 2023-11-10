import React from 'react'
import '../Post.css'

const Post = ({titulo, imagem, descricao, categoria}) => {
    return(
        <div className='post'>
            <h2 className='titulo'>{titulo}</h2>
            <img src={imagem} className='imagem'/>
            <br></br>
            <p className='descricao'>{descricao}</p>
            <br></br>
            <p className='categoria'>{categoria}</p>
        </div>
    )
}

export default Post; 