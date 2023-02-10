import React, { useEffect } from 'react'
import MusicCard from '../../components/MusicCard'
import { useSongs } from '../../hooks/useSongs'
import { songsService } from '../../services/songs.service'
import "./Main.scss"

const Main = () => {
  const { songs, saveSongs } = useSongs()

  useEffect(() => {
    const fetch = async () => {
      const res = await songsService.getRecommmendation()
      
      saveSongs(res.tracks)
    
    }
      
    fetch()
  }, [])

  console.log(songs)

  return (
    <div className='main_page'>
      {
        songs?.length && songs.map((item, idx) => (
          <MusicCard key={idx} {...item} />
        ))
      }
    </div>
  )
}

export default Main