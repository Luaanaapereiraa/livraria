import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import PageBookEdit from '../pages/PageBookEdit';
import PageBookList from '../pages/PageBookList';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route path="/pageBookEdit" component={PageBookEdit} />
        <Route path="/edit/:id" component={PageBookEdit} />
        <Route path="/pageBookList" component={PageBookList} />
        <Route path="/" component={PageBookList} />
        <Route path="/delete/:id" component={PageBookEdit}/>
      </Switch>
    </Router>
  );
};

export default Root;