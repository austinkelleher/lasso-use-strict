'use strict';
const chai = require('chai');
chai.config.includeStack = true;
require('chai').should();
const expect = require('chai').expect;
const nodePath = require('path');
const fs = require('fs');
const lasso = require('lasso');
const useStrictPlugin = require('../');

describe('lasso-use-strict', function () {
  it('should add use strict to a file without it', function (done) {
    var myLasso = lasso.create({
      fileWriter: {
        fingerprintsEnabled: false,
        outputDir: nodePath.join(__dirname, 'static')
      },
      bundlingEnabled: true,
      plugins: [useStrictPlugin]
    });

    myLasso.lassoPage({
      name: 'testPage',
      dependencies: [
        nodePath.join(__dirname, 'fixtures/simple.js')
      ]
    },
    function (err, lassoPageResult) {
      if (err) {
        return done(err);
      }

      var output = fs.readFileSync(nodePath.join(__dirname, 'static/testPage.js'), {
        encoding: 'utf8'
      });
      expect(output).to.contain(
        "'use strict';\n\n"
      );
      done();
    });
  });
});
