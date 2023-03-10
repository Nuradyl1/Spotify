import React, { useLayoutEffect } from 'react'
import { useTitle } from '../hooks/useTitle'


//components
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

//Styles
import "./layout.scss"

const MainLayout = ({ children, title }) => {
  const {rename} = useTitle()

  useLayoutEffect(() => {
    if(title) {
      rename(title)
    }
  }, [title])
  return (
    <div className='layout'>
      <div className="layout__sidebar">
        <Sidebar />
      </div>

      <div className="layout__content">
        <div className="layout__content__header">
          <Header />
        </div>
        {children}
      </div>
    </div>
  )
}

export default MainLayout