import React from 'react'
import { connect } from 'react-redux'
import Field from './components/Field/Field'
import Information from './components/Information/Information'

class App extends React.Component {
    handleReset = () => {
        this.props.dispatch({type: 'RESTART_GAME'})
    }

    render() {
        return (
            <div className="pt-[140px] bg-iphone min-h-screen">
                <div className="text-center my-[60px]">
                    <Information/>
                    <Field/>
                    <button onClick={ this.handleReset } className="btn-reset mt-6">
                        Start new game
                    </button>
                </div>
            </div>
        )
    }
}

export default connect()(App)
