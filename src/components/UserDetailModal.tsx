import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  DialogActions,
  Button,
  Stack,
} from "@mui/material";
import { UserData } from "../data/mockData";

interface Props {
  open: boolean;
  onClose: () => void;
  user: UserData | null;
}

const UserDetailModal: React.FC<Props> = ({ open, onClose, user }) => {
  if (!user) return null;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>User Details</DialogTitle>
      <DialogContent>
        <Stack spacing={1}>
          <Typography><strong>Name:</strong> {user.name}</Typography>
          <Typography><strong>Email:</strong> {user.email}</Typography>
          <Typography><strong>Score:</strong> {user.score}</Typography>
          <Typography><strong>Bio:</strong> {user.bio}</Typography>
          <Typography><strong>Joining Date:</strong> {user.joiningDate}</Typography>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="contained">Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserDetailModal;
