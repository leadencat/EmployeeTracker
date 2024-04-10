const Engineer = require('../lib/engineer');
const fs = require("fs");
jest.mock("fs");

describe('engineer', () => {
    describe('initialization', () => {
        it('creates a new object with name, id, email, and github for the engineer', () => {
            const engineer = new Engineer('Jessica', 3, 'jessica@something.com', 'Jessica3GH');

            expect(engineer.name).toEqual('Jessica');
            expect(engineer.id).toEqual(3);
            expect(engineer.email).toEqual('jessica@something.com');
            expect(engineer.github).toEqual('Jessica3GH');
        })
    });

    describe('userGithub', () => {
        it('returns the engineers GitHub username', () => {
            const engineer = new Engineer('Jessica', 3, 'jessica@something.com', 'Jessica3GH');

            expect(engineer.userGithub()).toEqual('Jessica3GH');
        })
    });

    describe('userRole', () => {
        it('returns the role of engineer', () => {
            const engineer = new Engineer('Jessica', 3, 'jessica@something.com', 'Jessica3GH');

            expect(engineer.userRole()).toEqual('Engineer');
        })
    })
});