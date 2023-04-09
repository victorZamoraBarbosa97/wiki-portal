import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const ProjectBox = ( { fecha, titulo, subtitulo, conectados, color  } ) => {


  return (
    <div className ="project-box-wrapper" style = {{ cursor: 'pointer' }} >
        <Link to = "/ProjectDetails"  style= {{ textDecoration: 'none' }} >
            <div className ="project-box" style={{ backgroundColor: `${ color }` }} >
                <div className ="project-box-header">
                    <span>{ fecha }</span>
                    <div className ="more-wrapper">
                        <button className ="project-btn-more">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth ="2" strokeLinecap ="round" strokeLinejoin ="round" className ="feather feather-more-vertical">
                            <circle cx="12" cy="12" r="1" />
                            <circle cx="12" cy="5" r="1" />
                            <circle cx="12" cy="19" r="1" /></svg>
                        </button>
                    </div>
                </div>

                <div className ="project-box-content-header">
                    <p className ="box-content-header"> { titulo } </p>
                    <p className ="box-content-subheader"> { subtitulo } </p>
                </div>

                <div className ="box-progress-wrapper">
                    <p className ="box-progress-header"> Conectados </p>
                    <div className ="box-progress-bar">
                    <span className ="box-progress" style={{ width: `${conectados}`, backgroundColor: "#4067f9" }} ></span>
                    </div>
                    <p className ="box-progress-percentage">{ conectados }</p>
                </div>

                <div className = "project-box-footer">
                    <div className = "participants">
                    <img src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt="participant"/>
                    <img src="https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2555&q=80" alt="participant"/>
                    <button className ="add-participant" style= {{ color: "#4067f9" }} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth ="3" strokeLinecap ="round" strokeLinejoin ="round" className ="feather feather-plus">
                        <path d="M12 5v14M5 12h14" />
                        </svg>
                    </button>
                    </div>
                    <div className ="days-left" style = {{color: "#4067f9" }} > Hace 2 días </div>
                </div>

            </div>
        </Link>
    </div>
  )
}

// definiendo el tipo de dato de las propiedades del componente
ProjectBox.propTypes = {
    color:PropTypes.string.isRequired,
    conectados: PropTypes.string.isRequired,
    fecha: PropTypes.string.isRequired,
    subtitulo: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired
}


ProjectBox.defaultProps = {
    
}



