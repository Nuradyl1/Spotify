
//Pages
import Main from "../pages/Main";
import Mediateka from "../pages/Mediateka";
import Search from "../pages/Search";

// Utils
import { routes } from "../utils/routes";

export const dataRouter = [
    {
        url: routes.main, 
        component: Main,
        title: "Главная | Spotify"
    },
    {
        url: routes.search, 
        component: Search,
        title: "Поиск | Spotify"
    },
    {
        url: routes.mediateka, 
        component: Mediateka,
        title: "Медиатека | Spotify"
    }
]