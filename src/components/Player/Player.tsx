import {
  Controls,
  ProgressBar,
  TrackInfos,
} from '@/components/Player/composites/';

import { css } from '@/styled-system/css';
import { VStack } from '@/styled-system/jsx';

export const Player = () => {
  return (
    <div
      className={css({
        width: '100%',
        height: '100%',
        bg: 'primary',
        p: '2',
        rounded: 'sm',
      })}
    >
      <VStack
        className={css({
          overflow: 'hidden',
        })}
        gap="2"
      >
        <div
          className={css({
            width: '100%',
          })}
        >
          <img
            className={css({ width: '100%', height: '100%' })}
            src="https://m.media-amazon.com/images/I/A1AT1xuPEDL._UF894,1000_QL80_.jpg"
            alt="cover mauvais ordre"
          />
        </div>

        <VStack
          gap="2"
          className={css({
            alignItems: 'center',
            width: '10/12',
          })}
        >
          <ProgressBar />
          <Controls />
          <TrackInfos />
        </VStack>
      </VStack>
    </div>
  );
};

export default Player;
