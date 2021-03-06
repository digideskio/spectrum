import React from 'react';
// $FlowFixMe
import Link from 'src/components/link';
import { Button } from '../../../components/buttons';
import { NullThreadFeed, NullHeading } from '../style';

export default props => (
  <NullThreadFeed>
    <NullHeading>
      There was a problem loading this feed. Please try refreshing the page.
    </NullHeading>

    <Button>
      <Link to={'/'}>Refresh</Link>
    </Button>
  </NullThreadFeed>
);
