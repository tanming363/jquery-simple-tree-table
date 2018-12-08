'use strict';

import 'jquery-simple-tree-table.scss';
import SimpleTreeTable from 'simple-tree-table';

const NAMESPACE = 'simple-tree-table';

$.fn.simpleTreeTable = function(options) {
  return this.each((i, elem) => {
    let $elem = $(elem);
    let st = new SimpleTreeTable($elem, options);
    $elem.data(NAMESPACE, st);
  });
};

$.simpleTreeTable = {
  getDefaults: SimpleTreeTable.getDefaults,
  setDefaults: SimpleTreeTable.setDefaults
};
