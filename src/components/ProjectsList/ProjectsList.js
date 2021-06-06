import {Link} from 'react-router-dom'
import styles from './ProjectsList.module.scss'

const ProjectsList = ({projects, tasks}) => {
  return (
    <>
      {Object.keys(projects).map((el, projectKey) => {
        return (
          <Link
            className={styles.ProjectsList}
            key={projectKey}
            to={{
              pathname: `/${el}`,
              state: {
                project: projects[el].name,
                tasksIds: projects[el].tasksIds,
                tasks
              }
            }}
          >
            <span>Название проекта:&nbsp;{projects[el].name}</span>
          </Link>
        )
      })}
    </>
  )
}

export default ProjectsList
