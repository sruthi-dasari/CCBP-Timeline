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
        <h1 className="main-heading">
          MY JOURNEY OF <br />
          <span className="sub-heading">CCBP 4.0</span>
        </h1>

        {/* {timelineItemsList.map(eachItem => this.renderTimelineCard(eachItem))} */}
        {/* {timelineItemsList.map(eachItem => {
            if (eachItem.categoryId === 'COURSE') {
              return this.renderCourseCard()
            }
            return this.renderProjectCard()
          })} */}

        <Chrono
          theme={{
            secondary: 'white',
          }}
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
        />
      </div>
    )
  }
}

export default TimelineView
