import React from 'react'
import '../Coments.css'

const Coments = ({nome1, img1, comentario1}) => {
    return(
        <div className='post'>
            <h2 className='nome1'>{nome1}</h2>
            <img src={img1} className='imagem1'/>
            <br></br>
            <p className='comentario1'>{comentario1}</p>
        </div>
    )
}

export default Coments; 