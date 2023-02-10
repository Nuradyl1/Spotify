import { instance } from "../helpers/api"

export const songsService = {
    getRecommmendation: async () => {
        const { data } = await instance.get('songs/list-recommendations')

        return data
    }
}