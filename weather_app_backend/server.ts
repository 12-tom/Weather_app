const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
import axios, { AxiosError }  from 'axios';
import { Request, Response} from "./type";

let city = "toronto";

// express app
const app = express();

app.use(cors());
app.use(bodyParser.json());

// listen for requests
app.listen(8080);

app.get("/cities", async (req:Request, res:Response) => {
  try {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?q=${city}&days=5&key=54d4950a650d400f998113625240407`
    );
    res.status(response.status);
    res.json(response.data);
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      res.status(error?.response?.status);
      res.json(error?.response?.data);
    };
  }
});

app.post("/cities", async (req:Request, res:Response) => {
    {
        req?.body?.city ?
        city = req.body.city : city
    }
    try {
        const response = await axios.post(
            `https://countriesnow.space/api/v0.1/countries/population/cities`,
            {
                city: city,
            },
            {
                headers: {
                    "content-type": "application/json",
                },
            }
        );
      res.status(200);
      res.json(response.data);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        res.status(400);
        res.json(error?.response?.data);
      };
    }
});
