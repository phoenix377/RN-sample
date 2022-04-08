jest.doMock('rn-fetch-blob', () => {
  return {
    fs: {
      dirs: {
        CacheDir: '',
      },
    },
    exists: jest.fn(),
    readFile: jest.fn(),
    writeFile: jest.fn(),
    unlink: jest.fn(),
  };
});

export {};
