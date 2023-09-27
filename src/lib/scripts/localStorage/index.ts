
const getOrSetItem = (key:string, value:unknown = '') => {
  const db = localStorage;
  if (db.getItem(key) == null) {
    db.setItem(key, JSON.stringify(value));
  } else {
    const data : string | null = db.getItem(key);
    return data ? JSON.parse(data) : null ;
  }
  return value;
};

const getItemValue = (key:string) => {
  const db = localStorage;
  if (db.getItem(key) !== null) {
     const data: string | null = db.getItem(key);
     return data ? JSON.parse(data) : null;
  }
  return null;
};

const setItemValue = (key:string, value:boolean|string|[unknown]|object = '') => {
  const db = localStorage;
  if (key !== null) {
    db.setItem(key, JSON.stringify(value));
    return value;
  }
  return null;
};

const clearDB = (): void => {
  const db = localStorage;
  db.clear();
};

export {
  getItemValue,
  getOrSetItem,
  setItemValue,
  clearDB
};
