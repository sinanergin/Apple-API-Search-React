import { useDispatch, useSelector } from 'react-redux';
import { searchActions } from '../helpers/slice';
import Album from './Album';
import Artist from './Artist';
import Song from './Song';

export default function Results(params: any) {
  const queryResults = useSelector((state: any) => state.items);
  const lastItemNumber = useSelector((state: any) => state.lastItemNumber);
  const dispatch = useDispatch();

  const handleLoadMore = (event: any) => {
    dispatch(searchActions.increaseLoadedItem(null));
  };

  return (
    <>
      <h1>this is result set</h1>
      {queryResults.slice(0, lastItemNumber).map((result: any) => {
        switch (result.wrapperType) {
          case 'artist':
            return <Artist recordInfo={result} />;
          case 'collection':
            return <Album recordInfo={result} />;
          case 'track':
            return <Song recordInfo={result} />;
          default:
            return <h1>not found</h1>;
        }
      })}
      <button onClick={handleLoadMore}>Load More</button>
    </>
  );
}
