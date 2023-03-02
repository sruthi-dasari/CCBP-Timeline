import {Chrono} from 'react-chrono'
import './index.css'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderCourseCard = item => <CourseTimelineCard courseDetails={item} />

  const renderProjectCard = item => (
    <ProjectTimelineCard projectDetails={item} />
  )

  const renderTimelineCard = item => {
    if (item.categoryId === 'COURSE') {
      renderCourseCard(item)
    } else {
      renderProjectCard(item)
    }
  }

  return (
    <div className="chrono-container">
      <h1 className="heading1">MY JOURNEY OF CCBP 4.0</h1>
      <Chrono mode="VERTICAL_ALTERNATING">
        {timelineItemsList.map(eachItem => renderTimelineCard(eachItem))}
      </Chrono>
    </div>
  )
}

export default TimelineView
