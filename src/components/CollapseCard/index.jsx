import React, { useState } from "react"
import PropTypes from "prop-types"
import collapseArrow from "../../assets/collapse-arrow.svg"
import styled from 'styled-components'
import "./index.scss"

function CollapseCard({ title, description }) {
  const [isCollapsed, setCollapse] = useState(true)

  const CollapseArrowStyle = styled.img`
  transform: rotate(${
    isCollapsed ? "0" : "180deg"
  });
    `

  return (
    <div className="collapseContainer">
      <button onClick={() => setCollapse(!isCollapsed)}>
        <h2>{title}</h2>
        <CollapseArrowStyle src={collapseArrow} alt="Collapse arrow" />
      </button>
      {!isCollapsed && (
        <section>
          <p>{description}</p>
        </section>
      )}
    </div>
  )
}

CollapseCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

export default CollapseCard
