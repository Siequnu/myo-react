import React from 'react';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';

import CardComponent from '../Card/CardComponent';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ActivityPreviewDialog(props) {
  const { onClose, activity, open } = props;

  return (
    <Dialog onClose={onClose} open={open} TransitionComponent={Transition}>
        <CardComponent activities={[activity]} skipIntro={true} margin={0}/>
    </Dialog>
  );
}