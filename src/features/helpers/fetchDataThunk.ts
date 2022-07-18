import { searchActions } from './slice';

export const fetchDataThunk = (keyword: string) => {
  return async (dispatch: any) => {
    const fetchHandler = async () => {
      const resultList: any = [];
      const fetchITunesQueries = async (requestUrls: Array<any>) => {
        for (const url of requestUrls) {
          await fetch(url)
            .then((response) => response.json())
            .then((response) => {
              if (response.resultCount > 0) {
                resultList.push(...response.results);
              }
            });
        }
      };

      await fetchITunesQueries([
        `https://itunes.apple.com/search?media=music&entity=musicTrack&limit=50&term=${keyword}`, //song
        `https://itunes.apple.com/search?media=music&entity=album&limit=50&term=${keyword}`, //album
        `https://itunes.apple.com/search?media=music&entity=musicArtist&limit=50&term=${keyword}`, //artist
      ]);

      return resultList;
    };

    try {
      const results = await fetchHandler();
      dispatch(searchActions.reset(null));
      dispatch(searchActions.getAllItems(results));
    } catch (err) {
      dispatch(searchActions.reset(null));
    }
  };
};
