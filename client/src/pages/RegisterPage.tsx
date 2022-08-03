import { FormEvent, FormEventHandler, MouseEventHandler } from 'react'
import { ArrowForward } from '@material-ui/icons';
import { Box, Button, Card, CardContent, Container, makeStyles, TextField, ThemeOptions, Typography } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useNavigate } from "react-router"
import { useActions } from '../hooks/useActions'
import { useQuery } from '../hooks/useQuery'

const useStyles = makeStyles((theme : ThemeOptions) => ({
  background: {
    background: 'linear-gradient(to right, rgb(252, 92, 125), rgb(106, 130, 251))',
    height: '100vh'
  },
  container: {
    display: 'flex',
    justifyContent: 'center'
  },
  card: {
    padding: '15px',
    marginTop: '150px',
    width: '400px'
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
  },
  inputPair: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  firstInPair: {
    width: '70%'
  },
  secondInPair: {
    width: '25%'
  }
}))

export const RegisterPage = () => {
  const classes = useStyles()
  const { staticInput } = useTypedSelector(state => state)
  const query = useQuery()
  const navigate = useNavigate()
  const {register, setStaticValue, setStaticError} = useActions()
  const url : string | null = query.get('url')
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
  
  const onSubmit : MouseEventHandler = async () => {
    if(
      !staticInput.email.error &&
      !staticInput.password.error &&
      !staticInput.firstName.error &&
      !staticInput.secondName.error &&
      !staticInput.age.error &&
      staticInput.email.value &&
      staticInput.password.value &&
      staticInput.firstName.value &&
      staticInput.secondName.value &&
      staticInput.age.value
      ){
      register({
        firstName: String(staticInput.firstName.value),
        secondName: String(staticInput.secondName.value),
        lastName: String(staticInput.lastName.value),
        age: +staticInput.age.value,
        email: String(staticInput.email.value),
        password: String(staticInput.password.value)
      })
      navigate((url as string))
      
    }
  }

  return (
    <Box className={classes.background}>
      <Container className={classes.container}>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography className={classes.cardElement} variant='h3'>
              Create Account
            </Typography>
            <Typography noWrap className={`${classes.cardElement} ${classes.smallWeight} ${classes.centreHeight}`} variant='h6'>
              Already have one?
              &nbsp;
              <NavLink to={`/login?url=${url}`} >
                <Typography className={classes.cardElement} variant='h4' color='primary'>Sign in</Typography>
              </NavLink>
            </Typography>

            <TextField
              className={classes.upMargin}
              error={!!staticInput.firstName.error}
              label='First Name'
              variant='outlined'
              value={staticInput.firstName.value}
              helperText={staticInput.firstName.error}
              onInput={onInput}
              name='firstName'
            />
            <TextField
              className={classes.upMargin}
              error={!!staticInput.secondName.error}
              label='Second Name'
              variant='outlined'
              value={staticInput.secondName.value}
              helperText={staticInput.secondName.error}
              onInput={onInput}
              name='secondName'
            />
            <Box className={classes.inputPair}>
              <TextField
                
                className={`${classes.upMargin} ${classes.firstInPair}`}
                error={!!staticInput.lastName.error}
                label='Patronymic'
                variant='outlined'
                value={staticInput.lastName.value}
                helperText={staticInput.lastName.error}
                onInput={onInput}
                name='lastName'
              />
              <TextField
                className={`${classes.upMargin} ${classes.secondInPair}`}
                error={!!staticInput.age.error}
                label='Age'
                type='number'
                variant='outlined'
                value={staticInput.age.value}
                helperText={staticInput.age.error}
                onInput={onInput}
                name='age'
              />
            </Box>
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
              Sign up
              <ArrowForward className={classes.arrowIcon}  />
            </Button>
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}
