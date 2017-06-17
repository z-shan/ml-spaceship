'use strict';

var React = require('react');
var InventoryList = require('./inventoryList');

var InventoryPage = React.createClass({
    
    render: function() {
        return (
            <div>
                <h1>Inventory</h1>
                <InventoryList inventory={this.props.inventory} />
            </div>
        );
    }
});

module.exports = InventoryPage;