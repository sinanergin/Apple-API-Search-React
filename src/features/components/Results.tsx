import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { searchActions } from '../helpers/slice';
import Album from './Album';
import Artist from './Artist';
import Song from './Song';
import lazyLoading from '../helpers/lazyLoading';

function RecordsFounded(props: any) {
  const { queryResults, lastItemNumber } = props;
  let isIterateLastItem: boolean = false;

  return (
    <>
      <Typography my={2} variant='h6' align='right'>
        ({queryResults.length} records found.)
      </Typography>

      {queryResults
        .slice(0, lastItemNumber)
        .map((result: any, index: number) => {
          isIterateLastItem = lastItemNumber === index + 1;

          switch (result.wrapperType) {
            case 'artist':
              return (
                <Artist
                  recordInfo={result}
                  thisIsLastItem={isIterateLastItem}
                />
              );
            case 'collection':
              return (
                <Album recordInfo={result} thisIsLastItem={isIterateLastItem} />
              );
            case 'track':
              return (
                <Song recordInfo={result} thisIsLastItem={isIterateLastItem} />
              );
          }
        })}
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
  const fetchHandleId = useSelector((state: any) => state.fetchHandleId);
  const dispatch = useDispatch();

  useEffect(() => {
    document.querySelectorAll('[data-search-item]').forEach((item) => {
      const observable = lazyLoading((callback: Function) => {
        dispatch(searchActions.increaseLoadedItem(null));
      });
      observable.observe(item);
    });
  }, [fetchHandleId]);

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
