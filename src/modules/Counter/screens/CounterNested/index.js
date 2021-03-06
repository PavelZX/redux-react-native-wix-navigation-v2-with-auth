import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'react-native'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { withRedux } from 'hocs'
import { Container } from 'components'
import { P, H1 } from 'components/Text'
import { selectCounterValue } from '../../ducks/selectors'

export const COUNTER_NESTED_SCREEN = {
  name: 'app.CounterNested',
  title: 'Nested Counter',
}

export const CounterNestedScreen = ({ counterValue }) => (
  <Container marginHorizontal={20} marginVertical={20}>
    <H1>It works!</H1>
    <P>Counter store value: {counterValue}</P>
    <Image source={{ uri: './parrot.gif' }} />
  </Container>
)

CounterNestedScreen.propTypes = {
  counterValue: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
  counterValue: selectCounterValue(state),
})

const enhance = compose(
  withRedux,
  connect(mapStateToProps)
)

const EnhancedCounterNestedScreen = enhance(CounterNestedScreen)

// TODO: Hoist Non React Statics
EnhancedCounterNestedScreen.options = () => ({
  topBar: {
    title: {
      text: COUNTER_NESTED_SCREEN.title,
    },
  },
})

export default EnhancedCounterNestedScreen
