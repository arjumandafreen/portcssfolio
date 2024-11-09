import Image from "next/image";

const AboutSection: React.FC = () => {
  return (
    <section>
      <div className="about-container">
        <h2 className="about-title">
          About{" "}
          <span className="highlight-text">Me</span>
        </h2>

        <div className="about-grid">
          <Image
            src="/images/about1.png"
            alt="About Section Image"
            width={500}
            height={500}
            className="about-image"
          />

          <div className="about-text">
            <div className="info-box">
              <p className="text-content">
                Hello I am Arjumand Afreen, a passionate front-end web developer with a
                strong foundation in TypeScript, JavaScript, HTML, CSS, and Node.js.
                <br />{" "}
              </p>
            </div>

            <div className="info-box">
              <p className="text-content">
              I have done my M.Sc from Federal Urdu University, and I have also completed my M.B.A from a well-reputed university.<br /><br />
                I am constantly expanding my knowledge and skill set, eager to stay up-to-date with the latest technologies and trends in the industry.<br /><br />
                Whether I’m developing responsive websites or diving into innovative AI solutions, I strive to create meaningful and impactful digital experiences.<br /><br />
                Currently, I’m looking for opportunities in a reputable software house where I can further hone my skills and contribute to exciting projects.<br /><br />
                Feel free to explore my work and get in touch!
                <br />
              </p>
            </div>

            <div className="info-box">
              <p className="text-content">
                I accept new challenges on innovative projects.
                 i explore new technologies and learn new skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;