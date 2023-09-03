const React = require('react')
class Index extends React.Component {
    render() {
        const { vegetables } = this.props
        return (
            <div>
                <h1>Vegetables Index Page</h1>
                <ul>
                    {
                        vegetables.map((vegetable, i) => {
                            return (
                                <li>
                                    <a href={`/vegetables/${i}`}>
                                        {vegetable.name}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>

                <nav>
                    <a href="/fruits/new">Create a New Fruit</a>
                </nav>
            </div>
        )
    }
}

module.exports = Index;