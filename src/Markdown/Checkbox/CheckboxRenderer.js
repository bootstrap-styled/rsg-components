import React from 'react';
import Input from '@bootstrap-styled/v4/lib/Input';

export function CheckboxRenderer({ ...rest }) {
  return <Input {...rest} type="checkbox" />;
}

export default CheckboxRenderer;
