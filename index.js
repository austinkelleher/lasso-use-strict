'use strict';

const useStrictRegex = /(?:\'use strict\'|\"use strict\");?(\r?\n)+/g;

module.exports = function (lasso, pluginConfig) {
  lasso.addTransform({
    contentType: 'js',
    name: module.id,
    stream: false,

    transform: function (code, lassoContext, callback) {
      const match = useStrictRegex.exec(code);
      if (!match) {
        code += "'use strict';\n\n" + code;
      }
      callback(null, code);
    }
  });
};
