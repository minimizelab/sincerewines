import React, { FunctionComponent } from 'react';
import classes from '../styles/cookieDialog.module.css';
import Button from '../molecules/Button';

const CookieDialog: FunctionComponent = () => {
  return (
    <div className={classes.fadeBg}>
      <div className="relative bg-white rounded-sm p-3 md:px-16 md:pt-6 md:pb-8 inset-0 w-full max-w-lg m-auto flex-col flex">
        <div className="text-center p-2">
          <h5 className="text-2xl font-title text-sincere-green">
            Välkommen till Sincere Wines
          </h5>
          <h6 className="text-base py-4 font-body font-light">
            Denna sida innehåller information om alkoholhaltiga drycker och
            riktar sig till dig som fyllt 25 år.
          </h6>
          <h6 className="text-xs pb-6 font-body font-light">
            När jag bekräftar att jag är 25 år eller äldre godkänner jag också
            att webbplatsen använder cookies för bättre användarupplevelse.
          </h6>
          <Button dark text="Jag är över 25 år och godkänner cookies" />
        </div>
      </div>
    </div>
  );
};

export default CookieDialog;
