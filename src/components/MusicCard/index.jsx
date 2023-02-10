import React from 'react'

//Styles
import "./MusicCard.scss"
const MusicCard = ({title, subtitle, images: { background} }) => {
  return (
    <div className='music_card'>
        <div className='music_card__image'>
            <img src={background} alt="" />
        </div>
        <div children className='music_card__text'>
            <h3>{title}</h3>
            <p>{subtitle}</p>
        </div>
    </div>
    )
}

export default MusicCard