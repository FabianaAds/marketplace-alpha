const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implementar eventos aqui, se necessário
    },
    baseUrl: 'https://marketplace-alpha.tendaatacado.com.br/',
    specPattern: 'cypress/e2e/**/*.spec.js',
  },

  "env": {
  "credenciais_validas": {
    "email": "fabianasilva.analystqa@gmail.com",
    "password": "2050063102@Qa"
  }
}
});
