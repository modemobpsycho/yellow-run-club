import { JogElement } from './JogElement/JogElement';
import { IJog } from '@/common/types/jog.interface';
import { useJogState } from '@/common/hooks/useStoreState';

import './JogContainer.scss';

export function JogContainer({ data }: { data: IJog[] | undefined }) {
  const { dateTo, dateFrom } = useJogState();

  let sortedData = data;

  if (dateTo || dateFrom) {
    sortedData = data?.filter((jog: IJog) => {
      const jogDate = new Date(jog.date).getTime();
      const fromDate = dateFrom ? new Date(dateFrom).getTime() : 0;
      const toDate = dateTo ? new Date(dateTo).getTime() : Number.MAX_SAFE_INTEGER;
      return jogDate >= fromDate && jogDate <= toDate;
    });
  }

  return (
    <div className="jog-container-wrapper">
      {sortedData?.map((jog: IJog) => (
        <JogElement key={jog.id} jog={jog} />
      ))}
    </div>
  );
}
