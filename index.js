const FunnyLogger = require('funny-log')

exports.handler = async function (event, context) {
  var logger = new FunnyLogger()
  logger.haha('Hello World!') //☜(ﾟヮﾟ☜) Hello World!

  console.log('Hello Travis!!!')
  console.log('ENVIRONMENT VARIABLES\n' + JSON.stringify(process.env, null, 2))
  console.log('EVENT\n' + JSON.stringify(event, null, 2))
  console.log('Travis is the worst of all CI/CD platforms!!!')
  return context.logStreamName
}
