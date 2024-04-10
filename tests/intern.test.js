const Intern = require('../lib/intern');
const fs = require("fs");
jest.mock("fs");

describe('intern', () => {
    describe('initialization', () => {
        it('creates a new object with name, id, email, and school for the intern', () => {
            const intern = new Intern('Eliza', 5, 'eliza@something.com', 'OSU');

            expect(intern.name).toEqual('Eliza');
            expect(intern.id).toEqual(5);
            expect(intern.email).toEqual('eliza@something.com');
            expect(intern.school).toEqual('OSU');
        })
    });

    describe('userSchool', () => {
        it('returns the school the intern is attending', () => {
            const intern = new Intern('Eliza', 3, 'eliza@something.com', 'OSU');

            expect(intern.userSchool()).toEqual('OSU');
        })
    });

    describe('userRole', () => {
        it('returns the role of intern', () => {
            const intern = new Intern('Eliza', 3, 'eliza@something.com', 'OSU');

            expect(intern.userRole()).toEqual('Intern');
        })
    })
});