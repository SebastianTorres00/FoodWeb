/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Recipe, conn } = require('../../src/db.js');

const agent = session(app);

const recipe = {
  name: 'Milanea a la napolitana',
  dish_resume: "Queso y salsa"
};

const recipe2 = {
  name: "Pollo",
  dish_resume: " Pollo con papas",
}


describe("Recipe routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() =>
    Recipe.sync({ force: true }).then(() => {
      Recipe.create(recipe);
      Recipe.create(recipe2);
    })
  );
  describe("GET /recetas", () => {
    it("should get 200", () => agent.get("/recetas").expect(200));
    it("should get a json", () =>
      agent.get("/recetas").expect("Content-Type", /json/));
    it("should get all recipes", () =>
      agent
        .get("/recetas")
        .query({ name: "" })
        .then((res) => {
          expect(res.body).to.have.lengthOf.above(1);
        }));
  });

  describe("GET /recetas/:id", () => {
    it("should get 200", () => agent.get("/recetas/1").expect(200));
    it("should get one recipe in json", () =>
      agent.get("/recetas/1").expect("Content-Type", /json/));
    it("should get one recipe", () =>
      agent.get("/recetas/1").then((res) => {
        expect(res.body).to.not.be.an("array");
      }));
  });
});