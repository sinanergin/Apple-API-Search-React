import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { searchActions } from '../helpers/slice';
import Album from './Album';
import Artist from './Artist';
import Song from './Song';

function RecordsFounded(props: any) {
  const { queryResults, lastItemNumber } = props;
  const dispatch = useDispatch();

  const handleLoadMore = (event: any) => {
    dispatch(searchActions.increaseLoadedItem(null));
  };

  return (
    <>
      <Typography my={2} variant='h6' align='right'>
        ({queryResults.length} records found.)
      </Typography>

      {queryResults.slice(0, lastItemNumber).map((result: any) => {
        switch (result.wrapperType) {
          case 'artist':
            return <Artist recordInfo={result} />;
          case 'collection':
            return <Album recordInfo={result} />;
          case 'track':
            return <Song recordInfo={result} />;
        }
      })}
      <button onClick={handleLoadMore}>Load More</button>
    </>
  );
}

function RecordsNotFounded() {
  return (
    <Typography my={10} variant='h3' align='center'>
      No records found.
    </Typography>
  );
}

export default function Results(params: any) {
  const queryResults = useSelector((state: any) => state.items);
  const lastItemNumber = useSelector((state: any) => state.lastItemNumber);
  return (
    <>
      {queryResults.length > 0 ? (
        <RecordsFounded
          queryResults={queryResults}
          lastItemNumber={lastItemNumber}
        />
      ) : (
        <RecordsNotFounded />
      )}
    </>
  );
}
