/// <reference types="cypress" />
import { login } from '../support/login';

describe('Login', () => {
  before("Access Login Page", () => {
    login();
  });

  it('successfully login', () => {
  })
});
