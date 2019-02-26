import React from 'react';
import PropTypes from 'prop-types';
import getUrl from 'react-styleguidist/lib/client/utils/getUrl';
import ComponentsListRenderer from './ComponentsListRenderer';

function ComponentsList({
  items,
  useRouterLinks = false,
  useHashId,
  hashPath,
  isOpenCollapse,
}) {
  const mappedItems = items.map((item) => ({
    ...item,
    href: item.href
      ? item.href
      : getUrl({
        name: item.name,
        slug: item.slug,
        anchor: !useRouterLinks,
        hashPath: useRouterLinks ? hashPath : false,
        id: useRouterLinks ? useHashId : false,
      }),
  }));
  return <ComponentsListRenderer items={mappedItems} isOpenCollapse={isOpenCollapse} />;
}

ComponentsList.propTypes = {
  items: PropTypes.array.isRequired,
  hashPath: PropTypes.array, // eslint-disable-line react/require-default-props
  useRouterLinks: PropTypes.bool, // eslint-disable-line react/require-default-props
  useHashId: PropTypes.bool, // eslint-disable-line react/require-default-props
  // Added for our own documentation styling
  isOpenCollapse: PropTypes.bool.isRequired,
};

export default ComponentsList;
