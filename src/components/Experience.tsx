import "./Experience.css";

function Experience() {
  return (
    <div>
      {ExperienceEntry(
        "Palantir Technologies",
        "New York, NY",
        "Software Engineer",
        "Aug '25",
        "???",
      )}
      {ExperienceEntry(
        "AWS SageMaker",
        "Seattle, WA",
        "Software Engineer Intern",
        "May '24",
        "Aug '24",
      )}
      {ExperienceEntry(
        "Comcast TPX",
        "Philadelphia, PA",
        "Software Engineer Intern",
        "May '23",
        "Aug '23",
      )}
    </div>
  );
}

function ExperienceEntry(
  company: string,
  location: string,
  position: string,
  startDate: string,
  endDate: string,
) {
  return (
    <div className="experience-entry">
      <div className="row">
        <div className="left">
          <strong className="entry-name">{company}</strong>
        </div>
        <div className="right">{location}</div>
      </div>
      <div className="row entry-detail">
        <div className="left">{position}</div>
        <div className="right">
          {startDate} - {endDate}
        </div>
      </div>
    </div>
  );
}
export default Experience;
