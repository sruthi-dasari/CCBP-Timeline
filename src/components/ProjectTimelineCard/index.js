import './index.css'
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {imageUrl, projectTitle, duration, description} = projectDetails
  return (
    <div className="project-timeline-card-container">
      <img src={imageUrl} alt="" />
      <div>
        <h1>{projectTitle}</h1>
        <div>
          <AiFillCalendar />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      {/* <Link> */}
      <p className="visit-text">Visit</p>
      {/* </Link> */}
    </div>
  )
}

export default ProjectTimelineCard
