import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsersRequest } from './redux/user/userActionCreators'
import { List, ListItem, ListItemText, CircularProgress } from '@material-ui/core';
import './App.css';

function App({ users, loading, error, fetchUsers}) {
      useEffect(() => {
        fetchUsers()
      }, [fetchUsers])
  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <List>
      {users.map((user) => (
        <ListItem key={user.id}>
          <ListItemText primary={user.name} secondary={user.email} />
        </ListItem>
      ))}
    </List>
  );
}

const mapStateToProps = (state) => ({
  users: state.users,
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = {
  fetchUsers: fetchUsersRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
