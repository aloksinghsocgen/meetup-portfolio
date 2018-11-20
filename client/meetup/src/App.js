import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import TemplateComponent from "./ui-components/TemplateComponent";
import HeaderComponent from "./ui-components/HeaderComponent";
import { themes } from "./themes";
const theme = createMuiTheme(themes);
class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <TemplateComponent>
          <HeaderComponent />
        </TemplateComponent>
      </MuiThemeProvider>
    );
  }
}

export default App;
