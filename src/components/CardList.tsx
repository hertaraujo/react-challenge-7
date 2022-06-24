import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [imgUrl, setImgUrl] = useState('');

  const viewImageHandler = (url: string): void => {
    setImgUrl(url);
    onOpen();
  };

  return (
    <>
      <SimpleGrid spacing="40px" columns={3}>
        {cards.map(card => (
          <Card data={card} key={card.id} viewImage={viewImageHandler} />
        ))}
      </SimpleGrid>
      <ModalViewImage imgUrl={imgUrl} isOpen={isOpen} onClose={onClose} />
    </>
  );
}
