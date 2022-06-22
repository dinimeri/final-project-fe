import StyledTableHead from "./TableHead.styled";

function TableHead() {
  return(
    <>
      <StyledTableHead>
        <tr>
          <th>No</th>
          <th>Provinsi</th>
          <th>Positif</th>
          <th>Sembuh</th>
          <th>Dirawat</th>
          <th>Meninggal</th>
        </tr>
      </StyledTableHead>
    </>
  );
}

export default TableHead;