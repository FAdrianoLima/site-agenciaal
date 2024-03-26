import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import styles from "../styles/Modal.module.css";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function Modal({
  titulo = "",
  texto = "",
  open = false,
  toggleModal,
}) {
  const [showModal, setShowModal] = React.useState(false);

  React.useEffect(() => {
    setShowModal(open);
  }, [open]);

  return (
    <div style={{ overflowY: "hidden" }}>
      <BootstrapDialog
        disableScrollLock
        onClose={toggleModal}
        aria-labelledby="customized-dialog-title"
        open={showModal}
        maxWidth="sm"
        fullWidth={true}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={toggleModal}
        >
            <div className={styles.head}>
              <h2>{titulo}</h2>
            </div>
        </BootstrapDialogTitle>
        <DialogContent>
          <div className={styles.root}>

            <div dangerouslySetInnerHTML={{ __html: texto }} />
          </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
