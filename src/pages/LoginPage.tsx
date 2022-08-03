import { FormEvent, FormEventHandler, MouseEventHandler} from 'react'
import {ArrowForward} from '@material-ui/icons';
import { Box, Button, Card, CardContent, Container, makeStyles, TextField, ThemeOptions, Typography } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'
import { useQuery } from '../hooks/useQuery';

const useStyles = makeStyles((theme : ThemeOptions) => ({
  background: {
    background: `linear-gradient(to right, rgb(252, 92, 125), rgb(106, 130, 251))`,
    height: '100vh'
  },
  container: {
    display: 'flex',
    justifyContent: 'center'
  },
  card: {
    padding: '15px',
    marginTop: '150px',
    width: '350px'
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardElement: {
    display: 'flex',
    justifyContent: 'center',
  },
  upMargin: {
    marginTop: '20px'
  },
  arrowIcon: {
    position: 'absolute',
    right: 20
  },
  smallWeight: {
    fontWeight: 200
  },
  centreHeight: {
    display: 'flex',
    alignItems: 'center '
  }
}))

export const LoginPage = () => {
  const classes = useStyles()
  const query = useQuery()
  const url : string | null = query.get('url')
  const staticInput = useTypedSelector(state => state.staticInput)
  const {login, setStaticValue, setStaticError} = useActions()

  const onInput : FormEventHandler = (e : FormEvent & {target: {name: string, value: string}}) => {
    setStaticValue({
      name: e.target.name,
      value: e.target.value
    })
    setStaticError({
      name: e.target.name,
      value: e.target.value
    })
  }
  
  const onSubmit : MouseEventHandler = () => {
    if(
      !staticInput.email.error &&
      !staticInput.password.error &&
      staticInput.email.value &&
      staticInput.password.value
      ){
      login((staticInput.email.value as string), (staticInput.password.value as string))
    }
  }

  return (
    <Box className={classes.background}>
      <Container className={classes.container}>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography className={classes.cardElement} variant='h3'>
              Login Form
            </Typography>
            <Typography noWrap className={`${classes.cardElement} ${classes.smallWeight} ${classes.centreHeight}`} variant='h6'>
              Have no account yet? 
              &nbsp;
              <NavLink to={`/register?url=${url}`} >
                <Typography className={classes.cardElement} variant='h4' color='primary'>Sign up</Typography>
              </NavLink>
            </Typography>

            <TextField
              className={classes.upMargin}
              error={!!staticInput.email.error}
              label='Email'
              variant='outlined'
              value={staticInput.email.value}
              helperText={staticInput.email.error}
              onInput={onInput}
              name='email'
            />
            <TextField
              className={classes.upMargin} 
              error={!!staticInput.password.error}
              label='Password'
              variant='outlined'
              value={staticInput.password.value}
              helperText={staticInput.password.error}
              onInput={onInput}
              name='password'
            />
            <Button 
              className={`${classes.cardElement} ${classes.upMargin}`}
              variant='contained'
              color='primary'
              onClick={onSubmit}
              >
              Sign in
              <ArrowForward className={classes.arrowIcon}  />
            </Button>
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}
