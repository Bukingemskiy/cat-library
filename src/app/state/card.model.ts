import { guid } from '@datorama/akita'

export type Card = {
  id: string;
  title: string;
  description: string
  image: string
  liked: boolean
};

export function createCard(title: string, description: string, image: string) {
  return {
    id: guid(),
    title,
    description,
    image,
    liked: false
  } as Card;
}