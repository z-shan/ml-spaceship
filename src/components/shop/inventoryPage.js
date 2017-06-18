'use strict';

var React = require('react');
var InventoryList = require('./inventoryList');
var SpaceShip = require('./spaceShipModal');

var InventoryPage = React.createClass({
    
    showModal: function(e) {
        this.setState({selectedship: e});
        console.log(this);
        $(this.refs.modal.getDOMNode()).modal('show');
    },

    hideModal: function(e) {
        $(this.refs.modal.getDOMNode()).modal('hide');
    },

    getInitialState: function() {
        return {
            selectedship: null
        };
    },

    render: function() {
        return (
            <div>
                <h1>Inventory</h1>
                <InventoryList 
                    inventory={this.props.inventory}
                    showDetails={this.showModal} />
                <SpaceShip ref="modal" selectedship={this.state.selectedship} hideModal={this.hideModal}/>
            </div>
        );
    }
});

module.exports = InventoryPage;