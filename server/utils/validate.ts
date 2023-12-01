import {
  useValidatedParams,
  useValidatedBody,
  z,
  zh,
  useValidatedQuery,
} from "h3-zod";

export const useValidation = (event: any) => {
  const getId = async () => {
    const { id } = await useValidatedParams(event, {
      id: zh.intAsString,
    });
    return id;
  };

  const getName = async () => {
    const { name } = await useValidatedBody(event, {
      name: z.string().min(1).max(100),
    });
    return name;
  };

  const getCommentBody = async () => {
    const { description } = await useValidatedBody(event, {
      description: z.string().max(300),
    });
    return description;
  };

  const getStatus = async () => {
    const { status } = await useValidatedBody(event, {
      status: z.string(),
    });
    return status;
  };

  const getPagination = async () => {
    let { offset, limit }: any = await useValidatedQuery(event, {
      offset: zh.intAsString.optional(),
      limit: zh.intAsString.optional(),
    });
    offset = offset || 1;
    limit = limit || 10;
    return { offset, limit };
  };

  const getDateRangeFilter = async () => {
    let { start, end } = await useValidatedQuery(event, {
      start: z.string().optional().default(new Date().toISOString()),
      end: z.string().optional().default(new Date().toISOString()),
    });

    start = start.replace(/T.+/, "T00:00:00.000Z");
    end = end.replace(/T.+/, "T23:59:59.999Z");

    return { start: new Date(start), end: new Date(end) };
  };

  return {
    getId,
    getName,
    getCommentBody,
    getStatus,
    getPagination,
    getDateRangeFilter,
  };
};
