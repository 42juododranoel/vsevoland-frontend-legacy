/* eslint-disable no-template-curly-in-string */

/*
 * This files goes through envsubst during our CI process
 */
module.exports = {
  release: '${CIRCLE_SHA1}',
}
