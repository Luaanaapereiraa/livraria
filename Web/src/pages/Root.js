import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import pageBookEdit from '../pages/pageBookEdit';
import pageBookList from '../pages/pageBookList';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route path="/edit" component={pageBookEdit} />
        <Route path="/" component={pageBookList} />
      </Switch>
    </Router>
  );
};

export default Root;