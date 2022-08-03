import { Box, Button, IconButton, makeStyles, Tooltip } from '@material-ui/core'
import { Autorenew, Delete, HelpOutline, People } from '@material-ui/icons'
import { Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { IForm } from '../types/IForm'

const useStyles = makeStyles({
  wrapper: {
    width: "100%",
    height: "100px",
    background: "#f8f8f8",
    borderRadius: "15px",
    marginTop: "40px",
    padding: "15px"
  },
  noLinkStyle: {
    textDecoration: "none"
  }
})

interface p {
  form: IForm
  index: number
}

export const FormListMember = (props : p) => {
  const { getNotes, removeForm } = useActions()
  const {note} = useTypedSelector(store => store)
  const classes = useStyles()

  useEffect(() => {
    getNotes(props.form.id as string)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onDelete = () => {
    removeForm(props.form.id as string)
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      className={classes.wrapper}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        
      >
        <Box display="flex" alignItems="center">
          <Typography variant="h6">{props.index + 1}.</Typography>
          &nbsp;
          <Typography variant="h6">{props.form.title}</Typography>
        </Box>
        <Box>
        <Tooltip title="Rebuild">
          <NavLink to={`/my-forms/update/${props.form.id}`}>
            <IconButton>
              <Autorenew />
            </IconButton>
          </NavLink>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton onClick={onDelete}>
            <Delete />
          </IconButton>
        </Tooltip>
        </Box>
      </Box>
      <Box
        display="flex"
        marginTop="10px"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          display="flex"
          justifyContent="space-between"
        >
          <Typography alignItems="center" display="flex">
            <HelpOutline />:
            &nbsp;
            {props.form.questions.length}
          </Typography>
          <Typography marginLeft="15px" alignItems="center" display="flex">
            <People />:
            &nbsp;
            {note.notes.filter(note => note.form === props.form.id).length}
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
        >
          <NavLink className={classes.noLinkStyle} to={`/my-forms/${props.form.id}`}>
            <Button variant="contained" color="primary">Statistic</Button>
          </NavLink>
          &nbsp;
          <NavLink className={classes.noLinkStyle} to={`/form/${props.form.id}`}>
            <Button variant="outlined" color="secondary">View</Button>
          </NavLink>
        </Box>
      </Box>
    </Box>
  )
}
