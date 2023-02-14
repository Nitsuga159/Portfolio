import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import "./Block.css";

export default function Block(
  { title, scrollTop, setScrolls, property }:
    {
      title: string, scrollTop: number, property: string, setScrolls: Dispatch<SetStateAction<{
        aboutMe: boolean,
        projects: boolean,
        technologies: boolean,
        contact: boolean
      }>>
    }) {

  const div = useRef(null);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    if (!div.current) return;

    const scrollDiv = (div.current as unknown as HTMLDivElement)?.offsetTop;

    const pixels: number = window.innerWidth > 600 ? 700 : 450;

    if (scrollTop + pixels >= scrollDiv) {
      setShowText(true)
      setScrolls(scrolls => ({ ...scrolls, [property]: true }))
    }
  }, [scrollTop]);

  return (
    <div ref={div} className="block">
      <h2 className={`section-title ${showText ? 'title-apparition' : ''}`.trim()}>{title}</h2>
    </div>
  )
}