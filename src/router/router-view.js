import React, { Component } from 'react';
import { Route, Switch, Redirect } from "dva/router";

class RouterView extends Component {
    render() {
        const { Routes } = this.props;
        const DefeaultRoute = <Route key={1} exact path="/" component={() =>
            <Redirect to="/login" />
        } />
        return <Switch>
            {
                Routes.length && Routes.map((itm, ind) => {
                    console.log(itm.children)
                    const Children = itm.children === undefined ? [] : itm.children;
                    if (itm.component) {
                        return <Route key={ind} path={itm.path} render={(api) => {
                            return <itm.component routes={Children} {...api}></itm.component>
                        }}></Route>
                    }
                }).concat([DefeaultRoute])
            }
        </Switch>
    }
}

export default RouterView;