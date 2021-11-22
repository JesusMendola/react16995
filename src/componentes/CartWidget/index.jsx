import * as React from 'react';
import { IconButton }  from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


export default function CartWidget() {
    return( 
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ShoppingBasketIcon/>
          </IconButton>

         
    )
}