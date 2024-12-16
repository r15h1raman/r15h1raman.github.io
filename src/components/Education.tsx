import "./Education.css";
function Education() {
  return (
    <div>
      {EducationEntry(
        "Georgia Tech",
        "Atlanta, GA",
        "M.S. in CS (Machine Learning)",
        "May 2025"
      )}
      {EducationEntry(
        "Georgia Tech",
        "Atlanta, GA",
        "B.S. in CS (AI/ML and Systems)",
        "May 2024"
      )}
    </div>
  );
}

function EducationEntry(
  institution: string,
  location: string,
  degree: string,
  graduationDate: string
) {
  return (
    <div className="education-entry">
      <div className="row">
        <div className="left">
          <b>{institution}</b>
        </div>
        <div className="right">{location}</div>
      </div>
      <div className="row">
        <div className="left">
          <i>{degree}</i>
        </div>
        <div className="right">
          <i>{graduationDate}</i>
        </div>
      </div>
    </div>
  );
}

export default Education;
