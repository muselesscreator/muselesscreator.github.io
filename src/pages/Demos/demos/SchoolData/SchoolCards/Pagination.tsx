type PaginationProps = {
  page: number,
  pages: number[],
  pageButtons: Record<string, any>,
};

const Pagination = ({
  page,
  pages,
  pageButtons,
}: PaginationProps) => (
  <div className="pagination">
    <button type="button" {...pageButtons.first}>
      First
    </button>
    <button type="button" {...pageButtons.previous}>
      Previous
    </button>
    {pages.map((i) => (
      page === i
        ? <span className="selected-page" key={i}>{i + 1}</span>
        : (
          <button key={i} type="button" {...pageButtons.target(i)}>
            {i + 1}
          </button>
        )
    ))}
    <button type="button" {...pageButtons.next}>
      Next
    </button>
    <button type="button" {...pageButtons.last}>
      Last
    </button>

  </div>
);
export default Pagination;
