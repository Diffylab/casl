import { createElement } from 'react';
import PropTypes from 'prop-types';
import { Ability } from '@casl/ability';
import Can from './Can';

export function createCanBoundTo(ability) {
  return class BoundCan extends Can {
    static propTypes = {
      ...Can.propTypes,
      ability: PropTypes.instanceOf(Ability)
    };

    static defaultProps = {
      ability
    };
  };
}

export function createContextualCan(Consumer) {
  return function ContextualCan(props) {
    return createElement(Consumer, null, ability => createElement(Can, {
      ability: props.ability || ability,
      I: props.I || props.do,
      a: props.on || props.a || props.an || props.of || props.this,
      not: props.not,
      children: props.children,
      passThrough: props.passThrough,
    }));
  };
}
