import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../store';
import { actions } from '../store/list';
import { WineListItem } from '../types/types';

const key = 'wineList';

const usePersistStore = (): boolean => {
  const dispatch = useDispatch();
  const [initialized, setInitialized] = useState(false);
  const wineList = useSelector<State, WineListItem[]>(
    (state) => state.list.wineList
  );
  useEffect(() => {
    if (window && initialized) {
      window.localStorage.setItem(key, JSON.stringify(wineList));
    }
  }, [wineList, initialized]);
  useEffect(() => {
    if (window) {
      const localStorageData = window.localStorage.getItem(key);
      if (localStorageData !== null) {
        dispatch(actions.setList(JSON.parse(localStorageData)));
      }
      setInitialized(true);
    }
  }, [dispatch]);
  return initialized;
};

export default usePersistStore;
