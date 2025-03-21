import { works } from '@/data/work'
import ProjectItem from './project-item'

export default function MyProject() {
  return (
    <div>
      <div className="containerx">
        {/* space-y-4 md:space-y-8 lg:space-y-16 */}
        <div className=''>
          {
            works.map((item, index)=>(
              <ProjectItem imageRight={index % 2 !== 0} key={index} {...item} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
