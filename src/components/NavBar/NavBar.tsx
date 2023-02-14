import './NavBar.css';

export default function Navbar({ language }: { language: string }) {

  return (
    <nav className="navbar">
      <a href="#home" className="link-navbar">Home</a>
      <a href="#about-me" className="link-navbar">About me</a>
      <a href="#projects" className="link-navbar">Projects</a>
      <a href="#technologies" className="link-navbar">Technologies</a>
      <a href="#contact" className="link-navbar">Contact</a>
    </nav>
  )
}