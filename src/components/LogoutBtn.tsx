import { IconButton, makeStyles, Tooltip } from '@material-ui/core'
import { ExitToApp } from '@material-ui/icons'
import { useActions } from '../hooks/useActions'

const useStyles = makeStyles({
  logoutBtn: {
    position: "absolute",
    right: "20px",
    top: "10px"
  }
})

export const LogoutBtn = () => {
  const classes = useStyles()
  const { logout } = useActions()

  return (
    <Tooltip className={classes.logoutBtn} title="Log Out">
      <IconButton onClick={logout}>
        <ExitToApp fontSize="large" />
      </IconButton>
    </Tooltip>
  )
}
