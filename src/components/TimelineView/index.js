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

  renderItem = () => {
    const {timelineItemsList} = this.props

    timelineItemsList.map(eachItem => {
      if (eachItem.categoryId === 'COURSE') {
        return <CourseTimelineCard courseDetails={eachItem} key={eachItem.id} />
      }
      return <ProjectTimelineCard projectDetails={eachItem} key={eachItem.id} />
    })
  }

  render() {
    const {timelineItemsList} = this.props

    return (
      <>
        <h1 className="main-heading">
          MY JOURNEY OF <br />
          <span className="sub-heading">CCBP 4.0</span>
        </h1>
        <div className="chrono-container">
          <Chrono
            theme={{
              secondary: 'white',
            }}
            items={timelineItemsList}
            mode="VERTICAL_ALTERNATING"
          >
            {this.renderItem()}
          </Chrono>
        </div>
      </>
    )
  }
}

export default TimelineView
