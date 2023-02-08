import React from 'react'
import { routes } from '../../utils/routes'
import { FaSpotify } from "react-icons/fa"
import {BsFillHouseDoorFill } from "react-icons/bs"
import {RiSearchLine } from "react-icons/ri"
import {BiLibrary } from "react-icons/bi"
import { NavLink } from 'react-router-dom'
import "./Sidebar.scss"

const Links = [
    {
        name: "Главное",
        url: routes.main,
        icon: (
            <BsFillHouseDoorFill />
        )
    },
    {
        name: "Поиск",
        url: routes.search,
        icon: (
            <RiSearchLine />
        )
    },
    {
        name: "Медиатека",
        url: routes.mediateka,
        icon: (
            <BiLibrary />
        )
    }
]
const Sidebar = () => {

    return (
        <div className='Sidebar'>
            <div className="sidebar__logo">
                <FaSpotify style={{ fontSize: "50px"}} />
                <span>Spotify</span>
            </div>

            <div className="sidebar__links">
                {
                    Links.map((item) => (
                        <NavLink 
                            className="sidebar__links__item"
                            to={item.url}
                            key={item.url}
                            >
                            <div className="icon">
                                {item.icon}
                            </div>
                            {item.name}
                        </NavLink>
                    ))
                }
            </div>
        </div>
  )
}

export default Sidebar