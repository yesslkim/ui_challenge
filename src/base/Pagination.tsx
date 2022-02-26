import { Link, useLocation } from 'react-router-dom';

const Pagination = () => {
  let prevPage!: string;
  let nextPage!: string;
  const location = useLocation();
  const regex = /[^0-9]/g;
  const pathname = Number(location.pathname.replace(regex, ''));
  const prevPageNum = pathname - 1;
  const nextPageNum = pathname + 1;

  if (prevPageNum > 0) {
    prevPage = String(prevPageNum);
  }

  if (nextPageNum) {
    nextPage = String(nextPageNum);
  }

  return (
    <div className="pagination">
      <Link to={prevPageNum == 0 ? '/' : `/components/${prevPage}`}>
        이전 페이지
      </Link>
      <Link to={`/components/${nextPage}`}>다음 페이지</Link>
    </div>
  );
};

export default Pagination;
