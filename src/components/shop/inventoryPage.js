'use strict';

var React = require('react');
var InventoryList = require('./inventoryList');
var SpaceShip = require('./spaceShipModal');
var bootstrap = require('bootstrap');

var InventoryPage = React.createClass({
    
    showModal: function(e) {
        this.setState({selectedship: e});
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
                <h1 style={{"text-align": "center"}}>Inventory</h1>
                <div className="inventory-page">
                    <InventoryList 
                        inventory={this.props.inventory}
                        showDetails={this.showModal} />
                    <SpaceShip ref="modal" selectedship={this.state.selectedship} hideModal={this.hideModal}/>
                </div>
            </div>
        );
    }
});

module.exports = InventoryPage;