import { Pagination, PaginationItem } from "@mui/material";

const Paginate = () => {
  interface Flags {
    alt: string;
    png: string;
    svg: string;
  }
  type Data = {
    region: string;
    flags: Flags;
    capital: string[];
    population: number;
    fifa: string;
    flag: string;
    subregion: string;
    area: number;
  };
  return (
    <>
      <Pagination
        count={15}
        showFirstButton
        showLastButton
        variant="outlined"
        size="large"
      />
    </>
  );
};

export default Paginate;
