import { Box } from '@mui/material'
import ModeSelect from '~/components/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import Typography from '@mui/material/Typography'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Profiles from './Menus/Profile'
function AppBar() {
  return (
    <Box px={2} sx={{
      width: '100%',
      height: (theme) => theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }} >


      {/* item 1 */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'primary.main' }}>
          <AppsIcon />
          <Typography variant="span" sx={{ fontSize:'1.2rem', fontWeight:'bold' }}>GTrello</Typography>
        </Box>
        <Workspaces />
        <Recent />
        <Starred />
        <Templates />
        <Button variant="outlined">Create</Button>
      </Box>


      {/* item 2 */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField id="outlined-search" label="Search..." type="search" size="small" />
        <ModeSelect />
        <Tooltip title="Notification">
          <Badge color="secondary" variant="dot" sx={{ cursor: 'pointer' }}>
            <NotificationsNoneIcon sx={{ color:'primary.main' }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Help" sx={{ color:'primary.main', cursor: 'pointer' }}>
          <HelpOutlineIcon />
        </Tooltip>
        <Profiles />
      </Box>
    </Box>
  )
}

export default AppBar
