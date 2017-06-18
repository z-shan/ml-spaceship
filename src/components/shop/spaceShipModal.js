'use strict';
var React = require('react');

var ModalBody = React.createClass({
  render: function () {
    if(this.props.selectedship) {
        var specs = [];

        for(var i in this.props.selectedship.techspecs) {
            var techspec = this.props.selectedship.techspecs[i];
            specs.push(<div className="row"><div className="col-md-6">{i}</div><div className="col-md-6">{techspec}</div></div>);
        }
        return (
            <div className="modal-body">
                {this.props.selectedship.name}
                <div className="row">
                    <div className="col-sm-5 col-md-5 col-lg-5">

                    </div>
                    <div className="col-sm-7 col-md-7 col-lg-7">
                        <div>Techical Specifications</div>
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
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
                Spaceship Details
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <ModalBody selectedship={this.props.selectedship} />
            <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={this.props.hideModal}>Close</button>
            </div>
          </div>
        </div>
      </div>);
  }
});

module.exports = SpaceShipModal;