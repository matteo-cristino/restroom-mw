import anyTest, { TestFn } from "ava";
import bodyParser from "body-parser";
import express from "express";
import supertest, { SuperTest, Test } from "supertest";

const test = anyTest as TestFn<{ app: SuperTest<Test>}>;

process.env.ZENCODE_DIR = "./test/fixtures";
const zencode = require("../../core/src/index");
const influx = require("../src/index");

test.before(async (t) => {
  const app = express();
  app.use(bodyParser.json());
  app.use(influx.default);
  app.use("/*", zencode.default);
  t.context = { app: supertest(app) };
});

test.serial("Middleware should write to influxDB", async (t) => {
  const { app } = t.context;
  const currentDate = new Date();
  const timestamp = currentDate.getTime();
  const query = `'weather,host=myHost testField="testData" ${timestamp}' |> to(bucket:\"dyne\")`
  const res = await app.post("/influxdb_read")
    .send({keys: {}, data: {
      query: query
    }})
  const result = res.body;
  t.is(res.status, 200, res.text);
});

test.serial("Middleware should read from influxDB", async (t) => {
  const { app } = t.context;
  const res = await app.post("/influxdb_read");
  const result = res.body;
  t.is(res.status, 200, res.text);
});

