'use strict';

var React = require('react');
var Link = require('react-router').Link;

var InventoryList = React.createClass({
    propTypes: {
        inventory: React.PropTypes.array.isRequired
    },

    render: function() {
        var ships = [];

        for(var i = 0; i < this.props.inventory.length; i++) {
            var spaceship1 = this.props.inventory[i];
            spaceship1.image = "images/ss-" + (i % 8) + ".jpg";

            if(this.props.inventory[i + 1]) {
                var spaceship2 = this.props.inventory[i + 1];
                spaceship2.image = "images/ss-" + ((i + 1) % 8) + ".jpg";

                ships.push(
                    <div className="row text-center">
                        <div key={spaceship1.name.replace(/\s/g, '') + i} 
                            className="ship col-md-4 well col-centered"
                            onClick={this.props.showDetails.bind(this, spaceship1)}>
                            <div><img className="photoicon" src={spaceship1.image}/></div>
                            <div className="text-uppercase">{spaceship1.name}</div>
                        </div>
                        <div key={spaceship2.name.replace(/\s/g, '') + (i + 1)} 
                            className="ship col-md-4 well col-md-offset-1 col-centered"
                            onClick={this.props.showDetails.bind(this, spaceship2)}>
                            <div><img className="photoicon" src={spaceship2.image}/></div>
                            <div className="text-uppercase">{spaceship2.name}</div>
                        </div>
                    </div>
                );
                i++;
            } else {
                ships.push(
                    <div className="row text-center">
                        <div key={spaceship1.name.replace(/\s/g, '') + i} 
                            className="ship col-md-4 well col-centered"
                            onClick={this.props.showDetails.bind(this, spaceship1)}>
                            <div><img className="photoicon" src={spaceship1.image}/></div>
                            <div className="text-uppercase">{spaceship1.name}</div>
                        </div>
                    </div>
                );
            }
            
        }

        return (
            <div class="row table-row text-center">
                {ships}
            </div>
        );
    }
});

module.exports = InventoryList;