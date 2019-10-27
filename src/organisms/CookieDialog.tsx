import React, { FunctionComponent } from 'react';
import classes from '../styles/cookieDialog.module.css';
import Button from '../molecules/Button';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../store/types';
import { setDialogOpen } from '../store/actions';
import H4 from '../atoms/H4';
import Text from '../atoms/Text';

const CookieDialog: FunctionComponent = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector<State, boolean>(state => state.cookieDialogOpen);
  const closeDialog = () => dispatch(setDialogOpen(false));
  return isOpen ? (
    <div className={classes.fadeBg}>
      <div className="relative bg-white rounded-sm p-3 md:px-16 md:pt-6 md:pb-8 inset-0 w-full max-w-lg m-auto flex-col flex">
        <div className="text-center p-2">
          <H4>Välkommen till Sincere Wines</H4>
          <div className="py-4">
            <Text>
              Denna sida innehåller information om alkoholhaltiga drycker och
              riktar sig till dig som fyllt 25 år.
            </Text>
          </div>
          <div className="pb-6">
            <Text>
              När jag bekräftar att jag är 25 år eller äldre godkänner jag också
              att webbplatsen använder cookies för bättre användarupplevelse.
            </Text>
          </div>
          <Button
            dark
            text="Jag är över 25 år och godkänner cookies"
            onClick={closeDialog}
          />
        </div>
      </div>
    </div>
  ) : null;
};

export default CookieDialog;
