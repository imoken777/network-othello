import type { UserId } from '$/commonTypesWithClient/branded';

const userColorDict: { black?: UserId; white?: UserId } = {};

export const userColorUsecase = {
  getUserColor: (userId: UserId): number => {
    if (userColorDict.black === userId) {
      return 1;
    } else if (userColorDict.white === undefined) {
      userColorDict.white = userId;
      return 2;
    } else if (userColorDict.black === undefined) {
      userColorDict.black = userId;
      return 1;
    } else {
      userColorDict.white = userId;
      return 2;
    }
  },
};
