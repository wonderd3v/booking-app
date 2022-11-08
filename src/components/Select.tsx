import { FC } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import MuiSelect, { SelectChangeEvent } from '@mui/material/Select';
import { Grid } from '@mui/material';

interface Item {
  value: number;
  label: string;
}

interface Props {
  items: Item[];
  selectedItem: Item;
  onSelect(id: number): void;
}

export const Select: FC<Props> = ({ items, selectedItem, onSelect }) => {
  const handleChange = (event: SelectChangeEvent) => {
    const { value } = event.target;
    onSelect(parseInt(value));
  };

  return (
    <Box sx={{ minWidth: 50 }}>
      <Grid>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">User</InputLabel>
          <MuiSelect
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedItem.value.toString()}
            label="Users"
            onChange={handleChange}
          >
            {items.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </MuiSelect>
        </FormControl>
      </Grid>
    </Box>
  );
};
