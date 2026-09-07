import "./Education.css";
function Education() {
  return (
    <div>
      {EducationEntry(
        "Georgia Tech",
        "Atlanta, GA",
        "M.S. in CS (Machine Learning)",
        "May '25",
      )}
      {EducationEntry(
        "Georgia Tech",
        "Atlanta, GA",
        "B.S. in CS (AI/ML and Systems)",
        "May '24",
      )}
    </div>
  );
}

function EducationEntry(
  institution: string,
  location: string,
  degree: string,
  graduationDate: string,
) {
  return (
    <div className="education-entry">
      <div className="row">
        <div className="left">
          <strong className="entry-name">{institution}</strong>
        </div>
        <div className="right">{location}</div>
      </div>
      <div className="row entry-detail">
        <div className="left">{degree}</div>
        <div className="right">{graduationDate}</div>
      </div>
    </div>
  );
}

export default Education;
