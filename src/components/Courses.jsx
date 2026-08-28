import "./Courses.css";

function Courses() {
  const courses = [
    {
      icon: "💻",
      title: "Frontend Web Development",
      description:
        "Learn HTML, CSS, JavaScript and React to build modern, responsive and interactive websites.",
      duration: "3 Months",
    },
    {
      icon: "📊",
      title: "Data Analysis",
      description:
        "Learn how to clean, analyze and visualize data using Excel and other practical data analysis tools.",
      duration: "3 Months",
    },
    {
      icon: "🎨",
      title: "Graphic Design",
      description:
        "Develop creative design skills and learn how to create professional graphics for individuals and businesses.",
      duration: "2 Months",
    },
    {
      icon: "🤖",
      title: "Prompt Engineering",
      description:
        "Learn how to effectively communicate with AI tools and use prompt engineering to improve productivity.",
      duration: "1 Month",
    },
  ];

  return (
    <section className="courses" id="courses">
      <div className="courses-heading">
        <span>Our Programs</span>

        <h2>Build Skills That Create Opportunities</h2>

        <p>
          Explore our practical digital skills training programs designed
          to help you learn, build and grow with confidence.
        </p>
      </div>

      <div className="courses-container">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <div className="course-icon">
              {course.icon}
            </div>

            <h3>{course.title}</h3>

            <p>{course.description}</p>

            <div className="course-footer">
              <span>⏱ {course.duration}</span>

              <button>Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Courses;