import React from 'react'
import picture from './picture.jpg'
import './component.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


export default function Info(){
    return (
        <section className ="info">
          <img src= {picture} alt="profile picture" width="313" height = "313" />
          <h1>Amoo Akolade</h1>
          <h6>Frontend Developer</h6>
          <small>amooakolade.website</small>
          <FontAwesomeIcon icon="fa-solid fa-envelope" />
          <button >
            <a href ="mailto:azeezakolade1995@gmail.com"><FontAwesomeIcon icon={faEnvelope} />Email</a>
          </button>
        </section>
    );
}