
import React, { Component, Fragment } from 'react';
import classnames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Toolbar,
  withStyles,
} from '@material-ui/core';

import {
  ChevronLeft,
  ChevronRight,
  Menu,
} from '@material-ui/icons';

import { Events, Link } from 'react-scroll';

// Config
import {
  constants,
} from '../../providers/config';

import {
  setSectionAction,
} from '../../store/actions/global';

// provider
import LangGenerateTree from '../../providers/utils/lang.generate.tree';
import ThemeBackground from './../../providers/utils/theme.background';
import ThemeColor from './../../providers/utils/theme.color';

// components
import { LangButton, TYPES } from './../commons/button';
import SmartImg from './../commons/img';
import Icon from './../commons/icon';

// paths
const {
  PATHS: {
    SERVICES,
  },
} = constants;

const drawerWidth = 240;

const styles = theme => ({
  appBar: {
    background: ThemeBackground({ variant: 'primary' }, theme),
    padding: 0,
    transition: theme.transitions.create(['background-color', 'margin', 'width'], {
      duration: theme.transitions.duration.leavingScreen,
      easing: theme.transitions.easing.sharp,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      duration: theme.transitions.duration.enteringScreen,
      easing: theme.transitions.easing.easeOut,
    }),
    width: `calc(100% - ${drawerWidth}px)`,
  },
  burger: {
    color: theme.palette.secondary.contrastText,
  },
  content: {
    flexGrow: 1,
    marginLeft: -drawerWidth,
    padding: theme.spacing(2),
    transition: theme.transitions.create('margin', {
      duration: theme.transitions.duration.leavingScreen,
      easing: theme.transitions.easing.sharp,
    }),
  },
  divider: {
    backgroundColor: theme.palette.secondary.light,
    margin: 0,
    padding: `${theme.spacing(1)}px 0`,
  },
  drawer: {
    flexShrink: 0,
    width: drawerWidth,
  },
  drawerHeader: {
    ...theme.mixins.toolbar,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '0 8px',
  },
  drawerPaper: {
    background: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    width: drawerWidth,
  },
  fab: {
    '&:hover': {
      background: ThemeBackground({ variant: 'primary' }, theme, 'dark'),
    },
    background: ThemeBackground({ variant: 'primary' }, theme),
  },
  h3: {
    color: theme.palette.primary.contrastText,
    marginBottom: 0,
  },
  hide: {
    display: 'none',
  },
  iconFab: {
    color: ThemeColor({ variant: 'primary' }, theme),
    fontSize: '1rem',
  },
  logo: {
    display: 'block',
    margin: '0 0 0 auto',
    width: 48,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  menuItem: {
    backgroundColor: theme.palette.secondary.dark,
  },
  menuLabel: {
    color: theme.palette.secondary.contrastText,
  },
  navbar: {
    background: 'transparent',
    margin: 0,
    padding: 0,
    textAlign: 'left',
  },
  navbarItem: props => ({
    textAlign: props.device === 'mobile' ? 'left' : 'initial',
    width: props.device === 'mobile' ? '100%' : 'initial',
  }),
  navbarItemSelected: {
    fontWeight: 600,
    textDecoration: 'underline',
  },
  phone: () => ({
    color: theme.palette.utils.hightlight,
    marginRight: theme.spacing(1),
  }),
  root: () => ({}),
  socialButtons: {
    padding: 0,
  },
  socialButtonsFixed: {
    display: 'block',
    position: 'fixed',
    right: theme.spacing(3),
    top: theme.spacing(14),
    zIndex: 999,
  },
  toolbar: {
    margin: '0 auto',
    maxWidth: 1240,
    width: '100%',
  },
  topHeader: {
    padding: `0 ${theme.spacing(8)}px`,
  },
  topHeaderSocial: {
    margin: 0,
    padding: 0,
  },
});

const NODE_ROOT = 'components';
const NODE_TYPE = 'header';
// copy:
const copy = LangGenerateTree([NODE_ROOT, NODE_TYPE], [
  'back',
  'featured-1-id',
  'featured-1-label',
  'featured-1-route',
  'logo',
  'phone_icon',
  'phone',
  'publics-3-id',
  'publics-3-label',
  'publics-3-route',
  'social-3-icon',
  'social-3-label',
  'social-3-link',
  'title',
]);

class Header extends Component {
  state = {
    open: false,
  };

  componentDidMount = () => {
    const {
      setSection,
    } = this.props;

    Events.scrollEvent.register('begin', (to) => {
      setSection(to);
    });
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleFabClick = (link) => {
    console.log(link);
  };

  props: {
    category: Object,
    classes: Object,
    device: String,
    history: Object,
    language: String,
    section: String,
    setSection: Function,
    theme: Object,
    verbiage: Object,
  };

  render() {
    const {
      category,
      classes,
      device,
      history,
      language,
      section,
      theme,
      verbiage,
    } = this.props;

    const proxy = {
      category,
      device,
      language,
      verbiage,
    };

    const { open } = this.state;
    const isMobile = device === 'mobile';

    const isLanding = (`/${language}/${SERVICES[language]}` !== this.props.history.location.pathname) && category === null;

    const HeaderLinks = (
      <Fragment>
        {isLanding && (
          <Fragment>
            <Grid
              item
              sm={12}
              md={7}
              lg={7}
            >
              <Box
                display="flex"
                flexDirection={isMobile ? 'column' : 'row'}
                justifyContent="flex-start"
                p={1}
                m={1}
                className={classes.navbar}>
                {copy.publics.map((item) => {
                  return (
                    <Link
                      activeClass="active"
                      key={item.id}
                      smooth
                      spy
                      to={verbiage(item.id)}
                    >
                      <LangButton
                        className={classnames(classes.navbarItem, (section && verbiage(item.id) === section) && classes.navbarItemSelected)}
                        key={item.label}
                        lang={item.label}
                        pos="right"
                        typeButton={isMobile ? TYPES.BUTTON : TYPES.LINK}
                        active={section && verbiage(item.id) === section}
                        variant={isMobile ? 'light2' : 'light'}
                      />
                    </Link>
                  );
                })}
              </Box>
            </Grid>
            <Grid
              item
              sm={10}
              md={3}
              lg={3}
            >
              <Box
                display="flex"
                flexDirection={isMobile ? 'column' : 'row'}
                justifyContent="flex-end"
                p={1}
                m={1}
                className={classes.navbar}>
                {copy.featured.map((featured) => {
                  return (
                    <Link
                      activeClass="active"
                      key={featured.id}
                      smooth
                      spy
                      to={verbiage(featured.id)}
                    >
                      <LangButton
                        className={classes.navbarItem}
                        key={featured.label}
                        lang={featured.label}
                        pos="right"
                        typeButton={TYPES.CONTAINED}
                        variant={isMobile ? 'secondary' : 'dark'}
                      />
                    </Link>
                  );
                })}
              </Box>
            </Grid>
          </Fragment>
        )}
        {!isLanding && (
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="flex-start"
            p={1}
            m={1}
            className={classes.navbar}>
            <LangButton
              className={classes.navbarItem}
              key={copy.back}
              lang={copy.back}
              pos="left"
              typeButton={TYPES.BUTTON}
              variant="light"
              onClick={() => {
                history.push('/');
              }}
            />
          </Box>
        )}
      </Fragment>
    );

    return (
      verbiage &&
      <div className={classes.root}>
        <CssBaseline />
        <Grid
          container
          alignItems="flex-start"
          direction="row"
          justify="flex-start"
          className={classes.topHeader}>
          <Grid
            item
            sm={12}
            md={9}
            lg={9}
            className={classes.socialButtons}
          >
            <Box display="flex" flexDirection="row" justifyContent="flex-end" p={1} m={1} className={classnames(classes.topHeaderSocial, classes.socialButtonsFixed)}>
              {copy.social.map(item => (
                <Box key={item.label} p={2}>
                  <LangButton
                    href={verbiage(item.link)}
                    key={item.label}
                    typeButton={TYPES.FAB}
                    variant="primary"
                    className={classes.fab}
                  >
                    <Icon image={verbiage(item.icon)} className={classes.iconFab} />
                  </LangButton>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
        <AppBar
          className={classnames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
          elevation={0}
          position="fixed"
        >
          <Toolbar variant="dense" disableGutters={!open} className={classes.toolbar}>
            <Grid
              alignItems="center"
              container
              direction="row"
              justify={isMobile ? 'flex-start' : isLanding ? 'space-between' : 'flex-end'}
            >
              {isMobile && (
                <Grid
                  item
                  sm={10}
                  md={1}
                  lg={1}>
                  <IconButton
                    aria-label="Open drawer"
                    onClick={this.handleDrawerOpen}
                    className={classnames(classes.menuButton, open && classes.hide)}>
                    <Menu />
                  </IconButton>
                </Grid>
              )}
              <Grid
                item
                sm={10}
                md={1}
                lg={1}
              >
                <SmartImg proxy={proxy} src={verbiage(copy.logo)} className={classes.logo} />
              </Grid>
              {!isMobile && HeaderLinks}
            </Grid>
          </Toolbar>
        </AppBar>
        {isMobile &&
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}>
            <div className={classes.drawerHeader}>
              <IconButton onClick={this.handleDrawerClose} className={classes.burger}>
                {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
              </IconButton>
            </div>
            <Divider className={classes.divider} />
            {isMobile && HeaderLinks}
          </Drawer>
        }
      </div>

    );
  }
}

// map state to props
function mapStateToProps (state) {
  return {
    category: state.category,
    device: state.device,
    language: state.language,
    section: state.section,
    verbiage: state.verbiage,
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    setSection: setSectionAction,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(Header));
