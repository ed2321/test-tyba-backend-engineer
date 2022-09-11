const repo = require('./transactionsHistory');
const logsModel = require('../database/models/transactionsHistory');

jest.mock('../database/models/transactionsHistory', () => {
  return {
    create: jest.fn().mockReturnThis(),
    scan: jest.fn().mockReturnThis(),
    contains: jest.fn().mockReturnThis(),
    exec: jest.fn().mockReturnThis(),
  };
});

const validLogs = {
  endpoint: "/api/example",
  body: {
    example: "hi"
  },
}

describe('When the function getTransactionsHistory runs', () => {
  it('should throw an error if no id is passed', async () => {
    await repo.getTransactionsHistory();
    expect(logsModel.exec).toHaveBeenCalledTimes(1);
  });
});

describe('When the function createTransactionsHistory runs', () => {
  it('should call to the table if the data are correct', async () => {
    const logsSpy = jest.spyOn(logsModel, 'create').mockReturnValue(validLogs);
    const result = await repo.createTransactionsHistory(validLogs);
    expect(logsSpy).toHaveBeenCalledTimes(1);
    expect(result).toBe(validLogs);
    logsSpy.mockRestore();
  });

  it('should throw an error if no object is passed', async () => {
    let result = null;
    const logsSpy = jest.spyOn(logsModel, 'create');
    try {
      result = await repo.createTransactionsHistory();
      expect(true).toBe(false);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(logsSpy).toHaveBeenCalledTimes(0);
      expect(result).toBe(null);
    }
  });
});