import {Chrono} from 'react-chrono'
import './index.css'
import {Component} from 'react'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

class TimelineView extends Component {
  renderCourseCard = item => <CourseTimelineCard courseDetails={item} />

  renderProjectCard = item => <ProjectTimelineCard projectDetails={item} />

  renderTimelineCard = item => {
    if (item.categoryId === 'COURSE') {
      this.renderCourseCard(item)
    } else {
      this.renderProjectCard(item)
    }
  }

  render() {
    const {timelineItemsList} = this.props

    return (
      <div className="chrono-container">
        <h1 className="heading1">MY JOURNEY OF CCBP 4.0</h1>
        <Chrono mode="VERTICAL_ALTERNATING">
          {timelineItemsList.map(eachItem => this.renderTimelineCard(eachItem))}
          {/* {timelineItemsList.map(eachItem => {
            if (eachItem.categoryId === 'COURSE') {
              return this.renderCourseCard()
            }
            return this.renderProjectCard()
          })} */}
        </Chrono>
      </div>
    )
  }
}

export default TimelineView
