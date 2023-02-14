import { useCallback, useState } from 'react';
import Project from '../Project/Project'
import './Container.css'

interface Entries {
  title: string,
  imgURL: string,
  href: string,
  description: string
}

export default function Container({ active, entries }: { active: boolean, entries: Entries[] }) {
  const [projectSelected, setProjectSelected] = useState({
    title: '',
    imgURL: '',
    href: '',
    description: '',
    open: false
  });

  const handleClose = useCallback(() => {
    setProjectSelected(prev => ({ ...prev, open: false }));
  }, [])

  const handleOpen = useCallback((obj: Entries) => {
    setProjectSelected({ ...obj, open: true });
  }, [])

  return (
    <>
      <div
        className={`container-projects-area ${active ? 'active-projects-area' : ''}`.trim()}
      >
        {
          entries.map((entry: Entries, i: number) => (
            <div
              className={`card ${active ? 'active-card' : ''}`}
              key={i}
              onClick={() => handleOpen(entry)}
            >
              <p className='card-title'>
                {entry.title}
              </p>
              <img className='card-image' src={entry.imgURL} alt={entry.title} />

            </div>
          ))
        }
      </div>
      {
        projectSelected.open && <Project
          title={projectSelected.title}
          href={projectSelected.href}
          imgURL={projectSelected.imgURL}
          description={projectSelected.description}
          handleClose={handleClose}
        />
      }
    </>
  )
}