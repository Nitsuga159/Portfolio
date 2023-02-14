import { MouseEvent } from 'react';
import './Project.css';

interface EntriesProject {
  title: string,
  imgURL: string,
  href: string,
  description: string
  handleClose: () => void
}

export default function Project({ title, imgURL, href, description, handleClose }: EntriesProject) {
  return (
    <div className="global-container">
      <div className="container-detail-project">
        <img className="image-detail-project" src={imgURL} alt={title} />
        <div className="text-detail-project">
          <h4 className="title-detail-project">{title}</h4>
          <p className="description-detail-project">{description}</p>
        </div>
        <div className="buttons-detail-project">
          <a className="link-project" href={href} target="_blank" rel="noreferer">Ver</a>
          <a className="close-button" onClick={(e: MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            handleClose();
          }}>cerrar</a>
        </div>
      </div>
    </div>
  )
}