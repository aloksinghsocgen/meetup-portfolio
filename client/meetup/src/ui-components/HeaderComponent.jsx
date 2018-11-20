import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

import {
  Div,
  Img,
  HeaderContainer,
  Anchor,
  BannerBackground,
  BannerContent,
  BannerWrapper
} from "./StylesComponent";

const style = theme => {
  return {
    root: {
      background: theme.palette.default.main
    },
    toolbar: {
      justifyContent: "space-between"
    },
    create: {
      color: "#00a2c7 !important",
      fontSize: "1.1em",
      borderRight: "1px solid #ccc",
      paddingRight: "11px",
      fontWeight: theme.font.weight * 7
    },
    link: {
      color: "rgba(46,62,72,.6)",
      textDecoration: "none"
    },
    span: {
      justifyContent: "space-between",
      fontSize: "42px",
      display: "block",
      fontWeight: "bold"
    },
    spanSubtitle: {
      fontSize: "22px",
      fontWeight: "normal",
      marginBottom: "30px"
    }
  };
};
const HeaderComponent = props => {
  const { classes } = props;
  return (
    <Div>
      <AppBar position="static" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="a" href="/">
            <Img src="/img/logo.png" width="200px" />
          </Typography>
          <HeaderContainer>
            <Typography>
              <Anchor
                className={classes.create + " " + classes.link}
                href="/create-event"
              >
                Create New Group
              </Anchor>
            </Typography>
            <Typography>
              <Anchor className={classes.link} href="/login">
                Login
              </Anchor>
            </Typography>
            <Typography>
              <Anchor className={classes.link} href="/register">
                Sign Up
              </Anchor>
            </Typography>
          </HeaderContainer>
        </Toolbar>
      </AppBar>
      <BannerWrapper>
        <BannerBackground autoPlay loop>
          <source src="/video/landing.mp4" />
        </BannerBackground>
        <BannerContent>
          <span className={classes.span}>What do you love?</span>
          <span className={classes.spanSubtitle}>
            Do more of it with Meetup
          </span>
        </BannerContent>
      </BannerWrapper>
    </Div>
  );
};
export default withStyles(style)(HeaderComponent);
