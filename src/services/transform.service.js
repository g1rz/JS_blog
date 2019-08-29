export class TransformService {
  static fbObjetctToArray(fbData) {
    return Object.keys(fbData).map(key => {
      const item = fbData[key];
      item.id = key;
      return item;
    })
  }
}