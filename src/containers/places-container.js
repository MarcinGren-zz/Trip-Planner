import { connect } from 'react-redux'
import Places from '../components/places/places'
import { addPlace } from '../actions/index'

const mapStateToProps = state => ({
  places: state.places
})

const mapDispatchToProps = dispatch => ({
  addPlace: (name, day, category, placeId, long, lat) => dispatch(addPlace(name, day, category, placeId, long, lat))
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Places)