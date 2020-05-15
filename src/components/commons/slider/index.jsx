import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Slider from 'react-slick';
import React from 'react';

import {
  Paper,
  withStyles,
} from '@material-ui/core';

const styles = theme => ({
  button: {
    '& svg *': {
      stroke: theme.palette.primary.dark,
    },
    '& svg:hover *': {
      fill: theme.palette.secondary.main,
      stroke: theme.palette.secondary.contrastText,
    },
    fontSize: '1rem',
  },
  container: {
    '& .slick-slide *': {
      outline: 'none!important',
    },
    border: `0 solid ${theme.palette.secondary.main}`,
    borderBottom: theme.spacing(2),
    position: 'relative',
    textAlign: 'center',
    width: '100%',
  },
  image: {
    width: '100%',
  },
  item: {
    padding: `0 ${theme.spacing(2)}px`,
  },
  nextArrow: {},
  prevArrow: {},
});

function SliderLayout (props: {
  auto: Boolean,
  classes: Object,
  items: Array,
  lg: Integer,
  md: Integer,
  proxy: Object,
  slidesToShow: Integer,
  sm: Integer,
}) {
  const {
    auto,
    classes,
    items,
    lg,
    md,
    slidesToShow,
    sm,
  } = props;

  const sliderProps = {
    autoplay: auto === undefined || auto,
    dots: true,
    infinite: false,
    infinite: true,
    lazyLoad: true,
    slidesToScroll: 5,
    slidesToShow: 5,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: slidesToShow || 4,
          slidesToScroll: slidesToShow || 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: slidesToShow || 3,
          slidesToScroll: slidesToShow || 3,
          initialSlide: slidesToShow || 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: slidesToShow || 1,
          slidesToScroll: slidesToShow || 1,
        }
      }
    ]
  };

  return (
    <Paper
      className={classes.container}
      elevation={0}>
      <Slider {...sliderProps}>
          {items.map((item) => {
            return (
              <div className={classes.item} key={`${item.key}-slider-item`}>
                {item.render()}
              </div>
            );
          })}
        </Slider>
    </Paper>
  );
}

export default withStyles(styles)(SliderLayout);
