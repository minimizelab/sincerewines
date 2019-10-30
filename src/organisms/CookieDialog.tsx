import React, { FunctionComponent } from 'react';
import classes from '../styles/cookieDialog.module.css';
import Button from '../molecules/Button';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../store/types';
import { setDialogOpen } from '../store/actions';
import H4 from '../atoms/H4';
import Text from '../atoms/Text';
import { combineClasses } from '../utils/helpers';

const CookieDialog: FunctionComponent = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector<State, boolean>(state => state.cookieDialogOpen);
  const closeDialog = () => dispatch(setDialogOpen(false));
  return isOpen ? (
    <div className={combineClasses([classes.fadeBg, 'z-20'])}>
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