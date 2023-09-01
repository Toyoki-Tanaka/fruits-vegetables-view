const React = require('react')
class Show extends React.Component {
    render() {
        const fruit = this.props.fruit

        return (
            <div>
                <h1> Show Page</h1>
                The {fruit.name} is {fruit.color} And
                {
                    fruit.readyToEat ? "It's ready to eat" : "It's not ready to eat yet"
                }
            </div>
        );
    }
}
module.exports = Show;