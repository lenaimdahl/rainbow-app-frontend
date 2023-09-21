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
      return data;
    } catch (error) {
      console.error("Error while getting activities:", error);
    }
  }

  async saveNewActivity(newActivity) {
    try {
      const { data } = await this.api.post("/api/activities", newActivity);
      return data;
    } catch (error) {
      console.error("Error while saving activity:", error);
      throw error;
    }
  }

  async saveFinishedActivity(userId, clickedActivityId) {
    try {
      const data = { id: clickedActivityId };
      const { data: updatedActivities } = await this.api.post(
        `/api/user/${userId}/activities`,
        data
      );
      return updatedActivities;
    } catch (error) {
      console.error("Error while saving users activity:", error);
      throw error;
    }
  }
}
