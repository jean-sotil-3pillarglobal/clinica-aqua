import React, { Fragment, useState } from 'react';
import ShowMoreText from 'react-show-more-text';
import classnames from 'classnames';

import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
  withStyles,
} from '@material-ui/core';

import LangGenerateTree from './../../../../providers/utils/lang.generate.tree';
import LangToggler from './../../../../providers/lang/toggler';
import ThemeBackground from './../../../../providers/utils/theme.background';
import ThemeColor from './../../../../providers/utils/theme.color';

// provider
import SectionBlock from './../../section';

import Slider from './../../../commons/slider';
import Callout from './../../../commons/callout/';

const styles = theme => ({
  card: props => ({
    borderRadius: '0 0 0 0',
    display: 'flex',
  }),
  callout: props => ({
    margin: '0 auto',
  }),
  container: props => ({
    background: ThemeBackground(props, theme),
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      padding: `${theme.spacing(10)}px ${theme.spacing(1)}px`,
    },
  }),
  description: props => ({
    color: ThemeColor(props, theme),
    display: 'inline-block',
    margin: `${theme.spacing(2)}px auto`,
    maxHeight: 140,
    overflowY: 'scroll',
    padding: theme.spacing(1),
    textAlign: 'left',
    width: '100%',
  }),
  details: {
    overflowY: 'scroll',
  },
  expand: props => ({
    color: ThemeColor(props, theme),
    fontSize: '1em',
    fontWeight: 800,
    margin: '0 auto',
  }),
  image: {
    padding: theme.spacing(1),
  },
  item: props => ({
    '&:hover': {
      background: ThemeBackground(props, theme, 'dark'),
    },
    background: ThemeBackground(props, theme, 'light'),
    border: `1px solid ${ThemeBackground(props, theme, 'light')}`,
  }),
  itemHover: props => ({
    border: `1px solid ${ThemeBackground(props, theme, 'main')}`,
  }),
  label: props => ({
    background: ThemeBackground(props, theme, 'main'),
    color: ThemeColor(props, theme),
    fontWeight: 600,
    margin: `${theme.spacing(4)}px 0`,
    padding: theme.spacing(1),
  }),
  media: {
    backgroundPosition: 'center',
    filter: 'grayscale(100%) contrast(90%)',
    height: 550,
    imageRendering: 'pixelated',
    padding: `${theme.spacing(2)}px`,
    transition: theme.transitions.create(
      ['filter'],
      { duration: theme.transitions.duration.complex },
    ),
    width: '100%',
  },
  mediaHover: {
    filter: 'initial',
    imageRendering: 'initial',
  },
  title: props => ({
    color: ThemeColor(props, theme),
    display: 'block',
    marginTop: theme.spacing(2),
    textAlign: 'center',
  }),
});

const NODE = 'commons';
const SLOT = 'clerks_1';

const copy = LangGenerateTree([NODE, SLOT], [
  'clerks',
  'title',
  'body',
]);

function ClerksLayout (props: {
  classes: Object,
  proxy: Object,
  variant: String,
}) {
  const [isHover, setHover] = useState(false);

  const {
    classes,
    proxy,
    variant,
  } = props;

  const {
    device,
    language,
    verbiage,
  } = proxy;

  const items = verbiage && verbiage(copy.clerks).map((item, i) => {
    const hover = device === 'mobile' || isHover;
    const key = `${i}-item`;

    return (
      <Grid
        item
        className={classnames(classes.item, (hover || device === 'mobile') && classes.itemHover)}
        key={item.id}
        md={item.size_md || 12}
        sm={item.size_sm || 12}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        key={key}
      >
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={5}
          >
            <Card key={item.id} dense="true" elevation={0} className={classes.card}>
              <CardMedia
                className={classnames(classes.media, hover && classes.mediaHover)}
                image={item.image}
              />
            </Card>
          </Grid>
          <Grid
            item
            sm={12}
            md={7}
          >
            <div className={classes.details}>
              <CardContent
                className={classes.content}>
                <Typography
                  variant="h3"
                  className={classes.title}
                >
                  <LangToggler id={item.name} />
                </Typography>
                <Typography
                  variant="caption"
                  className={classes.label}
                >
                  <LangToggler id={item.label} />
                </Typography>

                <Typography
                  variant="caption"
                  className={classes.description}
                >
                  <ShowMoreText
                      anchorClass={classes.expand}
                      expanded={false}
                      less={verbiage(item.less)[language]}
                      lines={3}
                      more={verbiage(item.more)[language]}
                      width={500}
                  >
                    <LangToggler id={item.description} />
                  </ShowMoreText>
                </Typography>
              </CardContent>
            </div>
          </Grid>
        </Grid>
      </Grid>
    );
  }) || [];

  return verbiage && (
    <Fragment>
      {device !== 'mobile' && (
        <SectionBlock variant={variant} className={classes.container}>
          <Grid
            container
            spacing={4}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid item xs={10} sm={12} md={12}>
              <Callout
                align="center"
                className={classes.callout}
                subtitle={copy.body}
                title={copy.title}
                transparent
                variant={variant}
              />
            </Grid>
            {items}
          </Grid>
        </SectionBlock>
      )}
      {device === 'mobile' && (
        <Paper className={classes.container}>
          <Callout
            align="center"
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
  );
}

export default withStyles(styles)(ClerksLayout);
