import Button from '@mui/material/Button'
import '@mui/material/Icon'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import Typography from '@mui/material/Typography'

import { useColorScheme } from '@mui/material/styles'

function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}

function App() {
  return (
    <>
      <ModeToggle />
      <h1>Material UI</h1>
      <div>hoang tuan dev</div>
      <Button variant="text" color="success">Text</Button>
      <Button variant="contained" color="success">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Typography variant="body2" color="text.secondary">test</Typography>
      <br />
      <AccessAlarmIcon />
      <ThreeDRotation />
    </>
  )

}

export default App
