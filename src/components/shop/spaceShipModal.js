'use strict';
var React = require('react');

var ModalBody = React.createClass({
  render: function () {
    if(this.props.selectedship) {
        var specs = [];

        for(var i in this.props.selectedship.techspecs) {
            var techspec = this.props.selectedship.techspecs[i];
            specs.push(<div className="row techspec-row"><div className="col-md-6 col-centered">{i}</div><div className="col-md-6 col-centered">{techspec}</div></div>);
        }
        return (
            <div className="modal-body">
                <div className="row">
                    <div className="col-sm-5 col-md-5 col-lg-5">
                        <div class="col-sm-12 col-md-12 col-lg-12">
                            <img className="photoicon" src={this.props.selectedship.image} />
                        </div>
                        <div className="productdetails col-sm-12 col-md-12 col-lg-12">
                            <div><strong>Name :</strong> {this.props.selectedship.name}</div>
                            <div><strong>Manufacturer :</strong> {this.props.selectedship.manufacturer}</div>
                            <div><strong>Price :</strong> {!this.props.selectedship.price ? 'N/A - Contact Sales for pricing' : this.props.selectedship.price}</div>
                        </div>
                    </div>
                    <div className="techspec col-sm-7 col-md-7 col-lg-7">
                        <div className="techspec-header"><strong>Techical Specifications</strong></div>
                        {specs}
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="modal-body"></div>
        );
    }
  }
});

var SpaceShipModal = React.createClass({
  render: function () {
    return (<div className="modal fade">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
                Spaceship Details
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <ModalBody selectedship={this.props.selectedship} />
            <div className="modal-footer">
                {/**<button type="button" className="btn btn-primary" onClick={this.props.hideModal}>Close</button>**/}
                <button type="button" className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>);
  }
});

module.exports = SpaceShipModal;