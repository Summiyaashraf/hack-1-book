import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

export default function Home() {
  return (
    <Layout
      title="Physical AI & Humanoid Robotics Textbook"
      description="A comprehensive framework for mastering Physical AI, Humanoid systems, and Intelligent Motion."
    >
      {/* HERO SECTION */}
      <header
        style={{
         padding: "100px 20px",
    textAlign: "center",
    background: "linear-gradient(135deg, #281f05ff 0%, #604e07ff 50%, #dead44ff 150%)", 
    borderBottom: "6px solid #d49b20ff",
    color: "white",
        }}
      >
        <h1 style={{ fontSize: "52px", fontWeight: "800", marginBottom: "20px", letterSpacing: "-1px" }}>
          Physical AI & Humanoid Robotics Textbook
        </h1>
        <p style={{ fontSize: "21px", maxWidth: "800px", margin: "0 auto", lineHeight: "1.6", opacity: "0.9" }}>
          Explore the frontier of Physical Intelligence. A structured deep-dive into 
          humanoid engineering, ROS 2 architectures, VLA integration, and 
          next-generation autonomous systems.
        </p>

        <div style={{ marginTop: "45px" }}>
          <Link
  className="button button--lg"
  style={{
    backgroundColor: '#9e7214ff',
    color: 'white',
    padding: '15px 35px',
    borderRadius: '12px',
    border: 'none',
    fontWeight: '700',
    fontSize: '18px',
    boxShadow: '0 4px 15px rgba(235, 220, 161, 1)',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    display: 'inline-block',
    cursor: 'pointer'
  }}
  to="/docs/introduction/intro"
>
  Start Reading →
</Link>
        </div>
      </header>

      {/* ABOUT SECTION */}
      <section style={{ padding: "70px 20px", maxWidth: "950px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "34px", marginBottom: "25px", textAlign: "center", fontWeight: "700" }}>
          The Intelligence Revolution
        </h2>
        <p style={{ fontSize: "19px", lineHeight: "1.8", color: "#333", textAlign: "center" }}>
          This technical guide provides an end-to-end roadmap for building embodied agents. 
          From the intricacies of ROS 2 nodes to the complexities of Vision-Language-Action (VLA) 
          models, we bridge the gap between high-level AI and real-world physical motion.
        </p>
      </section>

      {/* MODULE CARDS - Rephrased Content */}
      <section style={{ padding: "60px 20px", background: "#f4f6f9" }}>
        <h2 style={{ fontSize: "30px", marginBottom: "45px", textAlign: "center", color: "#1a1a1a" }}>
          Technical Modules
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* MODULE 1 */}
          <div style={cardStyle}>
            <h3 style={cardTitle}>01. Robotics OS (ROS 2)</h3>
            <p style={cardText}>
              Master the core communication layer. Understand publishers, async services, 
              and lifecycle nodes for robust robotic control systems.
            </p>
            <Link style={cardBtn} to="/docs/ros2-foundations/module-1-ros2">
              Access Module
            </Link>
          </div>

          {/* MODULE 2 */}
          <div style={cardStyle}>
            <h3 style={cardTitle}>02. Synthetic Environments (SE) </h3>
            <p style={cardText}>
              Building high-fidelity Digital Twins using Gazebo and Isaac Sim.   
              Accelerate training via hardware-in-the-loop simulations.
            </p>
            <Link style={cardBtn} to="/docs/simulation/module-2-simulation">
              Access Module
            </Link>
          </div>

          {/* MODULE 3 */}
          <div style={cardStyle}>
            <h3 style={cardTitle}>03. Embedded Systems & Actuation</h3>
            <p style={cardText}>
              The physics of motion: Torque-controlled motors, IMU fusion, and 
              low-latency sensor integration for humanoid stability.
            </p>
            <Link style={cardBtn} to="/docs/hardware-basics/module-3-hardware">
              Access Module
            </Link>
          </div>

          {/* MODULE 4 */}
          <div style={cardStyle}>
            <h3 style={cardTitle}>04. VLA Architectures</h3>
            <p style={cardText}>
              Deep dive into Vision-Language-Action models. Connect multimodal perception 
              directly to real-time robotic motor commands.
            </p>
            <Link style={cardBtn} to="/docs/vla-systems/module-4-vla-foundations">
              Access Module
            </Link>
          </div>

          {/* MODULE 5 */}
          <div style={cardStyle}>
            <h3 style={cardTitle}>05. Neural Motion Planning (NMP) </h3>
            <p style={cardText}>
              Leveraging Reinforcement Learning and MPC for dynamic gait, balance, 
              and complex interaction in unstructured environments.
            </p>
            <Link style={cardBtn} to="/docs/advanced-ai-control/module-5-advanced-ai">
              Access Module
            </Link>
          </div>

          {/* MODULE 6 */}
          <div style={cardStyle}>
            <h3 style={cardTitle}>06. Humanoid Morphologies(HM) </h3>
            <p style={cardText}>
              Structural design and kinematics. Creating human-centric robotic 
              forms that optimize for both energy and agility.
            </p>
            <Link style={cardBtn} to="/docs/humanoid-design/module-6-humanoid-design">
              Access Module
            </Link>
          </div>
        </div>
      </section>

      {/* CORE PILLARS SECTION */}
      <section style={{ padding: "80px 20px", background: "white" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "40px",
          }}
        >
          <div style={featureBox}>
            <h3 style={{ color: "#bd9030ff" }}>Embodied Logic</h3>
            <p>Moving beyond static AI into agents that interact with and learn from the physical world.</p>
          </div>

          <div style={featureBox}>
            <h3 style={{ color: "#bd9030ff" }}>Implementation First</h3>
            <p>Every concept is backed by functional code, simulation assets, and deployment workflows.</p>
          </div>

          <div style={featureBox}>
            <h3 style={{ color: "#bd9030ff" }}>Future-Ready Stack</h3>
            <p>Content aligned with the latest advancements from industry leaders in humanoid development.</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <footer
        style={{
          padding: "80px 20px",
          background: "rgba(55, 46, 3, 0.92)",
          color: "white",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>Build the Future of Motion</h2>
        <p style={{ fontSize: "19px", marginBottom: "35px", opacity: "0.8" }}>
          Join the next generation of robotics engineers.
        </p>
<Link
  className="button button--lg"
  style={{
    backgroundColor: '#bd9030ff', 
    color: 'white',
    padding: '15px 35px',
    borderRadius: '12px',
    border: 'none',
    fontWeight: '700',
    boxShadow: '0 4px 15px rgba(255, 196, 0, 0.3)',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    display: 'inline-block'
  }}
  to="/docs/introduction/intro"
>
  Begin Journey
</Link>
      </footer>
    </Layout>
  );
}
// custom css
const cardStyle = {
  background: "rgba(255, 255, 255, 0.9)", 
  padding: "40px 30px",
  borderRadius: "20px", 
  boxShadow: "0 20px 40px rgba(255, 217, 0, 0.08)", 
  border: "1px solid rgba(255, 230, 0, 0.1)", 
  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)", 
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  height: "100%",
};

const cardTitle = {
  fontSize: "22px",
  fontWeight: "800",
  marginBottom: "15px",
  color: "#2a260fff", 
  letterSpacing: "-0.5px",
};

const cardText = {
  fontSize: "16px",
  color: "#696647ff", 
  marginBottom: "30px",
  lineHeight: "1.7",
};

const cardBtn = {
  textDecoration: "none",
  backgroundColor: "#bd9030ff", 
  color: "white",
  padding: "12px 24px",
  borderRadius: "10px",
  fontWeight: "600",
  fontSize: "14px",
  textAlign: "center",
  transition: "background 0.3s ease",
  display: "inline-block",
  boxShadow: "0 4px 12px rgba(96, 68, 6, 0.3)",
};

const featureBox = {
  padding: "25px",
  borderRadius: "12px",
  borderLeft: "5px solid #bd9030ff",
  background: "linear-gradient(90deg, #f0f7ff 0%, #ffffff 100%)", 
  marginBottom: "20px",
};