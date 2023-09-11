const React = require("react")
const DefaultLayout = require('../layout/Default')

class Index extends React.Component {
    render() {
        const { fruits } = this.props
        return (
            <DefaultLayout>
                <div>
                    <h1> Fruits Index Page! </h1>
                    <nav>
                        <a href="/fruits/new">Create a New Fruit</a>
                    </nav>
                    <ul>
                        {
                            fruits.map((fruit, i) => {
                                return (
                                    <li key={i}>
                                        The{' '}
                                        <a href={`/fruits/${fruit._id}`}>
                                            {fruit.name}
                                        </a>
                                        {' '}
                                        is {fruit.color} <br></br>
                                        {
                                            fruit.readyToEat ?
                                                `It is ready to eat`
                                                :
                                                `It is not ready to eat`
                                        }
                                        <br />
                                        <a href={`/fruits/${fruit._id}/edit`}> Edit This Fruit</a>
                                        {/*Delete form*/}
                                        <form action={`/fruits/${fruit._id}?_method=DELETE`} method="POST">
                                            <input type="submit" value='DELETE' />
                                        </form>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Index