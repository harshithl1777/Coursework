import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreateStream from './streams/CreateStream';
import DeleteStream from './streams/DeleteStream';
import EditStream from './streams/EditStream';
import ShowStream from './streams/ShowStream';
import StreamList from './streams/StreamList';
import Header from './Header/Header';

const App = () => {
    return (
        <div className='ui container'>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path='/' component={StreamList} />
                    <Route exact path='/streams/create' component={CreateStream} />
                    <Route exact path='/streams/delete' component={DeleteStream} />
                    <Route exact path='/streams/edit' component={EditStream} />
                    <Route exact path='/streams/show' component={ShowStream} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;