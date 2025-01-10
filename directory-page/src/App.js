import "./App.css";
import List from "./components/List.js";

function App() {
  // PROJECTS
  const projects = [
    { name: "Hatch NYU", link: "https://adonis-search.vercel.app/" },
    { name: "redditSim", link: "https://reddit-sim.vercel.app/" },
    { name: "Convince exe", link: "https://convincegg.vercel.app/" },
    { name: "Dragon AI", link: "https://genius-ai-opal.vercel.app/" },
    { name: "Yabnee.com", link: "https://yabnee.com/" },
    {
      name: "Arete Publishing",
      link: "https://tryarete.vercel.app/pages/YajA8slpDyustEUGayv7",
    },
  ];

  // ROLES / EXP.
  const roles = [
    { name: "IRC | Data Management Intern", link: "https://www.rescue.org/" },
    { name: "YUR | Software Engineering Intern", link: "https://yur.energy/" },
    { name: "MGL | Advisor", link: "https://www.mgl.co/" },
    {
      name: "RoVille | Game Developer",
      link: "https://www.youtube.com/watch?v=dHLVQPFt4Io",
    },
    {
      name: "Centuro | Lead Game Developer",
      link: "https://www.youtube.com/watch?v=PvZmPNo36KU",
    },
    {
      name: "Millitant | Lead Game Developer",
      link: "https://www.youtube.com/watch?v=QCxybNkAruo",
    },
  ];

  // PROFILES
  const profiles = [
    {
      name: "Twitter | Software Engineering",
      link: "https://twitter.com/abdulmendahawi",
    },
    {
      name: "Twitter | Game Development",
      link: "https://twitter.com/tickyotacky",
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/abdulmend/",
    },
    { name: "GitHub", link: "https://github.com/amendahawi" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        {/* HEADER */}
        <p>Abdul Mendahawi</p>
        <p>am13948@nyu.edu</p>

        {/* ABOUT */}
        <h4 className="secondary_text">Hello,</h4>
        <p>
          I'm a Computer Science student at NYU. I have developed several games
          (200 million+ play sessions) and built some really cool projects.
        </p>

        {/* PROJECTS */}
        <h4 className="secondary_text">Projects</h4>
        <ul>
          {projects.map((project, index) => (
            <List key={index} name={project.name} link={project.link} />
          ))}
        </ul>

        {/* ROLES / Exp. */}
        <h4 className="secondary_text">Roles / Exp.</h4>
        <ul>
          {roles.map((roles, index) => (
            <List key={index} name={roles.name} link={roles.link} />
          ))}
        </ul>

        {/* PROFILES */}
        <h4 className="secondary_text">Profiles</h4>
        <ul>
          {profiles.map((profiles, index) => (
            <List key={index} name={profiles.name} link={profiles.link} />
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
