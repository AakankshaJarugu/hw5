import { ActivityModel } from "../model/activity-model";
const base_url = 'https://www.boredapi.com/api/activity/';

export const fetchData = async (type = '') => {
  const response = await fetch(base_url + '?type=' + type);
  const data = await response.json();

  const activity = new ActivityModel();
  
  return activity.serializer(data);
}