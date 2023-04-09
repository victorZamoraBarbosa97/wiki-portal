import React, { useState } from 'react'

import { ProjectBox } from './ProjectBox'
import { GetActualDate } from '../functions/functionsHome'

export const ProjectSection = () => {

  // estados para cambiar vista de projectos
  const [ classesGridView, setClassesGridView ] = useState('view-btn grid-view active');
  const [ classesListView, setClassesListView ] = useState('view-btn list-view');
  const [ classesProjectsList, setClassesProjectList ] = useState('project-boxes jsGridView');


  // cambiar vista a list 
  const handleListViewClick = () => {
    setClassesGridView( classesGridView === 'view-btn grid-view active' ? 'view-btn grid-view': 'view-btn grid-view active' );
    setClassesListView( classesListView === 'view-btn list-view'? 'view-btn list-view active': 'view-btn list-view' );
    setClassesProjectList( classesProjectsList === 'project-boxes jsGridView' ? 'project-boxes jsListView' : 'project-boxes jsGridView' )
  }
  
  
  // Cambiar vista a grid
  const handleGridView = () => {
    setClassesGridView( classesGridView === 'view-btn grid-view' ? 'view-btn grid-view active': 'view-btn grid-view' );
    setClassesListView( classesListView === 'view-btn list-view active'? 'view-btn list-view': 'view-btn list-view active' );
    setClassesProjectList( classesProjectsList === 'project-boxes jsListView' ? 'project-boxes jsGridView' : 'project-boxes jsListView' )
  }


  return (
    <div className ="projects-section animate__animated animate__fadeIn animate__fast">

      <div className ="projects-section-header">
        <p>Proyectos</p>
        
        {/* sacar fecha automaticamente   */}
        <p className ="time"> { GetActualDate() } </p>
      </div>

      <div className ="projects-section-line">

        <div className ="projects-status">

          <div className ="item-status">
            <span className ="status-number">45</span>
            <span className ="status-type">In Progress</span>
          </div>

          <div className ="item-status">
            <span className ="status-number">24</span>
            <span className ="status-type">Upcoming</span>
          </div>

          <div className ="item-status">
            <span className ="status-number">62</span>
            <span className ="status-type">Total Projects</span>
          </div>

        </div>

        <div className ="view-actions">

          <button className = { classesListView } title="List View"  onClick={ handleListViewClick }>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth ="2" strokeLinecap ="round" strokeLinejoin ="round" className ="feather feather-list">
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <line x1="3" y1="6" x2="3.01" y2="6" />
              <line x1="3" y1="12" x2="3.01" y2="12" />
              <line x1="3" y1="18" x2="3.01" y2="18" />
            </svg>
          </button>

          <button className ={ classesGridView } title="Grid View" onClick={ handleGridView }>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth ="2" strokeLinecap ="round" strokeLinejoin ="round" className ="feather feather-grid">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
          </button>

        </div>

      </div>

      <div className = { classesProjectsList }>

        {/* TODO: onclik funcion para cada project box *añadir direccion en router */}
        <ProjectBox fecha = "23-MARZO-2023" titulo = 'Proyecto 1' subtitulo= 'Tipos de inmuebles'  conectados = "40%" color = "#fee4cb" />
        <ProjectBox fecha = "01-MARZO-2022" titulo = 'Proyecto 2' subtitulo= 'Tipos de inmuebles'  conectados = "20%" color = "#e9e7fd" />
        <ProjectBox fecha = "14-MARZO-2023" titulo = 'Proyecto 3' subtitulo= 'Tipos de inmuebles'  conectados = "30%" color = "#c8f7dc" />
        <ProjectBox fecha = "25-MARZO-2023" titulo = 'Proyecto 4' subtitulo= 'Tipos de inmuebles'  conectados = "60%" color = "#ffd3e2" />
        <ProjectBox fecha = "31-MARZO-2023" titulo = 'Proyecto 5' subtitulo= 'Tipos de inmuebles'  conectados = "15%" color = "#fee4cb" />
        <ProjectBox fecha = "18-MARZO-2023" titulo = 'Proyecto 6' subtitulo= 'Tipos de inmuebles'  conectados = "100%" color = "#c8f7dc" />
      </div>

    </div>
  )
}



