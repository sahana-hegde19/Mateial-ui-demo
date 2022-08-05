import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { IconButton, makeStyles, Typography, Avatar } from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";
import { blue, green, pink, yellow } from "@material-ui/core/colors";

const useStyles = makeStyles({
  test: {
    border: (note) => {
      if (note.category == "Work") {
        return "1px solid red";
      }
    },
  },
  avatar: {
    backgroundColor: (note) => {
      if (note.category == "Work") {
        return yellow[700];
      }
      if (note.category == "Money") {
        return green[500];
      }
      if (note.category == "Todos") {
        return pink[500];
      }
      if (note.category == "Reminders") {
        return blue[500];
      }
    },
  },
});

export default function NoteCard({ note, handleDelete }) {
  const classes = useStyles(note);
  return (
    <div>
      <Card elevation={1} className={classes.test}>
        <CardHeader
          avatar={<Avatar className={classes.avatar}>{note.title[0]}</Avatar>}
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
