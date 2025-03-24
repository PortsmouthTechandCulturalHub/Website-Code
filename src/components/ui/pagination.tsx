import { Pagination as HerouiPagination, PaginationProps } from "@heroui/react";

interface Props {
  props?: PaginationProps;
}

export default function Pagination({ props }: Props) {
  return (
    <HerouiPagination
      showControls
      initialPage={1}
      total={10}
      classNames={{
        wrapper: "gap-2",
        item: "text-black font-semibold rounded-lg",
        cursor: "bg-primary rounded-lg",
        next: "rounded-lg",
        prev: "rounded-lg",
      }}
    />
  );
}
