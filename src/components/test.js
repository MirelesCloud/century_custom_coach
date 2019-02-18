import React from 'react';
import Img from 'gatsby-image'
import Isotope from 'isotope-layout';

const Testing = ({ images }) => (
  <div>
    {images.edges.map((img, idx) =>  (
      <div className="col-lg-3 col-md-4 col-xs-6" key={idx} >
        <div  className="d-block mb-4 h-100 gallery" >
          <Img fluid={img.node.childImageSharp.fluid}/>
        </div>
      </div>
    ))}
  </div>
)

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isotope: null}
  }
  render() {
    return (
      <div>

      </div>

    )
  }
}

export default Test
