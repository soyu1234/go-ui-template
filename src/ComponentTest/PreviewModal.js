import React from "react";
import {
  Grid,
  Link,
  makeStyles,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useTheme
} from "@material-ui/core";

import { EditorPasteHtml } from "../EditorPasteHtml";

const useStyles = makeStyles(theme => ({
  dialogContainer: {
    fontFamily: "'Lato', sans-serif;",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.background.paper
        : "#2a2330"
  }
}));

const PreviewModal = ({ value, clickedPreview, setClickedPreview }) => {
  const classes = useStyles();
  const { dialogContainer } = classes;
  return (
    <Dialog open={clickedPreview} onClose={() => setClickedPreview(false)}>
      <Grid className={dialogContainer} container direction="row">
        <Grid container direction="column" justify="center" alignItems="center">
          <DialogContent>
            <EditorPasteHtml globVal={value} />
          </DialogContent>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default PreviewModal;
