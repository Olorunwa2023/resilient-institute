import "./Services.css";
function Services() {
  const services = [
    {
      icon: "💻",
      title: "Web Development",
      description:
        "I build modern, responsive and user-friendly websites and web applications that help businesses and individuals establish a strong digital presence.",
    },
    {
      icon: "📊",
      title: "Data Analysis",
      description:
        "I help transform raw data into meaningful insights using tools such as Microsoft Excel and other data analysis technologies.",
    },
    {
      icon: "🎨",
      title: "Graphic Design",
      description:
        "I create professional visual designs including flyers, certificates, social media graphics and other digital materials.",
    },
    {
      icon: "🎓",
      title: "Digital Skills Training",
      description:
        "I provide practical training designed to help students, beginners and professionals develop useful digital and technology skills.",
    },
    {
      icon: "🤖",
      title: "Prompt Engineering",
      description:
        "I teach effective ways to communicate with AI tools and use them to improve productivity, creativity and digital workflows.",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">

        <div className="services-heading">
          <p className="services-subtitle">WHAT I OFFER</p>

          <h2>My Services</h2>

          <p>
            I provide digital solutions and practical technology services
            designed to help individuals, students and businesses grow.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <button>Learn More</button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;