import React from 'react';
import { Input, Label } from '../TaskEditor/TaskEditor';

export default function Filter({ value, onChangeFilter }) {
  return (
    <div>
      <Label>
        Filter
        <Input
          type="text"
          value={value}
          onChange={evt => onChangeFilter(evt.target.value)}
        />
      </Label>
    </div>
  );
}
