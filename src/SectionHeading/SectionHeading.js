import React from 'react';
import PropTypes from 'prop-types';
import Slot from 'react-styleguidist/lib/client/rsg-components/Slot';
import getUrl from 'react-styleguidist/lib/client/utils/getUrl';
import SectionHeadingRenderer from './SectionHeadingRenderer';

export default function SectionHeading({
  slotName,
  slotProps,
  children,
  id,
  pagePerSection,
  ...rest
}) {
  const href = pagePerSection
    ? getUrl({ slug: id, id: rest.depth !== 1, takeHash: true })
    : getUrl({ slug: id, anchor: true });
  return (
    <SectionHeadingRenderer
      toolbar={<Slot name={slotName} props={slotProps}/>}
      id={id}
      href={href}
      {...rest}
    >
      {children}
    </SectionHeadingRenderer>
  );
}

SectionHeading.propTypes = {
  children: PropTypes.node, // eslint-disable-line react/require-default-props
  id: PropTypes.string.isRequired,
  slotName: PropTypes.string.isRequired,
  slotProps: PropTypes.object.isRequired,
  depth: PropTypes.number.isRequired,
  deprecated: PropTypes.bool, // eslint-disable-line react/require-default-props
  pagePerSection: PropTypes.bool, // eslint-disable-line react/require-default-props
};
