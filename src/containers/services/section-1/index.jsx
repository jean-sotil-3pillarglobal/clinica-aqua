import { Parallax } from 'react-parallax';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';

import React, {
  Fragment,
  useState,
} from 'react';

import {
  AppBar,
  Breadcrumbs,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
  Paper,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core';

import { Link as A } from '@material-ui/core'

import { Element, Link } from 'react-scroll';

import {
  constants,
} from './../../../providers/config';

// provider
import LangToggler from './../../../providers/lang/toggler';
import ThemeBackground from './../../../providers/utils/theme.background';
import ThemeColor from './../../../providers/utils/theme.color';

// components
import { LangButton } from './../../../components/commons/button';
import { TYPES } from './../../../components/commons/button';
import Callout from './../../../components/commons/callout/';
import Icon from './../../../components/commons/icon';
import LangButtonAnimate from './../../../components/commons/button/animate';
import Opacity from './../../../components/commons/opacity';
import SectionBlock from './../../../components/layouts/section';
import SmartImg from './../../../components/commons/img';

const variant = 'primary';

// paths
const {
  PATHS: {
    SERVICES,
  },
} = constants;

const styles = theme => ({
  back: {
    lineHeight: '38px',
  },
  background: {
    marginTop: theme.spacing(6),
  },
  body1: {
    marginBottom: theme.spacing(2),
    textAlign: 'justify',
  },
  body2: {
    marginBottom: theme.spacing(2),
    textAlign: 'justify',
  },
  button: {
    cursor: 'pointer',
    margin: '0 auto',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  caption: () => ({
    background: ThemeBackground({ variant }, theme, 'dark'),
    color: ThemeColor({ variant }, theme),
    padding: theme.spacing(4),
    width: '100%',
  }),
  container: {
    background: 'transparent',
    padding: theme.spacing(2),
    position: 'relative',
  },
  copy: {
    margin: `${theme.spacing(2)}px 0 0 0`,
  },
  crumb: () => ({
    color: ThemeColor({ variant }, theme),
    cursor: 'default',
    textTransform: 'lowercase',
  }),
  crumbLink: {
    '&:hover': {
      textDecoration: 'underline',
    },
    color: ThemeColor({ variant }, theme),
    cursor: 'pointer',
    textTransform: 'lowercase',
  },
  description: {
    color: theme.palette.primary.contrastText,
    margin: theme.spacing(1),
    textAlign: 'center',
  },
  descriptionContainer: {
    background: ThemeBackground({ variant }, theme, 'main'),
    maxWidth: 'initial',
    minHeight: 'initial',
    padding: `${theme.spacing(2)}px ${theme.spacing(2)}px ${theme.spacing(16)}px`,
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  },
  details: {
    padding: `${theme.spacing(10)}px 0 0 0`,
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(1),
    },
  },
  divider: {
    margin: `${theme.spacing(2)}px 0`,
  },
  h3: {
    background: ThemeBackground({ variant }, theme, 'light'),
    border: `4px solid ${ThemeBackground({ variant }, theme, 'light')}`,
    display: 'inline-block',
    marginBottom: theme.spacing(2),
    padding: `${theme.spacing(0.5)}px ${theme.spacing(5)}px`,
    [theme.breakpoints.down('md')]: {
      padding: `${theme.spacing(0.5)}px ${theme.spacing(2)}px`,
    },
  },
  header: props => ({
    background: ThemeBackground({ variant }, theme, 'light'),
    display: 'flex',
    flexFlow: 'column',
    margin: `0 0 ${theme.spacing(2)}px 0`,
    maxWidth: '100%',
    minHeight: '100vh',
    overflow: 'hidden',
    padding: `${theme.spacing(16)}px 0`,
    textAlign: 'justify',
    [theme.breakpoints.down('md')]: {
      minHeight: 'initial',
      padding: 0,
    },
  }),
  icon: {
    lineHeight: 0,
  },
  images: {
    '&:hover': {
      filter: 'initial',
      imageRendering: 'initial',
      transform: 'scale(1.05)',
    },
    border: `1px solid ${ThemeBackground({ variant }, theme, 'dark')}`,
    filter: 'grayscale(100%) contrast(90%)',
    imageRendering: 'pixelated',
    marginBottom: theme.spacing(2),
    transform: 'scale(1)',
    transition: theme.transitions.create(
      ['filter', 'transform'],
      { duration: theme.transitions.duration.complex },
    ),
  },
  item: {
    '&:hover': {
      borderColor: theme.palette.utils.highlight,
    },
    '&:hover .MuiCardMedia-root': {
      filter: 'grayscale(0%)',
    },
    background: ThemeBackground({ variant }, theme, 'main'),
    border: '0 solid transparent',
    borderColor: ThemeBackground({ variant }, theme, 'light'),
    borderWidth: '2px',
    boxShadow: 'none',
    padding: theme.spacing(2),
    position: 'relative',
    textTransform: 'capitalize',
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(1),
    },
  },
  itemActions: {
    bottom: 0,
    height: '100%',
    padding: theme.spacing(2),
    position: 'absolute',
    right: theme.spacing(1),
    zIndex: 2,
    [theme.breakpoints.down('md')]: {
      position: 'relative',
      paddingBottom: 0,
    },
  },
  itemContent: {
    padding: 0,
  },
  itemHeader: {},
  itemList: {},
  itemMedia: {
    backgroundSize: 'cover',
    border: `4px solid ${theme.palette.primary.main}`,
    height: 500,
    marginTop: theme.spacing(2),
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      border: 'initial',
      height: 200,
      margin: 0,
    },
  },
  itemSelected: {
    borderColor: ThemeColor({ variant }, theme),
    color: ThemeColor({ variant }, theme),
    fontWeight: 600,
  },
  itemTitle: {
    background: 'transparent',
    color: ThemeColor({ variant }, theme),
    textTransform: 'capitalize',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.2rem',
    },
  },
  logo: {
    display: 'block',
    margin: 0,
    width: '50%',
  },
  svg: {
    marginBottom: theme.spacing(2),
  },
  title: {
    textTransform: 'capitalize',
  },
  titleContainer: {
    background: 'transparent',
    padding: '0',
    position: 'relative',
    textAlign: 'center',
    zIndex: 1,
  },
  titleHeader: {
    background: ThemeBackground({ variant }, theme, 'light'),
    display: 'inline-block',
    margin: `${theme.spacing(20)}px auto`,
    opacity: 0.8,
    padding: `${theme.spacing(1)}px ${theme.spacing(6)}px`,
    textTransform: 'capitalize',
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(2),
      padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    },
  },
});

function CustomLink (props: {
  classes: Object,
  history: Object,
  onReset: Function,
  path: String,
  url: String,
}) {
  const {
    classes,
    history,
    onReset,
    path,
    url,
  } = props;

  return url && (
    <A onClick={(evt) => {
      evt.preventDefault();
      history.replace(url);
      onReset();
    }}>
      <Typography variant="h5" className={classes.crumbLink}>{path}</Typography>
    </A>
  ) || (
    <Typography variant="h5" className={classes.crumb}>{path}</Typography>
  );
};

function SectionA (props: {
  children: any,
  classes: Object,
  data: Object,
  history: Object,
  match: Object,
  onReset: Function,
  onServiceListClick: Function,
  proxy: Object,
}) {
  const {
    children,
    classes,
    data,
    history,
    match: {
      params: {
        url,
      },
    },
    onReset,
    onServiceListClick,
    proxy,
  } = props;
  let view = children;

  const [showForm, setShowForm] = useState(false);

  const {
    category,
    service,
    services,
  } = data;

  const {
    copy,
    language,
    verbiage,
  } = proxy;

  const servicePath = SERVICES[language];

  const LinkForm = (() => (
    <Link
      className={classes.button}
      activeClass="active"
      smooth
      spy
      to={constants.LINK_CONTACT_FORM_2}
    >
      <LangButtonAnimate
        color="white"
        iconClassName={classes.icon}
        iconx="arrowUp"
        icony="fwd"
        lang={category && category.cta}
        onClick={() => setShowForm(true)}
        pos="right"
        size={30}
        typeButton={TYPES.BUTTON}
        variant="dark2"
      />
    </Link>
  ));

  if (!showForm) {
    if (!service) {
      view = category.images && category.images.map((image, i) => {
        const key = `category-image-${i}`;

        return (
          <SmartImg key={key} src={image} proxy={proxy} className={classes.images} />
        );
      });

      if (url && !service) {
        view = (
          <Fragment>
            <Callout
              align="center"
              className={classes.caption}
              title={copy.unknown}
              transparent
              variant={variant}
            />
            {view}
          </Fragment>
        );
      }
    } else if (service && service.id) {
      view = (
        <Paper className={classes.details} elevation={0}>
          <Card key={service.id} dense="true" elevation={0}>
            <CardHeader
              title={
                <Typography
                  variant="h2"
                  className={classes.itemTitle}
                >
                  <LangToggler id={service.title} />
                </Typography>
              }
            />
            <CardMedia
              className={classes.itemMedia}
              image={service.background}
            >
              <Opacity opacity={0.4} />
            </CardMedia>
            <Divider className={classes.divider} />
            <CardContent
              className={classes.itemContent}>
              {service.content &&
                <Fragment>
                  {service.content.map((item, y) => {
                    const k = `copy-${y}`;

                    return (
                      <Typography
                        className={classnames(classes[item.component])}
                        variant={item.component}
                        key={k}
                      >
                        <LangToggler id={item.copy} />
                      </Typography>

                    );
                  })}
                  <Divider className={classes.divider} />
                </Fragment>
              }
            </CardContent>
            <CardActions
              disableSpacing
            >
              {LinkForm()}
            </CardActions>
          </Card>
        </Paper>
      );
    }
  }

  return (
    <Element name={constants.LINK_CONTACT_FORM_2}>
      <Paper className={classes.container} elevation={0}>
        <Parallax bgImage={category.background} strength={200} className={classes.background}>
          <Opacity opacity={0.5} zIndex={0} variant="light" />
          <Paper className={classes.titleContainer} elevation={0}>
            <Typography
              className={classes.titleHeader}
              variant="h1"
            >
              <LangToggler id={category.title} />
            </Typography>
          </Paper>
        </Parallax>
        <Divider />
        <SectionBlock className={classes.descriptionContainer}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={8}>
            <Grid
              item
              sm={12}
              md={10}
              lg={10}
            >
              <Breadcrumbs aria-label="breadcrumb">
                <CustomLink
                  onReset={onReset}
                  history={history}
                  url={`/${language}/${servicePath}`}
                  path={servicePath}
                  classes={classes}
                />

                <CustomLink
                  onReset={onReset}
                  history={history}
                  url={(service && service.id) && `/${language}${category.url[language]}` || false}
                  path={<LangToggler id={category.title} />}
                  classes={classes}
                />

                {(service && service.id) && (
                  <CustomLink
                    onReset={onReset}
                    history={history}
                    path={<LangToggler id={service.title} />}
                    classes={classes}
                  />
                )}
              </Breadcrumbs>
            </Grid>
            <Grid
              item
              sm={12}
              md={10}
              lg={10}
            >
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                spacing={4}
              >
                {(!showForm && !service) && (
                  <Grid
                    item
                    sm={12}
                    md={6}
                    lg={6}
                  >
                    <Callout
                      className={classes.header}
                      align="left"
                      title={category.title}
                      subtitle={category.description}
                      variant={variant}
                    />
                    {LinkForm()}
                  </Grid>)
                }
                {showForm && (
                  <Grid
                    item
                    sm={12}
                    md={(!service || showForm) ? 6 : 12}
                    lg={(!service || showForm) ? 6 : 12}
                  >
                    <Callout
                      className={classes.header}
                      align="left"
                      title={category.title}
                      subtitle={category.description}
                      variant={variant}
                    />
                  </Grid>
                )}
                <Grid
                  item
                  sm={12}
                  md={(!service || showForm) ? 6 : 12}
                  lg={(!service || showForm) ? 6 : 12}
                >
                  {view}
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sm={12}
              md={10}
              lg={10}
            >
              {services && services.map((item) => {
                const seleted = (service && service.id === item.id);

                return (
                  <Card
                    key={item.id}
                    dense="true"
                    className={classnames(classes.item, seleted && classes.itemSelected)}
                  >
                    <CardHeader
                      avatar={
                        <Icon name={category.ico} color={category.color} className={classnames(seleted && classes.itemSelected)} />
                      }
                      className={classes.itemHeader}
                      title={
                        <Typography
                          variant="body1"
                          className={classnames(classes.itemTitle, seleted && classes.itemSelected)}
                        >
                          <LangToggler id={item.title} />
                          <Opacity opacity={0.4} />
                        </Typography>
                      }
                    />
                    <CardActions
                      className={classes.itemActions}
                      disableSpacing
                    >
                      <LangButton
                        className={classnames(classes.button, seleted && classes.itemSelected)}
                        lang={item.cta}
                        onClick={() => {
                          setShowForm(false);
                          onServiceListClick(category, item);
                        }}
                        typeButton={TYPES.BUTTON}
                        variant="dark"
                      >
                      </LangButton>
                    </CardActions>
                  </Card>
                );
              })}
            </Grid>
          </Grid>
        </SectionBlock>
      </Paper>
    </Element>
  );
}

export default withStyles(styles)(withRouter(SectionA));
