import "/lib/object-extensions";

import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from '/components/root';
import { api } from '/api';
import { warehouse } from '/warehouse';
import * as util from '/lib/util';
import _ from 'lodash';

console.log('app running');

/*
  Common variables:

  station :    ~zod/club
  circle  :    club
  host    :    zod
*/

api.setAuthTokens({
  ship: window.ship
});

window.util = util;
window._ = _;

ReactDOM.render(<Root />, document.querySelectorAll("#root")[0]);
