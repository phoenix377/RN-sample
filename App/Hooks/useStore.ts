import { makeAutoObservable } from 'mobx';
import RNFetchBlob from 'rn-fetch-blob';

const { fs } = RNFetchBlob;
const DATA_PATH = `${fs.dirs.CacheDir}/data-mobx.json`;

class TestAppStore {
  _data: any = null;

  constructor() {
    makeAutoObservable(this);
  }

  get data() {
    return this._data;
  }

  setData(data: any) {
    this._data = data;
  }

  async loadData() {
    const exists = await fs.exists(DATA_PATH);
    if (!exists) {
      return null;
    }

    const data = await fs.readFile(DATA_PATH, 'utf8');
    try {
      this._data = JSON.parse(data);
    } catch (e) {
      this._data = null;
    }
  }

  async writeData() {
    await fs.writeFile(DATA_PATH, JSON.stringify(this._data), 'utf8');
  }

  async deleteData() {
    await fs.unlink(DATA_PATH);
  }
}

const store = new TestAppStore();

export const useStore = () => {
  return store;
};
