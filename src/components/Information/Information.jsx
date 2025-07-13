import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class InformationLayout extends React.Component {
    render() {
        const { message } = this.props
        return (
            <div className="text-center text-5xl text-white">
                {message}
            </div>
        )
    }
}

InformationLayout.propTypes = {
    message: PropTypes.string.isRequired
}

class Information extends React.Component {
    render() {
        const { currentPlayer, isGameEnded, isDraw } = this.props

        let message = ''
        if (isDraw) {
            message = 'Draw'
        } else if (isGameEnded) {
            message = `Winner: ${currentPlayer}`
        } else {
            message = `User: ${currentPlayer}`
        }

        return <InformationLayout message={message} />
    }
}

const mapStateToProps = (state) => ({
    currentPlayer: state.currentPlayer,
    isGameEnded: state.isGameEnded,
    isDraw: state.isDraw
})

export default connect(mapStateToProps)(Information)
