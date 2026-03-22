import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Scientist &amp; AI Specialist</h4>
                <h5>ABB</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Driving innovation at ABB by applying Generative AI to enhance
              industrial automation, optimize operations, and unlock new
              data-driven insights. Architecting MCP server environments for
              high-availability model serving and low-latency inference.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Data Scientist</h4>
                <h5>Neewee</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Transformed manufacturing through analytics and AI. Built
              Generative AI-based chatbot solutions leveraging agentic AI
              frameworks for dynamic, context-aware conversations. Developed
              and fine-tuned LLMs for enhanced response generation and user
              engagement.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Scientist</h4>
                <h5>QualityKiosk Technologies</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Built ML models to predict potential customer bases and clustered
              users based on past activities and demographics. Developed an
              object detection validation engine, REST APIs for ML model
              consumption, and automated enterprise-level costing applications
              using Python.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
