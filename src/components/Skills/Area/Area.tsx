import './Area.css'

type Props = {
  title: string,
  entries: { name: string, icon: string }[],
  scrollTechnologies: boolean
};

export default function Area({ title, entries, scrollTechnologies }: Props) {
  return (
    <div className='area-container'>
      <h3 className='area-title'>{title}</h3>
      <div className='area-entries'>
        {
          entries.map((ele, i) => (
            <div className={`area-item-container ${scrollTechnologies ?
              i % 2 == 0 ? 'left-area-item' : 'right-area-item'
              : ""}`
            } key={i}>
              <h4 className='area-name' >{ele.name}</h4>
              <img className='area-icon' src={ele.icon} alt={ele.name} draggable={false} />
            </div>
          ))
        }
      </div>
    </div>
  );
}