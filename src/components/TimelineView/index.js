import {Chrono} from 'react-chrono'
import './index.css'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props

  const courseItemsList = timelineItemsList.filter(
    eachItem => eachItem.categoryId === 'COURSE',
  )

  const projectItemsList = timelineItemsList.filter(
    eachItem => eachItem.categoryId === 'PROJECT',
  )

  return (
    <div className="chrono-container">
      <h1 className="heading1">MY JOURNEY OF</h1>
      <h1 className="heading2">CCBP 4.0</h1>
      <Chrono mode="VERTICAL_ALTERNATING">
        {courseItemsList.map(eachItem => (
          <CourseTimelineCard courseDetails={eachItem} />
        ))}
        {projectItemsList.map(eachItem => (
          <ProjectTimelineCard projectDetails={eachItem} />
        ))}
      </Chrono>
    </div>
  )
}

export default TimelineView
