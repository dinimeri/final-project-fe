import StyledTableBody from "./TableBody.styled";

function TableBody(props) {
  const { province, index } = props;
  return (
    <>
      <StyledTableBody>
        <tr>
          <td>{index}</td>
          <td>{province.kota}</td>
          <td>{province.kasus}</td>
          <td>{province.sembuh}</td>
          <td>{province.dirawat}</td>
          <td>{province.meninggal}</td>
        </tr>
      </StyledTableBody>
    </>
  );
}

export default TableBody;