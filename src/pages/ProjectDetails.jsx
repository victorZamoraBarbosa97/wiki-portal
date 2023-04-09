import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'




// CODIGO TEMPORAL DATA fICTICIA
function createData(Concept, Main_NMS,  Backup_NMS, Portal) {
  return { Concept, Main_NMS,  Backup_NMS, Portal};
}

const rows = [
  createData('Local link', '192.168.213.151', 'N/A', '192.168.213.157/monex'),
  createData('Public link', 'monex.nms.com.mx',	'N/A', 'monex.sispro.mx'),
  createData('DB server', '192.168.213.155', 'N/A',	'192.168.213.155'),
  createData('Database', 'nms_monex', 'N/A', 'portal_monex'),
  createData('Other data', 'Project ID: 1 | RPV group ID: 1','	N/A', '	N/A'),
  createData('Group count', 'x 3', 'x N/A', 'x N/A'),
  createData('Site count', 'x 36', 'x N/A',	'x 35)'),
  createData('Device count', 'x 74', 'x N/A', 'x 70'),
  createData('Device types', 'x 74',	'x 70'),
  createData('Download', 'Database', 'N/A', 'Database')
];

// FIN CODIGO TEMPORAL

export const ProjectDetails = () => {
  return (
    <div className='projects-section projects-section animate__animated animate__fadeIn animate__fast'>

      <div className = "projects-section-header">
        <p> Project detail: </p>
      </div>

      <StyledEngineProvider injectFirst>
      <TableContainer 
        component={Paper}
        sx = {{
          boxShadow: 'none',
          backgroundColor:'transparent',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
          borderCollapse:'separate',
          borderSpacing:'0 10px'
          }} >
          <Table sx={{ minWidth: 500 }} aria-label="simple table">

            <TableHead >
              <TableRow>

                <TableCell className='StyledTableCellHeader'> 
                  <Typography variant="subtitle1" fontWeight="bold">Concept</Typography>
                </TableCell>

                <TableCell className='StyledTableCellHeader'>
                  <Typography variant="subtitle1" fontWeight="bold">Main NMS</Typography>
                </TableCell>

                <TableCell className='StyledTableCellHeader'>
                  <Typography variant="subtitle1" fontWeight="bold">Backup NMS</Typography>
                </TableCell>

                <TableCell className='StyledTableCellHeader'>
                  <Typography variant="subtitle1" fontWeight="bold">Portal</Typography>
                </TableCell>

              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map((row) => (
                <TableRow
                hover
                key={row.Concept}
                >
                  <TableCell component="th" scope="row" className='StyledTableCell'>
                    <Typography variant="subtitle1" fontWeight="bold">{row.Concept}</Typography>
                  </TableCell>
                  <TableCell className='StyledTableCell' align="left"> {row.Main_NMS} </TableCell>
                  <TableCell className='StyledTableCell' align="left"> {row.Backup_NMS} </TableCell>
                  <TableCell className='StyledTableCell' align="left"> {row.Portal} </TableCell>
              </TableRow>
              ))}
            </TableBody>
          </Table>

          <Box sx = {{ 
            display: 'flex',
            marginTop: '5vh',
            marginBottom:'5vh'
            }}>
          <Table sx={{ flex: 1, marginRight:'50px', }}>
            <TableHead>

              <TableRow>
                <TableCell className='StyledTableCellHeader'>
                  <Typography variant="subtitle1" fontWeight="bold">Portal tools</Typography>
                </TableCell>
                <TableCell className='StyledTableCellHeader'></TableCell>
                <TableCell className='StyledTableCellHeader'></TableCell>
                <TableCell className='StyledTableCellHeader'></TableCell>
                <TableCell className='StyledTableCellHeader'></TableCell>
              </TableRow>

            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell className='StyledTableCell'>ConQuest</TableCell>
                <TableCell className='StyledTableCell'> <a href=''> Local link </a></TableCell>
                <TableCell className='StyledTableCell'> <a href=''> Public link </a></TableCell>
                <TableCell className='StyledTableCell'>DB connections</TableCell>
                <TableCell className='StyledTableCell'>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='StyledTableCell'>NMS</TableCell>
                <TableCell className='StyledTableCell'> <a href=''> Local link </a></TableCell>
                <TableCell className='StyledTableCell'> <a href=''> Public link </a></TableCell>
                <TableCell className='StyledTableCell'>DB connections</TableCell>
                <TableCell className='StyledTableCell'>N/A</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='StyledTableCell'>Repositorio</TableCell>
                <TableCell className='StyledTableCell'> <a href=''> Local link </a></TableCell>
                <TableCell className='StyledTableCell'> <a href=''> Public link </a></TableCell>
                <TableCell className='StyledTableCell'>DB connections</TableCell>
                <TableCell className='StyledTableCell'>N/A</TableCell>
              </TableRow>
              <TableRow >
                <TableCell className='StyledTableCell' >Sispro</TableCell>
                <TableCell className='StyledTableCell' > <a href=''> Local link </a></TableCell>
                <TableCell className='StyledTableCell' > <a href=''> Public link </a></TableCell>
                <TableCell className='StyledTableCell' >DB connections</TableCell>
                <TableCell className='StyledTableCell' >N/A</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Table sx={{ flex: 1 }}>
            <TableHead>
              <TableRow>
                <TableCell className='StyledTableCellHeader'>
                  <Typography variant="subtitle1" fontWeight="bold">Project notes</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell className='StyledTableCell' >- This project sends performance notifications. </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='StyledTableCell'>- Pss vtlnc</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
        </TableContainer>
        </StyledEngineProvider>

    </div>
  )
}







