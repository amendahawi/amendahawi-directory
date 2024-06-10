import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* HEADER */}
        <p>Abdul Mendahawi</p>
        <p>am13948@nyu.edu (yes, i read my emails)</p>
        <br></br>

        {/* ABOUT */}
        <p className="secondary_text">Hey,</p>
        <p>
          I'm a Computer Science student at NYU. I have developed several games
          (200 million+ play sessions), created a few websites, and programmed some
          pretty cool things.
        </p>
        <p>Feel free to explore this page and / or reach out to me.</p>
        <br></br>

        {/* INTERESTS */}
        <p className="secondary_text">Interests</p>
        <ul>
          <li>Virtual / Augmented Reality</li>
          <li>Game Development</li>
          <li>Computer Science</li>
          <li>Machine Learning</li>
          <li>F1 Racing</li>
        </ul>
        <br></br>

        {/* CURRENT */}
        <p className="secondary_text">Current</p>
        <ul>
          <li>
            <a
              // href=""
              target="_blank"
              rel="noopener noreferrer"
              className="currn"
            >
              To be shared soon!
            </a>
          </li>
        </ul>

        {/* PROJECTS */}
        <p className="secondary_text">Works / Exp.</p>
        <ul>
          <li>
            <a
              href="https://www.rescue.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              IRC | Data Management Intern
            </a>
          </li>
          <li>
            <a
              href="https://yur.energy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              YUR | Software Engineering Intern
            </a>
          </li>
          <li>
            <a
              href="https://www.mgl.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              MGL | Advisor
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=dHLVQPFt4Io"
              target="_blank"
              rel="noopener noreferrer"
            >
              RoVille | Game Developer
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=PvZmPNo36KU"
              target="_blank"
              rel="noopener noreferrer"
            >
              Centuro | Lead Game Developer
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=QCxybNkAruo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Millitant | Lead Game Developer
            </a>
          </li>
        </ul>
        <br></br>

        {/* LINKS */}
        <p className="secondary_text">Links</p>
        <ul>
          <li>
            <a
              href="https://twitter.com/abdulmendahawi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter | Software Engineering
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/tickyotacky"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter | Game Development
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/abdulmend/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://github.com/amendahawi"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
