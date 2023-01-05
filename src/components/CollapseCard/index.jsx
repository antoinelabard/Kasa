import React, { useState } from "react"
import PropTypes from "prop-types"
import collapseArrow from "../../assets/collapse-arrow.svg"
import styled from "styled-components"
import "./index.scss"

const CollapseArrowStyle = styled.img`
  ${(props) => props.isCollapsed && `transform: rotate(180deg)`});
`

function CollapseCard({ title, description }) {
  const [isCollapsed, setCollapse] = useState(true)

  return (
    <div className="collapseContainer">
      <button onClick={() => setCollapse(!isCollapsed)}>
        <h2>{title}</h2>
        <CollapseArrowStyle
          isCollapsed="true"
          src={collapseArrow}
          alt="Collapse arrow"
        />
      </button>
      {!isCollapsed && <section>{description}</section>}
    </div>
  )
}

CollapseCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.any,
}

export default CollapseCard
