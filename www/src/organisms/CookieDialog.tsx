import React, { FunctionComponent, useEffect } from 'react';
import Button from '../molecules/Button';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../store';
import { actions } from '../store/ui';
import H4 from '../atoms/H4';
import Text from '../atoms/Text';
import { AppDispatch } from '../store';

const storageKey = 'acceptCookies';

const CookieDialog: FunctionComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isOpen = useSelector<State, boolean>(
    (state) => state.ui.cookieDialogOpen
  );
  const closeDialog = (): void => {
    dispatch(actions.cookieDialogToggled(false));
    if (window) {
      window.localStorage.setItem(storageKey, 'true');
    }
  };
  useEffect(() => {
    if (window) {
      const accepted = window.localStorage.getItem(storageKey);
      if (accepted !== 'true') {
        dispatch(actions.cookieDialogToggled(true));
      }
    } else {
      dispatch(actions.cookieDialogToggled(true));
    }
  }, [dispatch]);
  return isOpen ? (
    <div
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      }}
      className="z-20 fixed w-full h-screen z-50 flex"
    >
      <div className="relative bg-white rounded-sm p-3 md:px-16 md:pt-6 md:pb-8 inset-0 w-full max-w-lg m-auto flex-col flex">
        <div className="flex flex-col items-center text-center p-2">
          <H4>Välkommen till Sincere Wines</H4>
          <Text className="py-4">
            Denna sida innehåller information om alkoholhaltiga drycker och
            riktar sig till dig som fyllt 25 år.
          </Text>
          <Text className="pb-6">
            När jag bekräftar att jag är 25 år eller äldre godkänner jag också
            att webbplatsen använder cookies för bättre användarupplevelse.
          </Text>
          <Button onClick={closeDialog}>
            Jag är över 25 år och godkänner cookies
          </Button>
        </div>
      </div>
    </div>
  ) : null;
};

export default CookieDialog;
