'use strict';

var React = require('react');
var Link = require('react-router').Link;

var InventoryList = React.createClass({
    propTypes: {
        inventory: React.PropTypes.array.isRequired
    },

    render: function() {
        var createSpaceShipRow = function(spaceship) {
            return (
                <tr key={spaceship.name.replace(/\s/g, '')}>
                    {/**<td><Link to={"/spaceship/" + spaceship.name.replace(/\s/g, '')}>{spaceship.name}</Link></td>**/}
                    <td><a onClick={this.props.showDetails.bind(this, spaceship)}>{spaceship.name}</a></td>
                    <td>{spaceship.price}</td>
                </tr>
            );
        };

        return (
            <div>
                <table className="table">
                    <thead>
                        <th>Name</th>
                        <th>Price</th>    
                    </thead>
                    <tbody>
                        {this.props.inventory.map(createSpaceShipRow, this)}
                    </tbody>
                </table>
            </div>

        );
    }
});

module.exports = InventoryList;