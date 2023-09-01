const React = require('react')
class Show extends React.Component {
    render() {
        const vegetable = this.props.vegetable

        return (
            <div>
                <h1> Show Page</h1>
                The {vegetable.name} is {vegetable.color} And {
                    vegetable.readyToEat ? "It's ready to eat" : "It's not ready yet"
                }
            </div>
        );
    }
}
module.exports = Show;