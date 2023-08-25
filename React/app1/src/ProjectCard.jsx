import React from 'react'
import ImgCard1 from './ImgCard1'
import ImgCard2 from './ImgCard2'

const ProjectCard = () => {
  return (
    <div>
    <div className="row">
    <div className="col-md4">
        <ImgCard1/>
    </div>
    <div className="col-md4">
        <ImgCard2/>
    </div>
    </div>
    </div>
    )
}

export default ProjectCard
