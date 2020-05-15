
import {
  Link,
  withRouter,
} from 'react-router-dom';

import classnames from 'classnames';
import React, { Fragment, useState } from 'react';

import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Fab,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
  useTheme,
  withStyles,
} from '@material-ui/core';

// provider
import LangGenerateTree from './../../../../providers/utils/lang.generate.tree';
import LangToggler from './../../../../providers/lang/toggler';
import ThemeBackground from './../../../../providers/utils/theme.background';
import ThemeColor from './../../../../providers/utils/theme.color';

import {
  CreateUrlCategory,
  CreateUrlCategoryDetails,
} from './../../../../providers/utils/url.formatter';

// components
import Callout from './../../../commons/callout/';
import Icon from './../../../commons/icon';
import SectionBlock from './../../section';
import Slider from './../../../commons/slider';

import { LangButton, TYPES } from './../../../commons/button';

const styles = theme => ({
  button: {
    margin: '0 auto',
  },
  buttonHover: props => ({
    backgroundColor: ThemeBackground(props, theme, 'light'),
  }),
  card: props => ({
    border: `1px solid ${ThemeBackground(props, theme, 'light')}`,
    borderRadius: '0 0 0 0',
    boxShadow: 'initial',
    flexShrink: 0,
    padding: 0,
    position: 'relative',
    textAlign: 'center',
    transition: theme.transitions.create(
      ['border-color'],
      { duration: theme.transitions.duration.complex },
    ),
  }),
  cardContent: props => ({
    background: ThemeBackground(props, theme, 'main'),
    padding: theme.spacing(0),
  }),
  cardHover: {
    boxShadow: '1px 1px 2px #000',
  },
  cardList: props => ({
    backgroundColor: ThemeBackground(props, theme, 'light'),
    color: ThemeColor(props, theme),
    cursor: 'default',
    maxHeight: 300,
    overflow: 'scroll',
    padding: theme.spacing(1),
    textAlign: 'right',
  }),
  cardTitle: props => ({
    background: ThemeBackground(props, theme, 'light'),
    color: ThemeColor(props, theme),
    cursor: 'pointer',
    border: `${theme.spacing(1)}px solid ${ThemeBackground(props, theme, 'main')}`,
    padding: `${theme.spacing(2)}px 20%`,
    textTransform: 'capitalize',
    [theme.breakpoints.down('md')]: {
      padding: `${theme.spacing(1)}px 20%`,
    },
  }),
  cardTitleHover: () => ({
    textDecoration: 'underline',
  }),
  cardTitleImage: props => ({
    backgroundSize: 'cover',
    border: `${theme.spacing(1)}px solid ${ThemeBackground(props, theme, 'light')}`,
    color: ThemeColor(props, theme),
    cursor: 'default',
    display: 'block',
    padding: theme.spacing(1),
    transition: theme.transitions.create(
      ['borderWidth'],
      { duration: theme.transitions.duration.complex },
    ),
  }),
  cardTitleImageHover: props => ({
    borderWidth: 0,
  }),
  container: props => ({
    background: ThemeBackground(props, theme, 'light'),
    [theme.breakpoints.down('md')]: {
      padding: `${theme.spacing(10)}px ${theme.spacing(1)}px`,
    },
  }),
  cta: {
    padding: `${theme.spacing(2)}px 0`,
  },
  fab: props => ({
    backgroundColor: `transparent!important`,
    color: `${ThemeBackground(props, theme, 'main')}!important`,
    float: 'left',
    margin: theme.spacing(3),
  }),
  fabHover: props => ({
    color: ThemeColor(props, theme),
  }),
  featuredText: props => ({
    background: ThemeBackground(props, theme, 'dark'),
    color: ThemeColor(props, theme),
    display: 'inline-block',
    fontSize: '.6em',
    padding: theme.spacing(0.5),
    textTransform: 'capitalize',
  }),
  icon: () => ({}),
  iconHover: props => ({
    color: ThemeColor(props, theme),
  }),
  item: props => ({
    border: `0 solid ${ThemeColor(props, theme)}`,
    marginBottom: theme.spacing(1),
    overflow: 'hidden',
    width: '100%',
  }),
  items: {
    padding: `${theme.spacing(6)}px 0`,
    textAlign: 'center',
  },
  link: {
    margin: '0 auto',
    textDecoration: 'none',
  },
  serviceIcon: props => ({
    color: ThemeColor(props, theme),
    fontSize: '10px',
  }),
  serviceItem: props => ({
    '&:hover': {
      background: ThemeBackground(props, theme, 'dark'),
    },
    border: `0 solid ${ThemeBackground(props, theme, 'main')}`,
    borderBottomWidth: '2px',
  }),
  serviceTitle: props => ({
    color: ThemeColor(props, theme),
    display: 'block',
    fontWeight: 400,
    marginBottom: 0,
    marginTop: 0,
    textTransform: 'capitalize',
  }),
});

const NODE = 'commons';
const SLOT = 'services_1';
// copy:
const copy = LangGenerateTree([NODE, SLOT], [
  'body',
  'categories',
  'cta',
  'id',
  'services',
  'title',
]);

function ServicesLayout (props: {
  classes: Object,
  history: Object,
  proxy: Object,
  setServiceCategory: Function,
  variant: String,
}) {
  const {
    classes,
    history,
    proxy,
    setServiceCategory,
    variant,
  } = props;

  const {
    device,
    language,
    verbiage,
  } = proxy;

  const [useHover, setHover] = useState(false);
  const theme = useTheme();

  const handleHover = (payload) => {
    setHover(payload);
  };

  const handleServiceCategoryClick = (evt, item) => {
    evt.preventDefault();

    setServiceCategory(item, (done) => {
      if (done) history.push(CreateUrlCategory(language, item));
    });
  };

  const services = verbiage && verbiage(copy.services);

  const categories = verbiage && verbiage(copy.categories).map((item, id) => {
    const isHover = useHover.id === `item-${id}`;

    const filteredServices = services.filter(service => service.categories && service.categories.includes(item.id)) || [];

    return ({
      id: `item-${id}`,
      render: () => (
        <Card
          className={classnames(classes.card, isHover && classes.cardHover)}
          key={item.id}
        >
          <Typography
            className={classnames(classes.cardTitle, isHover && classes.cardTitleHover)}
            onClick={evt => handleServiceCategoryClick(evt, item)}
            variant="h4"
          >
            <LangToggler id={item.title} />
          </Typography>
          <CardHeader
            avatar={
              <Fragment>
                <Fab
                  className={classnames(classes.fab, isHover && classes.fabHover)}
                  onClick={evt => handleServiceCategoryClick(evt, item)}>
                  <Icon
                    name={item.ico}
                    className={classnames(classes.icon, isHover && classes.iconHover)}
                    color={item.color}
                  />
                </Fab>
              </Fragment>
            }
            className={classnames(classes.cardTitleImage, isHover && classes.cardTitleImageHover)}
            style={{
              backgroundImage: `url(${item.background})`,
              backgroundPosition: 'center',
              filter: !isHover ? 'grayscale(100%) contrast(90%)' : '',
              transform: !isHover ? 'scale(1)' : 'scale(1.05)',
              height: 300,
              imageRendering: isHover ? 'pixelated' : '',
              transition: theme.transitions.create(
                ['filter', 'transform'],
                { duration: theme.transitions.duration.complex },
              ),
              width: '100%',
            }}
          />
          {filteredServices.length > 0 &&
            <CardContent className={classes.cardContent}>
              <Grid
                container
              >
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}>
                  <List
                    className={classes.cardList}>
                    {filteredServices.map((service, i) => {
                      const key = `service-title-${id}-${i}`;
                      return (
                        <ListItem
                          button
                          key={key}
                          className={classes.serviceItem}
                        >
                          <ListItemIcon>
                            <Icon
                              name={item.ico}
                              className={classes.serviceIcon}
                            />
                          </ListItemIcon>
                          <ListItemText
                            className={classes.serviceTitle}
                            primary={(
                              <Link
                                className={classes.link}
                                to={{
                                  pathname: CreateUrlCategoryDetails(language, item, service),
                                  state: {
                                    category: item,
                                    service,
                                  },
                                }}
                              >
                                <Typography variant="caption" className={classes.serviceTitle}>
                                  <LangToggler id={service.label} />
                                  {service.featured &&
                                    <Typography
                                      variant="caption"
                                      className={classes.featuredText}>
                                      <LangToggler id={service.featuredText} />
                                    </Typography>
                                  }
                                </Typography>
                              </Link>
                            )} />
                        </ListItem>
                      );
                    })}
                  </List>
                </Grid>
              </Grid>
            </CardContent>
          }
          <CardActions
            disableSpacing
          >
            <Link
              className={classes.link}
              to={{
                pathname: CreateUrlCategory(language, item),
                state: {
                  category: item,
                },
              }}
            >
              <LangButton
                className={classnames(classes.button, isHover && classes.buttonHover)}
                lang={copy.cta}
                typeButton={TYPES.CONTAINED}
                variant={variant}
              />
            </Link>
          </CardActions>
        </Card>
      ),
    });
  });

  const items = categories.map(item => (
    <Grid
      item
      key={item.id}
      className={classes.item}
      onMouseEnter={() => handleHover({
        hover: true,
        id: item.id,
      })}
      onMouseLeave={() => handleHover({
        hover: false,
      })}
      xs={12}
      sm={12}
      md={4}
      lg={4}
    >
      {item.render()}
    </Grid>
  ));

  return (
    verbiage && (
      <Fragment>
        {device !== 'mobile' && (
          <SectionBlock
            id={verbiage(copy.id)}
            variant={variant}
          >
            <Grid
              container
              spacing={4}
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid
                item
                xs={10}
                sm={10}
                md={12}
                lg={12}
                >
                <Callout
                  align="center"
                  title={copy.title}
                  subtitle={copy.body}
                  variant={variant}
                  transparent
                />
              </Grid>
              {items}
            </Grid>
          </SectionBlock>
        )}
        {device === 'mobile' && (
          <Paper className={classes.container}>
            <Callout
              align="justify"
              title={copy.title}
              subtitle={copy.body}
              variant={variant}
              transparent
            />
            <Slider sm={12} items={items.map((item, i) => ({
              key: i,
              render: () => (
                <Fragment>
                  {item}
                </Fragment>
              ),
              }))}
              auto={false}
            />
          </Paper>
        )}
      </Fragment>
    )
  );
}

export default withStyles(styles)(withRouter(ServicesLayout));
