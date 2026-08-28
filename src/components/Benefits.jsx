import "./Benefits.css";

function Benefits() {
  const benefits = [
    {
      number: "01",
      title: "Practical Skills",
      description:
        "Gain practical digital skills that you can apply to real projects, work and business.",
      icon: "💡",
    },
    {
      number: "02",
      title: "Real-World Projects",
      description:
        "Build projects that help you develop confidence and demonstrate what you can actually do.",
      icon: "🛠️",
    },
    {
      number: "03",
      title: "Certificate of Completion",
      description:
        "Receive a certificate to recognize your successful completion of your training programme.",
      icon: "🏆",
    },
    {
      number: "04",
      title: "Career & Business Opportunities",
      description:
        "Develop skills that can help you pursue employment, freelancing or your own digital business.",
      icon: "🚀",
    },
  ];

  return (
    <section className="benefits" id="benefits">
      <div className="benefits-heading">
        <span>What You'll Gain</span>

        <h2>More Than Just Training</h2>

        <p>
          At Resilient Institute, we focus on helping you turn knowledge
          into practical skills, confidence and opportunities.
        </p>
      </div>

      <div className="benefits-container">
        {benefits.map((benefit) => (
          <div className="benefit-card" key={benefit.number}>
            <div className="benefit-top">
              <span className="benefit-number">
                {benefit.number}
              </span>

              <span className="benefit-icon">
                {benefit.icon}
              </span>
            </div>

            <h3>{benefit.title}</h3>

            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Benefits;