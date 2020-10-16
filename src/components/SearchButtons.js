import React from "react"
import styled from "styled-components"

const SearchButtons = ({ projects, setProjects, setBackToAll }) => {
  const [index, setIndex] = React.useState(0);
  const types = ['all', ...new Set(projects.map(project => {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
    return project.data.type
  }))]
  console.log('Check Types:', types);

  const showProjects = (type, typeIndex) => {
    setIndex(typeIndex)
    if (type === 'all') {
      setBackToAll();
    } else {
      const tempProjects = projects.filter(
        project => project.data.type === type
      )
      setProjects(tempProjects)
    }
  }
  return <Wrapper>
    {types.map((type, typeIndex) => {
      return <button
        key={type}
        className={index === typeIndex ? 'active' : undefined}
        onClick={() => showProjects(type, typeIndex)}
      >
        {type}
      </button>
    })}
  </Wrapper>
}
const Wrapper = styled.section`
  display: flex;
  margin-bottom: 0;
  justify-content: center;
  flex-wrap: wrap;
  button {
    margin: 0.5rem;
    text-transform: capitalize;
    background: transparent;
    border: transparent;
    color: var(--clr-grey-6);
    letter-spacing: var(--spacing);
    font-size: 1rem;
    padding: 0.25rem;
    cursor: pointer;
    outline: none;
    transition: var(--transition);
  }
  button:hover,
  button.active {
    box-shadow: 0px 1.5px 0 var(--clr-grey-6);
  }
`
export default SearchButtons
