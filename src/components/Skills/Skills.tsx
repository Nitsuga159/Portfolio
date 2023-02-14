import './Skills.css';
import Area from './Area/Area';

export default function Skills({ scrollTechnologies }: { scrollTechnologies: boolean }) {

  const lenguagues = [
    {
      name: 'HTML', icon: require('../../images/html-logo.svg').default
    },
    {
      name: 'CSS', icon: require('../../images/css-logo.svg').default
    },
    {
      name: 'JavaScript', icon: require('../../images/javascript-logo.svg').default
    },
    {
      name: 'NodeJS', icon: require('../../images/node-logo.svg').default
    },
    {
      name: 'Typescript', icon: require('../../images/typescript-logo.svg').default
    },
    {
      name: 'PostgreSQL', icon: require('../../images/postgresql-logo.svg').default
    },
    {
      name: 'MySQL', icon: require('../../images/mysql-logo.svg').default
    },
    {
      name: 'Java', icon: require('../../images/java-logo.svg').default
    },
    {
      name: 'C', icon: require('../../images/c-logo.svg').default
    },
  ];

  const frameworks = [
    {
      name: 'React', icon: require('../../images/react-logo.svg').default
    },
    {
      name: 'Redux', icon: require('../../images/redux-logo.svg').default
    },
    {
      name: 'Express', icon: require('../../images/express-logo.svg').default
    },
    {
      name: 'Sequelize', icon: require('../../images/sequelize-logo.svg').default
    },
    {
      name: 'NestJS', icon: require('../../images/nestjs-logo.svg').default
    },
    {
      name: 'Angular', icon: require('../../images/angular-logo.svg').default
    },
    {
      name: 'MaterialUI', icon: require('../../images/materialui-logo.svg').default
    },
  ];

  const others = [
    {
      name: 'GitHub', icon: require('../../images/github-logo-black.svg').default
    },
    {
      name: 'Git', icon: require('../../images/git-logo.svg').default
    },
    {
      name: 'Figma', icon: require('../../images/figma-logo.svg').default
    },
    {
      name: 'Visual Studio Code', icon: require('../../images/visualstudiocode-logo.svg').default
    },
  ];

  return (
    <div id="technologies" className='skill-container'>
      <Area title='Lenguajes' entries={lenguagues} scrollTechnologies={scrollTechnologies} />
      <Area title='Frameworks' entries={frameworks} scrollTechnologies={scrollTechnologies} />
      <Area title='Herramientas' entries={others} scrollTechnologies={scrollTechnologies} />
    </div>
  );
}