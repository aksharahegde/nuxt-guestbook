import { between, desc } from "drizzle-orm";

export default eventHandler(async (event) => {
  const { getPagination, getDateRangeFilter } = useValidation(event);
  const { limit, offset } = await getPagination();
  const { start, end } = await getDateRangeFilter();
  const filterBy = between(comments.createdDate, start, end);

  const orderBy = desc(tables.comments.id);
  return getComments(filterBy, orderBy, offset, limit);
});
