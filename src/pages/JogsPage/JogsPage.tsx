import { CircularProgress } from '@mui/material';
import { AddJog } from './components/AddJog/AddJog';
import { JogContainer } from './components/JogContainer/JogContainer';
import { useGetJogsQuery } from '@/api/jogs.api';
import EmptyJogs from './components/EmptyJogs/EmptyJogs';

import './JogsPage.scss';

export function JogsPage() {
  const { data, isLoading } = useGetJogsQuery();

  if (isLoading) return <CircularProgress className="loader"></CircularProgress>;

  return (
    <div className="jogs-page-wrapper">
      {data?.jogs?.length === 0 ? (
        <EmptyJogs />
      ) : (
        <>
          {data && <JogContainer data={data.jogs} />}
          <AddJog />
        </>
      )}
    </div>
  );
}
