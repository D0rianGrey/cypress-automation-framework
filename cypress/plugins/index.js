const sqlServer = require('cypress-sql-server');
const dbConfig = require('../../cypress.json');

module.exports = (on, config) => {
    // `on` is used to hook into various events Cypress emits
    // `config` is the resolved Cypress config
    tasks = sqlServer.loadDBPlugin(dbConfig.db);
    on('task', tasks);
}