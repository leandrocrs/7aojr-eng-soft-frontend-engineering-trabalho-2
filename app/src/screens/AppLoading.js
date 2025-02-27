import { ActivityIndicator } from 'react-native';
import { LayoutDefault } from '../components/index';

import { useRedirect } from '../hooks/useRedirect';

function LoadingComponent() {
  return (
    <LayoutDefault>
      <ActivityIndicator size="large" />
    </LayoutDefault>
  );
}

export default function AppLoading() {
  const loading = useRedirect();

  if (loading) {
    return <LoadingComponent />;
  }
}


