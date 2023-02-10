import { SongsContext } from "../context/songs.context"
import { useContext } from "react"
export const useSongs = () => {
    const {songs, setSongs } = useContext(SongsContext)
    
    const saveSongs = (value) => {
        setSongs(value)
    }
    return {
        songs,
        saveSongs
    }
}