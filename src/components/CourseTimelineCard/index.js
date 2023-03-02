import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, duration, description, tagsList} = courseDetails
  return (
    <div className="course-timeline-card-container">
      <div>
        <h1>{courseTitle}</h1>
        <div>
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <div>
        {tagsList.map(eachItem => (
          <TagItem tagDetail={eachItem} key={eachItem.id} />
        ))}
      </div>
    </div>
  )
}

const TagItem = props => {
  const {tagDetail} = props
  const {name} = tagDetail

  return (
    <div>
      <p>{name}</p>
    </div>
  )
}

export default CourseTimelineCard
