import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
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
