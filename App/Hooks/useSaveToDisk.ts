import { useCallback } from 'react';
import RNFetchBlob from 'rn-fetch-blob';

const { fs } = RNFetchBlob;
const DATA_PATH = `${fs.dirs.CacheDir}/data.json`;

export const useSaveToDisk = () => {
  const load = useCallback(async <T>(): Promise<T | null> => {
    const exists = await fs.exists(DATA_PATH);
    if (!exists) {
      return null;
    }

    const data = await fs.readFile(DATA_PATH, 'utf8');
    try {
      return JSON.parse(data);
    } catch (e) {
      return null;
    }
  }, []);

  const write = useCallback(async (data: any) => {
    await fs.writeFile(DATA_PATH, JSON.stringify(data), 'utf8');
  }, []);

  const deleteData = useCallback(async () => {
    await fs.unlink(DATA_PATH);
  }, []);

  return { load, write, deleteData };
};
