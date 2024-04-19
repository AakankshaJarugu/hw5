export class ActivityModel {
  serializer = (data) => ({
    accessibility: data.accessibility,
    activity: data.activity,
    key: data.key,
    link: data.link,
    participants: data.participants,
    price: data.price,
    type: data.type,
    error: data.error,
  })
}