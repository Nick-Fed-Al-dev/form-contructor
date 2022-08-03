import AlertO from '@mui/material/Alert'
import { Snackbar } from '@material-ui/core'
import { useTypedSelector } from '../hooks/useTypedSelector'

export const Alert = () => {

  const snackbar = useTypedSelector(store => store.snackbar)

  return (
    <Snackbar open={snackbar.open} >
      <AlertO severity={snackbar.type} sx={{ width: '1000px' }}>
        {snackbar.text}
      </AlertO>
    </Snackbar>
  )
}


