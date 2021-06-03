var generateName = require('sillyname')
var sillyName = generateName()

exports.handler = async function (event, context) {
  console.log(`Hello - ${sillyName}!!!`)
  console.log('ENVIRONMENT VARIABLES\n' + JSON.stringify(process.env, null, 2))
  console.log('EVENT\n' + JSON.stringify(event, null, 2))
  console.log('Travis is the worst of all CI/CD platforms!!!')
  return context.logStreamName
}
