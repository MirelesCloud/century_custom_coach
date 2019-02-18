import React from 'react';
import Img from 'gatsby-image'
import Isotope from 'isotope-layout';
import GALLERY from "/gallery.json"


class IsotopeGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isotope: null}
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }

  componentDidMount() {
    const node = ReactDOM.findDOMNode(this);
    if(!this.state.isotope) {
      this.setState({
        isotope: new Isotope(node)
      })
    } else {
      this.state.isotope.reloadItems();
    }
  }

  componentDidUpdate() {
    if(this.state.isotope) {
      this.state.isotope.reloadItems();
      this.state.isotope.layout();
    }
  }
}

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


  render() {

    return (
      <div>Yo</div>
    )
  }
}

export default Test
