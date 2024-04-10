const Manager = require('../lib/manager');
const fs = require("fs");
jest.mock("fs");

describe('manager', () => {
    describe('initialization', () => {
        it('creates a new object with name, id, email, and office number for the manager', () => {
            const manager = new Manager('Ashley', 1, 'ashley@something.com', 1);

            expect(manager.name).toEqual('Ashley');
            expect(manager.id).toEqual(1);
            expect(manager.email).toEqual('ashley@something.com');
            expect(manager.ofcNum).toEqual(1);
        })
    });

    describe('userGithub', () => {
        it('returns the offic number of the manager', () => {
            const manager = new Manager('Ashley', 1, 'ashley@something.com', 1);

            expect(manager.userSchool()).toEqual(1);
        })
    });

    describe('userRole', () => {
        it('returns the role of manager', () => {
            const manager = new Manager('Ashley', 1, 'ashley@something.com', 1);

            expect(manager.userRole()).toEqual('Manager');
        })
    })
});