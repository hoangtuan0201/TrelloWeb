import { Box } from '@mui/material'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
const MENU_STYLES = {
  bgcolor: 'white',
  color : 'primary.main',
  paddingX: '5px',
  border:'none',
  borderRadius: '5px',
  '& .MuiSvgIcon-root': {
    color: 'primary.main'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      borderTop: '1px solid #00bfa5'
    }}>
      {/* item 1 */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip sx={MENU_STYLES}
          icon={<DashboardIcon/>}
          label="Htuan MERN stack board"
          clickable />
        <Chip sx={MENU_STYLES}
          icon={<VpnLockIcon/>}
          label="Public/Private Workspace"
          clickable />
        <Chip sx={MENU_STYLES}
          icon={<AddToDriveIcon/>}
          label="Add to Google Drive"
          clickable />
        <Chip sx={MENU_STYLES}
          icon={<BoltIcon/>}
          label="Automation"
          clickable />
        <Chip sx={MENU_STYLES}
          icon={<FilterListIcon/>}
          label="Filter"
          clickable />
      </Box>
      {/* item 2 */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button variant="outlined" startIcon={<PersonAddIcon/>}>Invite</Button>
        <AvatarGroup max={4} sx={{ '& .MuiAvatar-root': { width: 34, height: 34, fontSize: 16 } }}>
          <Tooltip title="Hoang Tuan" alt="Hoang Tuan">
            <Avatar alt="Hoang Tuan"
              src="https://scontent.fsgn2-11.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s200x200&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_ohc=cngcqYQ8dQ0Q7kNvwG3Cu0Z&_nc_oc=AdlcEpzwrvO4VlRD9kQ3UP8BsKLbGEiV3dp027BOIrFO07XZyUg3AZU1yC4sbCvFwUQ&_nc_zt=24&_nc_ht=scontent.fsgn2-11.fna&oh=00_AfMu9z6ha3UxwL7kNjm673D4DrrFU9d2HNn8_ydfHZpE4w&oe=6880DB7A" />
          </Tooltip>
          <Tooltip title="Hoang Tuan" alt="Hoang Tuan">
            <Avatar alt="Hoang Tuan"
              src="https://lh3.googleusercontent.com/a/ACg8ocJiniXU87xvJYViPMZ-fVKp2rOMQUJ3hEZ0J-GUSs25l9wWw0w=s288-c-no" />
          </Tooltip>
          <Tooltip title="Hoang Tuan" alt="Hoang Tuan">
            <Avatar alt="Hoang Tuan"
              src="https://lh3.googleusercontent.com/a/ACg8ocIqznU4HVFvMb4pFUBMb2_rTJYJ1uZaOQ8vDwVbodxQGHRaiQ=s288-c-no" />
          </Tooltip>
          <Tooltip title="Hoang Tuan" alt="Hoang Tuan">
            <Avatar alt="Hoang Tuan"
              src="https://lh3.googleusercontent.com/a/ACg8ocJiniXU87xvJYViPMZ-fVKp2rOMQUJ3hEZ0J-GUSs25l9wWw0w=s288-c-no" />
          </Tooltip>
          <Tooltip title="Hoang Tuan" alt="Hoang Tuan">
            <Avatar alt="Hoang Tuan"
              src="https://lh3.googleusercontent.com/a/ACg8ocJiniXU87xvJYViPMZ-fVKp2rOMQUJ3hEZ0J-GUSs25l9wWw0w=s288-c-no" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
