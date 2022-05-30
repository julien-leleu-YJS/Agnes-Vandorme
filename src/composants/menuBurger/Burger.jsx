import React from 'react';

/* import { withStyles } from '@material-ui/core/styles'; */
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
/* import ListItemIcon from '@material-ui/core/ListItemIcon'; */
/* import ListItemText from '@material-ui/core/ListItemText'; */
/* import InboxIcon from '@material-ui/icons/MoveToInbox'; */
/* import DraftsIcon from '@material-ui/icons/Drafts'; */
/* import SendIcon from '@material-ui/icons/Send'; */
import './burger.scss';
import './tabletteMenu.scss';
import './deskBurger.scss';

function Burger() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="burger-container">
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <p className="burger-button">Menu</p>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}

      >
        <MenuItem onClick={handleClose}>
          {' '}
          <a className="link-burger" href="home">Accueil</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {' '}
          <a className="link-burger" href="biography">Biographie</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {' '}
          <a className="link-burger" href="artist-web-galery">Artist Web Galery</a>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          {' '}
          <a className="link-burger" href="special-mentions">Mentions spéciales</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          {' '}
          <a className="link-burger" href="contact">Contact</a>
        </MenuItem>
      </Menu>
    </div>
  );
}
export default React.memo(Burger);
