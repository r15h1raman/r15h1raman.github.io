import "./Experience.css";

function Experience() {
  return (
    <div>
      {ExperienceEntry(
        "Palantir Technologies",
        "New York, NY",
        "Incoming Software Engineer",
        "Aug '25",
        "???"
      )}
      {ExperienceEntry(
        "AWS SageMaker",
        "Seattle, WA",
        "Software Engineer Intern",
        "May '24",
        "Aug '24"
      )}
      {ExperienceEntry(
        "Comcast TPX",
        "Philadelphia, PA",
        "Software Engineer Intern",
        "May '23",
        "Aug '23"
      )}
    </div>
  );
}

function ExperienceEntry(
  company: string,
  location: string,
  position: string,
  startDate: string,
  endDate: string
) {
  return (
    <div className="experience-entry">
      <div className="row">
        <div className="left">
          <b>{company}</b>
        </div>
        <div className="right">{location}</div>
      </div>
      <div className="row">
        <div className="left">
          <i>{position}</i>
        </div>
        <div className="right">
          <i>
            {startDate} - {endDate}
          </i>
        </div>
      </div>
    </div>
  );
}
export default Experience;
