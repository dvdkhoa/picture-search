import react, { Component } from "react";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container-md">
        <div className="row">
          {this.props.list.map((item) => {
            return (
              <div className="col-lg-3 mb-3"
                style={{
                    height: '200px',
                }}
              >
                <img
                  className="img-fluid img-thumbnail"
                  style={{
                    height: '100%',
                    width: '100%'
                  }}
                  src={item.url}
                  alt={item.alt_description}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ListItem;
