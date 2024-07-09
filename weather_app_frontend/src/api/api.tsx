import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { Weather, Population, Message, Err} from "../types/types";

const client = axios.create({
  baseURL: "http://localhost:8080",
});

export const useFetchData = (
  post: Population | undefined,
  postError: AxiosError<Message> | undefined
) => {
  const [get, setGet] = useState<Weather | undefined>();
  const [getError, setGetError] = useState<AxiosError<Err>>();
  const [getStatus, setGetStatus] = useState<number>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.get(`/cities`);
        const data = await response.data;
        setGet(data);
        setGetStatus(response.status)
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          setGetError(error);
          setGetStatus(error.response?.status)
          console.error("Error fetching data:", error);
          throw error;
        }
      }
    };
    fetchData();
  }, [post, postError]);
  return { get, getError, getStatus };
};

export const useSendData = (city: string) => {
  const [post, setPost] = useState<Population>();
  const [postError, setPostError] = useState<AxiosError<Message>>();
  const [postStatus, setPostStatus] = useState<number>();
  useEffect(() => {
    const sendData = async () => {
      try {
        const response = await client.post(
          `/cities`,
          {
            city: city,
          },
          {
            headers: {
              "content-type": "application/json",
            },
          }
        );
        const res = await response.data;
        setPost(res);
        setPostStatus(response.status)
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          setPostError(error);
          setPostStatus(error.response?.status)
          console.log("Error in sending data", error);
          throw error;
        }
      }
    };

    sendData();
  }, [city]);

  return { post, postError, postStatus };
};
