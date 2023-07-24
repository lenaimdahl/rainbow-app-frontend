import axios from "axios";
import { API_URL } from "../config/config.index";

export class BackendAPI {
  constructor() {
    this.api = axios.create({
      baseURL: API_URL,
    });
  }

  async getActivities() {
    try {
      const { data } = await this.api.get("/api/activities");
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error while getting activities:", error);
    }
  }
}
