import { IEntity } from "./entity.type";

export function sortEntities(items: IEntity[]): IEntity[] {
  const result: IEntity[] = [...items];

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length - 1; j++) {
      const firstDate = new Date(result[j].modifiedAt ?? result[j].createdAt);
      const secondDate = new Date(
        // eslint-disable-next-line prettier/prettier
        result[j + 1].modifiedAt ?? result[j + 1].createdAt
      );

      if (firstDate < secondDate) {
        const temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }

  return result;
}
