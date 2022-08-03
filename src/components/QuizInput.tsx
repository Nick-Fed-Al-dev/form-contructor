import { Button, FormControl, FormHelperText, Input, InputAdornment, makeStyles } from '@material-ui/core'
import { Cancel } from '@material-ui/icons'
import { FormEventHandler, MouseEventHandler } from 'react'

const useStyles = makeStyles(theme => ({
  cancelBtn: {
    "&:hover": {
      background: '#F9F9F9'
    }
  },
  cancelIcon: {
    "&:hover": {
      color: theme.palette.secondary.dark
    }
  },
  input: {
    background: '#F9F9F9',
    borderRadius: "30px",
    height: '50px',
    padding: 20,
  },
  ador: {
    position: "absolute",
    right: 0
  }
}))

interface p {
  onCancel?: MouseEventHandler
  value: string
  error: string
  onInput: FormEventHandler,
  height?: string,
  font?: string
}

export const QuizInput = (props : p) => {

  const classes = useStyles()

  return (
    <FormControl fullWidth variant="standard" error={!!props.error}>
    <Input
      fullWidth
      className={classes.input}
      disableUnderline
      value={props.value}
      error={!!props.error}
      onInput={props.onInput}
      style={{
        height: props.height,
        fontSize: props.font
      }}
      startAdornment={
        props.onCancel ?
        <InputAdornment className={classes.ador} position="end">
          <Button variant="text" className={classes.cancelBtn} onClick={props.onCancel}>
            <Cancel className={classes.cancelIcon} fontSize="large" color="secondary"></Cancel>
          </Button>
        </InputAdornment>
        :
        undefined
      }
    />
    <FormHelperText style={{
      color: !!props.error ? "secondary" : ""
    }}>{props.error}</FormHelperText>
  </FormControl>
  )
}
