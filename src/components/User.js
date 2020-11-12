import { useEffect } from 'react';
import { connect } from 'react-redux';
import { searchUserDetail } from '../actions/users';

function User(props) {
  useEffect(() => {
    props.dispatch(searchUserDetail(props.match.params.username));
  });

  return <div>Users compopnent</div>;
}

function mapStateToProps(state) {
  console.log(state, 'state here');
  return {};
}
export default connect(mapStateToProps)(User);
