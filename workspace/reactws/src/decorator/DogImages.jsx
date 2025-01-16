import React from 'react'
import withHover from './withHover'
import withLoader from './withLoader'

// display the Dog image
function DogImages(props) {
  return (
    <div {...props}>
        {props.hovering && <div>Hovering!!!</div>}
        {props.data.message.map(dog => <img src={dog} />)}
    </div>
  )
}

export default withHover(
    withLoader(DogImages, "https://dog.ceo/api/breed/labrador/images/random/6")
)