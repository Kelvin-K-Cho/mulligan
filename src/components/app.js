import React from "react";
import { Grid } from "semantic-ui-react";
import "./app.css";
import { connect } from "react-redux";

import ColorPanel from "./colorpanel/colorpanel";
import SidePanel from "./sidepanel/sidepanel";
import Messages from "./messages/messages";
import MetaPanel from "./metapanel/metapanel";

const App = ({ currentUser }) => (
  <Grid columns="equal" className="app" style={{ background: '#eee' }}>
    <ColorPanel />
    <SidePanel currentUser={currentUser} />

    <Grid.Column style={{ marginLeft: 320 }}>
      <Messages />
    </Grid.Column>

    <Grid.Column width={4}>
      <MetaPanel />
    </Grid.Column>
  </Grid>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(App);
