/*eslint-disable strict */

var React = require('react');
var Header = require('./common/header');
var RouteHandler = require('react-router').RouteHandler;
$ = jQuery = require('jquery');
 
var App = React.createClass({

    getInitialState: function() {
        return {
            inventory: null
        };
    },

    componentDidMount: function() {
        var control = this;
        if(this.isMounted()) {
            $.get("http://demo7475333.mockable.io/spaceships", function(data, status){
                control.setState({inventory: data.products});
            });
        }
    },

    render: function() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <RouteHandler inventory={this.state.inventory}/>
                </div>
            </div>
        );
    }
});

module.exports = App;