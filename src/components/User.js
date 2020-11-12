import { connect } from 'react-redux';

function User(props) {
  console.log(props, 'rpos');
  return <div>Users compopnent</div>;
}

function mapStateToProps(state) {
  return {};
}
export default connect(mapStateToProps)(User);
