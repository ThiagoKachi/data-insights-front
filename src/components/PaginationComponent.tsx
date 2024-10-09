import { IPagination } from "@/@types/Pagination";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./Pagination";

interface PaginationComponentProps {
  pagination: IPagination;
  currentPage: number;
  handleButtonClick: (page: number) => void;
}

export function PaginationComponent({
  pagination,
  currentPage,
  handleButtonClick,
}: PaginationComponentProps) {
  const pages = pagination.total / pagination.perPage;
  const totalPagesToShow = 5;
  const halfOfTotalPages = Math.floor(totalPagesToShow / 2);

  const startPage = Math.max(1, currentPage - halfOfTotalPages);
  const endPage = Math.min(startPage + totalPagesToShow - 1, pages);

  const pagesArray = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index,
  );

  return (
    <div className="mt-2 text-zinc-600">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              disabled={pagination.prevPage === null}
              onClick={() => handleButtonClick(pagination.prevPage)}
            />
          </PaginationItem>
          {pagesArray.map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                onClick={() => handleButtonClick(page)}
                isActive={page === Number(currentPage)}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              disabled={pagination.nextPage === null}
              onClick={() => handleButtonClick(pagination.nextPage)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
