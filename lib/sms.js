const configManager = require('./config-manager')
const ph = require('./plugin-helper')
const argv = require('minimist')(process.argv.slice(2))

function sendMessage (settings, rec) {
  return Promise.resolve()
    .then(() => {
      //console.log(settings.config);
      //console.log(configManager);
      const pluginCode = configManager.unscoped(settings.config).sms
        const smsProcessor = (argv.mockSms ? 'mock-sms' : 'twilio')
      const plugin = ph.load(ph.SMS, smsProcessor)
      const account = settings.accounts[pluginCode]

      return plugin.sendMessage(account, rec)
    })
}

module.exports = {sendMessage}
