import "../css/AboutUs.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

// eslint-disable-next-line react/prop-types
const TeamMemberCard = ({ name, position, imgSrc, social }) => {
  return (
    <div className="column">
      <div className="card">
        <div className="img">
          <img className="profile-img" src={imgSrc} alt={name} />
        </div>
        <h3 className="name">{name}</h3>
        <p className="position">{position}</p>
        <div className="icons">
          {social.map((link, index) => (
            <a href={link.url}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const TeamSection = ({ teamData }) => {
  return (
    <>
      <Navbar />
      <section className="root1">
        <div className="row">
          <h1 className="h11"> Meet Our Team</h1>
        </div>
        <div className="row">
          {
            // eslint-disable-next-line react/prop-types
            teamData.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))
          }
        </div>
      </section>
    </>
  );
};

const jsonData = [
  {
    name: "Suhani Sandhu ",
    position: "Team Leader",
    imgSrc: "../src/assets/suhani image.jpg", 
    social: [
      {
        url: "https://www.linkedin.com/in/suhani-sandhu-638769354",
        icon: "fab fa-linkedin",
      },
    ],
  },
  {
    name: "Jassika ",
    position: "Team Member",
    imgSrc: "../src/assets/jassika image.jpg",
    social: [
      {
        url: "https://www.linkedin.com/in/jassika-bhagat-2b099a385",
        icon: "fab fa-linkedin",
      },
    ],
  },
  {
    name: "Sneha ",
    position: "Team Member",
    imgSrc: "../src/assets/sneha image.jpg",
    social: [
      {
        url: "https://www.linkedin.com/in/sneha-12abb6356",
        icon: "fab fa-linkedin",
      },
    ],
  },
  {
    name: "Nikhil ",
    position: "Team Member",
    imgSrc: "../src/assets/nikhil.jpg",
    social: [
      {
        url: "https://www.linkedin.com/in/nikhil-rao-9a9497381",
        icon: "fab fa-linkedin",
      },
    ],
  },

  {
    name: "Saurav",
    position: "Team Member",
    imgSrc: "../src/assets/saurav image.jpg",
    social: [
      {
        url: "https://www.linkedin.com/in/saurav-royal-a93384352?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        icon: "fab fa-linkedin",
      },
    ],
  },
];

const App = () => {
  return (
    <>
      <div>
        <TeamSection teamData={jsonData} />
      </div>
      <Footer />
    </>
  );
};

export default App;
